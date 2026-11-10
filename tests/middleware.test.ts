import { describe, expect, it } from "vitest";
import { NextRequest } from "next/server";
import { middleware } from "@/middleware";

const req = (path: string, headers: Record<string, string> = {}) =>
  new NextRequest(new URL(path, "https://www.tryautoquote.com"), { headers });

describe("middleware", () => {
  it("rewrites Markdown requests to the agent endpoint, keeping the path", () => {
    const res = middleware(req("/about", { accept: "text/markdown" }));
    const target = new URL(res.headers.get("x-middleware-rewrite")!);
    expect(target.pathname).toBe("/api/agent-md");
    expect(res.headers.get("x-middleware-request-x-agent-md-path")).toBe("/about");
  });

  it("passes HTML requests through with Vary: Accept", () => {
    const res = middleware(req("/", { accept: "text/html,*/*;q=0.8" }));
    expect(res.headers.get("x-middleware-rewrite")).toBeNull();
    expect(res.headers.get("vary")).toContain("Accept");
  });

  it("does not rewrite the endpoint's own internal HTML fetches", () => {
    const res = middleware(req("/about", { accept: "text/markdown", "x-agent-md-internal": "1" }));
    expect(res.headers.get("x-middleware-rewrite")).toBeNull();
  });
});
