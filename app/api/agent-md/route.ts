import { NextRequest } from "next/server";
import { INTERNAL_HEADER, resolveMarkdown } from "@/lib/agent/resolve";
import { MARKDOWN_CONTENT_TYPE, PATH_HEADER } from "@/lib/agent/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function md(body: string, status: number) {
  return new Response(body, {
    status,
    headers: {
      "Content-Type": MARKDOWN_CONTENT_TYPE,
      Vary: "Accept",
      "Cache-Control": status === 200 ? "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400" : "public, max-age=0, s-maxage=60",
      "X-Robots-Tag": "noindex",
    },
  });
}

async function handle(req: NextRequest, head: boolean) {
  const raw = req.headers.get(PATH_HEADER) || "/";
  const pathname = raw.startsWith("/") ? raw : `/${raw}`;
  const origin = req.nextUrl.origin;

  const { status, body } = await resolveMarkdown(pathname, async (p) => {
    const r = await fetch(new URL(p, origin), {
      headers: { Accept: "text/html", [INTERNAL_HEADER]: "1" },
      cache: "no-store",
      redirect: "follow",
    });
    return { status: r.status, html: r.ok ? await r.text() : "" };
  });

  const res = md(body, status);
  return head ? new Response(null, { status, headers: res.headers }) : res;
}

export function GET(req: NextRequest) {
  return handle(req, false);
}

export function HEAD(req: NextRequest) {
  return handle(req, true);
}
