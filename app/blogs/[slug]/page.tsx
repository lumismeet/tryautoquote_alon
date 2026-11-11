import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import TableOfContents from "@/components/TableOfContents";
import MobileTableOfContents from "@/components/MobileTableOfContents";
import FaqSection from "@/components/FaqSection";
import RelatedPosts from "@/components/RelatedPosts";
import DropCoverageCalculator from "@/components/tools/DropCoverageCalculator";
import { hubForPost, hubHref } from "@/lib/hubs";
import { pageTitle } from "@/lib/seo";
import References from "@/components/References";
import { getPostBySlug, getAllSlugs, getHeadings, splitFaq, splitReferences, getRelatedPosts, splitTakeaways, lastModified } from "@/lib/blogs";
import BlogCTA from "@/components/BlogCTA";
import InlineQuoteBox from "@/components/InlineQuoteBox";

// Shared MDX element styling, reused for the prose before and after the FAQ.
// Built per-post so the `a` handler can turn citation links into numbered
// superscript markers. `refMap` maps a source URL to its number + label in the
// References list; any inline link whose href matches becomes a "[n]" marker
// that opens the source in a new tab (with the source name as a tooltip),
// instead of a plain inline hyperlink.
function makeMdxComponents(refMap: Map<string, { num: number; label: string }>) {
  return {
    // Interactive tools that posts can embed as <ComponentName />.
    DropCoverageCalculator,
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
    // GFM tables. The wrapper scrolls sideways on narrow screens so a wide
    // table never pushes the page wider than the viewport.
    table: ({ children }: { children?: React.ReactNode }) => (
      <div className="not-prose my-8 overflow-x-auto rounded-xl border border-[#0A2A4F]/10 bg-white">
        <table className="w-full border-collapse text-[13px] sm:text-sm text-left">{children}</table>
      </div>
    ),
    thead: ({ children }: { children?: React.ReactNode }) => (
      <thead className="bg-[#0A2A4F]/[0.04] text-[#0A2A4F]">{children}</thead>
    ),
    th: ({ children }: { children?: React.ReactNode }) => (
      <th className="px-2.5 sm:px-4 py-3 font-semibold align-bottom border-b border-[#0A2A4F]/10">{children}</th>
    ),
    td: ({ children }: { children?: React.ReactNode }) => (
      <td className="px-2.5 sm:px-4 py-3 align-top border-b border-[#0A2A4F]/[0.06] text-[#0A2A4F]/75">{children}</td>
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

  const searchTitle = post.seoTitle ?? post.title;
  const searchDescription = post.seoDescription ?? post.description;
  return {
    title: pageTitle(searchTitle),
    description: searchDescription,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      title: searchTitle,
      description: searchDescription,
      url: `https://www.tryautoquote.com/blogs/${post.slug}`,
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
  const { body: withoutRefs, references } = splitReferences(post.content);
  // Key takeaways move to a summary box at the top of the post.
  const { body: contentBody, takeaways } = splitTakeaways(withoutRefs);
  const modified = lastModified(post);
  const wasUpdated = !!post.updated && post.updated !== post.date;

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
    mainEntityOfPage: `https://www.tryautoquote.com/blogs/${post.slug}`,
    url: `https://www.tryautoquote.com/blogs/${post.slug}`,
    dateModified: new Date(modified).toISOString(),
    author: {
      "@type": "Organization",
      name: "TryAutoQuote Editorial Team",
      url: "https://www.tryautoquote.com/about#editorial",
    },
    publisher: { "@id": "https://www.tryautoquote.com/#organization" },
    citation:
      references.length > 0
        ? references.map((r) => ({
            "@type": "CreativeWork",
            name: r.label,
            url: r.url,
          }))
        : undefined,
  };

  const hub = hubForPost(post.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tryautoquote.com/" },
      { "@type": "ListItem", position: 2, name: "Car insurance", item: "https://www.tryautoquote.com/car-insurance" },
      ...(hub
        ? [{ "@type": "ListItem", position: 3, name: hub.name, item: `https://www.tryautoquote.com${hubHref(hub.slug)}` }]
        : []),
      { "@type": "ListItem", position: hub ? 4 : 3, name: post.title, item: `https://www.tryautoquote.com/blogs/${post.slug}` },
    ],
  };

  const relatedPosts = getRelatedPosts(slug, 3, hub?.posts ?? []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-[#0A2A4F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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

            <nav aria-label="Breadcrumb" className="text-xs text-[#0A2A4F]/50 mb-8 flex items-center gap-1.5 flex-wrap">
              <Link href="/" className="hover:text-[#2B5BA8] transition">Home</Link>
              <span>/</span>
              <Link href="/car-insurance" className="hover:text-[#2B5BA8] transition">Car insurance</Link>
              {hub && (
                <>
                  <span>/</span>
                  <Link href={hubHref(hub.slug)} className="hover:text-[#2B5BA8] transition">{hub.name}</Link>
                </>
              )}
              <span>/</span>
              <span className="text-[#0A2A4F]/70 line-clamp-1">{post.title}</span>
            </nav>

            <div className="mb-10">
              {hub ? (
                <Link href={hubHref(hub.slug)} className="inline-block text-xs font-semibold text-[#2B5BA8] bg-[#2B5BA8]/10 rounded-full px-3 py-1 mb-4 hover:bg-[#2B5BA8]/15 transition">
                  {hub.name}
                </Link>
              ) : (
                <span className="inline-block text-xs font-semibold text-[#2B5BA8] bg-[#2B5BA8]/10 rounded-full px-3 py-1 mb-4">
                  {post.tag}
                </span>
              )}
              <h1 className="text-3xl md:text-[2.15rem] font-bold text-[#0A2A4F] leading-tight mb-5">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#0A2A4F]/45">
                <span>
                  By{" "}
                  <Link href="/about#editorial" className="text-[#2B5BA8] hover:underline">
                    TryAutoQuote Editorial Team
                  </Link>
                </span>
                <span>·</span>
                {wasUpdated ? (
                  <>
                    <span>
                      Updated <time dateTime={new Date(modified).toISOString().slice(0, 10)}>{post.updated}</time>
                    </span>
                    <span>·</span>
                    <span>Published {post.date}</span>
                  </>
                ) : (
                  <span>
                    Published <time dateTime={new Date(post.date).toISOString().slice(0, 10)}>{post.date}</time>
                  </span>
                )}
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <hr className="mt-7 border-[#0A2A4F]/10" />
            </div>

            {takeaways.length > 0 && (
              <section
                aria-labelledby="key-takeaways"
                className="mb-10 rounded-2xl border border-[#38B6C9]/30 bg-white px-6 py-6 md:px-7"
              >
                <h2 id="key-takeaways" className="text-xs font-bold uppercase tracking-[0.14em] text-[#2B5BA8] mb-4">
                  Key takeaways
                </h2>
                <ul className="space-y-3 text-[0.97rem] leading-relaxed text-[#0A2A4F]/80">
                  {takeaways.map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#38B6C9] mt-0.5 shrink-0" aria-hidden="true">&#10003;</span>
                      <span>{t.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1")}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className="xl:hidden">
              <InlineQuoteBox entry="blog_inline" />
            </div>

            <MobileTableOfContents headings={headings} />

            <article className="text-[#0A2A4F]/75 leading-[1.85] text-[1.02rem] space-y-6 mdx-content">
              <MDXRemote
                source={before}
                options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }}
                components={mdxComponents}
              />

              {faqs.length > 0 && <FaqSection faqs={faqs} />}

              {after && (
                <MDXRemote
                  source={after}
                  options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }}
                  components={mdxComponents}
                />
              )}
            </article>

            {/* Inline CTA for mobile and tablet. The sidebar CTA only renders on xl screens. */}
            <div className="xl:hidden mt-12">
              <BlogCTA />
            </div>

            {/* Internal link into the state pages hub */}
            <div className="mt-10 rounded-2xl border border-[#0A2A4F]/10 bg-white px-6 py-5">
              <p className="font-semibold text-[#0A2A4F]">Car insurance rules are different in every state</p>
              <p className="mt-1 text-sm text-[#0A2A4F]/70">
                See minimum coverage requirements, average costs, and local tips for your state.
              </p>
              <Link href="/car-insurance#states" className="mt-3 inline-block text-sm font-semibold text-[#2B5BA8] hover:underline">
                Browse car insurance by state →
              </Link>
            </div>

            <References references={references} />

            <RelatedPosts posts={relatedPosts} />

            <div className="mt-10 text-center">
              {hub ? (
                <Link href={hubHref(hub.slug)} className="text-sm text-[#2B5BA8] hover:underline">
                  More {hub.name.toLowerCase()} articles
                </Link>
              ) : (
                <Link href="/blogs" className="text-sm text-[#2B5BA8] hover:underline">
                  Back to Blogs
                </Link>
              )}
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