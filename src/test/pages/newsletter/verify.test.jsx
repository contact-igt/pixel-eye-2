import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useRouter } from "next/router";
import NewsletterVerifyPage from "@/pages/newsletter/verify";
import * as apiService from "@/lib/apiService";

vi.mock("next/router", () => ({ useRouter: vi.fn() }));
vi.mock("@/component/Blog/BlogFirstBanner", () => ({
  default: ({ data }) => (
    <section>
      <h1>{data.title}</h1>
    </section>
  ),
}));

function mockRouter(query, overrides = {}) {
  const replace = vi.fn();
  useRouter.mockReturnValue({
    isReady: true,
    query,
    pathname: "/newsletter/verify",
    replace,
    ...overrides,
  });
  return { replace };
}

describe("NewsletterVerifyPage", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("shows the missing-token state and never calls the API when there is no token", async () => {
    const verifySpy = vi.spyOn(apiService, "verifyNewsletterSubscription");
    mockRouter({});
    render(<NewsletterVerifyPage />);

    expect(screen.getByRole("heading", { name: "Suggested Reads" })).toBeInTheDocument();
    expect(await screen.findByText("Missing confirmation token")).toBeInTheDocument();
    expect(verifySpy).not.toHaveBeenCalled();
  });

  it("waits for router.isReady before reading the token", () => {
    const verifySpy = vi.spyOn(apiService, "verifyNewsletterSubscription");
    mockRouter({ token: "abc" }, { isReady: false });
    render(<NewsletterVerifyPage />);

    expect(verifySpy).not.toHaveBeenCalled();
  });

  it("confirms the subscription with a valid token", async () => {
    vi.spyOn(apiService, "verifyNewsletterSubscription").mockResolvedValue({ ok: true, status: 200, message: "Thank you!", data: { success: true } });
    mockRouter({ token: "a-valid-token" });
    render(<NewsletterVerifyPage />);

    expect(await screen.findByText("Email subscription confirmed")).toBeInTheDocument();
    expect(screen.getByText("You are now subscribed to Pixel Eye Blog updates.")).toBeInTheDocument();
  });

  it("shows an invalid/expired state when the backend rejects the token", async () => {
    vi.spyOn(apiService, "verifyNewsletterSubscription").mockResolvedValue({ ok: false, status: 404, message: "Verification link is invalid or expired", data: null });
    mockRouter({ token: "an-expired-token" });
    render(<NewsletterVerifyPage />);

    expect(await screen.findByText("This link is no longer valid")).toBeInTheDocument();
  });

  it("shows a server-unavailable state on a network error", async () => {
    vi.spyOn(apiService, "verifyNewsletterSubscription").mockResolvedValue({ ok: false, status: 0, message: null, data: null, networkError: true });
    mockRouter({ token: "a-token" });
    render(<NewsletterVerifyPage />);

    expect(await screen.findByText("Server unavailable")).toBeInTheDocument();
  });

  it("removes the token from the URL after a terminal response", async () => {
    vi.spyOn(apiService, "verifyNewsletterSubscription").mockResolvedValue({ ok: true, status: 200, message: "Thank you!", data: { success: true } });
    const { replace } = mockRouter({ token: "a-valid-token" });
    render(<NewsletterVerifyPage />);

    await waitFor(() => expect(replace).toHaveBeenCalledWith("/newsletter/verify", undefined, { shallow: true }));
  });

  it("never renders the token anywhere in the page", async () => {
    vi.spyOn(apiService, "verifyNewsletterSubscription").mockResolvedValue({ ok: true, status: 200, message: "Thank you!", data: { success: true } });
    mockRouter({ token: "super-secret-raw-token-value" });
    render(<NewsletterVerifyPage />);

    await screen.findByText("Email subscription confirmed");
    expect(document.body.textContent).not.toContain("super-secret-raw-token-value");
  });
});

