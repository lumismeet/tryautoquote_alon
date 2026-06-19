import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Auto Insurance Blog | TryAutoQuote",
  description:
    "Real talk about auto insurance: conversations, comparisons, and advice to help you find the right coverage and save money.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Auto Insurance Blog | TryAutoQuote",
    description:
      "Real talk about auto insurance: conversations, comparisons, and advice to help you find the right coverage and save money.",
    url: "https://tryautoquote.com/blogs",
    siteName: "TryAutoQuote",
    type: "website",
  },
};

const posts = [
  {
    href: "/blogs/how-to-compare-auto-insurance",
    tag: "Expert Advice",
    title: "A Real Conversation About Auto Insurance: What an Agent Actually Tells Customers",
    description:
      "We sat down with a licensed insurance agent and listened in as she walked a first-time shopper through everything: coverage types, how to compare quotes, and the mistakes most drivers make.",
    readTime: "7 min read",
    date: "June 19, 2026",
  },
  {
    href: "/blogs/common-mistakes-when-filing-a-claim",
    tag: "Claims",
    title: "Common Mistakes People Make When Filing an Auto Insurance Claim",
    description:
      "Most claim mistakes are well-meaning, not dishonest. Here are the ones that quietly cost people money and how to avoid them.",
    readTime: "7 min read",
    date: "June 19, 2026",
  },
  {
    href: "/blogs/when-to-drop-full-coverage",
    tag: "Coverage Decisions",
    title: "When to Drop Full Coverage on an Older Car",
    description:
      "Collision and comprehensive coverage make sense at some point in a car's life and stop making sense at another. Here is how to figure out where you are.",
    readTime: "8 mins read",
    date: "June 19, 2026",
  },
  {
    href: "/blogs/how-zip-code-affects-your-insurance-rate",
    tag: "Rates and Pricing",
    title: "How Your Zip Code Affects Your Car Insurance Rate More Than Almost Anything Else",
    description:
      "Where you live can move your premium by hundreds of dollars a year, sometimes more than your driving record does. Here is why, and what you can actually do about it.",
    readTime: "8 mins read",
    date: "June 19, 2026",
  },
];

export default function BlogsIndex() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-[#0A2A4F]">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-6 pt-10 pb-20 md:pt-14 md:pb-28 w-full">

        <nav className="text-xs text-[#0A2A4F]/50 mb-8 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#2B5BA8] transition">Home</Link>
          <span>/</span>
          <span className="text-[#0A2A4F]/70">Blogs</span>
        </nav>

        <div className="mb-12">
          <span className="inline-block text-xs font-semibold text-[#2B5BA8] bg-[#2B5BA8]/10 rounded-full px-3 py-1 mb-4">
            TryAutoQuote Blog
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A2A4F] leading-tight mb-4">
            Real Talk on Auto Insurance
          </h1>
          <p className="text-[#0A2A4F]/60 max-w-xl leading-relaxed">
            Conversations, comparisons, and no-nonsense advice to help you understand your coverage and find the best rate available to you.
          </p>
        </div>

        <div className="space-y-5">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group block bg-white border border-[#0A2A4F]/8 rounded-2xl p-7 hover:border-[#2B5BA8]/30 hover:shadow-md transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <span className="inline-block text-xs font-semibold text-[#2B5BA8] bg-[#2B5BA8]/10 rounded-full px-3 py-1 mb-3">
                    {post.tag}
                  </span>
                  <h2 className="text-lg font-bold text-[#0A2A4F] group-hover:text-[#2B5BA8] transition mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#0A2A4F]/60 leading-relaxed">{post.description}</p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-[#0A2A4F]/40">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
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
