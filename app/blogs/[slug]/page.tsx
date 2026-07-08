import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { getPostBySlug, getAllSlugs } from "@/lib/blogs";

// Pre-builds every blog page at build time (static, same as before)
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// Per-post SEO — pulls from frontmatter instead of hardcoded metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | TryAutoQuote Blog`,
    description: post.description,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      title: `${post.title} | TryAutoQuote Blog`,
      description: post.description,
      url: `https://tryautoquote.com/blogs/${post.slug}`,
      siteName: "TryAutoQuote",
      type: "article",
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-[#0A2A4F]">
      <Navbar />

      <main className="flex-1 w-full max-w-2xl mx-auto px-6 pt-10 pb-20 md:pt-14 md:pb-28">

        <nav className="text-xs text-[#0A2A4F]/50 mb-8 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#2B5BA8] transition">Home</Link>
          <span>/</span>
          <Link href="/blogs" className="hover:text-[#2B5BA8] transition">Blogs</Link>
          <span>/</span>
          <span className="text-[#0A2A4F]/70">{post.title}</span>
        </nav>

        <div className="mb-10">
          <span className="inline-block text-xs font-semibold text-[#2B5BA8] bg-[#2B5BA8]/10 rounded-full px-3 py-1 mb-4">
            {post.tag}
          </span>
          <h1 className="text-3xl md:text-[2.15rem] font-bold text-[#0A2A4F] leading-tight mb-5">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-[#0A2A4F]/45">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <hr className="mt-7 border-[#0A2A4F]/10" />
        </div>

        <article className="text-[#0A2A4F]/75 leading-[1.85] text-[1.02rem] space-y-6">
          <MDXRemote
            source={post.content}
            components={{
              h2: ({ children }) =>
                children === "Key takeaways" ? (
                  <p className="font-semibold text-[#0A2A4F] text-sm border-t border-[#0A2A4F]/10 pt-8 mt-4">
                    {children}
                  </p>
                ) : (
                  <h2 className="text-xl font-bold text-[#0A2A4F] pt-4">{children}</h2>
                ),
              ul: ({ children }) => (
                <ul className="space-y-2.5 text-sm text-[#0A2A4F]/65">{children}</ul>
              ),
              li: ({ children }) => (
                <li className="flex items-start gap-2.5">
                  <span className="text-[#38B6C9] mt-0.5 shrink-0">&#10003;</span>
                  <span>{children}</span>
                </li>
              ),
            }}
          />
        </article>

        <div className="mt-14 bg-gradient-to-r from-[#2B5BA8] to-[#38B6C9] rounded-2xl px-8 py-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to compare real quotes?</h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto text-sm">
            Answer a few questions and we will match you with top carriers in your area. Free, no obligation, no spam calls.
          </p>
          <Link
            href="/quote/1_map"
            className="inline-block bg-white text-[#2B5BA8] font-semibold px-8 py-3.5 rounded-full hover:bg-[#EBF2FB] transition"
          >
            Get a Free Quote
          </Link>
        </div>

        <div className="mt-10 text-center">
          <Link href="/blogs" className="text-sm text-[#2B5BA8] hover:underline">
            Back to Blog
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}