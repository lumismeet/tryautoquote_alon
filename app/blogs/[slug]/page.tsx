import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import rehypeSlug from "rehype-slug";
import TableOfContents from "@/components/TableOfContents";
import MobileTableOfContents from "@/components/MobileTableOfContents";
import FaqSection from "@/components/FaqSection";
import RelatedPosts from "@/components/RelatedPosts";
import References from "@/components/References";
import { getPostBySlug, getAllSlugs, getHeadings, splitFaq, splitReferences, getRelatedPosts } from "@/lib/blogs";
import BlogCTA from "@/components/BlogCTA";

// Shared MDX element styling, reused for the prose before and after the FAQ.
// Built per-post so the `a` handler can turn citation links into numbered
// superscript markers. `refMap` maps a source URL to its number + label in the
// References list; any inline link whose href matches becomes a "[n]" marker
// that opens the source in a new tab (with the source name as a tooltip),
// instead of a plain inline hyperlink.
function makeMdxComponents(refMap: Map<string, { num: number; label: string }>) {
  return {
    h2: ({ children, id }: { children?: React.ReactNode; id?: string }) =>
      children === "Key takeaways" ? (
        <p id={id} className="font-semibold text-[#0A2A4F] text-sm border-t border-[#0A2A4F]/10 pt-8 mt-4 scroll-mt-28">
          {children}
        </p>
      ) : (
        <h2 id={id} className="text-xl font-bold text-[#0A2A4F] pt-4 scroll-mt-28">{children}</h2>
      ),
    ul: ({ children }: { children?: React.ReactNode }) => (
      <ul className="space-y-2.5 text-sm text-[#0A2A4F]/65">{children}</ul>
    ),
    li: ({ children }: { children?: React.ReactNode }) => (
      <li className="flex items-start gap-2.5">
        <span className="text-[#38B6C9] mt-0.5 shrink-0">&#10003;</span>
        <span>{children}</span>
      </li>
    ),
    a: ({ href, children }: { href?: string; children?: React.ReactNode }) => {
      // A citation: keep the phrase as plain text and append a numbered marker
      // that opens the source directly in a new tab. The source name shows as a
      // tooltip so the reader has context before clicking out.
      const cite = href ? refMap.get(href) : undefined;
      if (cite) {
        return (
          <>
            {children}
            <sup className="ml-0.5">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={cite.label}
                aria-label={`Source ${cite.num}: ${cite.label}`}
                className="text-[#2B5BA8] font-semibold no-underline hover:underline"
              >
                [{cite.num}]
              </a>
            </sup>
          </>
        );
      }

      // Any other link (internal or an uncited external link) renders normally.
      const external = !!href && /^https?:\/\//.test(href);
      return (
        <a
          href={href}
          className="text-[#2B5BA8] underline decoration-[#2B5BA8]/30 underline-offset-2 hover:decoration-[#2B5BA8] transition"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    },
  };
}

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

  // Pull the References section out first so it renders as a styled citation
  // footer (and doesn't appear in the TOC), then split the FAQ from the rest.
  const { body: contentBody, references } = splitReferences(post.content);

  // Maps each source URL to its number + label in the References list so inline
  // citation links render as "[n]" markers that open the source in a new tab.
  const refMap = new Map(
    references.map((r, i) => [r.url, { num: i + 1, label: r.label }])
  );
  const mdxComponents = makeMdxComponents(refMap);

  const headings = getHeadings(contentBody);

  // Pull the FAQ out of the body so it renders as an accordion + FAQ schema.
  const { before, faqs, after } = splitFaq(contentBody);

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  // Article-level structured data for rich results. publisher references the
  // Organization defined once in app/layout.tsx.
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: new Date(post.date).toISOString(),
    mainEntityOfPage: `https://tryautoquote.com/blogs/${post.slug}`,
    url: `https://tryautoquote.com/blogs/${post.slug}`,
    publisher: { "@id": "https://tryautoquote.com/#organization" },
    citation:
      references.length > 0
        ? references.map((r) => ({
            "@type": "CreativeWork",
            name: r.label,
            url: r.url,
          }))
        : undefined,
  };

  const relatedPosts = getRelatedPosts(slug);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-[#0A2A4F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Navbar />

      <main className="flex-1 w-full pt-10 pb-20 md:pt-14 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-6 flex justify-center gap-8 items-start">
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

            <MobileTableOfContents headings={headings} />

            <article className="text-[#0A2A4F]/75 leading-[1.85] text-[1.02rem] space-y-6 mdx-content">
              <MDXRemote
                source={before}
                options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }}
                components={mdxComponents}
              />

              {faqs.length > 0 && <FaqSection faqs={faqs} />}

              {after && (
                <MDXRemote
                  source={after}
                  options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }}
                  components={mdxComponents}
                />
              )}
            </article>

            <References references={references} />

            <RelatedPosts posts={relatedPosts} />

            <div className="mt-10 text-center">
              <Link href="/blogs" className="text-sm text-[#2B5BA8] hover:underline">
                Back to Blog
              </Link>
            </div>

          </div>
          <div className="hidden xl:block w-72 shrink-0 self-stretch">
            <BlogCTA />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}