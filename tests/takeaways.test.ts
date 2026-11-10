import { describe, it, expect } from "vitest";
import { splitTakeaways, lastModified, getAllPosts } from "@/lib/blogs";

describe("splitTakeaways", () => {
  it("extracts bullets and removes the section", () => {
    const md = "## Intro\n\nText.\n\n## Key takeaways\n\n- One.\n- Two.\n\n## References\n\n- [A](https://a.com)";
    const { body, takeaways } = splitTakeaways(md);
    expect(takeaways).toEqual(["One.", "Two."]);
    expect(body).not.toMatch(/Key takeaways/);
    expect(body).toMatch(/## References/);
    expect(body).toMatch(/## Intro/);
  });
  it("leaves content alone when there is no section", () => {
    const md = "## Intro\n\nText.";
    expect(splitTakeaways(md)).toEqual({ body: md, takeaways: [] });
  });
  it("finds takeaways in every published post", () => {
    for (const p of getAllPosts()) expect(splitTakeaways(p.content).takeaways.length, p.slug).toBeGreaterThan(2);
  });
});

describe("lastModified", () => {
  it("prefers updated over date", () => {
    expect(lastModified({ date: "July 1, 2026", updated: "November 10, 2026" })).toBe("November 10, 2026");
    expect(lastModified({ date: "July 1, 2026" })).toBe("July 1, 2026");
  });
  it("every updated date parses and is not before publish", () => {
    for (const p of getAllPosts()) {
      if (!p.updated) continue;
      expect(Number.isNaN(new Date(p.updated).getTime()), p.slug).toBe(false);
      expect(new Date(p.updated).getTime()).toBeGreaterThanOrEqual(new Date(p.date).getTime());
    }
  });
});
