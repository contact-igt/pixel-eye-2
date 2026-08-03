import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import BlogFeedbackShare from "./index";
import * as apiService from "@/lib/apiService";

describe("BlogFeedbackShare", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("passes the real Blog slug through to the API call", async () => {
    const user = userEvent.setup();
    const submitSpy = vi.spyOn(apiService, "submitBlogFeedback").mockResolvedValue({ ok: true, status: 200, message: "Thank you for your feedback.", data: { response: "yes" } });
    render(<BlogFeedbackShare data={{ slug: "early-signs-of-cataracts" }} />);

    await user.click(screen.getByRole("button", { name: /Yes/ }));

    await waitFor(() => expect(submitSpy).toHaveBeenCalledWith("early-signs-of-cataracts", "yes"));
  });

  it("submits a Yes response and shows the selected state plus success feedback", async () => {
    const user = userEvent.setup();
    vi.spyOn(apiService, "submitBlogFeedback").mockResolvedValue({ ok: true, status: 200, message: "Thank you for your feedback.", data: { response: "yes" } });
    render(<BlogFeedbackShare data={{ slug: "early-signs-of-cataracts" }} />);

    const yesButton = screen.getByRole("button", { name: /Yes/ });
    await user.click(yesButton);

    await waitFor(() => expect(yesButton).toHaveAttribute("aria-pressed", "true"));
    expect(await screen.findByText("Thanks for your feedback!")).toBeInTheDocument();
  });

  it("submits a No response independently", async () => {
    const user = userEvent.setup();
    const submitSpy = vi.spyOn(apiService, "submitBlogFeedback").mockResolvedValue({ ok: true, status: 200, message: "Thank you for your feedback.", data: { response: "no" } });
    render(<BlogFeedbackShare data={{ slug: "early-signs-of-cataracts" }} />);

    await user.click(screen.getByRole("button", { name: /No/ }));

    await waitFor(() => expect(submitSpy).toHaveBeenCalledWith("early-signs-of-cataracts", "no"));
  });

  it("allows changing the answer from Yes to No", async () => {
    const user = userEvent.setup();
    const submitSpy = vi.spyOn(apiService, "submitBlogFeedback")
      .mockResolvedValueOnce({ ok: true, status: 200, message: "Thank you for your feedback.", data: { response: "yes" } })
      .mockResolvedValueOnce({ ok: true, status: 200, message: "Thank you for your feedback.", data: { response: "no" } });
    render(<BlogFeedbackShare data={{ slug: "early-signs-of-cataracts" }} />);

    const yesButton = screen.getByRole("button", { name: /Yes/ });
    const noButton = screen.getByRole("button", { name: /No/ });

    await user.click(yesButton);
    await waitFor(() => expect(yesButton).toHaveAttribute("aria-pressed", "true"));

    await user.click(noButton);
    await waitFor(() => expect(noButton).toHaveAttribute("aria-pressed", "true"));
    expect(yesButton).toHaveAttribute("aria-pressed", "false");

    expect(submitSpy).toHaveBeenNthCalledWith(1, "early-signs-of-cataracts", "yes");
    expect(submitSpy).toHaveBeenNthCalledWith(2, "early-signs-of-cataracts", "no");
  });

  it("sends the request with credentials included so the anonymous visitor cookie round-trips", async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ success: true, message: "Thank you for your feedback.", data: { response: "yes" } }),
    });
    vi.stubGlobal("fetch", fetchMock);
    render(<BlogFeedbackShare data={{ slug: "early-signs-of-cataracts" }} />);

    await user.click(screen.getByRole("button", { name: /Yes/ }));

    await waitFor(() => expect(fetchMock).toHaveBeenCalled());
    const [, requestInit] = fetchMock.mock.calls[0];
    expect(requestInit.credentials).toBe("include");
    vi.unstubAllGlobals();
  });

  it("shows a controlled error with Retry when the request fails, and Retry resubmits", async () => {
    const user = userEvent.setup();
    const submitSpy = vi.spyOn(apiService, "submitBlogFeedback")
      .mockResolvedValueOnce({ ok: false, status: 500, message: null, data: null })
      .mockResolvedValueOnce({ ok: true, status: 200, message: "Thank you for your feedback.", data: { response: "yes" } });
    render(<BlogFeedbackShare data={{ slug: "early-signs-of-cataracts" }} />);

    await user.click(screen.getByRole("button", { name: /Yes/ }));
    expect(await screen.findByRole("button", { name: "Retry" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Retry" }));

    await waitFor(() => expect(screen.getByText("Thanks for your feedback!")).toBeInTheDocument());
    expect(submitSpy).toHaveBeenCalledTimes(2);
  });
});
