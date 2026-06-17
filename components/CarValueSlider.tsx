"use client";
import { useState } from "react";
import Image from "next/image";

type CarValueSliderProps = {
  onCtaClick: () => void;
};

const VALUE_TIERS = [
  { max: 10000,  label: "Economy Vehicle",            color: "text-[#38B6C9]" },
  { max: 30000,  label: "Mid-Range Vehicle",           color: "text-[#2B5BA8]" },
  { max: 60000,  label: "Premium Vehicle",             color: "text-[#0A2A4F]" },
  { max: 100000, label: "Luxury / High-Value Vehicle", color: "text-[#E8732A]" },
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
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Image — matches StrategySection style */}
          <div className="relative rounded-2xl border-4 border-white shadow-lg overflow-hidden min-h-[400px]">
            <Image
              src="/image4.png"
              alt="Car value"
              fill
              className="object-cover"
            />
          </div>

          {/* Slider card */}
          <div className="bg-[#F4F7FB] rounded-2xl border border-[#DDE9F7] shadow-sm px-10 py-10 text-center space-y-6">

            <h2 className="text-2xl md:text-3xl font-black text-[#0A2A4F]">
              What&apos;s Your Car Worth?
            </h2>

            <p className="text-[#0A2A4F]/60 text-base">
              Vehicle value plays a big role in your insurance rate.
            </p>

            <div className="text-5xl font-black text-[#2B5BA8]">
              ${value.toLocaleString()}
            </div>

            <div className="relative px-2">
              <input
                type="range"
                min={5000}
                max={100000}
                step={1000}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="w-full h-3 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #2B5BA8 ${percent}%, #DDE9F7 ${percent}%)`,
                }}
              />
              <div className="flex justify-between text-xs text-[#0A2A4F]/40 mt-2">
                <span>$5k</span>
                <span>$100k+</span>
              </div>
            </div>

            <div className={`text-sm font-semibold uppercase tracking-wide ${tier.color}`}>
              {tier.label}
            </div>

            <div className="bg-white rounded-xl px-6 py-4 text-left">
              <p className="text-base font-semibold mb-1 text-[#0A2A4F]">
                Based on a ${value.toLocaleString()} vehicle:
              </p>
              <p className="text-[#0A2A4F]/60 text-base">
                Insurance rates can vary significantly depending on your ZIP code.
                Let&apos;s check what drivers in your area typically pay.
              </p>
            </div>

            <button
              onClick={handleClick}
              className="w-full bg-[#2B5BA8] hover:bg-[#E8732A] text-white font-black py-4 rounded-xl text-lg transition shadow-md cursor-pointer"
            >
              {checking ? "Checking Local Rates..." : "Check My Local Rate →"}
            </button>

            <p className="text-xs text-[#0A2A4F]/40">
              Free • No obligation • No spam calls
            </p>
          </div>

        </div>
      </div>

      <style>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #2B5BA8;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 0 0 2px #2B5BA8;
        }
        input[type='range']::-moz-range-thumb {
          width: 22px;
          height: 22px;
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
