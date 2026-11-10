/* Homepage FAQ content. Shared by the FAQ accordion and the Markdown
   version of the homepage served to AI agents. */
export type FAQ = {
  question: string;
  answer: string;
  link?: { text: string; href: string };
};

export const faqs: FAQ[] = [
  {
    question: "What factors affect my car insurance premium?",
    answer:
      "Your driving history is one of the biggest factors, including any accidents, tickets, or DUI records from the past 3 to 5 years. Your age and years of experience behind the wheel matter too, with younger drivers typically paying more. Where you live plays a major role since urban areas with higher traffic and theft rates tend to have higher premiums. The vehicle itself matters as well, including its make, model, year, safety ratings, and how expensive it is to repair. On top of that, the coverage types and limits you choose, your deductible amount, and even your credit score in most states will all influence your final rate.",
    link: { text: "Read: How your zip code affects your rate →", href: "/blogs/how-zip-code-affects-your-insurance-rate" },
  },
  {
    question: "How quickly can I get matched with providers?",
    answer:
      "Within a few minutes. After you answer a few quick questions, we show you quote providers that serve your area, and you can review quotes from top national carriers right away.",
  },
  {
    question: "Is the service really free?",
    answer:
      "Yes. The service is free and you are never obligated to buy anything. TryAutoQuote may receive compensation from the providers we list when you visit them, which is how we keep the service free for drivers.",
  },
  {
    question: "Will checking quotes affect my credit score?",
    answer:
      "No. Using TryAutoQuote involves no credit check at all. Some insurers may use a soft pull when they quote you, and soft inquiries have no impact on your credit score.",
  },
  {
    question: "Should I get liability only or full coverage?",
    answer:
      "If your car is financed or leased, your lender requires full coverage. If you own your car outright, a common rule of thumb is: if the annual cost of collision and comprehensive exceeds 10% of your car's current market value, liability only is often the smarter financial choice.",
    link: { text: "Read: When to drop full coverage on an older car →", href: "/blogs/when-to-drop-full-coverage" },
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

