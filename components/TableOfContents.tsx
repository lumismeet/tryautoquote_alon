"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/blogs";

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-100px 0px -70% 0px" }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24 hidden lg:block w-44 lg:flex-1 shrink-0 pl-6">
      <p className="text-sm font-bold text-[#0A2A4F] mb-3 tracking-tight">
        Jump to
      </p>
      <ul className="space-y-0.5">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium leading-snug transition-all ${
                activeId === heading.id
                  ? "bg-[#2B5BA8]/8 text-[#2B5BA8] font-semibold"
                  : "text-[#0A2A4F]/50 hover:text-[#0A2A4F] hover:bg-[#0A2A4F]/5"
              }`}
            >
              {activeId === heading.id && (
                <span className="w-1 h-1 rounded-full bg-[#2B5BA8] shrink-0" />
              )}
              <span className={activeId === heading.id ? "" : "pl-3"}>{heading.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
