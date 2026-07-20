import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "How Much Car Insurance Do You Actually Need? | TryAutoQuote",
  description:
    "State minimums are rarely enough. Learn what coverage types exist, what limits to carry, and how to find the right amount of car insurance for your situation.",
  alternates: { canonical: "/guides/how-much-car-insurance-do-i-need" },
  openGraph: {
    title: "How Much Car Insurance Do You Actually Need? | TryAutoQuote",
    description:
      "State minimums are rarely enough. Learn what coverage types exist, what limits to carry, and how to find the right amount of car insurance for your situation.",
    url: "https://www.tryautoquote.com/guides/how-much-car-insurance-do-i-need",
    siteName: "TryAutoQuote",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Car Insurance Do You Actually Need?",
  description:
    "State minimums are rarely enough. Learn what coverage types exist, what limits to carry, and how to find the right amount of car insurance for your situation.",
  author: { "@type": "Organization", name: "TryAutoQuote", url: "https://www.tryautoquote.com" },
  publisher: {
    "@type": "Organization",
    name: "TryAutoQuote",
    url: "https://www.tryautoquote.com",
    logo: { "@type": "ImageObject", url: "https://www.tryautoquote.com/logo-test1.png" },
  },
  datePublished: "2026-06-17",
  dateModified: "2026-06-17",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.tryautoquote.com/guides/how-much-car-insurance-do-i-need",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tryautoquote.com/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.tryautoquote.com/guides" },
    { "@type": "ListItem", position: 3, name: "How Much Car Insurance Do You Need?", item: "https://www.tryautoquote.com/guides/how-much-car-insurance-do-i-need" },
  ],
};

