/*
 * HTTP content negotiation for Markdown (RFC 9110 §12.5.1).
 * Returns true only when the client explicitly lists text/markdown and ranks
 * it at least as high as HTML. Wildcards never select Markdown, so browsers
 * (which send text/html and *\/*) always keep getting HTML.
 */
type Range = { type: string; q: number };

function parseAccept(header: string): Range[] {
  return header
    .split(",")
    .map((part) => {
      const [rawType, ...params] = part.trim().split(";");
      let q = 1;
      for (const p of params) {
        const [k, v] = p.trim().split("=");
        if (k?.toLowerCase() === "q") {
          const n = Number(v);
          q = Number.isFinite(n) ? Math.min(Math.max(n, 0), 1) : 1;
        }
      }
      return { type: (rawType || "").trim().toLowerCase(), q };
    })
    .filter((r) => r.type.length > 0);
}

export function prefersMarkdown(accept: string | null | undefined): boolean {
  if (!accept) return false;
  const ranges = parseAccept(accept);
  const qOf = (types: string[]) =>
    ranges.filter((r) => types.includes(r.type)).reduce((m, r) => Math.max(m, r.q), -1);
  const md = qOf(["text/markdown", "text/x-markdown"]);
  if (md <= 0) return false;
  const html = qOf(["text/html", "application/xhtml+xml"]);
  return md >= html;
}
