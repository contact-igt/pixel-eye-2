import { afterEach, describe, expect, it, vi } from "vitest";

const savedEnvironment = { ...process.env };

afterEach(() => {
  process.env = { ...savedEnvironment };
  vi.resetModules();
});

describe("API configuration", () => {
  it("uses the production backend on Vercel even when a local URL is configured", async () => {
    process.env.VERCEL = "1";
    process.env.NEXT_PUBLIC_ENV = "local";
    process.env.NEXT_PUBLIC_LOCAL_API_URL = "http://localhost:5000/api/v1";
    delete process.env.NEXT_PUBLIC_DEV_API_URL;
    delete process.env.NEXT_PUBLIC_PROD_API_URL;

    const { default: config } = await import("./config.js");

    expect(config.api.base).toBe("https://pixel-eye-blog-production.up.railway.app/api/v1");
  });
});
