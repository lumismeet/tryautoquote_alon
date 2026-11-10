import { NextResponse, type NextRequest } from "next/server";
import { prefersMarkdown } from "@/lib/agent/negotiate";
import { INTERNAL_HEADER, PATH_HEADER } from "@/lib/agent/site";

/*
 * Markdown content negotiation for AI agents.
 * Requests that prefer text/markdown are rewritten (same URL, internal
 * rewrite) to /api/agent-md, which returns Markdown with Vary: Accept and
 * the real status code (200 or 404). Everyone else gets the normal HTML,
 * also marked Vary: Accept so shared caches keep the two apart.
 */

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (!req.headers.get(INTERNAL_HEADER) && prefersMarkdown(req.headers.get("accept"))) {
    const url = req.nextUrl.clone();
    url.pathname = "/api/agent-md";
    url.search = "";
    // Query strings set on a rewrite are not reliably forwarded, so the
    // original path travels in a request header.
    const headers = new Headers(req.headers);
    headers.set(PATH_HEADER, pathname);
    return NextResponse.rewrite(url, { request: { headers } });
  }

  const res = NextResponse.next();
  res.headers.append("Vary", "Accept");
  return res;
}

export const config = {
  // Pages only: skip Next internals, API routes, and files with an extension
  // (images, robots.txt, sitemap.xml, llms.txt, ...).
  matcher: ["/((?!_next/|api/|.*\\.[a-zA-Z0-9]+$).*)"],
};
