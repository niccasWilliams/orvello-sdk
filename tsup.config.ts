import { defineConfig } from "tsup";
import { createRequire } from "node:module";

const { version } = createRequire(import.meta.url)("./package.json") as { version: string };

export default defineConfig({
  entry: {
    index: "src/index.ts",
    contract: "src/contract.ts",
  },
  format: ["esm", "cjs"],
  define: { __ORVELLO_SDK_VERSION__: JSON.stringify(version) },
  dts: true,
  clean: true,
  sourcemap: true,
  treeshake: true,
  splitting: false,
  target: "es2022",
  outExtension({ format }) {
    return { js: format === "cjs" ? ".cjs" : ".js" };
  },
});
