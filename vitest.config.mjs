import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.js"],
    pool: "threads",
    maxWorkers: 1,
    fileParallelism: false,
    env: {
      NEXT_PUBLIC_ENV: "local",
      NEXT_PUBLIC_LOCAL_API_URL: "http://localhost:5000/api/v1",
    },
  },
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
});
