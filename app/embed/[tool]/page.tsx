import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DeductibleCalculator from "@/components/tools/DeductibleCalculator";
import DropCoverageCalculator from "@/components/tools/DropCoverageCalculator";
import { SITE, TOOLS } from "@/lib/tools";
import EmbedResize from "@/components/tools/EmbedResize";

// Embeddable calculator (shown inside an iframe on other sites). Kept out of
// search results; the original lives in its article and on /tools.
export const metadata: Metadata = { robots: { index: false, follow: true } };

export function generateStaticParams() {
  return TOOLS.map((t) => ({ tool: t.slug }));
}

export default async function EmbedTool({ params }: { params: Promise<{ tool: string }> }) {
  const { tool } = await params;
  const t = TOOLS.find((x) => x.slug === tool);
  if (!t) notFound();
  return (
    <main className="bg-transparent px-1">
      <EmbedResize slug={t.slug} />
      {t.slug === "deductible" ? <DeductibleCalculator embedded /> : <DropCoverageCalculator embedded />}
      <p className="text-center text-xs text-[#0A2A4F]/70 -mt-6 pb-2">
        Free calculator by{" "}
        <a href={`${SITE}/tools`} target="_blank" rel="noopener" className="font-semibold text-[#2B5BA8] underline">TryAutoQuote</a>
      </p>
    </main>
  );
}
