import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useRouter } from "next/router";
import NewsletterResubscribePage from "@/pages/newsletter/resubscribe";
import * as apiService from "@/lib/apiService";

vi.mock("next/router", () => ({ useRouter: vi.fn() }));
vi.mock("@/component/Blog/BlogFirstBanner", () => ({ default: () => <div /> }));
function router(query) { useRouter.mockReturnValue({ isReady: true, query, pathname: "/newsletter/resubscribe", replace: vi.fn() }); }

describe("NewsletterResubscribePage", () => {
  afterEach(() => { cleanup(); vi.restoreAllMocks(); });
  it("confirms a valid resubscription token", async () => {
    vi.spyOn(apiService, "confirmNewsletterResubscription").mockResolvedValue({ ok: true, status: 200 });
    router({ token: "valid" }); render(<NewsletterResubscribePage />);
    expect(await screen.findByText("Subscription request confirmed")).toBeInTheDocument();
  });
  it("does not confirm an expired or used token", async () => {
    vi.spyOn(apiService, "confirmNewsletterResubscription").mockResolvedValue({ ok: false, status: 404 });
    router({ token: "expired" }); render(<NewsletterResubscribePage />);
    expect(await screen.findByText("This link is no longer valid")).toBeInTheDocument();
  });
  it("does not call the API without a token", async () => {
    const spy = vi.spyOn(apiService, "confirmNewsletterResubscription");
    router({}); render(<NewsletterResubscribePage />);
    expect(await screen.findByText("Missing confirmation token")).toBeInTheDocument();
    expect(spy).not.toHaveBeenCalled();
  });
});

