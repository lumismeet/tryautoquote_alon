"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
// import { Gelasio, Inter } from "next/font/google";
// import { Charis_SIL, Inter } from "next/font/google";
// import { Source_Serif_4, Inter } from "next/font/google";
// import { Playfair_Display, Inter } from "next/font/google";
import { Merriweather, Inter } from "next/font/google";
// import { Noto_Serif_Hebrew, Inter } from "next/font/google";
// import { Domine, Inter } from "next/font/google";
// import { PT_Serif, Inter } from "next/font/google";
// import { Lora, Inter} from "next/font/google";
// import { Libre_Baskerville, Inter } from "next/font/google";
// import { Bitter, Inter } from "next/font/google";

import {
  ShieldCheck,
  PhoneOff,
  Zap,
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  Car,
  DollarSign,
  Star,
  Menu,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Mail,
} from "lucide-react";

import FAQAccordion from "@/components/FAQAccordion";
import USMap from "@/components/USMap";
import CarValueSlider from "@/components/CarValueSlider";
import { useForm } from "@/context/FormContext";

/* ------------------------------------------------------------------ */
/* Fonts                                                                */
/* ------------------------------------------------------------------ */

// const display = Gelasio({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
//   variable: "--font-display",
// });

// const display = Charis_SIL({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-display",
// });

// const display = Noto_Serif_Hebrew({
//   subsets: ["latin"],
//   weight: ["700", "800", "900"],
//   variable: "--font-display",
// });

// const display = Domine({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-display",
// });

// const display = PT_Serif({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-display",
// });

// const display = Lora({
//   subsets: ["latin"],
//   weight: ["700"],
//   variable: "--font-display",
// });

// const display = Libre_Baskerville({
//   subsets: ["latin"],
//   weight: ["700"],
//   variable: "--font-display",
// });

// const display = Bitter({
//   subsets: ["latin"],
//   weight: ["700"],
//   variable: "--font-display",
// });

const display = Merriweather({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

/* ------------------------------------------------------------------ */
/* Brand tokens (Guard.In structure, TryAutoQuote palette)              */
/* gradient accent: blue #2B5BA8 → teal #38B6C9                         */
/* dark band: navy #0A2A4F                                              */
/* ------------------------------------------------------------------ */

const GRADIENT = "bg-gradient-to-r from-[#2B5BA8] to-[#38B6C9]";

/* ------------------------------------------------------------------ */
/* Content                                                              */
/* ------------------------------------------------------------------ */

const heroStats = [
  { stat: "Dozens", label: "Top carriers compared" },
  { stat: "Minutes", label: "To compare & switch" },
  { stat: "100%", label: "Free, no obligation" },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Free, always",
    text: "The service is free and you are never obligated to buy the presented policy. No hidden fees, no credit card required. Just real rates from real carriers, at no cost to you.",
  },
  {
    icon: PhoneOff,
    title: "No spam calls",
    text: "Compare quotes without a flood of follow-up calls. You decide who to talk to. We never sell your phone number to telemarketers. Your contact details stay between you and the carrier you choose.",
  },
  {
    icon: Zap,
    title: "Real-time matching",
    text: "Your details are compared live against a database connected to dozens of top insurance carriers. The quotes you see reflect actual current rates, not ballpark estimates generated days later.",
  },
  {
    icon: BadgeCheck,
    title: "Carriers you recognize",
    text: "Get matched with established providers you actually know, willing to insure you. No obscure names, only trusted carriers with strong reputations and solid claims track records.",
  },
];

const checklist = [
  "Personalized results specific to you and your vehicle",
  "Only carriers that are actually willing to insure you",
  "Free service - never an obligation to buy the presented policy",
];

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "A little Information",
    text: "Provide some basic details about yourself and your vehicle. This takes about 2 minutes and lets us generate personalized, accurate results and not generic quotes. The service is free and you are never obligated to buy anything.",
  },
  {
    number: "02",
    icon: Car,
    title: "A bit of Magic",
    text: "Our matching engine compares your profile in real time against dozens of top carriers. You'll see the best available rates for your area side by side. No waiting, no back-and-forth with agents. The quotes reflect actual current rates, not ballpark estimates.",
  },
  {
    number: "03",
    icon: DollarSign,
    title: "A Lot of Savings",
    text: "Review your options and choose the policy that fits your budget and coverage needs. If you're ready, you can purchase directly through the carrier. If not, just walk away with no pressure, no follow-up calls.",
  },
];

