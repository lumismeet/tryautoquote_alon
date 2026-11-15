import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

const DESCRIPTION =
  "How TryAutoQuote researches, writes, reviews and updates its car insurance content, and how we keep our articles independent from advertisers.";

export const metadata: Metadata = {
  title: "Editorial Policy | TryAutoQuote",
  description: DESCRIPTION,
  alternates: { canonical: "/editorial-policy" },
  openGraph: { title: "Editorial Policy | TryAutoQuote", description: DESCRIPTION, url: "https://www.tryautoquote.com/editorial-policy", siteName: "TryAutoQuote", type: "website" },
};

export default function EditorialPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-[#0A2A4F]">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-6 pt-14 pb-24 w-full space-y-10">
        <div>
          <h1 className="text-3xl font-bold mb-2">Editorial Policy</h1>
          <p className="text-sm text-[#0A2A4F]/70">Last updated: November 15, 2026</p>
        </div>

        <Section title="What we're here to do">
          <p>
            TryAutoQuote explains car insurance in plain English, so drivers can understand their options and make their own decisions.
            We aim to answer the real question first, then give the detail behind it.
          </p>
        </Section>

        <Section title="How we create content">
          <ul className="list-disc pl-6 space-y-1.5">
            <li>We research each topic using authoritative sources, such as state insurance departments, the National Association of Insurance Commissioners (NAIC) and the Insurance Information Institute.</li>
            <li>Articles are created and maintained by the TryAutoQuote Editorial Team.</li>
            <li>Where rules differ by state, we say so rather than give one answer for everyone.</li>
          </ul>
        </Section>

        <Section title="Sources">
          <p>We list the sources we relied on at the end of our articles, so you can check them yourself.</p>
        </Section>

        <Section title="Accuracy, updates and corrections">
          <p>
            Each article shows when it was published and, if it changed meaningfully, when it was last updated. We review content when
            rules or prices change. If you spot an error, email{" "}
            <a href="mailto:info@tryautoquote.com" className="text-[#2B5BA8] underline">info@tryautoquote.com</a> and we&rsquo;ll look into it.
          </p>
        </Section>

        <Section title="Independence from advertisers">
          <p>
            TryAutoQuote is supported by advertising. Providers that appear in our comparison tools may pay us when you click their offer or
            complete their form. That compensation can affect which offers appear and where they appear. It does not affect what we write
            in our articles: advertisers don&rsquo;t write, review or approve our articles.
          </p>
        </Section>

        <Section title="Not advice">
          <p>
            Our content is general information, not insurance, legal or financial advice. TryAutoQuote is not an insurance company, agent
            or broker. Check details with your insurer or your state&rsquo;s insurance department before making a decision.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about our content: <a href="mailto:info@tryautoquote.com" className="text-[#2B5BA8] underline">info@tryautoquote.com</a>.
            See also our <Link href="/about" className="text-[#2B5BA8] underline">About</Link> and{" "}
            <Link href="/privacy-policy" className="text-[#2B5BA8] underline">Privacy Policy</Link> pages.
          </p>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="space-y-3 text-[#0A2A4F]/75 leading-relaxed">{children}</div>
    </section>
  );
}
