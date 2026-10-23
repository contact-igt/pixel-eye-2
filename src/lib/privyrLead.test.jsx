import { afterEach, describe, expect, it, vi } from "vitest";

describe("submitPrivyrLead", () => {
  afterEach(() => {
    delete process.env.NEXT_PUBLIC_PRIVYR_LEAD_URL;
    vi.restoreAllMocks();
  });

  it("posts the normalized lead payload to the configured Privyr endpoint", async () => {
    process.env.NEXT_PUBLIC_PRIVYR_LEAD_URL = "https://privyr.example/leads";
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);

    const { submitPrivyrLead } = await import("./privyrLead");

    await expect(
      submitPrivyrLead({
        name: "  Ananya Rao  ",
        phone: "+91 98765-43210",
        email: "  ananya@example.com  ",
      }),
    ).resolves.toEqual({ ok: true });

    expect(fetchMock).toHaveBeenCalledWith("https://privyr.example/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Ananya Rao",
        phone: "+919876543210",
        email: "ananya@example.com",
        display_name: "Ananya Rao",
        source: "Pixel Eye Hospital",
      }),
    });
  });

  it("logs and contains a non-successful Privyr response", async () => {
    process.env.NEXT_PUBLIC_PRIVYR_LEAD_URL = "https://privyr.example/leads";
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 500, statusText: "Server Error" }));
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const { submitPrivyrLead } = await import("./privyrLead");

    await expect(submitPrivyrLead({ name: "Ananya", phone: "9876543210" })).resolves.toEqual({ ok: false });
    expect(errorSpy).toHaveBeenCalled();
  });

  it("logs and contains a Privyr network failure", async () => {
    process.env.NEXT_PUBLIC_PRIVYR_LEAD_URL = "https://privyr.example/leads";
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const { submitPrivyrLead } = await import("./privyrLead");

    await expect(submitPrivyrLead({ name: "Ananya", phone: "9876543210" })).resolves.toEqual({ ok: false });
    expect(errorSpy).toHaveBeenCalled();
  });

  it("skips Privyr when its endpoint is not configured", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const { submitPrivyrLead } = await import("./privyrLead");

    await expect(submitPrivyrLead({ name: "Ananya", phone: "9876543210" })).resolves.toEqual({ ok: false });
    expect(fetchMock).not.toHaveBeenCalled();
    expect(warnSpy).toHaveBeenCalled();
  });
});
