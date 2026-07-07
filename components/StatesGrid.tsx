"use client";

import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Suspense } from "react";
import type { states as StatesType } from "@/lib/states";

const PAGE_SIZE = 8;

function StatesGridInner({ states }: { states: typeof StatesType }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const query = searchParams.get("q") ?? "";
  const filtered = query
    ? states
        .filter((s) => s.name.toLowerCase().includes(query.toLowerCase()))
        .sort((a, b) => {
          const q = query.toLowerCase();
          const aStarts = a.name.toLowerCase().startsWith(q);
          const bStarts = b.name.toLowerCase().startsWith(q);
          if (aStarts && !bStarts) return -1;
          if (!aStarts && bStarts) return 1;
          return a.name.localeCompare(b.name);
        })
    : states;

  const page = Math.max(1, Number(searchParams.get("page") ?? "1"));
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const shown = filtered.slice(start, start + PAGE_SIZE);

  function goTo(n: number) {
    const params = new URLSearchParams(searchParams.toString());
    if (n === 1) {
      params.delete("page");
    } else {
      params.set("page", String(n));
    }
    const qs = params.toString();
    router.replace(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false });
  }

  function onSearch(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    params.delete("page");
    const qs = params.toString();
    router.replace(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false });
  }

  return (
    <div>
      <div className="mb-5">
        <input
          type="text"
          value={query}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search states..."
          className="w-full bg-white border border-[#0A2A4F]/10 rounded-xl px-4 py-3 text-sm text-[#0A2A4F] placeholder-[#0A2A4F]/35 focus:outline-none focus:ring-2 focus:ring-[#2B5BA8]/30 transition"
        />
      </div>

      {filtered.length === 0 && (
        <p className="text-center py-10 text-sm text-[#0A2A4F]/40">No states match &quot;{query}&quot;</p>
      )}

      <div className="space-y-4 mb-8">
        {shown.map((state) => (
          <Link
            key={state.slug}
            href={`/car-insurance/${state.slug}`}
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white hover:bg-[#EBF2FB] border border-[#0A2A4F]/8 rounded-2xl px-6 py-5 transition"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <p className="font-semibold text-[#0A2A4F] group-hover:text-[#2B5BA8] transition text-lg">
                  {state.name}
                </p>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  state.faultSystem === "no-fault"
                    ? "bg-[#38B6C9]/15 text-[#38B6C9]"
                    : "bg-[#2B5BA8]/10 text-[#2B5BA8]"
                }`}>
                  {state.faultSystem === "no-fault" ? "No-fault" : "At-fault"}
                </span>
                {state.creditBanned && (
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#E8732A]/10 text-[#E8732A]">
                    Credit ban
                  </span>
                )}
              </div>
              <p className="text-sm text-[#0A2A4F]/55">
                Min. <span className="font-medium text-[#0A2A4F]/70">{state.minDisplay}</span>
                <span className="mx-2 text-[#0A2A4F]/25">·</span>
                {state.indexNote}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-[#2B5BA8] shrink-0 opacity-40 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition" />
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1.5">
          <button
            onClick={() => goTo(safePage - 1)}
            disabled={safePage === 1}
            className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-[#0A2A4F]/50 hover:text-[#2B5BA8] hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            <ChevronLeft className="w-4 h-4" /> Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => goTo(n)}
              className={`w-9 h-9 rounded-lg text-sm font-semibold transition ${
                n === safePage
                  ? "bg-[#2B5BA8] text-white"
                  : "text-[#0A2A4F]/60 hover:text-[#2B5BA8] hover:bg-white"
              }`}
            >
              {n}
            </button>
          ))}

          <button
            onClick={() => goTo(safePage + 1)}
            disabled={safePage === totalPages}
            className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-[#0A2A4F]/50 hover:text-[#2B5BA8] hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {safePage === totalPages && !query && (
        <p className="text-center mt-6 text-sm text-[#0A2A4F]/40 tracking-wide">
          More states coming soon
        </p>
      )}
    </div>
  );
}

export default function StatesGrid({ states }: { states: typeof StatesType }) {
  return (
    <Suspense>
      <StatesGridInner states={states} />
    </Suspense>
  );
}
