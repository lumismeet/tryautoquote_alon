import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import rehypeSlug from "rehype-slug";
import TableOfContents from "@/components/TableOfContents";
import { getPostBySlug, getAllSlugs, getHeadings } from "@/lib/blogs";
import BlogCTA from "@/components/BlogCTA";

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

  // const headings = getHeadings(post.content).filter((h) => h.text !== "Key takeaways");

  const headings = getHeadings(post.content);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-[#0A2A4F]">
      <Navbar />

      <main className="flex-1 w-full pt-10 pb-20 md:pt-14 md:pb-28">
        <div className="flex justify-center gap-6 items-start">
          <TableOfContents headings={headings} />
          <div className="w-full max-w-2xl min-w-0">

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

            <article className="text-[#0A2A4F]/75 leading-[1.85] text-[1.02rem] space-y-6 mdx-content">
              <MDXRemote
                source={post.content}
                options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }}
                components={{
                  h2: ({ children, id }) =>
                    children === "Key takeaways" ? (
                      <p id={id} className="font-semibold text-[#0A2A4F] text-sm border-t border-[#0A2A4F]/10 pt-8 mt-4 scroll-mt-28">
                        {children}
                      </p>
                    ) : (
                      <h2 id={id} className="text-xl font-bold text-[#0A2A4F] pt-4 scroll-mt-28">{children}</h2>
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

            <div className="mt-10 text-center">
              <Link href="/blogs" className="text-sm text-[#2B5BA8] hover:underline">
                Back to Blog
              </Link>
            </div>

          </div>
          <div className="hidden xl:block w-64 xl:flex-[1.4] shrink-0 self-stretch pr-6">
            <BlogCTA />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}