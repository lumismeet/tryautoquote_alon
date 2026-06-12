"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

type NavbarProps = {
  onQuoteClick?: () => void;
};

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isQuotePage = pathname.startsWith("/quote");
  const [open, setOpen] = useState(false);

  const handleQuote = () => {
    if (onQuoteClick) {
      onQuoteClick();
    } else if (isQuotePage) {
      window.dispatchEvent(new CustomEvent("highlight-quote-input"));
    } else {
      router.push("/?quote=1");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F4F7FB]/90 backdrop-blur border-b border-[#0A2A4F]/5">
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-16 md:h-[72px] flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-xl font-extrabold tracking-tight text-[#0A2A4F]">
            TryAuto<span className="text-[#38B6C9]">.Quote</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 mx-auto">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-[#0A2A4F]/70 hover:text-[#2B5BA8] transition rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2B5BA8]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={handleQuote}
          className="hidden md:inline-flex bg-[#0A2A4F] hover:bg-[#E8732A] transition text-white text-sm font-semibold px-7 py-2.5 rounded-full cursor-pointer"
        >
          Get a Quote
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden p-2 text-[#0A2A4F] rounded"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[#0A2A4F]/10 bg-white px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-[#0A2A4F]/80 hover:text-[#2B5BA8] transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            
              <li>
                <button
                  onClick={() => { setOpen(false); handleQuote(); }}
                  className="w-full bg-[#0A2A4F] hover:bg-[#E8732A] transition text-white font-semibold px-6 py-3 rounded-full cursor-pointer"
                >
                  Get a Quote
                </button>
              </li>
            
          </ul>
        </div>
      )}
    </header>
  );
}