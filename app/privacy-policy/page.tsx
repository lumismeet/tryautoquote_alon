import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

const DESCRIPTION =
  "TryAutoQuote doesn't ask for your name, phone number or email, and we don't sell personal information. What we collect, how we use it, and your choices.";

export const metadata: Metadata = {
  title: "Privacy Policy | TryAutoQuote",
  description: DESCRIPTION,
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | TryAutoQuote",
    description: DESCRIPTION,
    url: "https://www.tryautoquote.com/privacy-policy",
    siteName: "TryAutoQuote",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tryautoquote.com/" },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://www.tryautoquote.com/privacy-policy" },
  ],
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-[#0A2A4F]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto px-6 pt-14 pb-24 w-full space-y-10">
        <div>
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-[#0A2A4F]/70">Last updated: November 15, 2026</p>
        </div>

        <div className="rounded-2xl bg-white border border-[#0A2A4F]/10 px-6 py-5">
          <p className="font-semibold mb-1">The short version</p>
          <p className="text-[#0A2A4F]/75 leading-relaxed">
            TryAutoQuote doesn&rsquo;t ask for your name, phone number or email, and we don&rsquo;t sell your personal information.
            Your quick-quote answers stay in your own browser. When you choose a provider, we pass along only what that provider needs to
            show you relevant options.
          </p>
        </div>

        <Section title="Who we are">
          <p>
            TryAutoQuote (tryautoquote.com) is operated by StarTech Media Ltd., registered in Cyprus. We are not an insurance company,
            agent or broker. Contact: <Mail />.
          </p>
        </Section>

        <Section title="What we collect">
          <p>
            <strong>1. Your answers to our quick questions.</strong> Your ZIP code, whether you&rsquo;re currently insured (and with which
            insurer, if you tell us), number of vehicles, whether you own or rent your home, and your age range. These answers are saved
            in your own browser so we can show matching options. They are not stored on our servers.
          </p>
          <p>
            <strong>2. Information collected automatically.</strong> We use Google Analytics, which uses cookies, to understand how the site
            is used: pages viewed, buttons and offers clicked, device type, approximate location (city or region level), and the site that
            referred you. Our hosting provider (Vercel) keeps standard server logs, such as IP address and browser type, to operate and
            secure the site.
          </p>
          <p>
            <strong>3. Information you send us.</strong> If you email us, we receive your email address and whatever you include in your
            message.
          </p>
        </Section>

        <Section title="How we use it">
          <ul className="list-disc pl-6 space-y-1.5">
            <li>To show you car insurance options that match your answers.</li>
            <li>To measure and improve the site and its content.</li>
            <li>To keep the site secure and working properly.</li>
            <li>To reply to you if you contact us.</li>
          </ul>
        </Section>

        <Section title="When we share information">
          <p>
            <strong>With the provider you choose.</strong> When you click a provider&rsquo;s offer, you leave our site for theirs. We pass a
            reference ID and the page you came from. For some providers, we also pass a summary of your quick-question answers (state,
            insured status and insurer, vehicles, homeowner or renter, and age range) so they can show you relevant options. Anything you
            enter on a provider&rsquo;s site is governed by that provider&rsquo;s privacy policy, not ours.
          </p>
          <p>
            <strong>With service providers</strong> that process data on our behalf: Google (analytics) and Vercel (hosting).
          </p>
          <p><strong>When required by law,</strong> or to protect our rights and users.</p>
          <p>
            <strong>How we&rsquo;re paid:</strong> providers listed on our site may pay us when you click their offer or complete their form.
            This does not change what you pay.
          </p>
        </Section>

        <Section title="We don't sell your personal information">
          <p>We do not sell your personal information, and we don&rsquo;t use it for targeted advertising.</p>
        </Section>

        <Section title="Cookies">
          <p>
            Google Analytics sets cookies to measure site usage. You can block or delete cookies in your browser settings, or use
            Google&rsquo;s Analytics opt-out browser add-on. The site works without analytics cookies.
          </p>
        </Section>

        <Section title="Your choices and rights">
          <ul className="list-disc pl-6 space-y-1.5">
            <li><strong>Clear your answers</strong> anytime by clearing your browser&rsquo;s site data for tryautoquote.com.</li>
            <li>
              <strong>Ask us</strong> about the information we hold, or ask us to delete it, at <Mail />. Because we don&rsquo;t collect
              names, phone numbers or emails through the site, we usually hold little or nothing that identifies you.
            </li>
            <li>
              <strong>Residents of California and other states with privacy laws</strong> may have additional rights, such as the right to
              know, delete or correct personal information. Contact us and we&rsquo;ll respond as required by law.
            </li>
          </ul>
        </Section>

        <Section title="How long we keep it">
          <p>
            Analytics data is kept for a limited period under our analytics settings. Emails are kept as long as needed to respond and keep
            reasonable records.
          </p>
        </Section>

        <Section title="Security">
          <p>We use reasonable measures to protect information, but no website or transmission is completely secure.</p>
        </Section>

        <Section title="Children">
          <p>Our site is not directed to anyone under 18, and we don&rsquo;t knowingly collect information from children.</p>
        </Section>

        <Section title="International visitors">
          <p>We&rsquo;re based in Cyprus, and our service providers may process data in the United States and other countries.</p>
        </Section>

        <Section title="Changes">
          <p>If we update this policy, we&rsquo;ll post the new version here with a new date.</p>
        </Section>

        <Section title="Contact">
          <p>StarTech Media Ltd. (TryAutoQuote) · <Mail /></p>
          <p className="text-sm text-[#0A2A4F]/70">
            See also our <Link href="/terms-of-use" className="text-[#2B5BA8] underline">Terms of Use</Link> and{" "}
            <Link href="/editorial-policy" className="text-[#2B5BA8] underline">Editorial Policy</Link>.
          </p>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

function Mail() {
  return <a href="mailto:info@tryautoquote.com" className="text-[#2B5BA8] underline">info@tryautoquote.com</a>;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="space-y-3 text-[#0A2A4F]/75 leading-relaxed">{children}</div>
    </section>
  );
}
