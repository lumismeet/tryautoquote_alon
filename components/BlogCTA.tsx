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
    <div className="sticky top-24 bg-gradient-to-b from-[#2B5BA8] to-[#1a3d72] rounded-2xl p-6 text-white shadow-lg">

      <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">
        Free service
      </p>
      <h3 className="text-lg font-bold leading-snug mb-1">
        Find the Best Rate<br />in Your Area
      </h3>
      <p className="text-white/60 text-xs mb-6 leading-relaxed">
        Compare top carriers in minutes. No spam, no obligation.
      </p>

      <ul className="space-y-2.5 mb-6">
        {[
          "Compare top carriers instantly",
          "No spam calls or emails",
          "Takes less than 2 minutes",
        ].map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm text-white/80">
            <span className="w-4 h-4 rounded-full bg-white/15 flex items-center justify-center shrink-0">
              <span className="text-[#38B6C9] text-[10px] font-bold">✓</span>
            </span>
            {item}
          </li>
        ))}
      </ul>

      <div className="h-px bg-white/10 mb-6" />

      <div className="space-y-3">
        <div>
          <label className="block text-[10px] font-semibold text-white/50 mb-1.5 uppercase tracking-widest">
            Your ZIP Code
          </label>
          <input
            type="text"
            inputMode="numeric"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="e.g. 90210"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
          />
          {error && (
            <p className="text-red-300 text-xs mt-1.5">{error}</p>
          )}
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-[#38B6C9] hover:bg-[#2fa3b5] text-white font-semibold py-3.5 rounded-xl text-sm transition shadow-sm"
        >
          Get Free Quotes →
        </button>
      </div>

      <p className="text-white/30 text-[10px] text-center mt-4">
        No credit card needed. We never sell your info.
      </p>
    </div>
  );
}