export default function GuideHowMuchInsurance() {
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
          <span className="text-[#0A2A4F]/70">How much coverage do you need</span>
        </nav>

        <div className="mb-10">
          <span className="inline-block text-xs font-semibold text-[#2B5BA8] bg-[#2B5BA8]/10 rounded-full px-3 py-1 mb-4">
            Coverage Basics
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A2A4F] leading-tight mb-4">
            How Much Car Insurance Do You Actually Need?
          </h1>
          <p className="text-[#0A2A4F]/60 text-sm">Updated June 17, 2026 &middot; 5 mins read</p>
        </div>

        <div className="flex justify-center mb-10">
          <Image
            src="/ill_hero_blue.svg"
            alt="Driver reviewing auto insurance coverage options"
            width={260}
            height={240}
            className="w-48 h-44 md:w-64 md:h-56"
          />
        </div>

        <div className="bg-[#2B5BA8]/8 border-l-4 border-[#2B5BA8] rounded-r-xl px-6 py-5 mb-10">
          <p className="font-semibold text-[#0A2A4F] mb-1">The short answer</p>
          <p className="text-[#0A2A4F]/80 leading-relaxed">
            At minimum, carry your state-required liability limits. In practice, most drivers should carry at least 100/300/100 liability, plus collision and comprehensive if your car is worth more than $5,000. State minimums leave most people dangerously underprotected.
          </p>
        </div>

        <div className="space-y-8 text-[#0A2A4F]/80 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Why state minimums are usually not enough</h2>
            <p>
              Every state sets a legal floor for how much liability coverage you must carry to drive. These minimums exist to ensure drivers can pay for at least some damage in a minor accident. The problem is that most of these minimums were written decades ago and have not kept pace with the actual cost of medical care, vehicle repairs, or legal judgments.
            </p>
            <p className="mt-3">
              Consider what a serious accident actually costs. An emergency room visit, imaging, surgery, and physical therapy can easily exceed $100,000 for a single injured person. A newer sedan or SUV can cost $40,000 to $60,000 to replace. If you cause an accident that exceeds your coverage limits, you are personally responsible for the gap. That means your savings, your wages, and in some states your home equity can be targeted by a civil judgment. The state minimum was designed to keep you legal, not to protect your financial life.
            </p>
            <p className="mt-3">
              The right question is not just "what does the law require?" but "what would I owe if I caused a serious accident?" Framing it that way usually clarifies why the minimums fall short for most drivers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Coverage types explained</h2>

            <h3 className="font-semibold text-[#0A2A4F] mt-5 mb-2">Liability (bodily injury and property damage)</h3>
            <p>Pays for injuries and property damage you cause to others in an accident where you are at fault. This is required in nearly every state. Expressed as three numbers, for example 25/50/25, meaning $25,000 per person for bodily injury, $50,000 per accident for bodily injury, and $25,000 for property damage. Your liability coverage protects other people, not yourself or your vehicle.</p>

            <h3 className="font-semibold text-[#0A2A4F] mt-5 mb-2">Collision</h3>
            <p>Pays to repair or replace your vehicle after a collision with another car or a stationary object like a guardrail or pole, regardless of who was at fault. If you are at fault, this is the coverage that pays to fix your own car. If you are not at fault, you can use either your collision coverage or file against the other driver's liability policy. Required by lenders if you have a car loan or lease.</p>

            <h3 className="font-semibold text-[#0A2A4F] mt-5 mb-2">Comprehensive</h3>
            <p>Covers non-collision damage to your vehicle. This includes theft, vandalism, weather events like hail and flooding, fire, falling objects, and animal strikes. If a deer runs into your car, that is a comprehensive claim. If a hailstorm dents your roof, that is comprehensive. Also required by most lenders. Both collision and comprehensive pay out based on your vehicle's actual cash value at the time of the loss, minus your deductible.</p>

            <h3 className="font-semibold text-[#0A2A4F] mt-5 mb-2">Uninsured and underinsured motorist</h3>
            <p>Protects you if you are hit by a driver who has no insurance or not enough insurance to cover your damages. Roughly one in eight drivers on American roads is uninsured according to industry estimates, and many more carry only the state minimum, which may be far less than your actual losses. UM coverage is required in some states and strongly recommended everywhere. It covers your medical expenses, lost wages, and sometimes property damage when an at-fault driver cannot pay.</p>

            <h3 className="font-semibold text-[#0A2A4F] mt-5 mb-2">Medical payments and personal injury protection</h3>
            <p>Medical payments coverage, often called MedPay, pays your medical expenses and those of your passengers after an accident regardless of who caused it. Personal Injury Protection is broader and covers medical expenses plus a portion of lost wages and sometimes other costs. PIP is required in no-fault states and is available as an optional add-on in others. Both coverages activate quickly after an accident without requiring a fault determination first.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Recommended limits by situation</h2>

            <h3 className="font-semibold text-[#0A2A4F] mt-5 mb-2">Newer or financed vehicle</h3>
            <p>Carry 100/300/100 liability plus collision and comprehensive. Your lender requires both, and there is typically a maximum allowed deductible written into your loan or lease agreement. Higher liability limits protect you from personal financial exposure if you cause an accident with multiple injured parties or significant property damage.</p>

            <h3 className="font-semibold text-[#0A2A4F] mt-5 mb-2">Older vehicle you own outright</h3>
            <p>100/300/100 liability without collision and comprehensive is often the right call. If your car is worth $4,000 to $5,000 or less, the annual cost of insuring it for collision and comprehensive may exceed ten percent of its value, which means you are likely paying more than you would ever collect in a claim. Keep strong liability limits regardless of the vehicle's age, because your exposure if you cause a serious accident does not change based on what you are driving.</p>

            <h3 className="font-semibold text-[#0A2A4F] mt-5 mb-2">High net worth or significant assets</h3>
            <p>Consider 250/500/100 liability or an umbrella policy layered on top of your auto coverage. The logic is straightforward: the more assets you have, the more you stand to lose in a lawsuit. An umbrella policy typically adds $1,000,000 or more in liability protection across your home and auto for a few hundred dollars a year, making it one of the most cost-effective coverage options available to drivers with meaningful assets.</p>

            <h3 className="font-semibold text-[#0A2A4F] mt-5 mb-2">Young driver or high-risk profile</h3>
            <p>Start at the state minimum if your budget is the primary constraint, but increase your liability limits as your rate improves. The cost difference between the state minimum and 100/300 liability is often smaller than people expect, particularly for drivers who have already paid the high-risk premium. Never drop below the state requirement, and treat liability as the last coverage to cut, not the first.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Understanding your deductible</h2>
            <p>
              Your deductible is the amount you pay out of pocket before your insurer pays on a collision or comprehensive claim. Common deductibles are $500 and $1,000, though some carriers offer options ranging from $250 to $2,500.
            </p>
            <p className="mt-3">
              A higher deductible means a lower monthly or six-month premium, but it also means more out-of-pocket cost if you file a claim. A $1,000 deductible on a vehicle worth $8,000 means that in a total loss, your insurer pays you $7,000 rather than $7,500. For many drivers with an emergency fund, the premium savings from a higher deductible outweigh the higher claim cost over time.
            </p>
            <p className="mt-3">
              A lower deductible costs more in premium but reduces financial shock when you do file a claim. If you drive frequently in high-traffic areas or live somewhere with high hail or theft risk, a lower deductible may be worth the extra monthly cost. The right deductible is essentially a question of how much you can comfortably pay out of pocket on a bad day.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">Should you add gap coverage?</h2>
            <p>
              Gap coverage is worth considering if you financed a new vehicle recently. When a car is totaled, your insurer pays you the actual cash value of the vehicle at the time of the loss, which may be significantly less than what you still owe on the loan. Vehicles depreciate quickly, especially in the first year, and a total loss shortly after purchase can leave you with a loan balance that your insurance payout does not fully cover.
            </p>
            <p className="mt-3">
              Gap coverage pays the difference between the insurance payout and your remaining loan balance so you are not left owing money on a car you no longer have. It is typically available through your insurer or through the dealership at the time of purchase, though insurer pricing is usually more competitive. Gap coverage becomes less valuable as you pay down your loan and as the vehicle's market value converges with what you owe, so it is most useful in the first two to three years of a loan.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A2A4F] mb-3">How to pick the right amount without overpaying</h2>
            <p>
              The goal is adequate protection at a price you can sustain without strain. Start by knowing your state minimum and treating it as the floor, not the target. Most drivers should be above the minimum on liability regardless of everything else.
            </p>
            <p className="mt-3">
              Next, estimate your net worth or the total value of assets that could be targeted in a lawsuit. Your liability coverage should ideally be at or above that number, because that is the ceiling of what someone could realistically collect from you in civil court. If your net worth is $200,000, carrying 25/50 liability means you are exposed for $175,000 above your coverage limit.
            </p>
            <p className="mt-3">
              Then assess your vehicle. If it is financed or leased, collision and comprehensive are not optional. If you own it outright, check its current market value and compare it against what you pay for those coverages annually. For uninsured motorist coverage, the question is simpler: if you cannot afford to cover your own medical bills and vehicle repairs out of pocket after being hit by a driver with no insurance, you need UM coverage.
            </p>
            <p className="mt-3">
              Finally, compare quotes at your chosen coverage level across multiple carriers. The same protection can cost significantly different amounts depending on the insurer, and the only way to find the most competitive price is to compare.
            </p>
          </section>

        </div>

        <div className="mt-14 bg-[#0A2A4F] rounded-2xl px-8 py-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">See what the right coverage costs you</h2>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            Compare personalized quotes at your chosen coverage level from top carriers. Free, no obligation, no spam calls.
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
