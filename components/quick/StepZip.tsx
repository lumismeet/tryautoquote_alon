"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "@/context/FormContext";
import { track } from "@/lib/analytics";
import QuestionShell from "./QuestionShell";

export default function StepZip() {
  const router = useRouter();
  const { formData, updateForm } = useForm();
  const [zip, setZip] = useState(formData.zipcode ?? "");
  const [error, setError] = useState("");

  const submit = () => {
    if (!/^\d{5}$/.test(zip)) return setError("Please enter a valid 5-digit ZIP code");
    updateForm({ zipcode: zip });
    track("quote_start", { entry: "quote_page" });
    router.push("/quote/1");
  };

  return (
    <QuestionShell title="Where do you park your car?" subtitle="Rates depend on your ZIP code." showBack={false}>
      <div className="w-full max-w-sm space-y-3">
        <input
          type="text"
          inputMode="numeric"
          autoFocus
          placeholder="Enter ZIP code"
          value={zip}
          onChange={(e) => { setZip(e.target.value.replace(/\D/g, "").slice(0, 5)); setError(""); }}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          className="w-full border border-gray-300 rounded-xl px-4 py-4 text-lg text-center text-gray-800 focus:outline-none focus:border-[#2B5BA8]"
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          onClick={submit}
          className="w-full bg-[#2B5BA8] hover:bg-[#E8732A] transition text-white py-4 rounded-xl font-semibold text-lg cursor-pointer"
        >
          Continue
        </button>
        <p className="text-xs text-gray-400">No phone number or email required.</p>
      </div>
    </QuestionShell>
  );
}
