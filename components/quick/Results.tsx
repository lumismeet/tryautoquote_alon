"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "@/context/FormContext";
import Navbar from "../Navbar";
import Footer from "../footer";
import { useZipGuard } from "./useZipGuard";
import { zipToState } from "@/lib/zipToState";
import { buildOfferUrl, matchingOffers, type Answers } from "@/lib/offers";

declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

function mediumFor(source: string): string {
  if (source.startsWith("/blogs")) return "blog";
  if (source.startsWith("/car-insurance")) return "state_page";
  if (source.startsWith("/guides")) return "guide";
  if (source === "/") return "home";
  return "other";
}

export default function Results() {
  useZipGuard();
  const { formData } = useForm();
  const [source, setSource] = useState("direct");

  useEffect(() => {
    try { setSource(sessionStorage.getItem("tq_source") || "direct"); } catch { /* ignore */ }
  }, []);

  const answers: Answers = useMemo(() => ({
    zip: formData.zipcode,
    state: zipToState(formData.zipcode),
    insured: formData.currentlyInsured,
    carrier: formData.currentInsurance,
    vehicles: formData.vehicleCount,
    homeowner: formData.homeowner,
    age: formData.ageRange,
  }), [formData]);

  const offers = matchingOffers(answers);

  // Once per results view: how many offers this visitor was shown.
  useEffect(() => {
    if (!formData.zipcode) return;
    track("results_view", { offers_count: offers.length, state: answers.state ?? "unknown" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // One unique click id per offer per results view (sub2 / reconciliation with GA)
  const clickIds = useMemo(
    () => Object.fromEntries(offers.map((o) => [o.id, crypto.randomUUID().replace(/-/g, "").slice(0, 20)])),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [offers.map((o) => o.id).join(",")]
  );
  const medium = source === "direct" ? "direct" : mediumFor(source);
  const campaign = source === "direct" ? "direct" : (source.replace(/^\/+|\/+$/g, "").replace(/\//g, "_") || "home");

  const summary = [
    answers.state && `${answers.state} ${answers.zip}`,
    answers.insured === "Yes" ? `Insured${answers.carrier ? ` (${answers.carrier})` : ""}` : answers.insured === "No" ? "Not currently insured" : null,
    answers.vehicles && `${answers.vehicles} vehicle${answers.vehicles === "1" ? "" : "s"}`,
    answers.homeowner === "Own" ? "Homeowner" : answers.homeowner === "Rent" ? "Renter" : null,
    answers.age && `Age ${answers.age}`,
  ].filter(Boolean) as string[];

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB]">
      <Navbar />
      <main className="flex-1 max-w-3xl w-full mx-auto px-5 pt-12 pb-20">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0A2A4F] mb-3 text-center">
          Compare car insurance rates{answers.state ? ` in ${answers.state}` : ""}
        </h1>
        <p className="text-center text-[#0A2A4F]/60 mb-6">
          Choose a provider below to see your options. Reviewing more than one quote is a good way to see how much you could save.
        </p>

        {summary.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-10 text-sm">
            {summary.map((s) => (
              <span key={s} className="bg-white border border-[#0A2A4F]/10 rounded-full px-3 py-1 text-[#0A2A4F]/70">{s}</span>
            ))}
            <Link href="/quote/1" className="text-[#2B5BA8] underline underline-offset-2 px-2 py-1">Edit</Link>
          </div>
        )}

        {offers.length > 0 ? (
          <ul className="space-y-4">
            {offers.map((offer, i) => {
              const clickId = clickIds[offer.id];
              const href = buildOfferUrl(offer, answers, {
                medium,
                campaign,
                content: `${offer.id}_pos${i + 1}`,
                clickId,
              });
              return (
                <li key={offer.id} className="bg-white rounded-2xl border border-[#0A2A4F]/10 shadow-sm p-6 flex flex-col sm:flex-row sm:items-center gap-5">
                  <div className="flex-1">
                    {offer.logo ? (
                      <h2 className="mb-4">
                        {/* Partner logo: unaltered, on white, with clear space of at least half its height */}
                        <span className="block bg-white py-3">
                          <Image src={offer.logo} alt={offer.name} width={200} height={28} className="h-7 w-auto" />
                        </span>
                      </h2>
                    ) : (
                      <h2 className="text-lg font-bold text-[#042C53]">{offer.name}</h2>
                    )}
                    <p className="text-[#0A2A4F]/70 mb-2">{offer.headline}</p>
                    <ul className="text-sm text-[#0A2A4F]/60 space-y-0.5">
                      {offer.bullets.map((b) => <li key={b}>✓ {b}</li>)}
                    </ul>
                    {offer.disclaimer && (
                      <p className="mt-3 text-xs text-[#0A2A4F]/50">{offer.disclaimer}</p>
                    )}
                  </div>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener sponsored"
                    onClick={() => window.gtag?.("event", "offer_click", { offer_id: offer.id, position: i + 1, source_page: source, click_id: clickId })}
                    className="text-center bg-[#2B5BA8] hover:bg-[#E8732A] transition text-white px-7 py-3 rounded-xl font-semibold shrink-0"
                  >
                    {offer.buttonLabel ?? "View Rates"}
                  </a>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="bg-white rounded-2xl border border-[#0A2A4F]/10 p-8 text-center">
            <p className="text-[#0A2A4F]/70 mb-4">
              We are updating our list of providers{answers.state ? ` in ${answers.state}` : ""}. In the meantime, our guides can help you understand your options.
            </p>
            <Link href="/guides" className="inline-block bg-[#2B5BA8] text-white px-6 py-3 rounded-xl font-semibold">Browse guides</Link>
          </div>
        )}

        <p className="mt-10 text-xs text-[#0A2A4F]/45 leading-relaxed">
          Advertising disclosure: TryAutoQuote is not an insurance company or agent. The providers listed are advertisers, and we may receive compensation when you click a link or request a quote. Rates, coverage, and eligibility are determined by each provider.
        </p>
      </main>
      <Footer />
    </div>
  );
}
