import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import BlogNewsletter from "./index";
import * as apiService from "@/lib/apiService";

describe("BlogNewsletter", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("requires consent before submitting, even with a valid email", async () => {
    const user = userEvent.setup();
    const subscribeSpy = vi.spyOn(apiService, "subscribeToNewsletter");
    render(<BlogNewsletter />);

    await user.type(screen.getByLabelText("Email address"), "reader@example.com");
    await user.click(screen.getByRole("button", { name: "Subscribe Now" }));

    expect(await screen.findByText("Please agree to receive Blog email updates to subscribe.")).toBeInTheDocument();
    expect(subscribeSpy).not.toHaveBeenCalled();
  });

  it("calls the backend with the exact expected payload shape", async () => {
    const user = userEvent.setup();
    const subscribeSpy = vi.spyOn(apiService, "subscribeToNewsletter").mockResolvedValue({ ok: true, status: 200, message: "Check your inbox to confirm your subscription.", data: null });
    render(<BlogNewsletter />);

    await user.type(screen.getByLabelText("Email address"), "reader@example.com");
    await user.click(screen.getByLabelText(/agree to receive/i));
    await user.click(screen.getByRole("button", { name: "Subscribe Now" }));

    await waitFor(() => expect(subscribeSpy).toHaveBeenCalledWith({
      email: "reader@example.com",
      consent: true,
      consentVersion: "v1",
      source: "blog_detail",
    }));
  });

  it("shows the success message and does not claim the reader is already subscribed", async () => {
    const user = userEvent.setup();
    vi.spyOn(apiService, "subscribeToNewsletter").mockResolvedValue({ ok: true, status: 200, message: "Check your inbox to confirm your subscription.", data: null });
    render(<BlogNewsletter />);

    await user.type(screen.getByLabelText("Email address"), "reader@example.com");
    await user.click(screen.getByLabelText(/agree to receive/i));
    await user.click(screen.getByRole("button", { name: "Subscribe Now" }));

    expect(await screen.findByText("Check your inbox to confirm your subscription.")).toBeInTheDocument();
    expect(screen.queryByText(/you are subscribed/i)).not.toBeInTheDocument();
  });

  it("shows a controlled error when the backend reports SMTP/email delivery is unavailable (503)", async () => {
    const user = userEvent.setup();
    vi.spyOn(apiService, "subscribeToNewsletter").mockResolvedValue({ ok: false, status: 503, message: null, data: null });
    render(<BlogNewsletter />);

    await user.type(screen.getByLabelText("Email address"), "reader@example.com");
    await user.click(screen.getByLabelText(/agree to receive/i));
    await user.click(screen.getByRole("button", { name: "Subscribe Now" }));

    expect(await screen.findByText(/temporarily unavailable/i)).toBeInTheDocument();
    // Must not show a false success after an API failure.
    expect(screen.queryByText("Check your inbox to confirm your subscription.")).not.toBeInTheDocument();
  });

  it("does not expose a raw backend message for other server-side email failures", async () => {
    const user = userEvent.setup();
    vi.spyOn(apiService, "subscribeToNewsletter").mockResolvedValue({
      ok: false,
      status: 500,
      message: "Failed to send verification email",
      data: null,
    });
    render(<BlogNewsletter />);

    await user.type(screen.getByLabelText("Email address"), "reader@example.com");
    await user.click(screen.getByLabelText(/agree to receive/i));
    await user.click(screen.getByRole("button", { name: "Subscribe Now" }));

    expect(await screen.findByText("Email delivery is temporarily unavailable. Please try again shortly.")).toBeInTheDocument();
    expect(screen.queryByText("Failed to send verification email")).not.toBeInTheDocument();
    expect(screen.queryByText("Check your inbox to confirm your subscription.")).not.toBeInTheDocument();
  });
  it("prevents duplicate submissions while a request is in flight", async () => {
    const user = userEvent.setup();
    let resolveRequest;
    const subscribeSpy = vi.spyOn(apiService, "subscribeToNewsletter").mockImplementation(
      () => new Promise((resolve) => { resolveRequest = resolve; })
    );
    render(<BlogNewsletter />);

    await user.type(screen.getByLabelText("Email address"), "reader@example.com");
    await user.click(screen.getByLabelText(/agree to receive/i));

    await user.click(screen.getByRole("button", { name: "Subscribe Now" }));
    // The button is now disabled and relabeled while the request is in flight, so these
    // further clicks must not fire a second request.
    await user.click(screen.getByRole("button", { name: "Subscribing…" }));
    await user.click(screen.getByRole("button", { name: "Subscribing…" }));

    resolveRequest({ ok: true, status: 200, message: "Check your inbox to confirm your subscription.", data: null });
    await waitFor(() => expect(screen.getByText("Check your inbox to confirm your subscription.")).toBeInTheDocument());

    expect(subscribeSpy).toHaveBeenCalledTimes(1);
  });
});
