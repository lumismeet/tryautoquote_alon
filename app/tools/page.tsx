import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { pageTitle } from "@/lib/seo";
import { TOOLS } from "@/lib/tools";
import EmbedCode from "@/components/tools/EmbedCode";

const TITLE = "Car Insurance Calculators";
const DESCRIPTION = "Free car insurance calculators: see if full coverage is still worth it, and which deductible saves you more. No personal info needed.";

export const metadata: Metadata = {
  title: pageTitle(TITLE),
  description: DESCRIPTION,
  alternates: { canonical: "/tools" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://www.tryautoquote.com/tools", siteName: "TryAutoQuote", type: "website" },
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-[#0A2A4F]">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-6 pt-10 pb-20 md:pt-14 md:pb-28 w-full">
        <nav aria-label="Breadcrumb" className="text-xs text-[#0A2A4F]/70 mb-8 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#2B5BA8] transition">Home</Link>
          <span>/</span>
          <span className="text-[#0A2A4F]/70">Tools</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">Car insurance calculators</h1>
        <p className="text-[#0A2A4F]/70 leading-relaxed max-w-2xl mb-10">
          Quick, free tools for the decisions that change what you pay. Each one sits inside the guide that explains it,
          and none of them asks for your name, phone number or email. Run a blog or website? Each calculator can be added to
          your page for free.
        </p>
        <ul className="grid gap-5 sm:grid-cols-2">
          {TOOLS.map((t) => (
            <li key={t.href}>
              <Link href={t.href} className="group block rounded-2xl bg-white border border-[#0A2A4F]/8 px-6 py-6 hover:border-[#2B5BA8]/40 transition">
                <span className="block text-xs font-bold uppercase tracking-[0.14em] text-[#2B5BA8] mb-2">Calculator</span>
                <span className="block text-lg font-bold leading-snug group-hover:text-[#2B5BA8] transition">{t.name}</span>
                <span className="block text-sm text-[#0A2A4F]/70 leading-relaxed mt-2">{t.description}</span>
              </Link>
              <EmbedCode slug={t.slug} />
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
