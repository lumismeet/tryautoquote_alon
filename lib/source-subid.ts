import { HUBS, hubForGuide, hubForPost } from "@/lib/hubs";

// Partner sub ID for the page a visitor came from (the last content page before
// the quote flow). One value per site section, so partners can see performance
// by segment: taq_coverage, taq_cost, taq_claims, taq_drivers, taq_buying,
// taq_states, taq_pillar, taq_home, taq_tools, taq_blog, taq_guides, taq_direct, taq_other.
const HUB_SLUGS = new Set(HUBS.map((h) => h.slug as string));

export function sourceSubId(sourcePath: string | null | undefined): string {
  if (!sourcePath || sourcePath === "direct") return "taq_direct";
  const path = sourcePath.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
  if (path === "/") return "taq_home";
  if (path === "/tools") return "taq_tools";
  if (path === "/blogs") return "taq_blog";
  if (path === "/guides") return "taq_guides";
  if (path === "/car-insurance") return "taq_pillar";

  let m = path.match(/^\/blogs\/([a-z0-9-]+)$/);
  if (m) return `taq_${hubForPost(m[1])?.slug ?? "blog"}`;

  m = path.match(/^\/guides\/([a-z0-9-]+)$/);
  if (m) return `taq_${hubForGuide(path)?.slug ?? "guides"}`;

  m = path.match(/^\/car-insurance\/([a-z0-9-]+)$/);
  if (m) return HUB_SLUGS.has(m[1]) ? `taq_${m[1]}` : "taq_states";

  return "taq_other";
}
