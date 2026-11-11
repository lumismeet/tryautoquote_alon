import type { Metadata } from "next";
import Link from "next/link";
import { pageTitle } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { states } from "@/lib/states";
import { STATE_LAWS_VERIFIED } from "@/lib/states/verification";
import { METRICS, SOURCES, formatStat, getStateStats, type MetricId } from "@/lib/states/stats";

const BASE = "https://www.tryautoquote.com";
const PATH = "/car-insurance/laws-by-state";
const TITLE = "Car Insurance Laws by State: Minimums and Key Rules";
const DESCRIPTION =
  "Compare car insurance requirements in all 50 states and DC: minimum liability limits, no-fault rules, uninsured motorist and credit-pricing rules.";

export const metadata: Metadata = {
  title: pageTitle(TITLE),
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  // Hidden from search until the aggregated state data is verified (lib/states/verification.ts).
  robots: STATE_LAWS_VERIFIED ? undefined : { index: false, follow: true },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${BASE}${PATH}`, siteName: "TryAutoQuote", type: "article" },
};

const list = (names: string[]) =>
  names.length <= 1 ? names.join("") : `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;

export default function LawsByStatePage() {
  const rows = [...states].sort((a, b) => a.name.localeCompare(b.name));

  // Every summary below is derived from the same data as the state pages.
  const noFault = rows.filter((s) => s.faultSystem === "no-fault").map((s) => s.name);
  const umRequired = rows.filter((s) => s.umMandatory).map((s) => s.name);
  const creditBanned = rows.filter((s) => s.creditBanned).map((s) => s.name);
  const noMandate = rows.filter((s) => /no mandate/i.test(s.minDisplay)).map((s) => s.name);
  const requireCount = rows.length - noMandate.length;
  const isDC = (name: string) => /district of columbia|washington,? d\.?c/i.test(name);
  const stateCount = rows.filter((s) => !isDC(s.name)).length;
  // "12 states" or "18 states and DC", so DC is never counted as a state.
  const howMany = (names: string[]) => {
    const dc = names.some(isDC);
    const n = names.filter((x) => !isDC(x)).length;
    return dc ? `${n} ${n === 1 ? "state" : "states"} and DC` : `${n} ${n === 1 ? "state" : "states"}`;
  };

  // Sourced statistics appear as extra columns only once data exists.
  const metricCols = (Object.keys(METRICS) as MetricId[]).filter((m) => rows.some((s) => getStateStats(s.slug)[m]));

  const faqs = [
    {
      q: "Which states require car insurance?",
      a: noMandate.length
        ? `Every state except ${list(noMandate)}, plus DC, requires drivers to carry auto insurance or meet a minimum liability requirement. ${list(noMandate)} ${noMandate.length === 1 ? "does" : "do"} not mandate auto insurance, though drivers there are still financially responsible for damage they cause.`
        : `All ${stateCount} states and DC require drivers to carry auto insurance or meet a minimum liability requirement.`,
    },
    {
      q: "Which states are no-fault states?",
      a: `${howMany(noFault)} use a no-fault system: ${list(noFault)}. In a no-fault state, your own personal injury protection (PIP) pays your medical bills after an accident, whoever caused it.`,
    },
    {
      q: "Where is uninsured motorist coverage required?",
      a: `${howMany(umRequired)} require uninsured motorist coverage on every policy: ${list(umRequired)}. Elsewhere insurers must usually offer it, and you can decline it in writing.`,
    },
    {
      q: "Which states ban credit-based car insurance pricing?",
      a: `${list(creditBanned)} ${creditBanned.length === 1 ? "prohibits" : "prohibit or restrict"} insurers from using credit-based insurance scores to price auto policies. In other states, credit can be one of the factors in your rate.`,
    },
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Car insurance", item: `${BASE}/car-insurance` },
        { "@type": "ListItem", position: 3, name: "Laws by state", item: `${BASE}${PATH}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-[#0A2A4F]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-6 pt-10 pb-20 md:pt-14 md:pb-28 w-full">
        <nav aria-label="Breadcrumb" className="text-xs text-[#0A2A4F]/50 mb-8 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#2B5BA8] transition">Home</Link>
          <span>/</span>
          <Link href="/car-insurance" className="hover:text-[#2B5BA8] transition">Car insurance</Link>
          <span>/</span>
          <span className="text-[#0A2A4F]/70">Laws by state</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5 max-w-3xl">Car insurance laws by state</h1>
        <p className="text-[#0A2A4F]/70 leading-relaxed max-w-2xl mb-8">
          Every state sets its own rules for car insurance. This table compares the minimum liability limits,
          fault system, uninsured motorist rules and credit-based pricing rules in all {stateCount} states and DC.
          Select a state for the full details and the law behind each requirement.
        </p>

        <section aria-label="Quick answers" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {[
            { n: requireCount, label: "states and DC require car insurance" },
            { n: noFault.length, label: "use a no-fault system" },
            { n: umRequired.length, label: "require uninsured motorist coverage" },
            { n: creditBanned.length, label: "ban or restrict credit-based pricing" },
          ].map((c) => (
            <div key={c.label} className="rounded-2xl bg-white border border-[#0A2A4F]/8 px-5 py-5">
              <span className="block text-3xl font-bold">{c.n}</span>
              <span className="block text-sm text-[#0A2A4F]/60 mt-1">{c.label}</span>
            </div>
          ))}
        </section>

        <div className="overflow-x-auto rounded-2xl border border-[#0A2A4F]/10 bg-white mb-4">
          <table className="w-full min-w-[760px] text-sm text-left border-collapse">
            <caption className="sr-only">Car insurance requirements by state</caption>
            <thead className="bg-[#0A2A4F]/[0.04]">
              <tr>
                <th scope="col" className="sticky left-0 bg-[#F1F4F8] px-4 py-3 font-semibold">State</th>
                <th scope="col" className="px-4 py-3 font-semibold">Minimum liability</th>
                <th scope="col" className="px-4 py-3 font-semibold">Fault system</th>
                <th scope="col" className="px-4 py-3 font-semibold">Uninsured motorist</th>
                <th scope="col" className="px-4 py-3 font-semibold">Credit-based pricing</th>
                {metricCols.map((m) => (
                  <th key={m} scope="col" className="px-4 py-3 font-semibold">{METRICS[m].label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((s) => {
                const st = getStateStats(s.slug);
                return (
                  <tr key={s.slug} className="border-t border-[#0A2A4F]/[0.06]">
                    <th scope="row" className="sticky left-0 bg-white px-4 py-3 font-semibold">
                      <Link href={`/car-insurance/${s.slug}`} className="text-[#2B5BA8] hover:underline">{s.name}</Link>
                    </th>
                    <td className="px-4 py-3 text-[#0A2A4F]/80">{s.minDisplay}</td>
                    <td className="px-4 py-3 text-[#0A2A4F]/80">{s.faultSystem === "no-fault" ? "No-fault" : "At-fault"}</td>
                    <td className="px-4 py-3 text-[#0A2A4F]/80">{s.umMandatory ? "Required" : "Must be offered"}</td>
                    <td className="px-4 py-3 text-[#0A2A4F]/80">{s.creditBanned ? "Banned or restricted" : "Allowed"}</td>
                    {metricCols.map((m) => (
                      <td key={m} className="px-4 py-3 text-[#0A2A4F]/80">{st[m] ? formatStat(m, st[m]!.value) : "–"}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#0A2A4F]/50 mb-14 max-w-3xl">
          Liability limits are shown as bodily injury per person / per accident / property damage, in thousands of dollars.
          {metricCols.length > 0 &&
            ` Statistics: ${[...new Set(metricCols.flatMap((m) => METRICS[m].sources))].map((id) => SOURCES[id].name).join("; ")}.`}{" "}
          Laws change; check your state page and your state&rsquo;s insurance department before you buy.
        </p>

        <section className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Common questions</h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-lg font-semibold mb-2">{f.q}</h3>
                <p className="text-[#0A2A4F]/70 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
