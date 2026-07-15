"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "@/context/FormContext";

export default function BlogCTA() {
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
    <div className="sticky top-24 relative overflow-hidden bg-gradient-to-b from-[#2B5BA8] to-[#16325f] rounded-2xl p-6 text-white shadow-xl shadow-[#0A2A4F]/20 ring-1 ring-white/10">
      {/* Soft glow accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#38B6C9]/25 blur-3xl"
      />

      <div className="relative">
        <div className="flex items-center gap-1.5 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38B6C9] animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
            Free service
          </span>
        </div>

        <h3 className="text-[1.35rem] font-bold leading-tight mb-2">
          Find the best rate in your area
        </h3>
        <p className="text-white/60 text-xs mb-6 leading-relaxed">
          Compare top carriers side by side in minutes. No spam, no obligation.
        </p>

        <ul className="space-y-2.5 mb-6">
          {[
            "Compare top carriers instantly",
            "No spam calls or emails",
            "Takes less than 2 minutes",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-white/85">
              <span className="w-4 h-4 rounded-full bg-[#38B6C9]/20 flex items-center justify-center shrink-0">
                <span className="text-[#38B6C9] text-[10px] font-bold">✓</span>
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="h-px bg-white/10 mb-5" />

        <div className="space-y-3">
          <div>
            <label className="block text-[10px] font-semibold text-white/50 mb-1.5 uppercase tracking-widest">
              Your ZIP Code
            </label>
            <input
              type="text"
              inputMode="numeric"
              maxLength={5}
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value.replace(/\D/g, ""))}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="e.g. 90210"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#38B6C9]/60 focus:border-transparent transition"
            />
            {error && <p className="text-red-300 text-xs mt-1.5">{error}</p>}
          </div>
          <button
            onClick={handleSubmit}
            className="group w-full bg-[#38B6C9] hover:bg-[#2fa3b5] text-white font-semibold py-3.5 rounded-xl text-sm transition shadow-lg shadow-[#38B6C9]/25 flex items-center justify-center gap-1.5"
          >
            Get Free Quotes
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </button>
        </div>

        <div className="flex items-center justify-center gap-1.5 mt-4 text-white/40 text-[10px]">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          No credit card needed. We never sell your info.
        </div>
      </div>
    </div>
  );
}
