// Normalizes a partner postback into one row shape. Pure TypeScript (no Deno or
// Node APIs) so the Next.js test suite can test it and the Edge Function can use it.
//
// Each partner may name its fields differently, so we accept common aliases:
//   transaction id: txid, transaction_id, tid, click_id, clickid, sub_id, subid, pub_param_2
//   event:          event, type, event_type   (click | lead | sale | clickout | conversion)
//   revenue:        revenue, payout, amount, commission
// Natural Intelligence sends pub_param_2 (our click ID) and payout with lead/sale
// counts; with no explicit event we record it as "conversion".

export type Params = Record<string, string>;

export type Normalized =
  | { ok: true; event: string; transaction_id: string; revenue: number | null; currency: string }
  | { ok: false; error: string };

const TXID_KEYS = ["txid", "transaction_id", "tid", "click_id", "clickid", "sub_id", "subid", "pub_param_2"];
const EVENT_KEYS = ["event", "type", "event_type"];
const REVENUE_KEYS = ["revenue", "payout", "amount", "commission"];
const EVENTS = new Set(["click", "lead", "sale", "clickout", "conversion"]);

const first = (p: Params, keys: string[]) => {
  for (const k of keys) {
    const v = p[k];
    if (v !== undefined && String(v).trim() !== "" && !/^\{.*\}$/.test(String(v).trim())) return String(v).trim();
  }
  return undefined;
};

export function normalize(params: Params): Normalized {
  const transaction_id = first(params, TXID_KEYS);
  if (!transaction_id) return { ok: false, error: "missing transaction id" };
  if (transaction_id.length > 200) return { ok: false, error: "transaction id too long" };

  const rawEvent = (first(params, EVENT_KEYS) ?? "conversion").toLowerCase();
  if (!EVENTS.has(rawEvent)) return { ok: false, error: `unknown event: ${rawEvent}` };

  const rawRevenue = first(params, REVENUE_KEYS);
  let revenue: number | null = null;
  if (rawRevenue !== undefined) {
    const n = Number(rawRevenue.replace(/[$,\s]/g, ""));
    if (!Number.isFinite(n) || n < 0) return { ok: false, error: "invalid revenue" };
    revenue = Math.round(n * 10000) / 10000;
  }

  const currency = (params.currency ?? "USD").toUpperCase().slice(0, 3);
  return { ok: true, event: rawEvent, transaction_id, revenue, currency };
}

// Never store the shared secret.
export function storableParams(params: Params): Params {
  const { key: _key, ...rest } = params;
  return rest;
}
