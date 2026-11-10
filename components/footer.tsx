"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { HUBS, hubHref } from "@/lib/hubs";

export default function Footer() {
  return (
    <footer className="bg-[#06203D] text-white pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">

          <div>
            <p className="text-xl font-extrabold tracking-tight mb-4">
              TryAuto<span className="text-[#38B6C9]">Quote</span>
            </p>
            <p className="text-sm leading-relaxed text-white/55 max-w-xs">
              Your one-stop shop for auto-insurance. Compare auto insurance options in minutes, free and with no obligation to buy.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-white/55">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/#why-us" className="hover:text-white transition">Why us</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-white transition">How it works</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="hover:text-white transition">Terms of Use</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Car insurance topics</h3>
            <ul className="space-y-3 text-sm text-white/55">
              {HUBS.map((h) => (
                <li key={h.slug}><Link href={hubHref(h.slug)} className="hover:text-white transition">{h.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-3 text-sm text-white/55">
              <li><Link href="/car-insurance" className="hover:text-white transition">Car insurance guide</Link></li>
              <li><Link href="/car-insurance#states" className="hover:text-white transition">Rules by state</Link></li>
              <li><Link href="/guides" className="hover:text-white transition">Guides</Link></li>
              <li><Link href="/blogs" className="hover:text-white transition">All articles</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/55">
              <li>
                <a href="mailto:info@tryautoquote.com" className="inline-flex items-center gap-2 hover:text-white transition">
                  <Mail className="w-4 h-4 text-[#38B6C9]" />
                  info@tryautoquote.com
                </a>
              </li>
              <li className="text-white/40">
                Questions about our content or the site? We usually reply within one business day.
              </li>
            </ul>
          </div>

        </div>

        <hr className="my-10 border-white/10" />

        <p className="text-xs leading-relaxed text-white/40 max-w-5xl">
          TryAutoQuote.com is an independent, advertising-supported comparison website. The products and offers that appear on this website are from third-party insurance partners and advertisers from which TryAutoQuote.com may receive compensation. This compensation may influence which products we feature, how they are presented, and where they appear on the page. TryAutoQuote.com is not an insurance company, agent, or broker. Content on this site is provided for informational purposes only and does not constitute insurance advice. Available rates and offers vary by location, driving history, and other factors and are subject to change without notice. Not all products or offers are available in all states.
        </p>

        <p className="mt-8 text-xs text-white/35 text-center">
          © {new Date().getFullYear()} TryAutoQuote, operated by StarTech Media. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}