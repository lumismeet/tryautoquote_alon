import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "What to Do After a Car Accident: Step-by-Step Guide | TryAutoQuote",
  description:
    "A clear step-by-step guide for what to do immediately after a car accident, from the scene to the claim, so you protect yourself and your coverage.",
  alternates: { canonical: "/guides/what-to-do-after-a-car-accident" },
  openGraph: {
    title: "What to Do After a Car Accident: Step-by-Step Guide | TryAutoQuote",
    description:
      "A clear step-by-step guide for what to do immediately after a car accident, from the scene to the claim, so you protect yourself and your coverage.",
    url: "https://tryautoquote.com/guides/what-to-do-after-a-car-accident",
    siteName: "TryAutoQuote",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What to Do After a Car Accident: Step-by-Step Guide",
  description:
    "A clear step-by-step guide for what to do immediately after a car accident, from the scene to the claim, so you protect yourself and your coverage.",
  author: { "@type": "Organization", name: "TryAutoQuote", url: "https://tryautoquote.com" },
  publisher: {
    "@type": "Organization",
    name: "TryAutoQuote",
    url: "https://tryautoquote.com",
    logo: { "@type": "ImageObject", url: "https://tryautoquote.com/logo-test1.png" },
  },
  datePublished: "2026-06-17",
  dateModified: "2026-06-17",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://tryautoquote.com/guides/what-to-do-after-a-car-accident",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://tryautoquote.com/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://tryautoquote.com/guides" },
    { "@type": "ListItem", position: 3, name: "What to Do After a Car Accident", item: "https://tryautoquote.com/guides/what-to-do-after-a-car-accident" },
  ],
};

