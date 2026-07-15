"use client";

import { useRef } from "react";
import type { Heading } from "@/lib/blogs";

export default function MobileTableOfContents({ headings }: { headings: Heading[] }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  if (headings.length === 0) return null;

  // Collapse the disclosure after the user jumps to a section.
  const handleJump = () => {
    if (detailsRef.current) detailsRef.current.open = false;
  };

  return (
    <details
      ref={detailsRef}
      className="lg:hidden group mb-8 rounded-xl border border-[#0A2A4F]/10 bg-white"
    >
      <summary className="flex items-center justify-between cursor-pointer list-none px-4 py-3 text-sm font-bold text-[#0A2A4F] select-none">
        Jump to
        <svg
          className="w-4 h-4 text-[#0A2A4F]/50 transition-transform group-open:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <ul className="px-2 pb-2 space-y-0.5 border-t border-[#0A2A4F]/10 pt-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={handleJump}
              className="block px-3 py-2 rounded-lg text-xs font-medium leading-snug text-[#0A2A4F]/60 hover:text-[#0A2A4F] hover:bg-[#0A2A4F]/5 transition-colors"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
