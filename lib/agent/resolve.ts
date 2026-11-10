import { getPostBySlug } from "@/lib/blogs";
import { htmlToMarkdown } from "./html-to-markdown";
import { blogMarkdown, homeMarkdown, notFoundMarkdown } from "./pages";
import { SITE } from "./site";
export { INTERNAL_HEADER } from "./site";

/** Resolve a site path to Markdown. */
export async function resolveMarkdown(
  pathname: string,
  fetchHtml: (path: string) => Promise<{ status: number; html: string }>,
): Promise<{ status: number; body: string }> {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : "/";

  if (path === "/") return { status: 200, body: homeMarkdown() };

  const blog = path.match(/^\/blogs\/([a-z0-9-]+)$/);
  if (blog) {
    const post = getPostBySlug(blog[1]);
    if (post) return { status: 200, body: blogMarkdown(post) };
    return { status: 404, body: notFoundMarkdown(path) };
  }

  // Everything else: render the real page and convert it, so Markdown
  // always matches the HTML and unknown paths keep their 404.
  const { status, html } = await fetchHtml(path);
  if (status === 404 || status === 410) return { status: 404, body: notFoundMarkdown(path) };
  if (status >= 400) return { status, body: `# Error ${status}\n\nThis page could not be loaded right now. Try again later or see ${SITE.baseUrl}/sitemap.xml.\n` };
  return { status: 200, body: htmlToMarkdown(html, `${SITE.baseUrl}${path}`) };
}

