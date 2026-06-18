"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
  link?: { text: string; href: string };
};

const faqs: FAQ[] = [
  {
    question: "What factors affect my car insurance premium?",
    answer:
      "Your driving history is one of the biggest factors, including any accidents, tickets, or DUI records from the past 3 to 5 years. Your age and years of experience behind the wheel matter too, with younger drivers typically paying more. Where you live plays a major role since urban areas with higher traffic and theft rates tend to have higher premiums. The vehicle itself matters as well, including its make, model, year, safety ratings, and how expensive it is to repair. On top of that, the coverage types and limits you choose, your deductible amount, and even your credit score in most states will all influence your final rate.",
  },
  {
    question: "How quickly can I get matched with providers?",
    answer:
      "Almost instantly. Once you share a few details about yourself and your vehicle, our matching engine compares them in real time against a live database connected to dozens of top insurance carriers — so you see relevant, valid options in minutes, not days.",
  },
  {
    question: "Is the service really free?",
    answer:
      "Yes. The service is free and you are never obligated to buy any policy we present. TryAutoQuote may receive compensation from partner carriers when you choose a policy, which is how we keep the service free for drivers.",
  },
  {
    question: "Will checking quotes affect my credit score?",
    answer:
      "No. Comparing quotes through TryAutoQuote does not involve a hard credit inquiry. Some insurers may use a soft pull to estimate your rate, and soft inquiries have no impact on your credit score.",
  },
  {
    question: "Should I get liability only or full coverage?",
    answer:
      "If your car is financed or leased, your lender requires full coverage. If you own your car outright, a common rule of thumb is: if the annual cost of collision and comprehensive exceeds 10% of your car's current market value, liability only is often the smarter financial choice.",
    link: { text: "Read: Liability only vs full coverage →", href: "/guides/liability-only-vs-full-coverage" },
  },
  {
    question: "How can I lower my car insurance premium?",
    answer:
      "The most effective moves are comparing quotes across at least three carriers at renewal, raising your deductible, bundling home and auto, and stacking available discounts like good driver, good student, or telematics programs. Shopping at renewal is the single biggest lever since rates can vary by hundreds of dollars for the same coverage.",
    link: { text: "See all 10 ways to lower your premium →", href: "/guides/how-to-lower-your-car-insurance-premium" },
  },
  {
    question: "I'm a young driver. How can I find more affordable rates?",
    answer:
      "Staying on a parent's policy, applying for a good student discount, completing a defensive driving course, and choosing a practical vehicle with strong safety ratings can collectively cut a young driver's premium by 40 to 60 percent. Comparing quotes across carriers matters especially for young drivers since rates vary more between carriers than for any other group.",
    link: { text: "Read the young driver guide →", href: "/guides/cheapest-car-insurance-for-young-drivers" },
  },
];

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