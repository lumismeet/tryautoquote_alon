import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "About TryAutoQuote | Who We Are and How We Work",
  description:
    "TryAutoQuote helps U.S. drivers understand car insurance and compare quotes. Learn who operates the site, how we make money, and our editorial standards.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About TryAutoQuote",
    description:
      "Who operates TryAutoQuote, how we make money, and how our editorial team creates and updates content.",
    url: "https://www.tryautoquote.com/about",
    siteName: "TryAutoQuote",
    type: "website",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: "https://www.tryautoquote.com/about",
  name: "About TryAutoQuote",
  about: { "@id": "https://www.tryautoquote.com/#organization" },
};

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">{title}</h2>
      <div className="text-[#0A2A4F]/75 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-[#0A2A4F]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <Navbar />
      <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-24 space-y-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About TryAutoQuote</h1>
          <p className="text-lg text-[#0A2A4F]/75 leading-relaxed">
            TryAutoQuote is a free resource that helps U.S. drivers understand car insurance and compare quotes.
            The site is operated by StarTech Media.
          </p>
        </div>

        <Section title="What we do">
          <p>
            We publish plain-English <Link href="/guides" className="text-[#2B5BA8] underline">guides</Link> and{" "}
            <Link href="/blogs" className="text-[#2B5BA8] underline">articles</Link> on coverage, costs, claims, and{" "}
            <Link href="/car-insurance" className="text-[#2B5BA8] underline">state insurance rules</Link>, and we offer a
            short quote tool that connects drivers with insurance providers. Our quote tool does not ask for your name,
            phone number, or email.
          </p>
        </Section>

        <Section title="How we make money">
          <p>
            TryAutoQuote is free for drivers. We may receive compensation from insurance companies, agencies, and other
            partners when you click a link or request a quote through our site. This compensation never influences our
            articles, which are written independently by our editorial team.
          </p>
          <p className="font-medium text-[#0A2A4F]">
            TryAutoQuote is not an insurance company or insurance agent, and we do not sell insurance policies. Quotes,
            rates, and coverage are provided by participating insurers and agents.
          </p>
        </Section>

        <Section id="editorial" title="Editorial standards">
          <p>
            Our articles are written and maintained by the TryAutoQuote Editorial Team. We base our content on primary
            sources such as state insurance departments, the National Association of Insurance Commissioners (NAIC), the
            Insurance Information Institute, and insurers&apos; published materials, and we cite our sources at the end of
            each article.
          </p>
          <p>
            We review and update articles regularly. Each article shows the date it was last updated. Our content is for
            general information only and is not insurance, legal, or financial advice.
          </p>
        </Section>

        <Section title="Corrections">
          <p>
            Found an error? Email{" "}
            <a href="mailto:info@tryautoquote.com" className="text-[#2B5BA8] underline">info@tryautoquote.com</a> and we
            will review it promptly.
          </p>
        </Section>

        <Section id="company" title="Company information">
          <p>
            TryAutoQuote is owned and operated by StarTech Media Ltd., a digital media company registered in Cyprus.
            StarTech Media builds and runs consumer information websites and works with advertising partners in the
            insurance industry. TryAutoQuote serves drivers in the United States.
          </p>
          <p>
            For questions about the site, partnerships, corrections, or privacy, email{" "}
            <a href="mailto:info@tryautoquote.com" className="text-[#2B5BA8] underline">info@tryautoquote.com</a> or use
            our <Link href="/contact" className="text-[#2B5BA8] underline">contact page</Link>. You can read how we handle
            data in our <Link href="/privacy-policy" className="text-[#2B5BA8] underline">privacy policy</Link> and the
            rules for using the site in our <Link href="/terms-of-use" className="text-[#2B5BA8] underline">terms of use</Link>.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            <a href="mailto:info@tryautoquote.com" className="text-[#2B5BA8] underline">info@tryautoquote.com</a>
          </p>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
