import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import BlogsList from "@/components/BlogsList";
import { getAllPosts } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Auto Insurance Blog | TryAutoQuote",
  description:
    "Real talk about auto insurance: conversations, comparisons, and advice to help you find the right coverage and save money.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Auto Insurance Blog | TryAutoQuote",
    description:
      "Real talk about auto insurance: conversations, comparisons, and advice to help you find the right coverage and save money.",
    url: "https://www.tryautoquote.com/blogs",
    siteName: "TryAutoQuote",
    type: "website",
  },
};

export default function BlogsIndex() {
  const posts = getAllPosts();

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

        <BlogsList posts={posts} />

      </main>

      <Footer />
    </div>
  );
}