export default function GuideWhatToDoAfterAccident() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-[#0A2A4F]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto px-6 pt-10 pb-20 md:pt-14 md:pb-28">

        <nav className="text-xs text-[#0A2A4F]/50 mb-8 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#2B5BA8] transition">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-[#2B5BA8] transition">Guides</Link>
          <span>/</span>
          <span className="text-[#0A2A4F]/70">What to do after an accident</span>
        </nav>

        <div className="mb-10">
          <span className="inline-block text-xs font-semibold text-[#2B5BA8] bg-[#2B5BA8]/10 rounded-full px-3 py-1 mb-4">
            After an Accident
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A2A4F] leading-tight mb-4">
            What to Do After a Car Accident: Step-by-Step
          </h1>
          <p className="text-[#0A2A4F]/60 text-sm">Updated June 17, 2026 &middot; 7 min read</p>
        </div>

        <div className="flex justify-center mb-10">
          <Image
            src="/ill_mobile_blue.svg"
            alt="Calling your insurance company after a car accident"
            width={240}
            height={260}
            className="w-44 h-48 md:w-56 md:h-64"
          />
        </div>

        <div className="bg-[#2B5BA8]/8 border-l-4 border-[#2B5BA8] rounded-r-xl px-6 py-5 mb-10">
          <p className="font-semibold text-[#0A2A4F] mb-1">The short answer</p>
          <p className="text-[#0A2A4F]/80 leading-relaxed">
            Check for injuries first, move to safety, exchange information with the other driver, document the scene with photos, do not admit fault, and notify your insurer as soon as possible. The steps you take in the first hour after an accident have a significant impact on how your claim is handled.
          </p>
        </div>

        <div className="space-y-8 text-[#0A2A4F]/80 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Step 1: Check for injuries and call 911 if needed</h2>
            <p>
              Your first priority is safety, not the vehicles. Check yourself and all passengers for injuries. If anyone is hurt, call 911 immediately. Do not move an injured person unless there is immediate danger from fire or oncoming traffic. If the accident is minor and no one is hurt, still consider calling police. An official report protects you if the other party later disputes what happened.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Step 2: Move to safety if possible</h2>
            <p>
              If the vehicles are drivable and the accident is minor, move them to the shoulder or a nearby parking lot to clear traffic. Turn on hazard lights. If the vehicles cannot be moved, stay in your car with your seatbelt on until it is safe to exit, then move to the sidewalk or away from traffic.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Step 3: Exchange information with the other driver</h2>
            <p>
              Collect the following from every driver involved: full name and contact information, driver's license number, license plate number, insurance company name and policy number, and vehicle make, model, and year. Do not skip this step even if the damage looks minor. Small visible damage can hide more expensive structural damage that only shows up later.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Step 4: Document the scene thoroughly</h2>
            <p>
              Use your phone to photograph everything: all vehicles from multiple angles, the position of cars before they are moved, damage close-ups, skid marks or road conditions, and traffic signs and signals nearby. If there are witnesses, get their names and contact information. Photos taken at the scene are far more useful than reconstructed accounts filed days later.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Step 5: Do not admit fault</h2>
            <p>
              Do not say &ldquo;I&apos;m sorry,&rdquo; &ldquo;I didn&apos;t see you,&rdquo; or anything that could be interpreted as accepting responsibility. Fault is a legal and insurance determination made after a full review of evidence. Statements made at the scene, even casual ones, can be used against you in a claim. Stick to factual exchanges of information only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Step 6: File a police report</h2>
            <p>
              If police respond to the scene, they will file a report. Get the responding officer&apos;s name and badge number and ask how to obtain a copy of the report. If police do not come to the scene, you can often file a report yourself at the local station or online within a few days. Many insurers require a police report number to process a claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Step 7: Notify your insurance company promptly</h2>
            <p>
              Contact your insurer as soon as possible after the accident, even if you were not at fault. Most policies require timely notification as a condition of coverage. Be factual and accurate in your account. Your insurer will guide you through the claims process, arrange a vehicle inspection, and handle communication with the other party&apos;s insurer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Step 8: Seek medical attention even if you feel fine</h2>
            <p>
              Adrenaline after an accident can mask pain. Injuries like whiplash, soft tissue damage, and mild concussions may not present symptoms for 24 to 72 hours. See a doctor within a day or two of the accident. This creates a medical record that is important if symptoms develop later and you need to file a medical claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Information to collect at the scene</h2>
            <p>Keep this list in mind so you do not forget anything in the stress of the moment:</p>
            <ul className="mt-3 space-y-1.5 list-disc list-inside text-[#0A2A4F]/75">
              <li>Full name of all drivers</li>
              <li>Phone number and address</li>
              <li>Driver&apos;s license number</li>
              <li>License plate number</li>
              <li>Insurance company name and policy number</li>
              <li>Vehicle make, model, and year</li>
              <li>Names and contact details of any witnesses</li>
              <li>Police report number</li>
              <li>Officer name and badge number</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">How accidents affect your insurance rate</h2>
            <p>
              An at-fault accident typically raises your premium at renewal. The increase varies by carrier and state but commonly ranges from 20 to 50 percent. This surcharge usually stays on your policy for three to five years before it expires.
            </p>
            <p className="mt-3">
              Not-at-fault accidents generally do not raise your rate, though some carriers in some states are permitted to factor them in. If your rate increases after a not-at-fault accident, that is a signal to shop other carriers.
            </p>
            <p className="mt-3">
              After an at-fault accident is one of the most important times to compare quotes. Carriers weigh accidents differently in their pricing, and switching after an accident sometimes costs less than staying with your current insurer despite the surcharge.
            </p>
          </section>

        </div>

        <div className="mt-14 bg-[#0A2A4F] rounded-2xl px-8 py-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Time to re-shop your coverage?</h2>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            After an accident is one of the best times to compare rates. See what top carriers offer for your updated profile. Free, no obligation.
          </p>
          <Link
            href="/quote/1_map"
            className="inline-block bg-gradient-to-r from-[#2B5BA8] to-[#38B6C9] text-white font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition"
          >
            Get a Free Quote
          </Link>
        </div>

      </main>
      <Footer />
    </div>
  );
}
