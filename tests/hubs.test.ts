import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { HUBS, hubForPost, hubForGuide } from "@/lib/hubs";
import { getAllPosts } from "@/lib/blogs";
import { states } from "@/lib/states";

describe("hub structure", () => {
  const posts = getAllPosts();

  it("every published post belongs to exactly one hub", () => {
    for (const p of posts) {
      const owners = HUBS.filter((h) => h.posts.includes(p.slug));
      expect(owners.length, `${p.slug} hubs: ${owners.map((h) => h.slug)}`).toBe(1);
    }
  });

  it("hubs only list posts that exist", () => {
    const slugs = new Set(posts.map((p) => p.slug));
    for (const h of HUBS) for (const s of h.posts) expect(slugs.has(s), `${h.slug} -> ${s}`).toBe(true);
  });

  it("every guide page belongs to a hub", () => {
    const dirs = fs.readdirSync(path.join(process.cwd(), "app/guides"), { withFileTypes: true })
      .filter((d) => d.isDirectory()).map((d) => `/guides/${d.name}`);
    for (const g of dirs) expect(hubForGuide(g), g).not.toBeNull();
    for (const h of HUBS) for (const g of h.guides) expect(dirs, g.href).toContain(g.href);
  });

  it("hub slugs never collide with state slugs", () => {
    const st = new Set(states.map((s: { slug: string }) => s.slug));
    for (const h of HUBS) expect(st.has(h.slug), h.slug).toBe(false);
  });

  it("no internal link points at a merged or removed page", () => {
    const dead = ["/blogs/how-to-lower-your-car-insurance-premiums", "/guides/how-much-car-insurance-do-i-need"];
    const dirs = ["content/blogs", "app", "components", "lib"];
    const walk = (d: string): string[] => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
      e.isDirectory() ? walk(path.join(d, e.name)) : /\.(mdx|tsx|ts)$/.test(e.name) ? [path.join(d, e.name)] : []);
    for (const f of dirs.flatMap(walk)) {
      if (f.endsWith("next.config.ts")) continue;
      const s = fs.readFileSync(f, "utf8");
      for (const d of dead) expect(s.includes(`"${d}"`) || s.includes(`(${d})`), `${f} links ${d}`).toBe(false);
    }
  });

  it("hubForPost resolves", () => {
    expect(hubForPost("state-minimum-vs-full-coverage")?.slug).toBe("coverage");
    expect(hubForPost("nope")).toBeNull();
  });
});
