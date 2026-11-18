"use client";

import Link from "next/link";
import { SITE } from "@/lib/tools";
import { useEffect, useMemo, useState } from "react";
import { track } from "@/lib/analytics";

// Deductible breakeven calculator for the 500-vs-1000-deductible post.
// Same math as the post: extra out-of-pocket per claim / yearly premium saving
// = claim-free years needed for the higher deductible to pay off.

export type ClaimPace = "rare" | "sometimes" | "often" | "frequent";
export const PACE_YEARS: Record<ClaimPace, number> = { rare: 10, sometimes: 7, often: 3, frequent: 1 };
const PACE_LABEL: Record<ClaimPace, string> = {
  rare: "Rarely (10+ years between claims)",
  sometimes: "Every 5 to 10 years",
  often: "Every 2 to 5 years",
  frequent: "Most years",
};

type Tone = "high" | "close" | "low";
const money = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;
const num = (s: string) => {
  const v = Number(s.replace(/[^0-9.]/g, ""));
  return Number.isFinite(v) ? v : 0;
};

export function evaluateDeductible(i: {
  lowDeductible: number; highDeductible: number; premiumLow: number; premiumHigh: number; pace: ClaimPace; canAfford: boolean;
}): { tone: Tone; title: string; body: string; saving: number; extra: number; breakeven: number | null } | null {
  const extra = i.highDeductible - i.lowDeductible;
  if (i.premiumLow <= 0 || i.premiumHigh <= 0 || extra <= 0) return null;
  const saving = i.premiumLow - i.premiumHigh;
  if (saving <= 0) {
    return { tone: "low", saving, extra, breakeven: null, title: "Keep the lower deductible",
      body: "The higher deductible doesn't lower your premium, so it only adds risk." };
  }
  const breakeven = extra / saving;
  const years = PACE_YEARS[i.pace];
  const be = breakeven.toFixed(1);
  if (!i.canAfford) {
    return { tone: "close", saving, extra, breakeven, title: "Stick with the lower deductible for now",
      body: `The higher deductible pays off after about ${be} claim-free years, but only if you could cover it on a bad day. Build that cushion first.` };
  }
  if (years >= breakeven * 1.2) {
    return { tone: "high", saving, extra, breakeven, title: "The higher deductible likely saves you money",
      body: `You'd need about ${be} claim-free years to come out ahead, and you claim less often than that.` };
  }
  if (years <= breakeven * 0.8) {
    return { tone: "low", saving, extra, breakeven, title: "Stick with the lower deductible",
      body: `You'd need about ${be} claim-free years to come out ahead, and you tend to claim more often than that.` };
  }
  return { tone: "close", saving, extra, breakeven, title: "It's a close call",
    body: `Breakeven is about ${be} claim-free years, close to how often you claim. Either choice is reasonable; pick the one you could afford on a bad day.` };
}

const TONE: Record<Tone, string> = {
  high: "border-[#2E8B57]/30 bg-[#2E8B57]/[0.06]",
  close: "border-[#C98A1B]/35 bg-[#C98A1B]/[0.07]",
  low: "border-[#2B5BA8]/30 bg-[#2B5BA8]/[0.06]",
};

