import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import StatesGrid from "@/components/StatesGrid";
import { states } from "@/lib/states";

export const metadata: Metadata = {
  title: "Car Insurance Requirements by State | TryAutoQuote",
  description:
    "Find the minimum car insurance requirements for your state. Coverage laws vary significantly — learn what is required where you live and compare free quotes.",
  alternates: { canonical: "/car-insurance" },
  openGraph: {
    title: "Car Insurance Requirements by State | TryAutoQuote",
    description:
      "Find the minimum car insurance requirements for your state. Coverage laws vary significantly — learn what is required where you live and compare free quotes.",
    url: "https://tryautoquote.com/car-insurance",
    siteName: "TryAutoQuote",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://tryautoquote.com/" },
    { "@type": "ListItem", position: 2, name: "Car Insurance by State", item: "https://tryautoquote.com/car-insurance" },
  ],
};

export default function CarInsuranceByState() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-[#0A2A4F]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-6 pt-10 pb-20 md:pt-14 md:pb-28 w-full">

        <nav className="text-xs text-[#0A2A4F]/50 mb-8 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#2B5BA8] transition">Home</Link>
          <span>/</span>
          <span className="text-[#0A2A4F]/70">Car Insurance by State</span>
        </nav>

        <div className="mb-10">
          <span className="inline-block text-xs font-semibold text-[#2B5BA8] bg-[#2B5BA8]/10 rounded-full px-3 py-1 mb-4">
            State Requirements
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A2A4F] leading-tight mb-4">
            Car Insurance Requirements by State
          </h1>
          <p className="text-[#0A2A4F]/60 leading-relaxed max-w-2xl">
            Minimum coverage requirements are set by state law and vary significantly across the country. Some states require no-fault PIP coverage, others ban credit-based pricing, and minimum liability limits differ widely. Select your state below to see the exact requirements and what they actually cover.
          </p>
        </div>

        <StatesGrid states={states} />

        <div className="mt-14 bg-[#0A2A4F] rounded-2xl px-8 py-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to compare rates in your state?</h2>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            Enter your zip code and get personalized quotes from top carriers in minutes. Free, no obligation, no spam calls.
          </p>
          <Link
            href="/quote/1_map"
            className="inline-block bg-gradient-to-r from-[#2B5BA8] to-[#38B6C9] text-white font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition"
          >
            Get a Free Quote
          </Link>
        </div>

      </main>
      <Footer />
    </div>
  );
}
