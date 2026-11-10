import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { getAllPosts } from "@/lib/blogs";
import { HUBS, getHub, hubHref, type HubSlug } from "@/lib/hubs";

const BASE = "https://www.tryautoquote.com";

export function hubMetadata(slug: HubSlug): Metadata {
  const hub = getHub(slug);
  const url = `${BASE}${hubHref(slug)}`;
  return {
    title: `${hub.metaTitle} | TryAutoQuote`,
    description: hub.metaDescription,
    alternates: { canonical: hubHref(slug) },
    openGraph: { title: hub.metaTitle, description: hub.metaDescription, url, siteName: "TryAutoQuote", type: "website" },
  };
}

export default function HubPage({ slug }: { slug: HubSlug }) {
  const hub = getHub(slug);
  const bySlug = new Map(getAllPosts().map((p) => [p.slug, p]));
  const posts = hub.posts.map((s) => bySlug.get(s)).filter((p): p is NonNullable<typeof p> => !!p);
  const others = HUBS.filter((h) => h.slug !== slug);
  const url = `${BASE}${hubHref(slug)}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Car insurance", item: `${BASE}/car-insurance` },
        { "@type": "ListItem", position: 3, name: hub.name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: hub.title,
      description: hub.metaDescription,
      url,
      isPartOf: { "@type": "WebSite", name: "TryAutoQuote", url: BASE },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: [...hub.guides.map((g) => g.href), ...posts.map((p) => p.href)].map((href, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${BASE}${href}`,
        })),
      },
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-[#0A2A4F]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-6 pt-10 pb-20 md:pt-14 md:pb-28 w-full">
        <nav aria-label="Breadcrumb" className="text-xs text-[#0A2A4F]/50 mb-8 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-[#2B5BA8] transition">Home</Link>
          <span>/</span>
          <Link href="/car-insurance" className="hover:text-[#2B5BA8] transition">Car insurance</Link>
          <span>/</span>
          <span className="text-[#0A2A4F]/70">{hub.name}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">{hub.title}</h1>
        <div className="space-y-4 text-[#0A2A4F]/70 leading-relaxed max-w-2xl mb-12">
          {hub.intro.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        {hub.guides.length > 0 && (
          <section className="mb-12">
            <h2 className="text-lg font-bold mb-4">Start here</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {hub.guides.map((g) => (
                <Link key={g.href} href={g.href}
                  className="group block rounded-2xl bg-[#0A2A4F] text-white px-6 py-6 hover:bg-[#123a66] transition">
                  <span className="block text-xs text-[#38B6C9] font-semibold mb-2">Guide</span>
                  <span className="block text-lg font-bold leading-snug">{g.title}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mb-14">
          <h2 className="text-lg font-bold mb-4">All {hub.name.toLowerCase()} articles</h2>
          <ul className="divide-y divide-[#0A2A4F]/8 bg-white rounded-2xl border border-[#0A2A4F]/8">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={p.href} className="group block px-6 py-5 hover:bg-[#0A2A4F]/[0.02] transition">
                  <span className="block font-semibold group-hover:text-[#2B5BA8] transition leading-snug">{p.title}</span>
                  <span className="block text-sm text-[#0A2A4F]/55 mt-1.5 line-clamp-2">{p.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14 rounded-2xl border border-[#38B6C9]/30 bg-white px-6 py-6">
          <h2 className="text-lg font-bold mb-2">Rules depend on your state</h2>
          <p className="text-sm text-[#0A2A4F]/65 leading-relaxed mb-4">
            Minimum limits, no-fault rules and what insurers may use to price you all vary by state.
          </p>
          <Link href="/car-insurance#states" className="text-sm font-semibold text-[#2B5BA8] hover:underline">
            See car insurance requirements by state
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">Other topics</h2>
          <div className="flex flex-wrap gap-3">
            {others.map((h) => (
              <Link key={h.slug} href={hubHref(h.slug)}
                className="rounded-full border border-[#0A2A4F]/15 bg-white px-4 py-2 text-sm font-medium hover:border-[#2B5BA8] hover:text-[#2B5BA8] transition">
                {h.name}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
