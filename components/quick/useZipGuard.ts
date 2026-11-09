"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "@/context/FormContext";

// Sends visitors without a valid ZIP back to the ZIP step.
export function useZipGuard() {
  const router = useRouter();
  const { formData, hydrated } = useForm();
  useEffect(() => {
    if (hydrated && !/^\d{5}$/.test(formData.zipcode ?? "")) router.replace("/quote/1_map");
  }, [hydrated, formData.zipcode, router]);
}
