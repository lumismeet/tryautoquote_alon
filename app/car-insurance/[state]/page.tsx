import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { states, getStateBySlug } from "@/lib/states";

type Props = { params: Promise<{ state: string }> };

export async function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: slug } = await params;
  const s = getStateBySlug(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/car-insurance/${s.slug}` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: `https://tryautoquote.com/car-insurance/${s.slug}`,
      siteName: "TryAutoQuote",
      type: "article",
    },
  };
}

const DEFAULT_NOT_COVERED = [
  "Damage to your own vehicle from a collision",
  "Your own medical expenses after an accident",
  "Losses caused by an uninsured or underinsured driver",
  "Theft, weather events, or vandalism to your vehicle",
];

export default async function StateCarInsurance({ params }: Props) {
  const { state: slug } = await params;
  const s = getStateBySlug(slug);
  if (!s) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Car Insurance in ${s.name}: State Requirements and Coverage Guide`,
    description: s.metaDescription,
    author: { "@type": "Organization", name: "TryAutoQuote", url: "https://tryautoquote.com" },
    publisher: {
      "@type": "Organization",
      name: "TryAutoQuote",
      url: "https://tryautoquote.com",
      logo: { "@type": "ImageObject", url: "https://tryautoquote.com/logo-test1.png" },
    },
    datePublished: s.datePublished,
    dateModified: s.datePublished,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://tryautoquote.com/car-insurance/${s.slug}` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://tryautoquote.com/" },
      { "@type": "ListItem", position: 2, name: "Car Insurance by State", item: "https://tryautoquote.com/car-insurance" },
      { "@type": "ListItem", position: 3, name: s.name, item: `https://tryautoquote.com/car-insurance/${s.slug}` },
    ],
  };

  const notCovered = s.notCovered ?? DEFAULT_NOT_COVERED;
  const isNoFault = s.faultSystem === "no-fault";

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-[#0A2A4F]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      <div className="relative w-full h-56 md:h-72 overflow-hidden">
        <Image src={s.image} alt={s.imageAlt} fill priority className="object-cover" />
      </div>

      <main className="flex-1 max-w-3xl mx-auto px-6 pt-10 pb-20 md:pt-14 md:pb-28">

        <nav className="text-xs text-[#0A2A4F]/50 mb-8 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#2B5BA8] transition">Home</Link>
          <span>/</span>
          <Link href="/car-insurance" className="hover:text-[#2B5BA8] transition">Car Insurance by State</Link>
          <span>/</span>
          <span className="text-[#0A2A4F]/70">{s.name}</span>
        </nav>

        <div className="mb-10">
          <span className="inline-block text-xs font-semibold text-[#2B5BA8] bg-[#2B5BA8]/10 rounded-full px-3 py-1 mb-4">
            {s.name}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A2A4F] leading-tight mb-4">
            Car Insurance in {s.name}
          </h1>
          <p className="text-[#0A2A4F]/60 text-sm">Updated {new Date(s.datePublished).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} &middot; 5 min read</p>
        </div>

        <div className="bg-[#2B5BA8]/8 border-l-4 border-[#2B5BA8] rounded-r-xl px-6 py-5 mb-10">
          <p className="font-semibold text-[#0A2A4F] mb-1">{s.name} minimum requirements at a glance</p>
          <p className="text-[#0A2A4F]/80 leading-relaxed">{s.callout}</p>
        </div>

        <div className="space-y-8 text-[#0A2A4F]/80 leading-relaxed">

          {/* State minimum requirements */}
          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">State minimum coverage requirements</h2>
            <p>Under {s.statute}, all {s.name} drivers must maintain the following minimum coverage:</p>
            <ul className="mt-3 space-y-1.5 list-disc list-inside text-[#0A2A4F]/75">
              {s.minCoverage.map((item, i) => (
                <li key={i}>
                  <strong className="text-[#0A2A4F]">{item.label}</strong> {item.amount}
                </li>
              ))}
            </ul>
            <p className="mt-3">{s.penaltyNote}</p>
          </section>

          {/* Fault system */}
          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">
              {isNoFault
                ? `How no-fault insurance works in ${s.name}`
                : `Is ${s.name} a no-fault state?`}
            </h2>
            {!isNoFault && (
              <p className="mb-3">
                No. {s.name} is an at-fault state.{" "}
              </p>
            )}
            <p>{s.faultExplain}</p>
          </section>

          {/* What's not covered */}
          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">
              {isNoFault
                ? "What the minimum coverage does not include"
                : "What the state minimum covers and does not cover"}
            </h2>
            <p>
              {isNoFault
                ? `${s.name}'s minimum requirements leave significant gaps. The mandatory coverage does not pay for:`
                : `${s.name}'s ${s.minDisplay} minimum covers only injuries and property damage you cause to other people. It does not cover:`}
            </p>
            <ul className="mt-3 space-y-1.5 list-disc list-inside text-[#0A2A4F]/75">
              {notCovered.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Extra state-specific sections */}
          {s.extraSections?.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}

          {/* Uninsured motorist */}
          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">
              {s.umMandatory
                ? "Uninsured motorist coverage is mandatory"
                : `Uninsured motorist coverage in ${s.name}`}
            </h2>
            <p>{s.umExplain}</p>
          </section>

          {/* Credit */}
          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">
              {s.creditBanned
                ? `Credit scores cannot be used in ${s.name}`
                : `How credit affects your rate in ${s.name}`}
            </h2>
            <p>{s.creditExplain}</p>
          </section>

          {/* Recommended */}
          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Recommended coverage levels</h2>
            <p>{s.recommendedExplain}</p>
          </section>

          {/* Closing state-specific sections */}
          {s.closingSections?.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}

        </div>

        <div className="mt-14 bg-[#0A2A4F] rounded-2xl px-8 py-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">{s.ctaHeading}</h2>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            Enter your {s.name} zip code and compare personalized rates from top carriers in minutes. Free, no obligation, no spam calls.
          </p>
          <Link
            href="/quote/1_map"
            className="inline-block bg-gradient-to-r from-[#2B5BA8] to-[#38B6C9] text-white font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition"
          >
            {s.ctaButton}
          </Link>
        </div>

      </main>
      <Footer />
    </div>
  );
}