const testimonials = [
  {
    highlight: "Saving $58 a month",
    text: "I'd been on the same plan for 4 years and honestly had no idea I was overpaying. Took me maybe 10 minutes to compare and switch. Saving $58 a month now.",
    name: "Derek Okafor",
    location: "Columbus, OH",
    image: "/person1.png",
  },
  {
    highlight: "Actually painless",
    text: "I hate dealing with insurance stuff, so I kept putting it off. This actually made it painless. Got 3 solid quotes, picked one, done. Wish I'd done it sooner.",
    name: "Amanda Reyes",
    location: "Phoenix, AZ",
    image: "/person2.png",
  },
  {
    highlight: "No catch, no spam",
    text: "Was skeptical at first. I figured there'd be a catch or they'd just spam me with calls. Neither happened. Got matched with a provider I actually recognized and the rate was lower than what I had.",
    name: "Tom Vasquez",
    location: "Tampa, FL",
    image: "/person3.png",
  },
];

const navLinks = [
  { label: "Why us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Guides", href: "/guides" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

/* ------------------------------------------------------------------ */
/* FAQ structured data (FAQPage)                                        */
/* The "text" values below MUST match the answers shown in             */
/* components/FAQAccordion.tsx word-for-word. If you edit the FAQ       */
/* there, update these too.                                            */
/* ------------------------------------------------------------------ */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://tryautoquote.com/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What factors affect my car insurance premium?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your driving history is one of the biggest factors, including any accidents, tickets, or DUI records from the past 3 to 5 years. Your age and years of experience behind the wheel matter too, with younger drivers typically paying more. Where you live plays a major role since urban areas with higher traffic and theft rates tend to have higher premiums. The vehicle itself matters as well, including its make, model, year, safety ratings, and how expensive it is to repair. On top of that, the coverage types and limits you choose, your deductible amount, and even your credit score in most states will all influence your final rate.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I get matched with providers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Almost instantly. Once you share a few details about yourself and your vehicle, our matching engine compares them in real time against a live database connected to dozens of top insurance carriers, so you see relevant, valid options in minutes, not days.",
      },
    },
    {
      "@type": "Question",
      name: "Is the service really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The service is free and you are never obligated to buy any policy we present. TryAutoQuote may receive compensation from partner carriers when you choose a policy, which is how we keep the service free for drivers.",
      },
    },
    {
      "@type": "Question",
      name: "Will checking quotes affect my credit score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Comparing quotes through TryAutoQuote does not involve a hard credit inquiry. Some insurers may use a soft pull to estimate your rate, and soft inquiries have no impact on your credit score.",
      },
    },
    {
      "@type": "Question",
      name: "Should I get liability only or full coverage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your car is financed or leased, your lender requires full coverage. If you own your car outright, a common rule of thumb is: if the annual cost of collision and comprehensive exceeds 10% of your car's current market value, liability only is often the smarter financial choice.",
      },
    },
    {
      "@type": "Question",
      name: "How can I lower my car insurance premium?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most effective moves are comparing quotes across at least three carriers at renewal, raising your deductible, bundling home and auto, and stacking available discounts like good driver, good student, or telematics programs. Shopping at renewal is the single biggest lever since rates can vary by hundreds of dollars for the same coverage.",
      },
    },
    {
      "@type": "Question",
      name: "I'm a young driver. How can I find more affordable rates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Staying on a parent's policy, applying for a good student discount, completing a defensive driving course, and choosing a practical vehicle with strong safety ratings can collectively cut a young driver's premium by 40 to 60 percent. Comparing quotes across carriers matters especially for young drivers since rates vary more between carriers than for any other group.",
      },
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function LandingV2() {
  const zipRef = useRef<HTMLInputElement>(null);

  const focusZip = () => {
    if (!zipRef.current) return;
    zipRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => {
      const input = zipRef.current;
      if (!input) return;
      input.focus();
      input.style.transition = "box-shadow 0.3s ease";
      input.style.boxShadow = "0 0 0 2px rgba(56, 182, 201, 0.6)";
      setTimeout(() => {
        input.style.boxShadow = "0 0 0 2px rgba(56, 182, 201, 0)";
      }, 900);
    }, 400);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("quote") === "1") {
      setTimeout(focusZip, 300);
    }
  }, []);

  return (
    <div
      className={`${display.variable} ${body.variable} [font-family:var(--font-body)] min-h-screen w-full bg-white text-[#0A2A4F]`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NavbarV3 onQuoteClick={focusZip} />
      <HeroSection zipRef={zipRef} />
      <WhyBetter />
      <StrategySection />
      <StepsSection />
      <CarValueSliderSection />
      <TestimonialsDark />
      <MapSection />
      <BrowseByState />
      <FAQAccordion />
      <GradientCta />
      <FooterV3 />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Navbar — Guard.In style: logo left, centered links, pill CTA right   */
/* ------------------------------------------------------------------ */

function NavbarV3({ onQuoteClick }: { onQuoteClick: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F4F7FB]/90 backdrop-blur border-b border-[#0A2A4F]/5">
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-16 md:h-[72px] flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-0 shrink-0">
          <Image src="/LOGO-no-bg.png" alt="TryAutoQuote logo" width={68} height={68} className="h-10 w-auto object-contain" />
          <span className="text-xl font-extrabold tracking-tight text-[#0A2A4F]">
            TryAuto<span className="text-[#38B6C9]">Quote</span>
          </span>
        </Link>

        {/* Centered links */}
        <ul className="hidden md:flex items-center gap-8 mx-auto">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2B5BA8] ${
                  i === 0
                    ? "text-[#2B5BA8]"
                    : "text-[#0A2A4F]/70 hover:text-[#2B5BA8]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark pill CTA */}
        <button
          onClick={onQuoteClick}
          className="hidden md:inline-flex bg-[#0A2A4F] hover:bg-[#E8732A] transition text-white text-sm font-semibold px-7 py-2.5 rounded-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B5BA8]"
        >
          Get a Quote
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden p-2 text-[#0A2A4F] rounded focus-visible:outline-2 focus-visible:outline-[#2B5BA8]"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[#0A2A4F]/10 bg-white px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-[#0A2A4F]/80 hover:text-[#2B5BA8] transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setOpen(false);
                  onQuoteClick();
                }}
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

/* ------------------------------------------------------------------ */
/* Reusable zip form                                                    */
/* ------------------------------------------------------------------ */

function ZipForm({
  zipRef,
  onLight = true,
}: {
  zipRef?: React.RefObject<HTMLInputElement | null>;
  onLight?: boolean;
}) {
  const [zipcode, setZipcode] = useState("");
  const [error, setError] = useState("");
  const { updateForm } = useForm();
  const router = useRouter();

  const handleSubmit = () => {
    setError("");
    const trimmedZip = zipcode.trim();

    if (!trimmedZip) {
      setError("Please enter a zipcode");
      return;
    }
    if (!/^[0-9]{5}$/.test(trimmedZip)) {
      setError("Invalid zip");
      return;
    }

    updateForm({ zipcode: trimmedZip });
    router.push("/quote/1");
  };

  return (
    <div className="w-full max-w-md">
      <div className="flex flex-col sm:flex-row rounded-2xl sm:rounded-full p-1.5 gap-1.5 bg-white shadow-lg shadow-[#0A2A4F]/10 border border-[#0A2A4F]/10">
        <input
          type="text"
          inputMode="numeric"
          value={zipcode}
          ref={zipRef}
          onChange={(e) => setZipcode(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="Enter zipcode"
          aria-label="Zipcode"
          className="flex-1 px-5 py-3.5 rounded-xl sm:rounded-full text-[#0A2A4F] bg-transparent placeholder:text-[#0A2A4F]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2B5BA8]/40"
        />
        <button
          onClick={handleSubmit}
          className={`${GRADIENT} hover:opacity-90 transition text-white font-semibold px-7 py-3.5 rounded-xl sm:rounded-full cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2A4F]`}
        >
          Get Started ↗
        </button>
      </div>
      <p
        role="status"
        className={`mt-2 min-h-[24px] text-sm ${
          onLight ? "text-red-600" : "text-red-300"
        }`}
      >
        {error}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero — badge, headline, zip CTA, stats row, circular collage right   */
/* ------------------------------------------------------------------ */

function HeroSection({
  zipRef,
}: {
  zipRef: React.RefObject<HTMLInputElement | null>;
}) {
  return (
    <section className="bg-[#F4F7FB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-14 md:pt-20 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-14 items-center">
          {/* Text */}
          <div>
            <span className="inline-block text-xs font-semibold text-[#0A2A4F]/70 border border-[#0A2A4F]/15 bg-white rounded-full px-4 py-1.5 mb-6">
              Auto insurance, simplified
            </span>

            <h1 className="[font-family:var(--font-display)] text-4xl sm:text-5xl lg:text-[64px] xl:text-[55px] font-extrabold leading-[1.08] text-[#0A2A4F]">
              Your one-stop shop for auto-insurance.
            </h1>

            <p className="mt-6 text-[#0A2A4F]/60 max-w-md leading-relaxed">
              Answer a few quick questions and we&apos;ll find the best auto
              insurance rates available in your area. No commitment required.
            </p>

            {/* Zip CTA (replaces template's Get Started + video) */}
            <div className="mt-8">
              <ZipForm zipRef={zipRef} />
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A2A4F] hover:text-[#2B5BA8] transition"
              >
                <span
                  className={`${GRADIENT} w-8 h-8 rounded-full flex items-center justify-center text-white`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
                See how it works
              </a>
            </div>

            {/* Stats row */}
            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {heroStats.map((s) => (
                <div key={s.stat}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="[font-family:var(--font-display)] text-2xl md:text-3xl font-bold text-[#0A2A4F]">
                    {s.stat}
                  </dd>
                  <dd className="mt-1 text-xs text-[#0A2A4F]/55">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Circular collage with ring arc */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px]">
              {/* Ring arc */}
              <div
                aria-hidden
                className="absolute -inset-6 rounded-full border-2 border-[#0A2A4F]/10 [clip-path:inset(0_0_45%_0)]"
              />
              {/* Big circle */}
              <div className="absolute inset-0 rounded-full bg-[#EBF2FB] border-8 border-white shadow-xl overflow-hidden flex items-center justify-center">
                <div className="relative w-3/4 h-3/4">
                  <Image
                    src="/ill_hero_blue.svg"
                    alt="Driver comparing auto insurance quotes"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
              {/* Small overlapping circle */}
              <div className="absolute -bottom-6 left-2 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-white border-8 border-white shadow-lg overflow-hidden flex items-center justify-center">
                <div className="relative w-3/4 h-3/4">
                  <Image
                    src="/ill_comp_blue.svg"
                    alt="Insurance policy comparison"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why We're Better — dark navy band with 4 white cards                 */
/* ------------------------------------------------------------------ */

function WhyBetter() {
  return (
    <section id="why-us" className="bg-[#0A2A4F] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        {/* Three dots accent */}
        <div aria-hidden className="flex justify-center gap-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#38B6C9]" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
        </div>

        <h2 className="[font-family:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
          Why we&apos;re better than others
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto mb-12">
          Many of us spend countless hours filling endless documentation just
          to find out there is no relevant policy. Our platform makes sure you
          are presented with the top options in one place.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-7 shadow-lg hover:-translate-y-1 transition motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div
                  className={`${GRADIENT} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-[#0A2A4F] mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed text-[#0A2A4F]/60">
                  {f.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Strategy — image collage left, heading + checklist right             */
/* ------------------------------------------------------------------ */

function StrategySection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Collage: one large card + two small cards */}
          <div className="space-y-4">
            <div className="group bg-[#EBF2FB] rounded-2xl border-4 border-white shadow-lg overflow-hidden">
              <div className="relative w-full h-[220px] md:h-[260px]">
                <Image
                  src="/image1.png"
                  alt="Drivers finding the right coverage"
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="group bg-[#F4F7FB] rounded-2xl border-4 border-white shadow-lg overflow-hidden">
                <div className="relative w-full h-[130px] md:h-[155px]">
                  <Image
                    src="/image2.png"
                    alt="Comparing policies"
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="group bg-[#F4F7FB] rounded-2xl border-4 border-white shadow-lg overflow-hidden">
                <div className="relative w-full h-[130px] md:h-[155px]">
                  <Image
                    src="/image3.png"
                    alt="Getting a quote on mobile"
                    fill
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Copy + checklist */}
          <div>
            <h2 className="[font-family:var(--font-display)] text-3xl md:text-4xl font-bold text-[#0A2A4F] leading-tight mb-6">
              Personalized results, from carriers willing to insure you
            </h2>
            <p className="text-[#0A2A4F]/60 leading-relaxed mb-8">
              We take all the information you provide regarding yourself and
              your vehicle and compare it in real time to our live database
              connected to dozens of top insurance carriers. The result is a
              list of policies specific to your personal circumstances.
            </p>

            <ul className="space-y-4">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-[#38B6C9]" />
                  <span className="text-sm md:text-base font-medium text-[#0A2A4F]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Steps — "How Claim Insurance" → numbered 01/02/03 gradient circles   */
/* ------------------------------------------------------------------ */

function StepsSection() {
  return (
    <section id="how-it-works" className="bg-[#F4F7FB] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <h2 className="[font-family:var(--font-display)] text-3xl md:text-4xl font-bold text-[#0A2A4F] mb-4">
          How does TryAutoQuote work?
        </h2>
        <p className="text-[#0A2A4F]/60 max-w-2xl mx-auto mb-14">
          Three steps between you and a better rate, the whole thing takes
          minutes, not hours.
        </p>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.number} className="flex flex-col items-center">
                {/* Gradient numbered circle */}
                <div
                  className={`${GRADIENT} w-16 h-16 rounded-full border-4 border-white shadow-lg flex items-center justify-center mb-[-32px] relative z-10`}
                >
                  <span className="[font-family:var(--font-display)] text-white font-bold">
                    {s.number}
                  </span>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl shadow-md pt-12 pb-8 px-7 w-full">
                  <Icon className="w-7 h-7 mx-auto mb-4 text-[#2B5BA8]" />
                  <h3 className="font-semibold text-[#0A2A4F] mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#0A2A4F]/60">
                    {s.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Testimonials — dark band, heading left, cards right                  */
/* ------------------------------------------------------------------ */

function TestimonialsDark() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const goTo = (i: number) => setCurrent(((i % total) + total) % total);
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  // Auto-advance every 6s; pause on hover via state
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % total), 6000);
    return () => clearInterval(id);
  }, [paused, total]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const threshold = 50;
    if (touchDeltaX.current > threshold) prev();
    else if (touchDeltaX.current < -threshold) next();
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <section id="reviews" className="bg-[#0A2A4F] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 items-center">
          {/* Heading */}
          <div className="text-white">
            <h2 className="[font-family:var(--font-display)] text-3xl md:text-4xl font-bold leading-tight mb-6">
              What our customers say
            </h2>
            <p className="text-white/60 leading-relaxed">
              Thousands of drivers trust TryAutoQuote to find them the best
              auto insurance rates available. Here&apos;s what a few of them
              told us.
            </p>
          </div>

          {/* Slider */}
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative">
              {/* Arrows */}
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer backdrop-blur"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer backdrop-blur"
              >
                <ChevronRight size={20} />
              </button>

              {/* Viewport */}
              <div
                className="overflow-hidden"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${current * 100}%)`,
                  }}
                >
                  {testimonials.map((t) => (
                    <div
                      key={t.name}
                      className="w-full flex-shrink-0 px-1 sm:px-2"
                    >
                      <article className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl h-full">
                        <div className="flex items-center gap-3 mb-4">
                          <Image
                            src={t.image}
                            alt={t.name}
                            width={44}
                            height={44}
                            className="rounded-full object-cover w-11 h-11"
                          />
                          <div>
                            <h3 className="font-semibold text-[#0A2A4F] text-sm">
                              {t.name}
                            </h3>
                            <p className="text-xs text-[#0A2A4F]/50">
                              {t.location}
                            </p>
                          </div>
                        </div>

                        <p
                          className={`text-sm font-bold mb-2 bg-clip-text text-transparent ${GRADIENT}`}
                        >
                          {t.highlight}
                        </p>

                        <p className="text-sm leading-relaxed text-[#0A2A4F]/70 mb-4">
                          &ldquo;{t.text}&rdquo;
                        </p>

                        <div
                          className="flex gap-1"
                          aria-label="5 out of 5 stars"
                        >
                          {[...Array(5)].map((_, j) => (
                            <Star
                              key={j}
                              size={14}
                              fill="#FFC93C"
                              color="#FFC93C"
                            />
                          ))}
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-8 justify-center sm:justify-start">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    i === current ? "w-6 bg-[#38B6C9]" : "w-2 bg-white/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Car Value Slider — after How It Works                                */
/* ------------------------------------------------------------------ */

function CarValueSliderSection() {
  const router = useRouter();
  return <CarValueSlider onCtaClick={() => router.push("/quote/1_map")} />;
}

/* ------------------------------------------------------------------ */
/* Map Section — US state map between testimonials and FAQ              */
/* ------------------------------------------------------------------ */

function MapSection() {
  const router = useRouter();
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <USMap onMapClick={() => router.push("/quote/1_map")} />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Browse by State                                                      */
/* ------------------------------------------------------------------ */

function BrowseByState() {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <Link
          href="/car-insurance"
          className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#F4F7FB] hover:bg-[#EBF2FB] border border-[#0A2A4F]/8 rounded-2xl px-8 py-6 transition"
        >
          <div>
            <p className="font-semibold text-[#0A2A4F] text-lg mb-1">
              Car Insurance by State
            </p>
            <p className="text-sm text-[#0A2A4F]/55">
              Requirements vary by state. See the minimum coverage for your state and what it actually covers.
            </p>
          </div>
          <span className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2B5BA8] group-hover:gap-2.5 transition-all">
            Browse all states <ChevronRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Gradient CTA band — template's newsletter strip → zip quote strip    */
/* ------------------------------------------------------------------ */

function GradientCta() {
  return (
    <section className={`${GRADIENT} py-12 md:py-16`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-white">
          <h2 className="[font-family:var(--font-display)] text-2xl md:text-3xl font-bold mb-3">
            Ready to start saving?
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-md">
            Enter your zipcode and compare personalized rates from top carriers
            in minutes. Free, no obligation, no spam calls.
          </p>
        </div>

        <div className="md:justify-self-end w-full md:max-w-md">
          <GradientZip />
        </div>
      </div>
    </section>
  );
}

function GradientZip() {
  const [zipcode, setZipcode] = useState("");
  const [error, setError] = useState("");
  const { updateForm } = useForm();
  const router = useRouter();

  const handleSubmit = () => {
    setError("");
    const trimmedZip = zipcode.trim();
    if (!trimmedZip) {
      setError("Please enter a zipcode");
      return;
    }
    if (!/^[0-9]{5}$/.test(trimmedZip)) {
      setError("Invalid zip");
      return;
    }
    updateForm({ zipcode: trimmedZip });
    router.push("/quote/1");
  };

  return (
    <div>
      <p className="text-white text-sm font-semibold mb-2">Your zipcode</p>
      <div className="flex flex-col sm:flex-row rounded-2xl sm:rounded-full p-1.5 gap-1.5 bg-white/20 backdrop-blur border border-white/30">
        <input
          type="text"
          inputMode="numeric"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="Enter zipcode"
          aria-label="Zipcode"
          className="flex-1 px-5 py-3 rounded-xl sm:rounded-full bg-transparent text-white placeholder:text-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        />
        <button
          onClick={handleSubmit}
          className="bg-[#0A2A4F] hover:bg-[#E8732A] transition text-white font-semibold px-7 py-3 rounded-xl sm:rounded-full cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Get a Quote
        </button>
      </div>
      <p role="status" className="mt-2 min-h-[20px] text-sm text-white">
        {error}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Footer — 4-column Guard.In layout + compliance disclaimer            */
/* ------------------------------------------------------------------ */

function FooterV3() {
  return (
    <footer className="bg-[#06203D] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <p className="text-xl font-extrabold tracking-tight mb-4">
              TryAuto<span className="text-[#38B6C9]">Quote</span>
            </p>
            <p className="text-sm leading-relaxed text-white/55 max-w-xs">
              Your one-stop shop for auto-insurance. Compare personalized rates
              from dozens of top carriers in real time - free, with no
              obligation to buy.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-white/55">
              <li><a href="#why-us" className="hover:text-white transition">Why us</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition">How it works</a></li>
              <li><a href="#reviews" className="hover:text-white transition">Reviews</a></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="hover:text-white transition">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-3 text-sm text-white/55">
              <li><Link href="/blogs" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/guides" className="hover:text-white transition">Guides</Link></li>
              <li><Link href="/car-insurance" className="hover:text-white transition">States</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/55">
              <li>
                <a
                  href="mailto:support@tryautoquote.com"
                  className="inline-flex items-center gap-2 hover:text-white transition"
                >
                  <Mail className="w-4 h-4 text-[#38B6C9]" />
                  support@tryautoquote.com
                </a>
              </li>
              <li className="text-white/40">
                Our licensed insurance specialists are here to walk you through
                your options.
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-white/10" />

        <p className="text-xs leading-relaxed text-white/40 max-w-5xl">
          TryAutoQuote.com is an independent, advertising-supported comparison
          website. The products and offers that appear on this website are from
          third-party insurance partners and advertisers from which
          TryAutoQuote.com may receive compensation. This compensation may
          influence which products we feature, how they are presented, and
          where they appear on the page. TryAutoQuote.com is not a licensed
          insurance provider or broker. Content on this site is provided for
          informational purposes only and does not constitute insurance advice.
          Available rates and offers vary by location, driving history, and
          other factors and are subject to change without notice. Not all
          products or offers are available in all states.
        </p>

        <p className="mt-8 text-xs text-white/35 text-center">
          © 2026 TryAutoQuote. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}