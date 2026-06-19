import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Auto Insurance Guides | TryAutoQuote",
  description:
    "Practical guides to help you understand auto insurance, compare coverage options, and find the best rate for your situation. Free, no obligation.",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "Auto Insurance Guides | TryAutoQuote",
    description:
      "Practical guides to help you understand auto insurance, compare coverage options, and find the best rate for your situation.",
    url: "https://tryautoquote.com/guides",
    siteName: "TryAutoQuote",
    type: "website",
  },
};

const guides = [
  {
    href: "/guides/does-getting-a-quote-affect-credit-score",
    tag: "Credit and Quotes",
    title: "Does Getting an Auto Insurance Quote Affect Your Credit Score?",
    description:
      "Comparing quotes is a soft inquiry with zero credit impact. Learn the difference between hard and soft pulls and what insurers actually check.",
    readTime: "5 mins read",
  },
  {
    href: "/guides/how-much-car-insurance-do-i-need",
    tag: "Coverage Basics",
    title: "How Much Car Insurance Do You Actually Need?",
    description:
      "State minimums leave most drivers underprotected. Learn what coverage types exist, what limits to carry, and how to avoid overpaying.",
    readTime: "5 mins read",
  },
  {
    href: "/guides/cheapest-car-insurance-for-young-drivers",
    tag: "Young Drivers",
    title: "Cheapest Car Insurance for Young Drivers",
    description:
      "Young drivers pay the highest rates but there are real ways to bring them down. Discounts, vehicle choices, and comparison tips that work.",
    readTime: "5 mins read",
  },
  {
    href: "/guides/liability-only-vs-full-coverage",
    tag: "Coverage Basics",
    title: "Liability Only vs Full Coverage Car Insurance",
    description:
      "Learn what each type covers, when the 10 percent rule applies, and how to decide based on your car's value and financial situation.",
    readTime: "5 mins read",
  },
  {
    href: "/guides/how-to-lower-your-car-insurance-premium",
    tag: "Saving Money",
    title: "How to Lower Your Car Insurance Premium",
    description:
      "Ten proven ways to reduce your premium without cutting the coverage you need. Compare, bundle, adjust, and save.",
    readTime: "5 mins read",
  },
  {
    href: "/guides/what-to-do-after-a-car-accident",
    tag: "After an Accident",
    title: "What to Do After a Car Accident: Step-by-Step",
    description:
      "A clear checklist of every step to take after an accident, from the scene to the claim, to protect yourself and your coverage.",
    readTime: "5 mins read",
  },
];

export default function GuidesIndex() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-[#0A2A4F]">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-6 pt-10 pb-20 md:pt-14 md:pb-28">

        <nav className="text-xs text-[#0A2A4F]/50 mb-8 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#2B5BA8] transition">Home</Link>
          <span>/</span>
          <span className="text-[#0A2A4F]/70">Guides</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A2A4F] leading-tight mb-4">
            Auto Insurance Guides
          </h1>
          <p className="text-[#0A2A4F]/60 max-w-xl leading-relaxed">
            Straightforward answers to the questions drivers actually have about coverage, cost, and how auto insurance works.
          </p>
        </div>

        <div className="space-y-5">
          {guides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group block bg-white border border-[#0A2A4F]/8 rounded-2xl p-7 hover:border-[#2B5BA8]/30 hover:shadow-md transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block text-xs font-semibold text-[#2B5BA8] bg-[#2B5BA8]/10 rounded-full px-3 py-1 mb-3">
                    {g.tag}
                  </span>
                  <h2 className="text-lg font-bold text-[#0A2A4F] group-hover:text-[#2B5BA8] transition mb-2 leading-snug">
                    {g.title}
                  </h2>
                  <p className="text-sm text-[#0A2A4F]/60 leading-relaxed">{g.description}</p>
                  <p className="mt-3 text-xs text-[#0A2A4F]/40">{g.readTime}</p>
                </div>
                <span className="text-[#0A2A4F]/25 group-hover:text-[#2B5BA8] transition text-2xl shrink-0 mt-1">
                  &#8594;
                </span>
              </div>
            </Link>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
