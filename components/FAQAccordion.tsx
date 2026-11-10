"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { faqs } from "@/lib/faqs";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#EBF2FB] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <h2 className="[font-family:var(--font-display)] text-3xl md:text-4xl font-bold text-[#0A2A4F] mb-3">
          Frequently asked questions
        </h2>
        <p className="text-[#0A2A4F]/60 mb-10">
          Quick answers before you compare.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#0A2A4F]/5"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2B5BA8]"
                >
                  <span className="font-semibold text-[#0A2A4F]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-[#2B5BA8] transition-transform duration-300 motion-reduce:transition-none ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      <p className="text-sm md:text-base leading-relaxed text-[#0A2A4F]/70">
                        {faq.answer}
                      </p>
                      {faq.link && (
                        <Link
                          href={faq.link.href}
                          className="inline-block mt-3 text-sm font-medium text-[#2B5BA8] hover:underline"
                        >
                          {faq.link.text}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}