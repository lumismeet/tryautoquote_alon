import type { Reference } from "@/lib/blogs";

// Renders the sources pulled out of a post's "## References" section as a
// compact, numbered citation footer with external links. Quieter than the
// checkmark bullet lists used in the article body so it reads as citations.
export default function References({ references }: { references: Reference[] }) {
  if (references.length === 0) return null;

  return (
    <section id="references" className="mt-14 border-t border-[#0A2A4F]/10 pt-8">
      <h2 className="text-sm font-bold uppercase tracking-widest text-[#0A2A4F]/50 mb-5">
        References
      </h2>
      <ol className="space-y-1 text-sm text-[#0A2A4F]/55">
        {references.map((ref, i) => (
          <li
            key={ref.url}
            id={`ref-${i + 1}`}
            className="flex gap-3 leading-relaxed scroll-mt-28"
          >
            <span className="text-[#0A2A4F]/35 tabular-nums shrink-0">{i + 1}.</span>
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2B5BA8] hover:underline break-words"
            >
              {ref.label}
              <span aria-hidden className="ml-1 text-[#2B5BA8]/50">&#8599;</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
