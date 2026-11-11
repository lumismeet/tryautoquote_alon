"use client";

import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { HUBS, hubHref } from "@/lib/hubs";
import { STATE_LAWS_VERIFIED, LAWS_BY_STATE_PATH } from "@/lib/states/verification";

const inter = Inter({ subsets: ["latin"] });

// One-line descriptions for the Learn menu (short enough for a dropdown).
const HUB_BLURBS: Record<string, string> = {
  coverage: "Types, limits, deductibles",
  cost: "What sets your rate, how to pay less",
  claims: "Accidents, filing, what to say",
  drivers: "Teens, SR-22, rideshare, new to the U.S.",
  buying: "Comparing, buying and switching",
};

// Top-level items after "Learn". Add Tools and Glossary here once those pages exist.
const TOP_LINKS = [{ label: "States", href: STATE_LAWS_VERIFIED ? LAWS_BY_STATE_PATH : "/car-insurance#states", match: /^\/car-insurance\/(?!coverage|cost|claims|drivers|buying)[a-z-]+$/ }];

const LEARN_EXTRA = [
  { label: "Guides", href: "/guides" },
  { label: "All articles", href: "/blogs" },
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
    pathname === "/car-insurance" ||
    HUBS.some((h) => pathname.startsWith(hubHref(h.slug))) ||
    pathname.startsWith("/blogs") ||
    pathname.startsWith("/guides");

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
            <li
              ref={learnRef}
              className="relative"
              onMouseEnter={() => setLearnOpen(true)}
              onMouseLeave={() => setLearnOpen(false)}
            >
              <button
                type="button"
                aria-expanded={learnOpen}
                aria-controls="learn-menu"
                onClick={() => setLearnOpen((v) => !v)}
                className={`${linkCls(learnActive)} inline-flex items-center gap-1 cursor-pointer`}
              >
                Learn
                <ChevronDown className={`w-4 h-4 transition-transform ${learnOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>

              {/* Always in the DOM so crawlers see the links; shown on hover, click or focus. */}
              <div
                id="learn-menu"
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[560px] transition ${learnOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"}`}
              >
                <div className="rounded-2xl bg-white shadow-xl border border-[#0A2A4F]/8 p-3 grid grid-cols-2 gap-1">
                  <Link href="/car-insurance" className="col-span-2 rounded-xl px-4 py-3 hover:bg-[#0A2A4F]/[0.04] transition">
                    <span className="block text-sm font-semibold text-[#0A2A4F]">Car insurance, explained</span>
                    <span className="block text-xs text-[#0A2A4F]/55 mt-0.5">Start here: every topic in one place</span>
                  </Link>
                  {HUBS.map((h) => (
                    <Link key={h.slug} href={hubHref(h.slug)} className="rounded-xl px-4 py-3 hover:bg-[#0A2A4F]/[0.04] transition">
                      <span className="block text-sm font-semibold text-[#0A2A4F]">{h.name}</span>
                      <span className="block text-xs text-[#0A2A4F]/55 mt-0.5">{HUB_BLURBS[h.slug]}</span>
                    </Link>
                  ))}
                  <div className="rounded-xl px-4 py-3 flex flex-col justify-center gap-1.5">
                    {LEARN_EXTRA.map((l) => (
                      <Link key={l.href} href={l.href} className="text-sm text-[#2B5BA8] hover:underline">{l.label}</Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            {TOP_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkCls(l.match.test(pathname))}>{l.label}</Link>
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

        <div id="mobile-menu" className={`md:hidden border-t border-[#0A2A4F]/10 bg-white px-6 py-5 max-h-[calc(100dvh-4rem)] overflow-y-auto ${mobileOpen ? "" : "hidden"}`}>
          <p className="text-xs font-semibold text-[#0A2A4F]/45 mb-2">Learn</p>
          <ul className="flex flex-col mb-5">
            <li><Link href="/car-insurance" className="block py-2.5 text-base font-medium text-[#0A2A4F]">Car insurance, explained</Link></li>
            {HUBS.map((h) => (
              <li key={h.slug}>
                <Link href={hubHref(h.slug)} className="block py-2.5 text-base font-medium text-[#0A2A4F]/80">{h.name}</Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col border-t border-[#0A2A4F]/8 pt-3 mb-5">
            {TOP_LINKS.map((l) => (
              <li key={l.href}><Link href={l.href} className="block py-2.5 text-base font-medium text-[#0A2A4F]/80">{l.label}</Link></li>
            ))}
            {LEARN_EXTRA.map((l) => (
              <li key={l.href}><Link href={l.href} className="block py-2.5 text-base font-medium text-[#0A2A4F]/80">{l.label}</Link></li>
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
