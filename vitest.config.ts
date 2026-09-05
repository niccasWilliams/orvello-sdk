import { defineConfig } from "vitest/config";
import { createRequire } from "node:module";

const { version } = createRequire(import.meta.url)("./package.json") as { version: string };

export default defineConfig({
  define: {
    __ORVELLO_SDK_VERSION__: JSON.stringify(version),
  },
  test: {
    environment: "node",
    include: ["test/**/*.test.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json-summary"],
      include: ["src/**/*.ts"],
      exclude: ["src/generated/**", "src/contract.ts"],
    },
  },
});
