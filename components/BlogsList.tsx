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

  const page = Math.max(1, Number(searchParams.get("page") ?? "1"));
  const totalPages = Math.ceil(posts.length / PAGE_SIZE);
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const shown = posts.slice(start, start + PAGE_SIZE);

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

  return (
    <div>
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
