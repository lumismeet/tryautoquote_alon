import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Liability Only vs. Full Coverage: What Each Covers",
  description:
    "Liability only pays for damage you cause to others. Full coverage adds collision and comprehensive for your own car. What each covers and when full is required.",
  alternates: { canonical: "/guides/liability-only-vs-full-coverage" },
  openGraph: {
    title: "Liability Only vs. Full Coverage: What Each Covers",
    description:
      "Liability only pays for damage you cause to others. Full coverage adds collision and comprehensive for your own car. What each covers and when full is required.",
    url: "https://www.tryautoquote.com/guides/liability-only-vs-full-coverage",
    siteName: "TryAutoQuote",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Liability Only vs Full Coverage Car Insurance",
  description:
    "Liability only pays for damage you cause to others. Full coverage adds collision and comprehensive for your own car. What each covers and when full is required.",
  author: { "@type": "Organization", name: "TryAutoQuote", url: "https://www.tryautoquote.com" },
  publisher: {
    "@type": "Organization",
    name: "TryAutoQuote",
    url: "https://www.tryautoquote.com",
    logo: { "@type": "ImageObject", url: "https://www.tryautoquote.com/logo-test1.png" },
  },
  datePublished: "2026-06-17",
  dateModified: "2026-11-11",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.tryautoquote.com/guides/liability-only-vs-full-coverage",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tryautoquote.com/" },
    { "@type": "ListItem", position: 2, name: "Car insurance", item: "https://www.tryautoquote.com/car-insurance" },
    { "@type": "ListItem", position: 3, name: "Coverage", item: "https://www.tryautoquote.com/car-insurance/coverage" },
    { "@type": "ListItem", position: 4, name: "Liability Only vs Full Coverage", item: "https://www.tryautoquote.com/guides/liability-only-vs-full-coverage" },
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
          <Link href="/car-insurance" className="hover:text-[#2B5BA8] transition">Car insurance</Link>
          <span>/</span>
          <Link href="/car-insurance/coverage" className="hover:text-[#2B5BA8] transition">Coverage</Link>
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
          <p className="text-[#0A2A4F]/60 text-sm">Updated November 11, 2026 &middot; 4 mins read</p>
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
            Liability only pays for injuries and damage you cause to other people. Full coverage adds collision and comprehensive, which pay to repair or replace your own car. If your car is financed or leased, full coverage is required. If it is paid off, whether full coverage is worth it depends mostly on what the car is worth.
          </p>
        </div>

        <div className="space-y-8 text-[#0A2A4F]/80 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">What each type actually covers</h2>
            <p>
              Liability-only coverage pays for injuries and property damage you cause to other people in an accident where you are at fault. It protects other drivers, their passengers, and their vehicles. It does not cover you, your passengers, or your own car. If someone rear-ends you and you are not at fault, you would file a claim against their liability coverage, not your own. But if you hit someone else, your liability policy pays for the damage you caused.
            </p>
            <p className="mt-3">
              Full coverage adds collision and comprehensive on top of liability. Collision pays to repair or replace your vehicle after a crash, regardless of fault. If you hit a guardrail, skid on ice into a parked car, or get sideswiped and it is ruled a split-fault accident, collision coverage handles your vehicle regardless of who is to blame. Comprehensive covers non-collision events: theft, vandalism, fire, flooding, hail, falling trees, and animal strikes. If a deer runs into the side of your car or a storm drops a branch on your hood, that goes through comprehensive, not collision.
            </p>
            <p className="mt-3">
              It is worth knowing that &ldquo;full coverage&rdquo; is not an official insurance term. No policy covers every possible loss. The phrase simply refers to a policy combining liability, collision, and comprehensive. You can still have gaps, such as no uninsured motorist coverage or no rental reimbursement, even with what is commonly called full coverage.
            </p>
            <div className="mt-6 overflow-x-auto rounded-xl border border-[#0A2A4F]/10 bg-white">
              <table className="w-full border-collapse text-[13px] sm:text-sm text-left">
                <caption className="sr-only">Liability only vs. full coverage</caption>
                <thead className="bg-[#0A2A4F]/[0.04] text-[#0A2A4F]">
                  <tr>
                    <th scope="col" className="px-3 sm:px-4 py-3 font-semibold">What it pays for</th>
                    <th scope="col" className="px-3 sm:px-4 py-3 font-semibold">Liability only</th>
                    <th scope="col" className="px-3 sm:px-4 py-3 font-semibold">Full coverage</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Injuries you cause to others", "Yes", "Yes"],
                    ["Damage you cause to others' property", "Yes", "Yes"],
                    ["Your car after a crash, whoever is at fault", "No", "Yes (collision)"],
                    ["Theft, vandalism, fire, hail, flood, animal strikes", "No", "Yes (comprehensive)"],
                    ["Meets a lender or lease requirement", "No", "Yes"],
                    ["Cost", "Lower", "Higher"],
                  ].map(([what, liab, full]) => (
                    <tr key={what} className="border-t border-[#0A2A4F]/[0.06]">
                      <th scope="row" className="px-3 sm:px-4 py-3 font-medium text-[#0A2A4F] align-top">{what}</th>
                      <td className="px-3 sm:px-4 py-3 align-top">{liab}</td>
                      <td className="px-3 sm:px-4 py-3 align-top">{full}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">When you must carry full coverage</h2>
            <p>
              If your vehicle is financed or leased, the decision is made for you. Your lender or leasing company will require collision and comprehensive coverage as a condition of the loan or lease agreement. This protects their financial interest in the vehicle, which they technically still own until the loan is paid off or the lease term ends.
            </p>
            <p className="mt-3">
              The lender may also specify a maximum allowable deductible, often $500 or $1,000. If you drop below the required coverage while still owing money on the car and the vehicle is totaled in an accident, your insurer will not pay out the vehicle&apos;s value. You would still owe the remaining loan balance out of pocket, with nothing to show for it. This is also why gap coverage is worth considering in the early years of a loan, because even with full coverage in place, the insurance payout may be less than what you owe if significant depreciation has occurred.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Which one should you carry?</h2>
            <p>
              Once a car is paid off, the choice comes down to whether collision and comprehensive still pay for themselves. The quick test is the 10 percent rule: if those two coverages cost more each year than about 10 percent of the car&apos;s value, liability only may make more sense, as long as you could replace the car from savings. Our{" "}
              <Link href="/blogs/when-to-drop-full-coverage" className="text-[#2B5BA8] hover:underline">when to drop full coverage</Link>{" "}
              guide walks through the math and has a calculator for your own car.
            </p>
            <p className="mt-3">
              Full coverage stays worth it when the car is worth more than you could comfortably replace, or when theft, flooding or hail are common where you live.
            </p>
            <p className="mt-3">
              One mistake to avoid: when you drop collision and comprehensive, don&apos;t also cut your liability limits to the state minimum. Liability protects your savings if you cause a serious accident, and that risk doesn&apos;t shrink as your car gets older. If you&apos;re weighing the legal minimum against full coverage, see{" "}
              <Link href="/blogs/state-minimum-vs-full-coverage" className="text-[#2B5BA8] hover:underline">state minimum vs. full coverage</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Common misconceptions about full coverage</h2>
            <p>
              Many drivers assume full coverage means they are protected in every scenario. That is not accurate. A standard full coverage policy does not include uninsured motorist coverage unless you specifically add it. It does not include roadside assistance, rental car reimbursement, or gap coverage unless you select those options. It does not cover personal property stolen from inside your vehicle, which would typically fall under a homeowners or renters policy. And it does not cover mechanical breakdown or maintenance issues, which is a separate product entirely.
            </p>
            <p className="mt-3">
              Understanding what your policy actually covers is more important than the label attached to it. Ask your insurer for a one-page summary of your coverage, called a declarations page, and review which coverages are included and at what limits.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Choosing the right deductible</h2>
            <p>
              If you keep full coverage, a higher deductible lowers what you pay for collision and comprehensive, in exchange for paying more yourself when you claim. The right number is one you could pay without hardship on a bad day. See{" "}
              <Link href="/blogs/500-vs-1000-deductible" className="text-[#2B5BA8] hover:underline">$500 vs. $1,000 deductible</Link>{" "}
              for the breakeven math.
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
