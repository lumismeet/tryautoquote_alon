import { describe, expect, it } from "vitest";
import { prefersMarkdown } from "@/lib/agent/negotiate";

describe("prefersMarkdown", () => {
  it.each([
    ["text/markdown", true],
    ["text/markdown; charset=utf-8", true],
    ["text/x-markdown", true],
    ["text/markdown, text/html;q=0.9", true],
    ["text/html, text/markdown", true],
    ["TEXT/MARKDOWN", true],
  ])("serves Markdown for %s", (accept, expected) => {
    expect(prefersMarkdown(accept)).toBe(expected);
  });

  it.each([
    [null],
    [""],
    ["text/html"],
    ["text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"],
    ["*/*"],
    ["text/*"],
    ["text/markdown;q=0"],
    ["text/html, text/markdown;q=0.5"],
  ])("keeps HTML for %s", (accept) => {
    expect(prefersMarkdown(accept)).toBe(false);
  });
});
