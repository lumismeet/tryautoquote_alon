import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { states } from "@/lib/states";
import { getAllPosts } from "@/lib/blogs";
import { HUBS, hubHref } from "@/lib/hubs";

const TITLE = "Car Insurance Guide: Coverage, Cost, Claims and State Rules";
const DESCRIPTION =
  "Plain-English car insurance guides: what each coverage does, what sets your rate, how claims work, and the minimum requirements in every U.S. state.";

export const metadata: Metadata = {
  title: `${TITLE} | TryAutoQuote`,
  description: DESCRIPTION,
  alternates: { canonical: "/car-insurance" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://www.tryautoquote.com/car-insurance", siteName: "TryAutoQuote", type: "website" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tryautoquote.com/" },
    { "@type": "ListItem", position: 2, name: "Car insurance", item: "https://www.tryautoquote.com/car-insurance" },
  ],
};

export default function CarInsurancePillar() {
  const bySlug = new Map(getAllPosts().map((p) => [p.slug, p]));

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-[#0A2A4F]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-6 pt-10 pb-20 md:pt-14 md:pb-28 w-full">
        <nav aria-label="Breadcrumb" className="text-xs text-[#0A2A4F]/50 mb-8 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#2B5BA8] transition">Home</Link>
          <span>/</span>
          <span className="text-[#0A2A4F]/70">Car insurance</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">Car insurance, explained</h1>
        <p className="text-[#0A2A4F]/70 leading-relaxed max-w-2xl mb-12">
          Everything you need to choose, use and pay less for car insurance, in plain English. Pick a topic,
          or jump to your state&rsquo;s minimum requirements below.
        </p>

        <section aria-label="Topics" className="grid gap-5 md:grid-cols-2 mb-16">
          {HUBS.map((hub) => {
            const top = hub.posts.slice(0, 3).map((s) => bySlug.get(s)).filter(Boolean);
            return (
              <div key={hub.slug} className="bg-white rounded-2xl border border-[#0A2A4F]/8 px-6 py-6 flex flex-col">
                <h2 className="text-xl font-bold mb-2">
                  <Link href={hubHref(hub.slug)} className="hover:text-[#2B5BA8] transition">{hub.title}</Link>
                </h2>
                <p className="text-sm text-[#0A2A4F]/60 leading-relaxed mb-4">{hub.metaDescription}</p>
                <ul className="space-y-2 text-sm mb-5">
                  {hub.guides.map((g) => (
                    <li key={g.href}><Link href={g.href} className="text-[#0A2A4F]/80 hover:text-[#2B5BA8]">{g.title}</Link></li>
                  ))}
                  {top.map((p) => (
                    <li key={p!.slug}><Link href={p!.href} className="text-[#0A2A4F]/80 hover:text-[#2B5BA8]">{p!.title}</Link></li>
                  ))}
                </ul>
                <Link href={hubHref(hub.slug)} className="mt-auto text-sm font-semibold text-[#2B5BA8] hover:underline">
                  All {hub.posts.length + hub.guides.length} {hub.name.toLowerCase()} articles
                </Link>
              </div>
            );
          })}
        </section>

        <section id="states" className="scroll-mt-24">
          <h2 className="text-2xl font-bold mb-3">Car insurance requirements by state</h2>
          <p className="text-[#0A2A4F]/60 leading-relaxed max-w-2xl mb-8">
            Minimum coverage is set by state law and varies widely. Some states require no-fault PIP coverage,
            some limit credit-based pricing, and minimum liability limits differ. Select your state for the exact rules.
          </p>
          {/* Plain server-rendered links: every state page is one click from the pillar. */}
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-1 bg-white rounded-2xl border border-[#0A2A4F]/8 px-6 py-6">
            {[...states].sort((a, b) => a.name.localeCompare(b.name)).map((st) => (
              <li key={st.slug}>
                <Link href={`/car-insurance/${st.slug}`} className="block py-1.5 text-sm text-[#0A2A4F]/80 hover:text-[#2B5BA8] transition">
                  {st.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-14 bg-[#0A2A4F] rounded-2xl px-8 py-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Compare options in your area</h2>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            Enter your ZIP code and answer a few quick questions. No name, phone number or email needed.
          </p>
          <Link href="/quote/1_map"
            className="inline-block bg-gradient-to-r from-[#2B5BA8] to-[#38B6C9] text-white font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition">
            Start comparing
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
