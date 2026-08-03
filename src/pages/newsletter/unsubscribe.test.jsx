import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useRouter } from "next/router";
import NewsletterUnsubscribePage from "./unsubscribe";
import * as apiService from "@/lib/apiService";

vi.mock("next/router", () => ({ useRouter: vi.fn() }));

function mockRouter(query, overrides = {}) {
  const replace = vi.fn();
  useRouter.mockReturnValue({
    isReady: true,
    query,
    pathname: "/newsletter/unsubscribe",
    replace,
    ...overrides,
  });
  return { replace };
}

describe("NewsletterUnsubscribePage", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("shows the confirmation screen first and makes no API call before the reader confirms", async () => {
    const unsubscribeSpy = vi.spyOn(apiService, "unsubscribeNewsletter");
    mockRouter({ token: "a-valid-token" });
    render(<NewsletterUnsubscribePage />);

    expect(await screen.findByText("Unsubscribe from Pixel Eye Blog?")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Unsubscribe" })).toBeInTheDocument();
    expect(screen.getByText("Keep Me Subscribed")).toBeInTheDocument();
    expect(unsubscribeSpy).not.toHaveBeenCalled();
  });

  it("only calls the backend after the reader clicks Unsubscribe", async () => {
    const user = userEvent.setup();
    const unsubscribeSpy = vi.spyOn(apiService, "unsubscribeNewsletter").mockResolvedValue({ ok: true, status: 200, message: "You have been unsubscribed.", data: { success: true } });
    mockRouter({ token: "a-valid-token" });
    render(<NewsletterUnsubscribePage />);

    await user.click(screen.getByRole("button", { name: "Unsubscribe" }));

    await waitFor(() => expect(unsubscribeSpy).toHaveBeenCalledWith("a-valid-token"));
  });

  it("shows success after confirming", async () => {
    const user = userEvent.setup();
    vi.spyOn(apiService, "unsubscribeNewsletter").mockResolvedValue({ ok: true, status: 200, message: "You have been unsubscribed.", data: { success: true } });
    mockRouter({ token: "a-valid-token" });
    render(<NewsletterUnsubscribePage />);

    await user.click(screen.getByRole("button", { name: "Unsubscribe" }));

    expect(await screen.findByText("You have been unsubscribed")).toBeInTheDocument();
  });

  it("shows a controlled error state when the backend call fails", async () => {
    const user = userEvent.setup();
    vi.spyOn(apiService, "unsubscribeNewsletter").mockResolvedValue({ ok: false, status: 500, message: null, data: null });
    mockRouter({ token: "a-valid-token" });
    render(<NewsletterUnsubscribePage />);

    await user.click(screen.getByRole("button", { name: "Unsubscribe" }));

    expect(await screen.findByText("Something went wrong")).toBeInTheDocument();
  });

  it("shows the missing-token state when there is no token", async () => {
    mockRouter({});
    render(<NewsletterUnsubscribePage />);

    expect(await screen.findByText("Missing unsubscribe token")).toBeInTheDocument();
  });

  it("removes the token from the URL after a terminal response", async () => {
    const user = userEvent.setup();
    vi.spyOn(apiService, "unsubscribeNewsletter").mockResolvedValue({ ok: true, status: 200, message: "You have been unsubscribed.", data: { success: true } });
    const { replace } = mockRouter({ token: "a-valid-token" });
    render(<NewsletterUnsubscribePage />);

    await user.click(screen.getByRole("button", { name: "Unsubscribe" }));

    await waitFor(() => expect(replace).toHaveBeenCalledWith("/newsletter/unsubscribe", undefined, { shallow: true }));
  });
});
