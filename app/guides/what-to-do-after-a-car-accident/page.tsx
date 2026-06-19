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
          <p className="text-[#0A2A4F]/60 text-sm">Updated June 17, 2026 &middot; 9 min read</p>
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
            Check for injuries first, move to safety, exchange information with the other driver, document the scene with photos, do not admit fault, and notify your insurer as soon as possible. What you do in the first hour after an accident has a significant impact on how your claim is handled and how well you are protected.
          </p>
        </div>

        <div className="space-y-8 text-[#0A2A4F]/80 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Step 1: Check for injuries and call 911 if needed</h2>
            <p>
              Your first priority after any accident is safety, not the vehicles. Check yourself and all passengers for injuries before getting out of the car. If anyone is injured, call 911 immediately and stay on the line with the dispatcher. Do not attempt to move a seriously injured person unless there is immediate danger from fire, oncoming traffic, or another threat. Moving someone with a spinal injury can worsen the damage.
            </p>
            <p className="mt-3">
              If the accident appears minor and no one is hurt, you may still want to involve police. An official police report protects you if the other driver later changes their account of what happened, claims more severe injuries than seemed evident at the scene, or if a dispute arises about fault during the claims process. In many states, police must respond when an accident involves injury or property damage above a certain threshold, but even for minor incidents, having documentation is valuable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Step 2: Move to safety if possible</h2>
            <p>
              If the vehicles are drivable and the accident happened on a busy road or highway, move them to the shoulder, a parking lot, or another safe location off the main travel lane. Turn on hazard lights immediately. Leaving vehicles in a lane of active traffic significantly increases the risk of a secondary accident. Many states legally permit, and some require, drivers involved in minor accidents to move their vehicles out of the travel lane before exchanging information.
            </p>
            <p className="mt-3">
              If one or more vehicles cannot be moved, stay inside the car with your seatbelt fastened until emergency services arrive, then exit on the side of the vehicle away from traffic and move to a safe distance. Standing in a live lane of traffic while waiting for police is more dangerous than most drivers realize.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Step 3: Exchange information with the other driver</h2>
            <p>
              Collect the following from every driver involved in the accident: full name and contact information including phone number and address, driver&apos;s license number and the state that issued it, license plate number, insurance company name and policy number, and the vehicle make, model, year, and color.
            </p>
            <p className="mt-3">
              Do not skip this step even if the visible damage looks minor. Small dents and scratches can hide more significant structural damage that only becomes apparent when the vehicle is inspected by a body shop. And soft tissue injuries like whiplash, which are among the most common outcomes of rear-end accidents, may not produce symptoms until 24 to 72 hours after impact. Exchanging complete information now protects you regardless of how the situation develops.
            </p>
            <p className="mt-3">
              If the other driver is uncooperative, refuses to provide information, or leaves the scene, note their license plate and vehicle description. Get names and contact information from any witnesses, and report the incident to police as a hit-and-run. This is important for your uninsured motorist claim if the other driver cannot later be identified.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Step 4: Document the scene thoroughly</h2>
            <p>
              Use your phone to photograph everything before vehicles are moved if that is safe to do. Take photos of all vehicles involved from multiple angles, including the full vehicle exterior, not just the damaged area. Capture close-up photos of every area of damage on each vehicle, the position of both cars relative to each other and to road markings, skid marks or debris on the road, any damage to guardrails, signage, or property, weather and road conditions, and traffic signs and signals in the area.
            </p>
            <p className="mt-3">
              If there are witnesses, photograph their driver&apos;s license or write down their names and phone numbers. Bystanders who stopped at the scene are likely to leave quickly, and their accounts of what they saw can be genuinely valuable if fault is disputed. Video can also be useful: a short walk-around video of the scene captures spatial relationships between vehicles that are hard to show in individual photos.
            </p>
            <p className="mt-3">
              Photos taken on location immediately after the accident are far more credible and useful in a claim than descriptions written from memory days later. This documentation is your most important asset in any subsequent dispute about what happened.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Step 5: Do not admit fault</h2>
            <p>
              This is one of the most important rules at an accident scene, and one of the easiest to accidentally violate. Do not say &ldquo;I am sorry,&rdquo; &ldquo;I did not see you,&rdquo; &ldquo;I was not paying attention,&rdquo; or anything else that could be interpreted as accepting responsibility. Even a reflexive apology intended as a courtesy, not an admission, can be documented and used against you during the claims process.
            </p>
            <p className="mt-3">
              Fault in a car accident is a formal legal and insurance determination made after a full review of evidence: witness accounts, photos, police reports, traffic laws, and sometimes expert reconstruction. You do not have enough information at the scene to make an accurate fault assessment, and you are not the right person to make it in any case. Stick to factual exchanges of information and let your insurer and the claims process determine responsibility.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Step 6: File a police report</h2>
            <p>
              If police respond to the scene, they will file a report. Get the responding officer&apos;s name and badge number before they leave, and ask how to obtain a copy of the completed report. Police reports typically take one to three days to be finalized and available. Your insurer will likely request the report number during the claims process, so having it speeds things along.
            </p>
            <p className="mt-3">
              If police do not come to the scene, which is common for minor accidents without injuries, you can often file a report yourself at the local station or online within a few days. Some states legally require drivers to file their own report when an accident involves injury or damage above a certain dollar amount. Check your state&apos;s requirements. Many insurers strongly recommend filing a report even for minor accidents, because a documented record protects you if the other driver later claims more damage or injury than existed at the time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Step 7: Notify your insurance company promptly</h2>
            <p>
              Contact your insurer as soon as possible after leaving the scene, ideally the same day. Most policies require timely notification of any accident as a condition of coverage. Waiting too long can complicate your claim, and in some cases, delayed reporting can give an insurer grounds to question whether coverage applies at all.
            </p>
            <p className="mt-3">
              Be accurate and factual when you describe the accident to your insurer. Give them the basic facts: when and where the accident occurred, who was involved, what damage resulted, whether anyone was injured, and the police report number if you have it. Your insurer will guide you through the next steps of the claims process, including arranging a vehicle inspection, assigning a claims adjuster, and handling communication with the other party&apos;s insurer. You do not need to speak directly with the other driver&apos;s insurance company if your own insurer is handling the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Step 8: Seek medical attention even if you feel fine</h2>
            <p>
              Adrenaline released during and immediately after an accident can mask pain significantly. Injuries such as whiplash, soft tissue strains, and mild concussions frequently do not produce noticeable symptoms for 24 to 72 hours after impact. By the time symptoms appear, some of the most useful diagnostic windows have passed.
            </p>
            <p className="mt-3">
              See a doctor within one to two days of any accident, even if you feel fine. This creates a medical record that links your symptoms to the accident, which is critical if you later need to file a medical claim or if the other driver&apos;s insurer challenges whether your injuries were accident-related. Gaps between the accident date and when you first sought treatment are frequently used by insurers to minimize or dispute injury claims.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Information to collect at the scene</h2>
            <p>Keep this list in mind so you do not forget anything in the stress of the moment:</p>
            <ul className="mt-3 space-y-1.5 list-disc list-inside text-[#0A2A4F]/75">
              <li>Full name of all drivers involved</li>
              <li>Phone number and home address</li>
              <li>Driver&apos;s license number and issuing state</li>
              <li>License plate number</li>
              <li>Insurance company name and policy number</li>
              <li>Vehicle make, model, year, and color</li>
              <li>Names and contact details of any witnesses</li>
              <li>Police report number and responding officer name</li>
              <li>Photos of all vehicles, damage, and road conditions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">How to work with a claims adjuster</h2>
            <p>
              After you file a claim, your insurer will assign a claims adjuster. Their job is to investigate the accident, determine fault and coverage, and establish how much the insurer will pay. The adjuster works for your insurer and their interests align with paying out claims that are valid under your policy. Be cooperative and honest with your adjuster.
            </p>
            <p className="mt-3">
              You are not required to give a recorded statement to the other party&apos;s insurer without consulting an attorney first. If the other driver&apos;s insurer contacts you directly and asks for a recorded statement, it is reasonable to tell them your attorney or your own insurer will be in contact. This is especially important if injuries are involved or if fault is disputed.
            </p>
            <p className="mt-3">
              If you believe the insurer&apos;s settlement offer for vehicle damage or injuries is too low, you have the right to negotiate. For vehicle damage, you can request the methodology behind the valuation and submit comparable vehicle listings to support a higher amount. For injury claims, an attorney who specializes in personal injury can be valuable if the amounts involved are significant.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">How accidents affect your insurance rate</h2>
            <p>
              An at-fault accident typically raises your premium at the next renewal. The increase varies by carrier and state but commonly ranges from 20 to 50 percent for the first at-fault accident. This surcharge stays on your policy for three to five years before it expires, meaning a single accident can cost you significantly more in premiums over that period than it cost in immediate damages.
            </p>
            <p className="mt-3">
              Not-at-fault accidents generally do not raise your rate, though some carriers in some states are permitted to factor even not-at-fault incidents into their pricing. If your premium increases after an accident where you were not at fault, that is a meaningful signal to shop other carriers who may not weight that incident the same way.
            </p>
            <p className="mt-3">
              After an at-fault accident is actually one of the most productive times to compare quotes. Carriers weigh accident history very differently in their pricing models, and switching carriers after an accident sometimes produces a lower premium than staying with your current insurer and absorbing their full surcharge. The market price for your updated profile may be more competitive elsewhere than you expect.
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
