"use client";

import { useState } from "react";
import type { Faq } from "@/lib/blogs";

export default function FaqSection({ faqs }: { faqs: Faq[] }) {
  // First item open by default; null = all collapsed.
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  if (faqs.length === 0) return null;

  return (
    <section id="frequently-asked-questions" className="scroll-mt-28 pt-4">
      <h2 className="text-xl font-bold text-[#0A2A4F] mb-5">
        Frequently Asked Questions
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIdx === i;
          return (
            <div
              key={i}
              className="rounded-xl border border-[#0A2A4F]/10 bg-white overflow-hidden transition-colors hover:border-[#2B5BA8]/25"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold text-[#0A2A4F]">
                  {faq.question}
                </span>
                <svg
                  className={`w-4 h-4 shrink-0 text-[#2B5BA8] transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* grid-rows trick animates height smoothly without fixed values */}
              <div
                className={`grid transition-all duration-200 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-sm text-[#0A2A4F]/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
