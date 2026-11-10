import { describe, expect, it } from "vitest";
import { htmlToMarkdown } from "@/lib/agent/html-to-markdown";

const html = `<!doctype html><html><head><title>About TryAutoQuote</title>
<meta name="description" content="Who we are."></head><body>
<nav><a href="/guides">Guides</a></nav>
<main><h1>About TryAutoQuote</h1><p>We help <a href="/blogs">drivers</a> compare. <a href="mailto:info@tryautoquote.com">Email</a></p>
<script>window.x=1</script><form><input></form><img src="/a.png" alt="a"></main>
<footer>Footer text</footer></body></html>`;

describe("htmlToMarkdown", () => {
  const md = htmlToMarkdown(html, "https://www.tryautoquote.com/about");

  it("starts with the page H1, then description and source", () => {
    expect(md.startsWith("# About TryAutoQuote\n\n> Who we are.\n\nSource: https://www.tryautoquote.com/about")).toBe(true);
  });
  it("makes internal links absolute and keeps mailto links", () => {
    expect(md).toContain("[drivers](https://www.tryautoquote.com/blogs)");
    expect(md).toContain("[Email](mailto:info@tryautoquote.com)");
  });
  it("drops navigation, footer, scripts, forms and images", () => {
    for (const s of ["Guides", "Footer text", "window.x", "a.png", "<"]) expect(md).not.toContain(s);
  });
  it("falls back to <body> and <title> when there is no <main> or <h1>", () => {
    const out = htmlToMarkdown("<html><head><title>Contact</title></head><body><p>Hello there</p></body></html>", "https://x.test/contact");
    expect(out).toMatch(/^# Contact\n/);
    expect(out).toContain("Hello there");
  });
});
