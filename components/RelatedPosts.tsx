import Link from "next/link";
import type { BlogPost } from "@/lib/blogs";

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 border-t border-[#0A2A4F]/10 pt-10">
      <h2 className="text-sm font-bold uppercase tracking-widest text-[#0A2A4F]/50 mb-6">
        Read next
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={post.href}
            className="group block bg-white border border-[#0A2A4F]/8 rounded-2xl p-5 hover:border-[#2B5BA8]/30 hover:shadow-md transition"
          >
            <span className="inline-block text-[11px] font-semibold text-[#2B5BA8] bg-[#2B5BA8]/10 rounded-full px-2.5 py-0.5 mb-3">
              {post.tag}
            </span>
            <h3 className="text-sm font-bold text-[#0A2A4F] group-hover:text-[#2B5BA8] transition leading-snug mb-2">
              {post.title}
            </h3>
            <p className="text-xs text-[#0A2A4F]/45">{post.readTime}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
