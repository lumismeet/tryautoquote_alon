import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { HUBS, hubHref } from "@/lib/hubs";

export const metadata: Metadata = {
  title: "Page not found | TryAutoQuote",
  robots: { index: false, follow: true },
};

// Our most-read articles (Search Console), so a lost visitor has somewhere useful to go.
const POPULAR = [
  { href: "/blogs/can-employer-ask-for-car-insurance-information", label: "Can my employer require proof of car insurance?" },
  { href: "/blogs/what-not-to-tell-your-insurance-company", label: "What not to tell your insurance company after an accident" },
  { href: "/blogs/state-minimum-vs-full-coverage", label: "Does state minimum mean full coverage?" },
  { href: "/blogs/50-100-50-liability-limits-explained", label: "What does 50/100/50 mean in car insurance?" },
  { href: "/blogs/when-to-drop-full-coverage", label: "When to drop full coverage (with calculator)" },
  { href: "/blogs/what-documents-to-file-a-car-insurance-claim", label: "How to file a car insurance claim" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-[#0A2A4F]">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-6 pt-14 pb-20 w-full">
        <p className="text-sm font-semibold text-[#2B5BA8] mb-2">Error 404</p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">We couldn&rsquo;t find that page</h1>
        <p className="text-[#0A2A4F]/75 leading-relaxed mb-8 max-w-xl">
          The link may be old or mistyped. Here are the most useful places to go from here.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <Link href="/quote/1_map" className="bg-gradient-to-r from-[#2B5BA8] to-[#38B6C9] text-white font-semibold px-6 py-3 rounded-full">
            Compare quotes in your area
          </Link>
          <Link href="/" className="bg-white border border-[#0A2A4F]/15 font-semibold px-6 py-3 rounded-full">
            Go to the homepage
          </Link>
        </div>

        <h2 className="text-lg font-bold mb-3">Popular articles</h2>
        <ul className="bg-white rounded-2xl border border-[#0A2A4F]/10 divide-y divide-[#0A2A4F]/[0.06] mb-10">
          {POPULAR.map((p) => (
            <li key={p.href}><Link href={p.href} className="block px-5 py-3.5 hover:text-[#2B5BA8]">{p.label}</Link></li>
          ))}
        </ul>

        <h2 className="text-lg font-bold mb-3">Browse by topic</h2>
        <div className="flex flex-wrap gap-2.5">
          {HUBS.map((h) => (
            <Link key={h.slug} href={hubHref(h.slug)} className="bg-white border border-[#0A2A4F]/15 rounded-full px-4 py-2 text-sm font-medium hover:border-[#2B5BA8] hover:text-[#2B5BA8]">
              {h.name}
            </Link>
          ))}
          <Link href="/car-insurance#states" className="bg-white border border-[#0A2A4F]/15 rounded-full px-4 py-2 text-sm font-medium hover:border-[#2B5BA8] hover:text-[#2B5BA8]">
            Rules by state
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
