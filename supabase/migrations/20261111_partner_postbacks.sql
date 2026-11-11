-- Partner postbacks: one row per event a partner reports for one of our clicks.
create table if not exists public.postback_partners (
  partner    text primary key,
  token      text not null,
  active     boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.partner_postbacks (
  id             bigint generated always as identity primary key,
  partner        text not null references public.postback_partners(partner),
  event          text not null check (event in ('click', 'lead', 'sale', 'clickout', 'conversion')),
  transaction_id text not null,
  revenue        numeric(12, 4),
  currency       text not null default 'USD',
  params         jsonb not null default '{}'::jsonb,
  ip             text,
  user_agent     text,
  received_at    timestamptz not null default now()
);

create index if not exists partner_postbacks_txid_idx on public.partner_postbacks (transaction_id);
create index if not exists partner_postbacks_partner_time_idx on public.partner_postbacks (partner, received_at desc);

-- Only the Edge Function (service role) reads or writes these tables.
alter table public.postback_partners enable row level security;
alter table public.partner_postbacks enable row level security;

-- One secret token per partner, generated in the database.
insert into public.postback_partners (partner, token)
values ('bestquotes', replace(gen_random_uuid()::text, '-', '')),
       ('ni',         replace(gen_random_uuid()::text, '-', ''))
on conflict (partner) do nothing;

-- Daily summary per partner and event.
create or replace view public.partner_postbacks_daily
with (security_invoker = true) as
select partner, event, (received_at at time zone 'America/New_York')::date as day_et,
       count(*) as events, count(distinct transaction_id) as transactions, sum(revenue) as revenue
from public.partner_postbacks
group by 1, 2, 3;
