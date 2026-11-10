import { describe, expect, it } from "vitest";
import { buildLlmsTxt } from "@/lib/agent/llms";

const txt = buildLlmsTxt({
  posts: [{ title: "Post A", url: "/blogs/a", description: "About A" }],
  states: [{ title: "Texas car insurance requirements", url: "/car-insurance/texas" }],
});
const lines = txt.split("\n");

describe("llms.txt (llmstxt.org format)", () => {
  it("opens with an H1 then a blockquote summary", () => {
    expect(lines[0]).toBe("# TryAutoQuote");
    expect(lines.find((l, i) => i > 0 && l.trim())).toMatch(/^> /);
    expect(lines.filter((l) => /^# /.test(l))).toHaveLength(1);
  });

  it("has no headings in the free-form section before the first H2", () => {
    const firstH2 = lines.findIndex((l) => l.startsWith("## "));
    expect(lines.slice(1, firstH2).some((l) => /^#{1,6}\s/.test(l))).toBe(false);
  });

  it("H2 sections contain only Markdown link list items", () => {
    const firstH2 = lines.findIndex((l) => l.startsWith("## "));
    for (const l of lines.slice(firstH2)) {
      if (!l.trim() || l.startsWith("## ")) continue;
      expect(l).toMatch(/^- \[[^\]]+\]\(https:\/\/www\.tryautoquote\.com[^)]*\)(: .+)?$/);
    }
    expect(lines).toContain("## Optional");
  });

  it("tells agents when (and when not) to use the site and how to call it", () => {
    expect(txt).toContain("**When to use TryAutoQuote**");
    expect(txt).toContain("**When not to use TryAutoQuote**");
    expect(txt).toContain("Accept: text/markdown");
    expect(txt).toContain("there is no public API");
    expect(txt).toContain("- [Post A](https://www.tryautoquote.com/blogs/a): About A");
  });
});
