"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

// "Should you drop full coverage?" calculator for the when-to-drop-full-coverage
// post. Applies the post's own rules: the 10% rule, the deductible adjustment,
// the lender requirement and the savings safety net. General guidance only.

type Verdict = { tone: "keep" | "close" | "drop" | "required"; title: string; body: string };

const money = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;
const num = (s: string) => {
  const v = Number(s.replace(/[^0-9.]/g, ""));
  return Number.isFinite(v) ? v : 0;
};

export function evaluate(input: {
  carValue: number;
  annualPremium: number;
  deductible: number;
  financed: boolean;
  canReplace: boolean;
}): { verdict: Verdict; maxPayout: number; pct: number; years: number } | null {
  const { carValue, annualPremium, deductible, financed, canReplace } = input;
  if (carValue <= 0 || annualPremium <= 0) return null;
  const maxPayout = Math.max(0, carValue - deductible);
  const pct = (annualPremium / carValue) * 100;
  const years = maxPayout > 0 ? maxPayout / annualPremium : 0;

  let verdict: Verdict;
  if (financed) {
    verdict = {
      tone: "required",
      title: "Keep it: your lender requires it",
      body: "Financed and leased cars almost always must carry collision and comprehensive until the loan or lease ends.",
    };
  } else if (maxPayout === 0) {
    verdict = {
      tone: "drop",
      title: "Consider dropping it",
      body: "Your deductible is as high as the car's value, so a total loss would pay you nothing.",
    };
  } else if (pct > 10) {
    verdict = canReplace
      ? {
          tone: "drop",
          title: "Consider dropping it",
          body: `You pay ${pct.toFixed(1)}% of the car's value each year, above the 10% rule. You'd pay the most the coverage could ever return in about ${years.toFixed(1)} years of premiums.`,
        }
      : {
          tone: "close",
          title: "Over the 10% line, but be careful",
          body: `You pay ${pct.toFixed(1)}% of the car's value each year. Dropping coverage only makes sense if you could replace the car yourself, so keep it until you could.`,
        };
  } else if (pct >= 8) {
    verdict = {
      tone: "close",
      title: "Close to the line",
      body: `You pay ${pct.toFixed(1)}% of the car's value each year, just under the 10% rule. Re-check at renewal, since the car's value keeps falling.`,
    };
  } else {
    verdict = {
      tone: "keep",
      title: "Keep it for now",
      body: `You pay ${pct.toFixed(1)}% of the car's value each year, well under the 10% rule. The coverage can still pay out far more than it costs each year.`,
    };
  }
  return { verdict, maxPayout, pct, years };
}

const TONE: Record<Verdict["tone"], string> = {
  keep: "border-[#2E8B57]/30 bg-[#2E8B57]/[0.06]",
  close: "border-[#C98A1B]/35 bg-[#C98A1B]/[0.07]",
  drop: "border-[#2B5BA8]/30 bg-[#2B5BA8]/[0.06]",
  required: "border-[#0A2A4F]/20 bg-[#0A2A4F]/[0.04]",
};

