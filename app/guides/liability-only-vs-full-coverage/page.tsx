import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Liability Only vs Full Coverage Car Insurance | TryAutoQuote",
  description:
    "Should you carry liability only or full coverage? Learn what each covers, when the switch makes financial sense, and how to decide based on your car's value.",
  alternates: { canonical: "/guides/liability-only-vs-full-coverage" },
  openGraph: {
    title: "Liability Only vs Full Coverage Car Insurance | TryAutoQuote",
    description:
      "Should you carry liability only or full coverage? Learn what each covers, when the switch makes financial sense, and how to decide based on your car's value.",
    url: "https://tryautoquote.com/guides/liability-only-vs-full-coverage",
    siteName: "TryAutoQuote",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Liability Only vs Full Coverage Car Insurance",
  description:
    "Should you carry liability only or full coverage? Learn what each covers, when the switch makes financial sense, and how to decide based on your car's value.",
  author: { "@type": "Organization", name: "TryAutoQuote", url: "https://tryautoquote.com" },
  publisher: {
    "@type": "Organization",
    name: "TryAutoQuote",
    url: "https://tryautoquote.com",
    logo: { "@type": "ImageObject", url: "https://tryautoquote.com/logo-test1.png" },
  },
  datePublished: "2026-06-17",
  dateModified: "2026-06-17",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://tryautoquote.com/guides/liability-only-vs-full-coverage",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://tryautoquote.com/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://tryautoquote.com/guides" },
    { "@type": "ListItem", position: 3, name: "Liability Only vs Full Coverage", item: "https://tryautoquote.com/guides/liability-only-vs-full-coverage" },
  ],
};

export default function GuideLiabilityVsFullCoverage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-[#0A2A4F]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto px-6 pt-10 pb-20 md:pt-14 md:pb-28">

        <nav className="text-xs text-[#0A2A4F]/50 mb-8 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#2B5BA8] transition">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-[#2B5BA8] transition">Guides</Link>
          <span>/</span>
          <span className="text-[#0A2A4F]/70">Liability only vs full coverage</span>
        </nav>

        <div className="mb-10">
          <span className="inline-block text-xs font-semibold text-[#2B5BA8] bg-[#2B5BA8]/10 rounded-full px-3 py-1 mb-4">
            Coverage Basics
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A2A4F] leading-tight mb-4">
            Liability Only vs Full Coverage Car Insurance
          </h1>
          <p className="text-[#0A2A4F]/60 text-sm">Updated June 17, 2026 &middot; 6 min read</p>
        </div>

        <div className="flex justify-center mb-10">
          <Image
            src="/ill_comp_blue.svg"
            alt="Understanding liability only versus full coverage car insurance"
            width={260}
            height={260}
            className="w-48 h-48 md:w-64 md:h-64"
          />
        </div>

        <div className="bg-[#2B5BA8]/8 border-l-4 border-[#2B5BA8] rounded-r-xl px-6 py-5 mb-10">
          <p className="font-semibold text-[#0A2A4F] mb-1">The short answer</p>
          <p className="text-[#0A2A4F]/80 leading-relaxed">
            If your car is worth less than $5,000 or the annual cost of collision and comprehensive exceeds 10 percent of your car&apos;s value, liability only is likely the smarter financial choice. If your car is financed, leased, or worth more, full coverage is the right call.
          </p>
        </div>

        <div className="space-y-8 text-[#0A2A4F]/80 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">What each type covers</h2>
            <p>
              Liability-only coverage pays for injuries and property damage you cause to other people in an accident where you are at fault. It does not cover your own vehicle. If your car is damaged in a collision, stolen, or totaled by a weather event, you bear that cost yourself.
            </p>
            <p className="mt-3">
              Full coverage adds collision and comprehensive on top of liability. Collision pays to repair or replace your vehicle after it is damaged in a crash, regardless of fault. Comprehensive covers non-collision events: theft, vandalism, fire, flooding, hail, and animal strikes. Together they protect the vehicle you own, not just the damage you cause others.
            </p>
            <p className="mt-3">
              It is worth noting that &ldquo;full coverage&rdquo; is not an official insurance term. It typically refers to a policy combining liability, collision, and comprehensive. It does not mean every possible loss is covered.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">The 10 percent rule</h2>
            <p>
              A widely used rule of thumb: if the annual cost of collision and comprehensive coverage is more than 10 percent of your car&apos;s current market value, you are likely paying more in premiums than you would ever receive in a claim payout.
            </p>
            <p className="mt-3">
              For example, if your car is worth $4,500 and your annual collision and comprehensive premium is $600 with a $500 deductible, your maximum claim payout if the car is totaled is $4,000. You pay $600 per year for a maximum benefit of $4,000. That is a break-even point of about 6.5 years. In that scenario, liability only is likely the better financial choice.
            </p>
            <p className="mt-3">
              You can check your car&apos;s current market value on Kelley Blue Book or NADA Guides. Use the private party value as your benchmark, not the dealer retail price.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">When you must carry full coverage</h2>
            <p>
              If your vehicle is financed or leased, you have no choice. Your lender or leasing company will require collision and comprehensive coverage until the loan is paid off or the lease ends. This protects their financial interest in the vehicle.
            </p>
            <p className="mt-3">
              If you drop to liability only while still owing money on your car and the vehicle is totaled, your insurer will not pay out the vehicle&apos;s value. You would still owe the remaining loan balance out of pocket.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">When liability only makes sense</h2>
            <p>Liability only tends to be the right choice when your car is paid off and worth less than $5,000, when the annual collision and comprehensive premium exceeds 10 percent of the car&apos;s value, when you have enough savings to replace the car out of pocket if it is totaled, or when the car has high mileage and significant mechanical wear that reduces its insurable value.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">When full coverage makes sense</h2>
            <p>Full coverage is the right call when your car is financed or leased and the lender requires it, when your car is worth more than $10,000 and replacing it would be a financial strain, when you live in an area with high rates of theft, flooding, or hail, when you drive frequently in heavy traffic where collision risk is elevated, or when you could not afford to repair or replace your vehicle without an insurance payout.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">A word on deductibles</h2>
            <p>
              If you decide to keep full coverage, your deductible choice significantly affects what you pay. Raising your deductible from $500 to $1,000 typically reduces your collision and comprehensive premium by 15 to 30 percent. If your car is worth $8,000 and you can comfortably absorb a $1,000 out-of-pocket expense, the higher deductible is usually the better trade-off.
            </p>
          </section>

        </div>

        <div className="mt-14 bg-[#0A2A4F] rounded-2xl px-8 py-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Compare rates at any coverage level</h2>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            See what liability only and full coverage cost you across top carriers. Free, no obligation, no spam calls.
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
