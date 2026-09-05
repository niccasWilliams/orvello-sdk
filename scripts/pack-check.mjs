import { execFile } from "node:child_process";
import { promisify } from "util";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const run = promisify(execFile);
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const { stdout } = await run("npm", ["pack", "--dry-run", "--json"], { cwd: root });
const parsed = JSON.parse(stdout);
const files = (parsed[0]?.files || []).map((f) => f.path);

const required = [
  "dist/index.js",
  "dist/index.cjs",
  "dist/index.d.ts",
  "dist/contract.js",
  "dist/contract.d.ts",
  "dist/openapi.json",
  "README.md",
  "LICENSE",
  "CONTRACT_SHA256",
  "package.json",
];

const missing = required.filter((path) => !files.includes(path));
if (missing.length > 0) {
  console.error(`Tarball is missing required files:\n  - ${missing.join("\n  - ")}`);
  process.exit(1);
}

console.log(`Package tarball verified (${files.length} files, ${parsed[0]?.size} bytes)`);
