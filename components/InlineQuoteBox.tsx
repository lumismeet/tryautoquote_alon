"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "@/context/FormContext";
import { track } from "@/lib/analytics";

// Compact ZIP entry placed early in content (after the Key takeaways on posts,
// near the top of state pages), so readers can start without leaving the page.
// The ZIP step is skipped: the flow continues at the first question.
export default function InlineQuoteBox({ entry, stateName }: { entry: string; stateName?: string }) {
  const router = useRouter();
  const { formData, updateForm } = useForm();
  const [zip, setZip] = useState(formData.zipcode ?? "");
  const [error, setError] = useState("");

  const submit = () => {
    if (!/^\d{5}$/.test(zip)) return setError("Please enter a valid 5-digit ZIP code");
    updateForm({ zipcode: zip });
    track("quote_start", { entry });
    router.push("/quote/1");
  };

  return (
    <section aria-label="Compare car insurance options" className="not-prose mb-10 rounded-2xl bg-[#0A2A4F] px-5 py-5 md:px-6 text-white">
      <p className="text-base font-bold leading-snug">
        Compare car insurance options{stateName ? ` in ${stateName}` : " in your area"}
      </p>
      <p className="text-sm text-white/65 mt-1 mb-4">No name, phone number or email needed.</p>
      <div className="flex gap-2">
        <label htmlFor={`zip-${entry}`} className="sr-only">ZIP code</label>
        <input
          id={`zip-${entry}`}
          type="text"
          inputMode="numeric"
          autoComplete="postal-code"
          placeholder="ZIP code"
          value={zip}
          onChange={(e) => { setZip(e.target.value.replace(/\D/g, "").slice(0, 5)); setError(""); }}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          className="min-w-0 flex-1 rounded-xl bg-white px-4 py-3 text-base text-[#0A2A4F] placeholder:text-[#0A2A4F]/40 focus:outline-none focus:ring-2 focus:ring-[#38B6C9]"
        />
        <button
          onClick={submit}
          className="shrink-0 rounded-xl bg-gradient-to-r from-[#2B5BA8] to-[#38B6C9] px-5 py-3 font-semibold hover:opacity-90 transition cursor-pointer"
        >
          See options
        </button>
      </div>
      {error && <p role="alert" className="text-sm text-[#FFB4A8] mt-2">{error}</p>}
    </section>
  );
}