export default function DeductibleCalculator({ embedded = false }: { embedded?: boolean } = {}) {
  const [lowD, setLowD] = useState("500");
  const [highD, setHighD] = useState("1000");
  const [pLow, setPLow] = useState("");
  const [pHigh, setPHigh] = useState("");
  const [pace, setPace] = useState<ClaimPace>("rare");
  const [canAfford, setCanAfford] = useState(true);
  const [tracked, setTracked] = useState(false);

  const r = useMemo(() => evaluateDeductible({
    lowDeductible: num(lowD), highDeductible: num(highD), premiumLow: num(pLow), premiumHigh: num(pHigh), pace, canAfford,
  }), [lowD, highD, pLow, pHigh, pace, canAfford]);

  useEffect(() => {
    if (r && !tracked) { setTracked(true); track("calculator_used", { calculator: "deductible_breakeven" }); }
  }, [r, tracked]);

  const field = "w-full rounded-xl border border-[#0A2A4F]/15 bg-white pl-8 pr-3 py-3 text-base text-[#0A2A4F] focus:outline-none focus:border-[#2B5BA8] focus:ring-2 focus:ring-[#2B5BA8]/15";
  // A plain function (not a nested component) so inputs keep focus while typing.
  const moneyField = (id: string, label: string, value: string, set: (v: string) => void, ph: string) => (
    <label htmlFor={id} className="block">
      <span className="block text-sm font-medium text-[#0A2A4F] mb-1.5">{label}</span>
      <span className="relative block">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0A2A4F]/70" aria-hidden="true">$</span>
        <input id={id} inputMode="numeric" autoComplete="off" placeholder={ph} value={value} onChange={(e) => set(e.target.value)} className={field} />
      </span>
    </label>
  );

  return (
    <section aria-labelledby="deductible-calc" className="mdx-tool not-prose my-10 rounded-2xl border border-[#0A2A4F]/10 bg-white px-5 py-6 md:px-7 md:py-7">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2B5BA8] mb-2">Calculator</p>
      <h2 id="deductible-calc" className="text-xl md:text-2xl font-bold text-[#0A2A4F] mb-2">Which deductible saves you more?</h2>
      <p className="text-sm text-[#0A2A4F]/65 leading-relaxed mb-6">
        Ask your insurer for the yearly price at both deductibles, then compare.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 sm:items-end">
        {moneyField("ded-low", "Lower deductible", lowD, setLowD, "500")}
        {moneyField("ded-high", "Higher deductible", highD, setHighD, "1,000")}
        {moneyField("prem-low", "Yearly premium with the lower deductible", pLow, setPLow, "1,450")}
        {moneyField("prem-high", "Yearly premium with the higher deductible", pHigh, setPHigh, "1,300")}
      </div>

      <label htmlFor="ded-pace" className="block mt-4">
        <span className="block text-sm font-medium text-[#0A2A4F] mb-1.5">How often do you file collision or comprehensive claims?</span>
        <select id="ded-pace" value={pace} onChange={(e) => setPace(e.target.value as ClaimPace)}
          className="w-full rounded-xl border border-[#0A2A4F]/15 bg-white px-3 py-3 text-base text-[#0A2A4F] focus:outline-none focus:border-[#2B5BA8]">
          {(Object.keys(PACE_LABEL) as ClaimPace[]).map((k) => <option key={k} value={k}>{PACE_LABEL[k]}</option>)}
        </select>
      </label>

      <label className="mt-4 inline-flex items-center gap-2.5 cursor-pointer text-sm text-[#0A2A4F]/80">
        <input type="checkbox" checked={canAfford} onChange={(e) => setCanAfford(e.target.checked)} className="h-4 w-4 accent-[#2B5BA8]" />
        I could pay the higher deductible from savings
      </label>

      <div aria-live="polite" className="mt-6">
        {r ? (
          <div className={`rounded-xl border px-5 py-5 ${TONE[r.tone]}`}>
            <p className="text-lg font-bold text-[#0A2A4F]">{r.title}</p>
            <p className="text-sm text-[#0A2A4F]/75 leading-relaxed mt-1.5">{r.body}</p>
            <dl className="grid grid-cols-3 gap-3 mt-5 text-center">
              <div className="rounded-lg bg-white/70 px-2 py-3">
                <dt className="text-[11px] text-[#0A2A4F]/70 leading-tight">You save per year</dt>
                <dd className="text-base md:text-lg font-bold text-[#0A2A4F] mt-1">{r.saving > 0 ? money(r.saving) : "$0"}</dd>
              </div>
              <div className="rounded-lg bg-white/70 px-2 py-3">
                <dt className="text-[11px] text-[#0A2A4F]/70 leading-tight">Extra you pay per claim</dt>
                <dd className="text-base md:text-lg font-bold text-[#0A2A4F] mt-1">{money(r.extra)}</dd>
              </div>
              <div className="rounded-lg bg-white/70 px-2 py-3">
                <dt className="text-[11px] text-[#0A2A4F]/70 leading-tight">Claim-free years to break even</dt>
                <dd className="text-base md:text-lg font-bold text-[#0A2A4F] mt-1">{r.breakeven ? r.breakeven.toFixed(1) : "n/a"}</dd>
              </div>
            </dl>
          </div>
        ) : (
          <p className="rounded-xl border border-dashed border-[#0A2A4F]/15 px-5 py-5 text-sm text-[#0A2A4F]/70">
            Enter the yearly premium at both deductibles to see which one wins.
          </p>
        )}
      </div>

      <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-xs text-[#0A2A4F]/70 leading-relaxed max-w-md">
          General guidance based on breakeven math, not insurance advice. The deductible applies per claim.
        </p>
        <Link href={embedded ? `${SITE}/quote/1_map?utm_source=embed&utm_medium=calculator&utm_campaign=deductible` : "/quote/1_map"} target={embedded ? "_blank" : undefined} rel={embedded ? "noopener" : undefined} data-location="calculator_deductible" className="shrink-0 text-center text-sm font-semibold text-white bg-gradient-to-r from-[#2B5BA8] to-[#38B6C9] rounded-full px-5 py-2.5 hover:opacity-90 transition">
          Compare prices for your coverage
        </Link>
      </div>
      {!embedded && (
        <p className="mt-4 text-right text-xs"><Link href="/tools#embed-deductible" className="text-[#2B5BA8] underline underline-offset-2">Add this calculator to your site</Link></p>
      )}
    </section>
  );
}
