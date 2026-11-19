"use client";

import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { HUBS, hubHref } from "@/lib/hubs";
import { STATE_LAWS_VERIFIED, LAWS_BY_STATE_PATH } from "@/lib/states/verification";

import { STATE_LIST } from "@/lib/state-list";

const inter = Inter({ subsets: ["latin"] });

// "Car Insurance" menu, organized like the big comparison sites:
// Compare / By State / By Topic (add "By Company" once review pages exist).
const STATES_OVERVIEW = STATE_LAWS_VERIFIED ? LAWS_BY_STATE_PATH : "/car-insurance#states";
const TOP_STATE_SLUGS = ["california","texas","florida","new-york","pennsylvania","illinois","ohio","georgia","north-carolina","michigan"];
const TOP_STATES = TOP_STATE_SLUGS.map((slug) => STATE_LIST.find((s) => s.slug === slug)!).filter(Boolean);
const TOPIC_EXTRA = [
  { label: "Guides", href: "/guides" },
  { label: "All articles", href: "/blogs" },
];
const TOP_LINKS = [
  { label: "Tools", href: "/tools" },
  { label: "About", href: "/about" },
];

type NavbarProps = { onQuoteClick?: () => void };

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isQuotePage = pathname.startsWith("/quote");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const learnRef = useRef<HTMLLIElement>(null);

  const learnActive =
    pathname.startsWith("/car-insurance") || pathname.startsWith("/blogs") || pathname.startsWith("/guides");

  // Close menus on navigation, outside click and Escape.
  useEffect(() => { setLearnOpen(false); setMobileOpen(false); }, [pathname]);
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (learnRef.current && !learnRef.current.contains(e.target as Node)) setLearnOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setLearnOpen(false); setMobileOpen(false); } };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, []);

  const handleQuote = () => {
    setMobileOpen(false);
    if (onQuoteClick) onQuoteClick();
    else if (isQuotePage) window.dispatchEvent(new CustomEvent("highlight-quote-input"));
    else router.push("/quote/1_map");
  };

  const linkCls = (active: boolean) =>
    `text-sm font-medium transition rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2B5BA8] hover:text-[#2B5BA8] ${active ? "text-[#2B5BA8]" : "text-[#0A2A4F]/75"}`;

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#F4F7FB]/90 backdrop-blur border-b border-[#0A2A4F]/5">
        <nav aria-label="Main" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-16 md:h-[72px] flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-0 shrink-0">
            <Image src="/LOGO-no-bg.png" alt="TryAutoQuote logo" width={68} height={68} className="h-10 w-auto object-contain" />
            <span className={`${inter.className} text-xl font-extrabold tracking-tight text-[#0A2A4F]`}>
              TryAuto<span className="text-[#38B6C9]">Quote</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-8 mx-auto">
            {/* Not "relative": the panel centers on the full-width header so it always fits the screen. */}
            <li
              ref={learnRef}
              onMouseEnter={() => setLearnOpen(true)}
              onMouseLeave={() => setLearnOpen(false)}
            >
              <button
                type="button"
                aria-expanded={learnOpen}
                aria-controls="car-menu"
                onClick={() => setLearnOpen((v) => !v)}
                className={`${linkCls(learnActive)} inline-flex items-center gap-1 cursor-pointer`}
              >
                Car Insurance
                <ChevronDown className={`w-4 h-4 transition-transform ${learnOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>

              {/* Always in the DOM so crawlers see every link; shown on hover, click or focus. */}
              <div
                id="car-menu"
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[min(880px,calc(100vw-2rem))] transition ${learnOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"}`}
              >
                <div className="rounded-2xl bg-white shadow-xl border border-[#0A2A4F]/8 p-5 max-h-[75vh] overflow-y-auto">
                  <div className="grid grid-cols-[1fr_1.6fr_1.3fr] gap-6">
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-[#0A2A4F]/70 mb-2 px-2">Compare</span>
                      <Link href="/quote/1_map" className="block rounded-lg px-2 py-1.5 text-sm text-[#0A2A4F]/85 hover:bg-[#0A2A4F]/[0.04] hover:text-[#2B5BA8] font-semibold text-[#2B5BA8]">Compare quotes</Link>
                      <Link href="/car-insurance" className="block rounded-lg px-2 py-1.5 text-sm text-[#0A2A4F]/85 hover:bg-[#0A2A4F]/[0.04] hover:text-[#2B5BA8]">Car insurance, explained</Link>
                      <Link href="/tools" className="block rounded-lg px-2 py-1.5 text-sm text-[#0A2A4F]/85 hover:bg-[#0A2A4F]/[0.04] hover:text-[#2B5BA8]">Calculators</Link>
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-[#0A2A4F]/70 mb-2 px-2">By State</span>
                      <div className="grid grid-cols-2 gap-x-2">
                        {TOP_STATES.map((st) => (
                          <Link key={st.slug} href={`/car-insurance/${st.slug}`} className="block rounded-lg px-2 py-1.5 text-sm text-[#0A2A4F]/85 hover:bg-[#0A2A4F]/[0.04] hover:text-[#2B5BA8]">{st.name}</Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-[#0A2A4F]/70 mb-2 px-2">By Topic</span>
                      {HUBS.map((h) => (
                        <Link key={h.slug} href={hubHref(h.slug)} className="block rounded-lg px-2 py-1.5 text-sm text-[#0A2A4F]/85 hover:bg-[#0A2A4F]/[0.04] hover:text-[#2B5BA8]">{h.name}</Link>
                      ))}
                      {TOPIC_EXTRA.map((l) => (
                        <Link key={l.href} href={l.href} className="block rounded-lg px-2 py-1.5 text-sm text-[#0A2A4F]/85 hover:bg-[#0A2A4F]/[0.04] hover:text-[#2B5BA8]">{l.label}</Link>
                      ))}
                    </div>
                  </div>
                  <details className="group mt-4 border-t border-[#0A2A4F]/8 pt-3">
                    <summary className="flex items-center gap-1.5 px-2 text-sm font-semibold text-[#2B5BA8] cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                      All 51 states <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <div className="grid grid-cols-4 lg:grid-cols-5 gap-x-2 mt-2">
                      {STATE_LIST.map((st) => (
                        <Link key={st.slug} href={`/car-insurance/${st.slug}`} className="block rounded-lg px-2 py-1.5 text-sm text-[#0A2A4F]/85 hover:bg-[#0A2A4F]/[0.04] hover:text-[#2B5BA8]">{st.name}</Link>
                      ))}
                    </div>
                    <Link href={STATES_OVERVIEW} className="inline-block mt-2 px-2 text-xs font-semibold text-[#2B5BA8] hover:underline">How states differ</Link>
                  </details>
                </div>
              </div>
            </li>

            {TOP_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkCls(pathname.startsWith(l.href))}>{l.label}</Link>
              </li>
            ))}
          </ul>

          <button
            onClick={handleQuote}
            data-track="cta"
            data-location="nav_desktop"
            className="hidden md:inline-flex bg-gradient-to-r from-[#2B5BA8] to-[#38B6C9] hover:opacity-90 transition text-white text-sm font-semibold px-7 py-2.5 rounded-full cursor-pointer"
          >
            Compare quotes
          </button>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 text-[#0A2A4F] rounded"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        <div id="mobile-menu" className={`md:hidden border-t border-[#0A2A4F]/10 bg-white px-6 py-4 max-h-[calc(100dvh-4rem)] overflow-y-auto ${mobileOpen ? "" : "hidden"}`}>
          {/* Same structure as desktop: Car Insurance (Compare / By State / By Topic), then Tools and About. */}
          <details className="group border-b border-[#0A2A4F]/8">
            <summary className="flex items-center justify-between py-3.5 text-base font-semibold text-[#0A2A4F] cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              Car Insurance
              <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <div className="pb-3">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#0A2A4F]/70 mt-3 mb-1">Compare</span>
              <Link href="/car-insurance" className="block py-2 text-[15px] text-[#0A2A4F]/85">Car insurance, explained</Link>
              <Link href="/tools" className="block py-2 text-[15px] text-[#0A2A4F]/85">Calculators</Link>
              <span className="block text-xs font-bold uppercase tracking-wider text-[#0A2A4F]/70 mt-3 mb-1">By State</span>
              <div className="grid grid-cols-2 gap-x-4">
                {TOP_STATES.map((st) => (
                  <Link key={st.slug} href={`/car-insurance/${st.slug}`} className="block py-2 text-[15px] text-[#0A2A4F]/85">{st.name}</Link>
                ))}
              </div>
              <details className="group/all">
                <summary className="flex items-center gap-1.5 py-2 text-[15px] font-semibold text-[#2B5BA8] cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  All 51 states <ChevronDown className="w-4 h-4 transition-transform group-open/all:rotate-180" aria-hidden="true" />
                </summary>
                <div className="grid grid-cols-2 gap-x-4">
                  {STATE_LIST.map((st) => (
                    <Link key={st.slug} href={`/car-insurance/${st.slug}`} className="block py-2 text-[15px] text-[#0A2A4F]/85">{st.name}</Link>
                  ))}
                </div>
              </details>
              <span className="block text-xs font-bold uppercase tracking-wider text-[#0A2A4F]/70 mt-3 mb-1">By Topic</span>
              {HUBS.map((h) => (
                <Link key={h.slug} href={hubHref(h.slug)} className="block py-2 text-[15px] text-[#0A2A4F]/85">{h.name}</Link>
              ))}
              {TOPIC_EXTRA.map((l) => (
                <Link key={l.href} href={l.href} className="block py-2 text-[15px] text-[#0A2A4F]/85">{l.label}</Link>
              ))}
            </div>
          </details>
          <ul className="flex flex-col mb-5">
            {TOP_LINKS.map((l) => (
              <li key={l.href} className="border-b border-[#0A2A4F]/8"><Link href={l.href} className="block py-3.5 text-base font-semibold text-[#0A2A4F]">{l.label}</Link></li>
            ))}
          </ul>
          <button
            onClick={handleQuote}
            data-track="cta"
            data-location="nav_mobile_menu"
            className="w-full bg-gradient-to-r from-[#2B5BA8] to-[#38B6C9] text-white font-semibold px-6 py-3 rounded-full cursor-pointer"
          >
            Compare quotes
          </button>
        </div>
      </header>

      {/* Mobile: a persistent compare button on content pages (not on the home page or inside the quote flow). */}
      {!isQuotePage && !mobileOpen && pathname !== "/" && (
        <div className="md:hidden fixed inset-x-0 bottom-0 z-40 bg-white/95 backdrop-blur border-t border-[#0A2A4F]/10 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <button
            onClick={handleQuote}
            data-track="cta"
            data-location="mobile_sticky_bar"
            className="w-full bg-gradient-to-r from-[#2B5BA8] to-[#38B6C9] text-white font-semibold py-3 rounded-full cursor-pointer"
          >
            Compare quotes in your area
          </button>
        </div>
      )}
    </>
  );
}
