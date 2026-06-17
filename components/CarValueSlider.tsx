"use client";
import { useState } from "react";
import Image from "next/image";
import { Car, CheckCircle2 } from "lucide-react";

type CarValueSliderProps = {
  onCtaClick: () => void;
};

const VALUE_TIERS = [
  { max: 10000,  label: "Economy Vehicle",            badge: "bg-[#EBF2FB] text-[#2B5BA8]" },
  { max: 30000,  label: "Mid-Range Vehicle",           badge: "bg-[#EBF2FB] text-[#2B5BA8]" },
  { max: 60000,  label: "Premium Vehicle",             badge: "bg-[#0A2A4F]/10 text-[#0A2A4F]" },
  { max: 100000, label: "Luxury / High-Value Vehicle", badge: "bg-[#0A2A4F] text-white" },
];

const PERKS = [
  "Free — no obligation to buy",
  "No spam calls",
  "Real rates from top carriers",
];

export default function CarValueSlider({ onCtaClick }: CarValueSliderProps) {
  const [value, setValue] = useState(25000);
  const [checking, setChecking] = useState(false);

  const percent = ((value - 5000) / (100000 - 5000)) * 100;
  const tier = VALUE_TIERS.find((t) => value <= t.max) ?? VALUE_TIERS[3];

  const handleClick = () => {
    setChecking(true);
    setTimeout(() => {
      setChecking(false);
      onCtaClick();
    }, 900);
  };

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        <div className="grid md:grid-cols-[1.5fr_3.5fr] gap-12 items-center">

          {/* Left — heading only */}
          <div>
            <div aria-hidden className="flex gap-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A2A4F]/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#2B5BA8]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A2A4F]/20" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2A4F] leading-tight mb-4">
              What&apos;s Your Car Worth?
            </h2>
            <p className="text-base text-[#0A2A4F]/60 max-w-sm leading-relaxed">
              Vehicle value plays a big role in your rate. Drag the slider to see what applies to you.
            </p>
          </div>

          {/* Right — card with images left + slider right */}
          <div className="bg-[#F4F7FB] rounded-2xl shadow-lg border border-[#DDE9F7] overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-[#2B5BA8] to-[#38B6C9]" />

            <div className="flex">

              {/* Images column inside card */}
              <div className="hidden sm:flex flex-col w-2/5 shrink-0 gap-1">
                <div className="relative h-44 w-full">
                  <Image src="/image6.png" alt="Car 1" fill className="object-cover" />
                </div>
                <div className="relative h-44 w-full">
                  <Image src="/image5.png" alt="Car 2" fill className="object-cover" />
                </div>
                <div className="relative h-44 w-full">
                  <Image src="/image4.png" alt="Car 3" fill className="object-cover" />
                </div>
              </div>

              {/* Slider content */}
              <div className="flex-1 px-7 py-7 space-y-5">

                {/* Value row */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#0A2A4F]/40 mb-0.5">
                      Estimated value
                    </p>
                    <p className="text-5xl font-extrabold text-[#0A2A4F] tabular-nums">
                      ${value.toLocaleString()}
                    </p>
                  </div>
                  <span className={`text-sm font-semibold px-3 py-1.5 rounded-full shrink-0 ${tier.badge}`}>
                    {tier.label}
                  </span>
                </div>

                {/* Car icon */}
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                  <Car className="w-4 h-4 text-[#2B5BA8]" />
                </div>

                {/* Slider */}
                <div className="space-y-1.5">
                  <input
                    type="range"
                    min={5000}
                    max={100000}
                    step={1000}
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #2B5BA8 ${percent}%, #DDE9F7 ${percent}%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs font-medium text-[#0A2A4F]/40">
                    <span>$5,000</span>
                    <span>$100,000+</span>
                  </div>
                </div>

                {/* Dynamic message */}
                <div className="bg-white rounded-xl px-4 py-3 border border-[#DDE9F7]">
                  <p className="text-sm font-semibold text-[#0A2A4F] mb-0.5">
                    Based on a ${value.toLocaleString()} vehicle:
                  </p>
                  <p className="text-sm text-[#0A2A4F]/60 leading-relaxed">
                    Insurance rates vary ZIP code and/&amp; what drivers near are actually paying.
                  </p>
                </div>

                {/* CTA */}
                <button
                  onClick={handleClick}
                  className="w-full bg-gradient-to-r from-[#2B5BA8] to-[#38B6C9] hover:opacity-90 transition text-white font-semibold py-3 rounded-xl text-base shadow-md cursor-pointer"
                >
                  {checking ? "Checking Local Rates…" : "Check My Local Rate →"}
                </button>

                {/* Perks */}
                <ul className="flex flex-col gap-1.5">
                  {PERKS.map((p) => (
                    <li key={p} className="flex items-center gap-1.5 text-xs text-[#0A2A4F]/50">
                      <CheckCircle2 className="w-3 h-3 text-[#38B6C9] shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #2B5BA8;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 0 0 2px #2B5BA8;
        }
        input[type='range']::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #2B5BA8;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 0 0 2px #2B5BA8;
        }
      `}</style>
    </section>
  );
}
