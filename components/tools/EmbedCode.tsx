"use client";

import { useState } from "react";
import { embedCode, type ToolSlug } from "@/lib/tools";

// "Add this calculator to your site": shows the embed snippet with a copy button.
export default function EmbedCode({ slug }: { slug: ToolSlug }) {
  const code = embedCode(slug);
  const [copied, setCopied] = useState(false);
  return (
    <details id={`embed-${slug}`} className="group mt-3 rounded-xl border border-[#0A2A4F]/10 bg-white">
      <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-[#2B5BA8] [&::-webkit-details-marker]:hidden">
        &lt;/&gt; Add this calculator to your site
      </summary>
      <div className="px-4 pb-4">
        <p className="text-sm text-[#0A2A4F]/75 mb-2">Free to use on your website or blog. Copy this code and paste it into your page.</p>
        <textarea readOnly value={code} rows={5} onFocus={(e) => e.currentTarget.select()}
          className="w-full rounded-lg border border-[#0A2A4F]/15 bg-[#F4F7FB] p-3 font-mono text-xs text-[#0A2A4F]" aria-label="Embed code" />
        <button type="button" onClick={async () => { try { await navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { /* ignore */ } }}
          className="mt-2 rounded-full bg-[#2B5BA8] px-4 py-2 text-sm font-semibold text-white">
          {copied ? "Copied" : "Copy code"}
        </button>
      </div>
    </details>
  );
}
