import { describe, it, expect } from "vitest";
import { pageTitle, TITLE_MAX } from "@/lib/seo";
import { getAllPosts } from "@/lib/blogs";
import { HUBS } from "@/lib/hubs";

describe("search titles and descriptions", () => {
  it("pageTitle adds the brand only when it fits", () => {
    expect(pageTitle("Short title")).toBe("Short title | TryAutoQuote");
    const long = "x".repeat(50);
    expect(pageTitle(long)).toBe(long);
  });

  it("every post's search title fits and its description isn't truncated", () => {
    for (const p of getAllPosts()) {
      expect(pageTitle(p.seoTitle ?? p.title).length, `${p.slug} title`).toBeLessThanOrEqual(TITLE_MAX);
      expect((p.seoDescription ?? p.description).length, `${p.slug} description`).toBeLessThanOrEqual(160);
    }
  });

  it("no em or en dashes in search snippets", () => {
    for (const p of getAllPosts()) {
      expect(`${p.seoTitle ?? ""}${p.seoDescription ?? ""}`, p.slug).not.toMatch(/[\u2013\u2014]/);
    }
  });

  it("hub titles fit", () => {
    for (const h of HUBS) {
      expect(pageTitle(h.metaTitle).length, h.slug).toBeLessThanOrEqual(TITLE_MAX);
      expect(h.metaDescription.length, h.slug).toBeLessThanOrEqual(160);
    }
  });
});

import { states } from "@/lib/states";
import { stateSearchTitle, stateSearchDescription } from "@/lib/states/meta";

describe("state page search snippets", () => {
  it("fit Google's limits for every state", () => {
    for (const s of states) {
      expect(pageTitle(stateSearchTitle(s)).length, s.slug).toBeLessThanOrEqual(TITLE_MAX);
      expect(stateSearchDescription(s).length, s.slug).toBeLessThanOrEqual(160);
    }
  });
});
