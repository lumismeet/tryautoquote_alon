import TurndownService from "turndown";
import { parse } from "node-html-parser";

const STRIP = "script, style, noscript, svg, nav, header, footer, form, button, iframe, template, img, picture, video, audio, [aria-hidden=true]";

/**
 * Convert a rendered page to Markdown. Uses <main> when present (falling
 * back to <body>) and removes chrome such as navigation, footers and forms.
 */
export function htmlToMarkdown(html: string, url: string): string {
  const root = parse(html, { comment: false });
  const title = root.querySelector("title")?.text.trim() ?? "";
  const description = root.querySelector('meta[name="description"]')?.getAttribute("content")?.trim() ?? "";
  const container = root.querySelector("main") ?? root.querySelector("body") ?? root;
  container.querySelectorAll(STRIP).forEach((el) => el.remove());

  const td = new TurndownService({ headingStyle: "atx", bulletListMarker: "-", codeBlockStyle: "fenced" });
  // Resolve relative links so the Markdown works outside the site.
  td.addRule("absoluteLinks", {
    filter: (node) => node.nodeName === "A" && !!node.getAttribute("href"),
    replacement: (content, node) => {
      const href = (node as HTMLElement).getAttribute("href") || "";
      const text = content.trim();
      if (!text) return "";
      if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return href.startsWith("#") ? text : `[${text}](${href})`;
      }
      try {
        return `[${text}](${new URL(href, url).toString()})`;
      } catch {
        return text;
      }
    },
  });

  let body = td.turndown(container.innerHTML).replace(/\n{3,}/g, "\n\n").trim();
  const lines = body.split("\n");
  let h1: string;
  if (lines[0]?.startsWith("# ")) {
    h1 = lines.shift() as string;
    body = lines.join("\n").trim();
  } else {
    h1 = `# ${title || url}`;
  }
  return [h1, description && `> ${description}`, `Source: ${url}`, body].filter(Boolean).join("\n\n") + "\n";
}
