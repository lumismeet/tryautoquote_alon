// Partner postback endpoint (Natural Intelligence, BestQuotes, future partners).
//
//   GET or POST  https://<project>.supabase.co/functions/v1/postback
//                ?partner=bestquotes&key=<partner token>&txid=<our click id>&event=lead&revenue=4.20
//
// Each partner gets its own token (table postback_partners). Requests with a
// missing or wrong token are rejected. Every accepted event is stored in
// partner_postbacks with the original parameters (minus the token).
import { createClient } from "jsr:@supabase/supabase-js@2";
import { normalize, storableParams, type Params } from "./normalize.ts";

const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

const reply = (status: number, body: string) =>
  new Response(body, { status, headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });

async function readParams(req: Request): Promise<Params> {
  const params: Params = Object.fromEntries(new URL(req.url).searchParams);
  if (req.method === "POST") {
    const type = req.headers.get("content-type") ?? "";
    try {
      if (type.includes("application/json")) {
        const body = await req.json();
        if (body && typeof body === "object") for (const [k, v] of Object.entries(body)) params[k] = String(v);
      } else if (type.includes("form")) {
        for (const [k, v] of (await req.formData()).entries()) params[k] = String(v);
      }
    } catch {
      /* ignore a malformed body; query parameters still apply */
    }
  }
  return params;
}

Deno.serve(async (req) => {
  if (req.method !== "GET" && req.method !== "POST") return reply(405, "method not allowed");

  const params = await readParams(req);
  const partner = (params.partner ?? "").toLowerCase();
  if (!partner || !params.key) return reply(400, "missing partner or key");

  const { data: p, error: pErr } = await supabase
    .from("postback_partners").select("token, active").eq("partner", partner).maybeSingle();
  if (pErr) return reply(500, "error");
  if (!p || !p.active || p.token !== params.key) return reply(401, "unauthorized");

  const n = normalize(params);
  if (!n.ok) return reply(400, n.error);

  const { error } = await supabase.from("partner_postbacks").insert({
    partner,
    event: n.event,
    transaction_id: n.transaction_id,
    revenue: n.revenue,
    currency: n.currency,
    params: storableParams(params),
    ip: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null,
    user_agent: req.headers.get("user-agent"),
  });
  if (error) return reply(500, "error");
  return reply(200, "ok");
});
