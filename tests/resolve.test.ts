import { describe, expect, it, vi } from "vitest";
import { resolveMarkdown } from "@/lib/agent/resolve";
import { getAllPosts } from "@/lib/blogs";

const never = vi.fn(async () => {
  throw new Error("should not fetch");
});

describe("resolveMarkdown", () => {
  it("returns the curated homepage without fetching", async () => {
    const r = await resolveMarkdown("/", never);
    expect(r.status).toBe(200);
    expect(r.body).toMatch(/^# TryAutoQuote/);
    expect(r.body).toContain("Frequently asked questions");
    expect(r.body).toContain("https://www.tryautoquote.com/llms.txt");
  });

  it("serves an existing article from its MDX source", async () => {
    const post = getAllPosts()[0];
    const r = await resolveMarkdown(`/blogs/${post.slug}/`, never);
    expect(r.status).toBe(200);
    expect(r.body.startsWith(`# ${post.title}\n`)).toBe(true);
    expect(r.body).not.toMatch(/\]\(\/[^/]/); // no relative links left
  });

  it("returns a Markdown 404 for unknown articles and rejects traversal", async () => {
    for (const p of ["/blogs/does-not-exist", "/blogs/../../etc/passwd"]) {
      const r = await resolveMarkdown(p, async () => ({ status: 404, html: "" }));
      expect(r.status).toBe(404);
      expect(r.body).toMatch(/^# 404/);
    }
  });

  it("converts other pages from their rendered HTML", async () => {
    const r = await resolveMarkdown("/about", async (p) => {
      expect(p).toBe("/about");
      return { status: 200, html: "<html><head><title>About</title></head><body><main><h1>About</h1><p>Operated by StarTech Media.</p></main></body></html>" };
    });
    expect(r.status).toBe(200);
    expect(r.body).toContain("Operated by StarTech Media.");
  });

  it("keeps the 404 status and returns a helpful Markdown body", async () => {
    const r = await resolveMarkdown("/__ora-404-probe", async () => ({ status: 404, html: "" }));
    expect(r.status).toBe(404);
    expect(r.body.length).toBeGreaterThan(20);
    expect(r.body).toContain("`/__ora-404-probe`");
    expect(r.body).toContain("https://www.tryautoquote.com/sitemap.xml");
    expect(r.body).toContain("https://www.tryautoquote.com/llms.txt");
  });
});
