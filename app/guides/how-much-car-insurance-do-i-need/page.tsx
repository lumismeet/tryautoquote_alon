import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "How Much Car Insurance Do You Actually Need? | TryAutoQuote",
  description:
    "State minimums are rarely enough. Learn what coverage types exist, what limits to carry, and how to find the right amount of car insurance for your situation.",
  alternates: { canonical: "/guides/how-much-car-insurance-do-i-need" },
  openGraph: {
    title: "How Much Car Insurance Do You Actually Need? | TryAutoQuote",
    description:
      "State minimums are rarely enough. Learn what coverage types exist, what limits to carry, and how to find the right amount of car insurance for your situation.",
    url: "https://tryautoquote.com/guides/how-much-car-insurance-do-i-need",
    siteName: "TryAutoQuote",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Car Insurance Do You Actually Need?",
  description:
    "State minimums are rarely enough. Learn what coverage types exist, what limits to carry, and how to find the right amount of car insurance for your situation.",
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
    "@id": "https://tryautoquote.com/guides/how-much-car-insurance-do-i-need",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://tryautoquote.com/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://tryautoquote.com/guides" },
    { "@type": "ListItem", position: 3, name: "How Much Car Insurance Do You Need?", item: "https://tryautoquote.com/guides/how-much-car-insurance-do-i-need" },
  ],
};

export default function GuideHowMuchInsurance() {
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
          <span className="text-[#0A2A4F]/70">How much coverage do you need</span>
        </nav>

        <div className="mb-10">
          <span className="inline-block text-xs font-semibold text-[#2B5BA8] bg-[#2B5BA8]/10 rounded-full px-3 py-1 mb-4">
            Coverage Basics
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A2A4F] leading-tight mb-4">
            How Much Car Insurance Do You Actually Need?
          </h1>
          <p className="text-[#0A2A4F]/60 text-sm">Updated June 17, 2026 &middot; 6 min read</p>
        </div>

        <div className="flex justify-center mb-10">
          <Image
            src="/ill_hero_blue.svg"
            alt="Driver reviewing auto insurance coverage options"
            width={260}
            height={240}
            className="w-48 h-44 md:w-64 md:h-56"
          />
        </div>

        <div className="bg-[#2B5BA8]/8 border-l-4 border-[#2B5BA8] rounded-r-xl px-6 py-5 mb-10">
          <p className="font-semibold text-[#0A2A4F] mb-1">The short answer</p>
          <p className="text-[#0A2A4F]/80 leading-relaxed">
            At minimum, carry your state-required liability limits. In practice, most drivers should carry at least 100/300/100 liability, plus collision and comprehensive if your car is worth more than $5,000. State minimums leave most people dangerously underprotected.
          </p>
        </div>

        <div className="space-y-8 text-[#0A2A4F]/80 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Why state minimums are usually not enough</h2>
            <p>
              Every state sets a minimum amount of liability coverage you must carry to legally drive. These minimums exist to ensure drivers can cover basic damages in a minor accident. The problem is that most state minimums were set decades ago and have not kept up with the cost of medical care or vehicle repairs.
            </p>
            <p className="mt-3">
              A serious accident today can easily result in $100,000 or more in medical bills and vehicle damages. If you carry only the minimum and cause an accident that exceeds your limits, you are personally responsible for the difference. That gap can lead to wage garnishment, asset seizure, or lasting financial damage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Coverage types explained</h2>

            <h3 className="font-semibold text-[#0A2A4F] mt-5 mb-2">Liability (bodily injury and property damage)</h3>
            <p>Pays for injuries and property damage you cause to others in an accident you are at fault for. This is required in nearly every state. Expressed as three numbers, for example 25/50/25, meaning $25,000 per person, $50,000 per accident, and $25,000 in property damage.</p>

            <h3 className="font-semibold text-[#0A2A4F] mt-5 mb-2">Collision</h3>
            <p>Pays to repair or replace your vehicle after a collision with another car or object, regardless of fault. Required by lenders if you have a car loan or lease.</p>

            <h3 className="font-semibold text-[#0A2A4F] mt-5 mb-2">Comprehensive</h3>
            <p>Covers non-collision damage to your vehicle including theft, vandalism, weather events, falling objects, and animal strikes. Also required by most lenders.</p>

            <h3 className="font-semibold text-[#0A2A4F] mt-5 mb-2">Uninsured and underinsured motorist</h3>
            <p>Protects you if you are hit by a driver who has no insurance or not enough insurance to cover your damages. Required in some states, strongly recommended everywhere.</p>

            <h3 className="font-semibold text-[#0A2A4F] mt-5 mb-2">Medical payments and PIP</h3>
            <p>Pays medical expenses for you and your passengers regardless of who caused the accident. Personal Injury Protection is broader and required in no-fault states.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Recommended limits by situation</h2>

            <h3 className="font-semibold text-[#0A2A4F] mt-5 mb-2">Newer or financed vehicle</h3>
            <p>Carry 100/300/100 liability plus collision and comprehensive. Your lender likely requires both. Higher liability limits protect your financial assets if you cause a serious accident.</p>

            <h3 className="font-semibold text-[#0A2A4F] mt-5 mb-2">Older vehicle you own outright</h3>
            <p>100/300/100 liability only. If your car is worth less than $5,000 to $6,000, collision and comprehensive may cost more than they would ever pay out. Skip them but keep strong liability coverage.</p>

            <h3 className="font-semibold text-[#0A2A4F] mt-5 mb-2">High net worth or significant assets</h3>
            <p>Consider 250/500/100 liability or an umbrella policy on top of your auto coverage. The more assets you have, the more you have to lose in a lawsuit. Higher limits or an umbrella policy add meaningful protection at relatively low cost.</p>

            <h3 className="font-semibold text-[#0A2A4F] mt-5 mb-2">Young driver or high-risk profile</h3>
            <p>Start at the state minimum if budget is the constraint, but increase coverage as your rate improves. Never go below the state requirement, and prioritize strong liability limits even if you reduce other coverage.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Understanding your deductible</h2>
            <p>
              Your deductible is the amount you pay out of pocket before your insurance covers a collision or comprehensive claim. Common deductibles are $500 and $1,000.
            </p>
            <p className="mt-3">
              A higher deductible means a lower monthly premium, but more out-of-pocket cost if you file a claim. A lower deductible costs more monthly but reduces the financial shock of a claim. If you have a solid emergency fund, a $1,000 deductible is often the smarter financial trade-off.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">How to pick the right amount without overpaying</h2>
            <p>
              The goal is adequate protection at a price you can sustain. Start by knowing your state minimum and treating it as the floor, not the target. Then estimate your net worth, because your liability coverage should be at least equal to what someone could successfully sue you for. Finally, compare quotes at your chosen coverage level across multiple carriers. The same coverage can cost significantly different amounts depending on the carrier.
            </p>
          </section>

        </div>

        <div className="mt-14 bg-[#0A2A4F] rounded-2xl px-8 py-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">See what the right coverage costs you</h2>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            Compare personalized quotes at your chosen coverage level from top carriers. Free, no obligation, no spam calls.
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
