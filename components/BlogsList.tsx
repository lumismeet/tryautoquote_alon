"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Suspense } from "react";

type Post = {
  href: string;
  tag: string;
  title: string;
  description: string;
  readTime: string;
  date: string;
};

const PAGE_SIZE = 5;

function BlogsListInner({ posts }: { posts: Post[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const query = searchParams.get("q") ?? "";
  const activeTag = searchParams.get("tag") ?? "";

  // Unique tags become the category chips — no separate data source needed.
  const categories = Array.from(new Set(posts.map((p) => p.tag))).sort();

  const q = query.toLowerCase();
  const filtered = posts
    .filter((p) => (activeTag ? p.tag === activeTag : true))
    .filter((p) =>
      q
        ? p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tag.toLowerCase().includes(q)
        : true
    )
    .sort((a, b) => {
      if (!q) return 0; // preserve incoming (newest-first) order when not searching
      const aStarts = a.title.toLowerCase().startsWith(q);
      const bStarts = b.title.toLowerCase().startsWith(q);
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
      return 0;
    });

  const page = Math.max(1, Number(searchParams.get("page") ?? "1"));
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const shown = filtered.slice(start, start + PAGE_SIZE);

  function goTo(n: number) {
    const params = new URLSearchParams(searchParams.toString());
    if (n === 1) {
      params.delete("page");
    } else {
      params.set("page", String(n));
    }
    const qs = params.toString();
    router.replace(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false });
  }

  function onSearch(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    params.delete("page");
    const qs = params.toString();
    router.replace(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false });
  }

  function onTag(tag: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (tag) {
      params.set("tag", tag);
    } else {
      params.delete("tag");
    }
    params.delete("page");
    const qs = params.toString();
    router.replace(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false });
  }

  return (
    <div>
      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search articles..."
          className="w-full bg-white border border-[#0A2A4F]/10 rounded-xl px-4 py-3 text-sm text-[#0A2A4F] placeholder-[#0A2A4F]/35 focus:outline-none focus:ring-2 focus:ring-[#2B5BA8]/30 transition"
        />
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap gap-2 mb-5">
        <button
          onClick={() => onTag("")}
          className={`text-xs font-semibold rounded-full px-3 py-1.5 transition ${
            activeTag === ""
              ? "bg-[#2B5BA8] text-white"
              : "bg-[#2B5BA8]/10 text-[#2B5BA8] hover:bg-[#2B5BA8]/20"
          }`}
        >
          All
        </button>
        {categories.map((tag) => (
          <button
            key={tag}
            onClick={() => onTag(activeTag === tag ? "" : tag)}
            className={`text-xs font-semibold rounded-full px-3 py-1.5 transition ${
              activeTag === tag
                ? "bg-[#2B5BA8] text-white"
                : "bg-[#2B5BA8]/10 text-[#2B5BA8] hover:bg-[#2B5BA8]/20"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Result count */}
      <p className="text-xs text-[#0A2A4F]/45 mb-5">
        {filtered.length === posts.length
          ? `${posts.length} articles`
          : `Showing ${filtered.length} of ${posts.length} articles`}
      </p>

      {/* Empty state */}
      {filtered.length === 0 && (
        <p className="text-center py-10 text-sm text-[#0A2A4F]/40">
          No articles match your search.
        </p>
      )}

      <div className="space-y-5 mb-8">
        {shown.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="group block bg-white border border-[#0A2A4F]/8 rounded-2xl p-7 hover:border-[#2B5BA8]/30 hover:shadow-md transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <span className="inline-block text-xs font-semibold text-[#2B5BA8] bg-[#2B5BA8]/10 rounded-full px-3 py-1 mb-3">
                  {post.tag}
                </span>
                <h2 className="text-lg font-bold text-[#0A2A4F] group-hover:text-[#2B5BA8] transition mb-2 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-[#0A2A4F]/60 leading-relaxed">{post.description}</p>
                <div className="mt-3 flex items-center gap-3 text-xs text-[#0A2A4F]/40">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
              <span className="text-[#0A2A4F]/25 group-hover:text-[#2B5BA8] transition text-2xl shrink-0 mt-1">
                &#8594;
              </span>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1.5">
          <button
            onClick={() => goTo(safePage - 1)}
            disabled={safePage === 1}
            className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-[#0A2A4F]/50 hover:text-[#2B5BA8] hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            <ChevronLeft className="w-4 h-4" /> Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => goTo(n)}
              className={`w-9 h-9 rounded-lg text-sm font-semibold transition ${
                n === safePage
                  ? "bg-[#2B5BA8] text-white"
                  : "text-[#0A2A4F]/60 hover:text-[#2B5BA8] hover:bg-white"
              }`}
            >
              {n}
            </button>
          ))}

          <button
            onClick={() => goTo(safePage + 1)}
            disabled={safePage === totalPages}
            className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-[#0A2A4F]/50 hover:text-[#2B5BA8] hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function BlogsList({ posts }: { posts: Post[] }) {
  return (
    <Suspense>
      <BlogsListInner posts={posts} />
    </Suspense>
  );
}