export default function DropCoverageCalculator() {
  const [carValue, setCarValue] = useState("");
  const [premium, setPremium] = useState("");
  const [deductible, setDeductible] = useState("500");
  const [financed, setFinanced] = useState(false);
  const [canReplace, setCanReplace] = useState(true);
  const [tracked, setTracked] = useState(false);

  const result = useMemo(
    () => evaluate({ carValue: num(carValue), annualPremium: num(premium), deductible: num(deductible), financed, canReplace }),
    [carValue, premium, deductible, financed, canReplace]
  );

  // Count one use per page view, the first time a result appears.
  useEffect(() => {
    if (result && !tracked) {
      setTracked(true);
      window.gtag?.("event", "calculator_used", { calculator: "drop_full_coverage" });
    }
  }, [result, tracked]);

  const field = "w-full rounded-xl border border-[#0A2A4F]/15 bg-white pl-8 pr-3 py-3 text-base text-[#0A2A4F] focus:outline-none focus:border-[#2B5BA8] focus:ring-2 focus:ring-[#2B5BA8]/15";

  return (
    <section aria-labelledby="calc-title" className="not-prose my-10 rounded-2xl border border-[#0A2A4F]/10 bg-white px-5 py-6 md:px-7 md:py-7">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2B5BA8] mb-2">Calculator</p>
      <h2 id="calc-title" className="text-xl md:text-2xl font-bold text-[#0A2A4F] mb-2">Should you drop full coverage?</h2>
      <p className="text-sm text-[#0A2A4F]/65 leading-relaxed mb-6">
        Use your declarations page for the premium. For the car&rsquo;s value, use a private-party estimate from a pricing guide.
      </p>

      <div className="grid gap-4 sm:grid-cols-3 sm:items-end">
        {[
          { id: "car-value", label: "Car's current value", value: carValue, set: setCarValue, ph: "6,000" },
          { id: "premium", label: "Collision + comprehensive, per year", value: premium, set: setPremium, ph: "650" },
          { id: "deductible", label: "Your deductible", value: deductible, set: setDeductible, ph: "500" },
        ].map((f) => (
          <label key={f.id} htmlFor={f.id} className="block">
            <span className="block text-sm font-medium text-[#0A2A4F] mb-1.5">{f.label}</span>
            <span className="relative block">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0A2A4F]/45" aria-hidden="true">$</span>
              <input id={f.id} inputMode="numeric" autoComplete="off" placeholder={f.ph} value={f.value}
                onChange={(e) => f.set(e.target.value)} className={field} />
            </span>
          </label>
        ))}
      </div>

      <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-[#0A2A4F]/80">
        <label className="inline-flex items-center gap-2.5 cursor-pointer">
          <input type="checkbox" checked={financed} onChange={(e) => setFinanced(e.target.checked)} className="h-4 w-4 accent-[#2B5BA8]" />
          The car is financed or leased
        </label>
        <label className="inline-flex items-center gap-2.5 cursor-pointer">
          <input type="checkbox" checked={canReplace} onChange={(e) => setCanReplace(e.target.checked)} className="h-4 w-4 accent-[#2B5BA8]" />
          I could replace the car from savings
        </label>
      </div>

      <div aria-live="polite" className="mt-6">
        {result ? (
          <div className={`rounded-xl border px-5 py-5 ${TONE[result.verdict.tone]}`}>
            <p className="text-lg font-bold text-[#0A2A4F]">{result.verdict.title}</p>
            <p className="text-sm text-[#0A2A4F]/75 leading-relaxed mt-1.5">{result.verdict.body}</p>
            <dl className="grid grid-cols-3 gap-3 mt-5 text-center">
              <div className="rounded-lg bg-white/70 px-2 py-3">
                <dt className="text-[11px] text-[#0A2A4F]/55 leading-tight">Most it could pay</dt>
                <dd className="text-base md:text-lg font-bold text-[#0A2A4F] mt-1">{money(result.maxPayout)}</dd>
              </div>
              <div className="rounded-lg bg-white/70 px-2 py-3">
                <dt className="text-[11px] text-[#0A2A4F]/55 leading-tight">Cost vs. car value</dt>
                <dd className="text-base md:text-lg font-bold text-[#0A2A4F] mt-1">{result.pct.toFixed(1)}%</dd>
              </div>
              <div className="rounded-lg bg-white/70 px-2 py-3">
                <dt className="text-[11px] text-[#0A2A4F]/55 leading-tight">Years of premiums to match it</dt>
                <dd className="text-base md:text-lg font-bold text-[#0A2A4F] mt-1">{result.years > 0 ? result.years.toFixed(1) : "n/a"}</dd>
              </div>
            </dl>
          </div>
        ) : (
          <p className="rounded-xl border border-dashed border-[#0A2A4F]/15 px-5 py-5 text-sm text-[#0A2A4F]/55">
            Enter the car&rsquo;s value and what you pay for collision and comprehensive to see the result.
          </p>
        )}
      </div>

      <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-xs text-[#0A2A4F]/50 leading-relaxed max-w-md">
          General guidance based on the 10% rule, not insurance advice. Your insurer&rsquo;s actual cash value may differ from pricing guides.
        </p>
        <Link href="/quote/1_map" data-location="calculator_drop_coverage" className="shrink-0 text-center text-sm font-semibold text-white bg-gradient-to-r from-[#2B5BA8] to-[#38B6C9] rounded-full px-5 py-2.5 hover:opacity-90 transition">
          Compare prices for your coverage
        </Link>
      </div>
    </section>
  );
}
