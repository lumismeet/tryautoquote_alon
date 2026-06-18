import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Does Getting an Auto Insurance Quote Affect Your Credit Score?",
  description:
    "Comparing auto insurance quotes does not hurt your credit score. Learn the difference between soft and hard credit inquiries and what insurers actually check.",
  alternates: { canonical: "/guides/does-getting-a-quote-affect-credit-score" },
  openGraph: {
    title: "Does Getting an Auto Insurance Quote Affect Your Credit Score?",
    description:
      "Comparing auto insurance quotes does not hurt your credit score. Learn the difference between soft and hard credit inquiries and what insurers actually check.",
    url: "https://tryautoquote.com/guides/does-getting-a-quote-affect-credit-score",
    siteName: "TryAutoQuote",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Does Getting an Auto Insurance Quote Affect Your Credit Score?",
  description:
    "Comparing auto insurance quotes does not hurt your credit score. Learn the difference between soft and hard credit inquiries and what insurers actually check.",
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
    "@id": "https://tryautoquote.com/guides/does-getting-a-quote-affect-credit-score",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://tryautoquote.com/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://tryautoquote.com/guides" },
    { "@type": "ListItem", position: 3, name: "Does Getting a Quote Affect Your Credit Score?", item: "https://tryautoquote.com/guides/does-getting-a-quote-affect-credit-score" },
  ],
};

export default function GuideQuoteAndCreditScore() {
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
          <span className="text-[#0A2A4F]/70">Quote and credit score</span>
        </nav>

        <div className="mb-10">
          <span className="inline-block text-xs font-semibold text-[#2B5BA8] bg-[#2B5BA8]/10 rounded-full px-3 py-1 mb-4">
            Credit and Quotes
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A2A4F] leading-tight mb-4">
            Does Getting an Auto Insurance Quote Affect Your Credit Score?
          </h1>
          <p className="text-[#0A2A4F]/60 text-sm">Updated June 17, 2026 &middot; 5 min read</p>
        </div>

        <div className="flex justify-center mb-10">
          <Image
            src="/ill_comp_blue.svg"
            alt="Comparing auto insurance quotes without affecting your credit score"
            width={260}
            height={260}
            className="w-48 h-48 md:w-64 md:h-64"
          />
        </div>

        <div className="bg-[#2B5BA8]/8 border-l-4 border-[#2B5BA8] rounded-r-xl px-6 py-5 mb-10">
          <p className="font-semibold text-[#0A2A4F] mb-1">The short answer</p>
          <p className="text-[#0A2A4F]/80 leading-relaxed">
            No. Comparing auto insurance quotes does not affect your credit score. Insurance quote checks are soft inquiries, which are invisible to lenders and have zero impact on your score.
          </p>
        </div>

        <div className="space-y-8 text-[#0A2A4F]/80 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Hard vs. soft credit inquiries</h2>
            <p>
              When any company looks at your credit report, it creates an inquiry. There are two types, and they work very differently.
            </p>
            <p className="mt-3">
              A <strong className="text-[#0A2A4F]">hard inquiry</strong> happens when you apply for credit, such as a mortgage, car loan, or credit card. Lenders use hard pulls to decide whether to extend credit to you, and they temporarily lower your score by a few points. Multiple hard inquiries in a short window can signal financial stress and compound the impact.
            </p>
            <p className="mt-3">
              A <strong className="text-[#0A2A4F]">soft inquiry</strong> happens when a company checks your credit for informational purposes rather than lending decisions. Soft pulls do not appear on your credit report in a way that lenders can see, and they have no impact on your score whatsoever. Background checks, pre-approval offers, and account reviews are all soft inquiries.
            </p>
            <p className="mt-3">
              Insurance quote checks are soft inquiries.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Why do insurers check your credit at all?</h2>
            <p>
              Most insurers use a version of your credit history called a credit-based insurance score to help predict the likelihood of you filing a claim. Studies have shown a statistical correlation between certain credit behaviors and claim frequency, which is why most states allow it.
            </p>
            <p className="mt-3">
              This check is always a soft pull at the quote stage. The insurer is not deciding whether to lend you money. They are estimating your risk profile, so there is no reason to use a hard inquiry.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">States where credit cannot be used</h2>
            <p>
              A handful of states prohibit insurers from using credit scores in pricing auto insurance. If you live in one of these states, credit is not a factor in your quote regardless:
            </p>
            <ul className="mt-3 space-y-1.5 list-disc list-inside text-[#0A2A4F]/75">
              <li>California</li>
              <li>Hawaii</li>
              <li>Massachusetts</li>
              <li>Michigan</li>
              <li>Oregon (limited use)</li>
            </ul>
            <p className="mt-3">
              In all other states, insurers may factor in your credit-based insurance score, but only through a soft inquiry that leaves no mark on your credit file.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">What actually determines your quote</h2>
            <p>
              Credit is only one input, and for many drivers it is not the dominant one. Your driving history carries the most weight, including any accidents, tickets, and DUI records from the past three to five years. Where you live matters significantly too, since urban areas with higher traffic and theft rates tend to produce higher premiums. The vehicle itself plays a role as well, including its make, model, year, safety ratings, and how expensive it is to repair. Beyond that, the coverage limits and deductibles you choose directly shape your premium, as does your age and years of experience behind the wheel.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">How many quotes should you compare?</h2>
            <p>
              Since comparing quotes has no credit impact, there is no reason to limit yourself. Shopping multiple carriers is the single most effective way to lower your premium. Rates for the same driver can vary by hundreds of dollars per year between carriers.
            </p>
            <p className="mt-3">
              Consumer Reports and industry studies consistently find that drivers who compare at least three carriers save an average of 20 to 40 percent compared to drivers who stick with their first quote or renew automatically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Common questions</h2>

            <h3 className="font-semibold text-[#0A2A4F] mt-5 mb-2">Will comparing quotes through TryAutoQuote affect my credit?</h3>
            <p>No. TryAutoQuote does not perform any credit check. Any soft pull that may occur comes from the carrier you choose to proceed with, not from using the comparison service.</p>

            <h3 className="font-semibold text-[#0A2A4F] mt-5 mb-2">Does buying a policy trigger a hard inquiry?</h3>
            <p>In most cases, no. Purchasing an auto insurance policy does not require a hard credit check. A soft pull may be performed when the policy is issued, but this still does not affect your score.</p>

            <h3 className="font-semibold text-[#0A2A4F] mt-5 mb-2">Can a bad credit score stop me from getting insurance?</h3>
            <p>Generally no. Most states require insurers to offer coverage regardless of credit score. A lower credit-based insurance score may result in a higher premium, but it typically does not lead to a denial.</p>
          </section>

        </div>

        <div className="mt-14 bg-[#0A2A4F] rounded-2xl px-8 py-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to compare rates?</h2>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            No credit impact, no spam calls. Enter your zip code and see personalized quotes from top carriers in minutes.
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
