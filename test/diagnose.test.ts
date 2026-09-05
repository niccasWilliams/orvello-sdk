import { describe, it, expect } from "vitest";
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import { join, resolve } from "node:path";
import { CONTRACT_SHA256 } from "../src/contract-hash";
import { diagnoseOrvello } from "../src/diagnose";

async function filesBelow(dir: string): Promise<string[]> {
  const result: string[] = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const path = join(dir, entry.name);
    if (entry.isDirectory()) result.push(...(await filesBelow(path)));
    else result.push(path);
  }
  return result.sort();
}

describe("diagnoseOrvello and contract integrity", () => {
  it("CONTRACT_SHA256 matches actual digest of src/generated", async () => {
    const genDir = resolve(__dirname, "../src/generated");
    const files = await filesBelow(genDir);
    expect(files.length).toBeGreaterThan(15);

    const hash = createHash("sha256");
    for (const path of files) {
      const rel = path.slice(genDir.length + 1);
      hash.update(rel);
      hash.update("\0");
      hash.update(await readFile(path));
      hash.update("\0");
    }
    const computed = hash.digest("hex");
    expect(computed).toBe(CONTRACT_SHA256);
  });

  it("reports match when remote returns identical contractSha256", async () => {
    const mockFetch = (async () => {
      return new Response(
        JSON.stringify({
          service: "node-bill",
          contractSha256: CONTRACT_SHA256,
          files: 42,
          computedAt: new Date().toISOString(),
        }),
        { status: 200, headers: { "content-type": "application/json" } }
      );
    }) as unknown as typeof fetch;

    const res = await diagnoseOrvello({
      baseUrl: "https://test-bill.local",
      fetch: mockFetch,
    });

    expect(res.ok).toBe(true);
    expect(res.reachable).toBe(true);
    expect(res.contract.status).toBe("match");
    expect(res.contract.live).toBe(CONTRACT_SHA256);
    expect(res.problems.length).toBe(0);
  });

  it("reports drift when remote returns different contractSha256", async () => {
    const mockFetch = (async () => {
      return new Response(
        JSON.stringify({
          service: "node-bill",
          contractSha256: "0000000000000000000000000000000000000000000000000000000000000000",
          files: 30,
          computedAt: new Date().toISOString(),
        }),
        { status: 200, headers: { "content-type": "application/json" } }
      );
    }) as unknown as typeof fetch;

    const res = await diagnoseOrvello({
      baseUrl: "https://test-bill.local",
      fetch: mockFetch,
    });

    expect(res.ok).toBe(false);
    expect(res.reachable).toBe(true);
    expect(res.contract.status).toBe("drift");
    expect(res.problems.length).toBeGreaterThan(0);
    expect(res.problems[0]).toContain("Contract drift");
  });

  it("reports unreachable when probe fails with network error", async () => {
    const mockFetch = (async () => {
      throw new Error("Connection refused");
    }) as unknown as typeof fetch;

    const res = await diagnoseOrvello({
      baseUrl: "https://test-bill.local",
      fetch: mockFetch,
    });

    expect(res.ok).toBe(false);
    expect(res.reachable).toBe(false);
    expect(res.contract.status).toBe("unknown");
    expect(res.problems[0]).toContain("could not be reached");
  });
});
