"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

const DISCLAIMER = "TryAutoQuote.com is an independent, advertising-supported comparison website. The products and offers that appear on this website are from third-party insurance partners and advertisers from which TryAutoQuote.com may receive compensation. This compensation may influence which products we feature, how they are presented, and where they appear on the page. TryAutoQuote.com is not a licensed insurance provider or broker. Content on this site is provided for informational purposes only and does not constitute insurance advice. Available rates and offers vary by location, driving history, and other factors and are subject to change without notice. Not all products or offers are available in all states.";

export default function Footer() {
  return (
    <footer className="bg-[#06203D] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <div>
            <p className="text-xl font-extrabold tracking-tight mb-4">
              TryAuto<span className="text-[#38B6C9]">Quote</span>
            </p>
            <p className="text-sm leading-relaxed text-white/55 max-w-xs">
              Your one-stop shop for auto-insurance. Compare personalized rates from dozens of top carriers in real time — free, with no obligation to buy.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-white/55">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="hover:text-white transition">Terms of Use</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/55">
              <li>
                <a href="mailto:support@tryautoquote.com" className="inline-flex items-center gap-2 hover:text-white transition">
                  <Mail className="w-4 h-4 text-[#38B6C9]" />
                  support@tryautoquote.com
                </a>
              </li>
              <li className="text-white/40">
                Our licensed insurance specialists are here to walk you through your options.
              </li>
            </ul>
          </div>

        </div>

        <hr className="my-10 border-white/10" />

        <p className="text-xs leading-relaxed text-white/40 max-w-5xl">{DISCLAIMER}</p>

        <p className="mt-8 text-xs text-white/35 text-center">
          © {new Date().getFullYear()} TryAutoQuote. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}