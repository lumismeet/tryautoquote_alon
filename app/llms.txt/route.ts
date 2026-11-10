import { getAllPosts } from "@/lib/blogs";
import { states } from "@/lib/states";
import { buildLlmsTxt } from "@/lib/agent/llms";

export const dynamic = "force-static";

export function GET() {
  const body = buildLlmsTxt({
    posts: getAllPosts().map((p) => ({ title: p.title, url: `/blogs/${p.slug}`, description: p.description })),
    states: [...states]
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((s) => ({ title: `${s.name} car insurance requirements`, url: `/car-insurance/${s.slug}` })),
  });
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=0, s-maxage=86400" },
  });
}
