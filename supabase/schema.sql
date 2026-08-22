-- THE LIVING RECORD — starter relational schema
-- Run only after creating a Supabase project and reviewing these policies.
-- Sensitive submissions are intentionally isolated from public editorial data.

create extension if not exists pgcrypto;

create type public.record_visibility as enum ('public', 'restricted', 'private');
create type public.review_state as enum ('draft', 'review', 'published', 'rejected', 'archived');
create type public.evidence_label as enum (
  'primary_record', 'verified', 'corroborated', 'first_person_account',
  'reported_allegation', 'disputed', 'unverified', 'investigative_question'
);

create table public.cases (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  summary text,
  official_status text,
  review_state public.review_state not null default 'draft',
  visibility public.record_visibility not null default 'restricted',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.people (
  id uuid primary key default gen_random_uuid(),
  display_name text not null,
  is_public_figure boolean not null default false,
  notes text,
  created_at timestamptz not null default now()
);

create table public.locations (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  city text,
  region text,
  country text,
  public_lat numeric,
  public_lng numeric,
  precision text not null default 'generalized',
  created_at timestamptz not null default now()
);

create table public.documents (
  id uuid primary key default gen_random_uuid(),
  case_id uuid references public.cases(id) on delete set null,
  title text not null,
  document_type text,
  issuer text,
  source_url text,
  source_date date,
  storage_path text,
  file_sha256 text,
  visibility public.record_visibility not null default 'restricted',
  review_state public.review_state not null default 'draft',
  created_at timestamptz not null default now()
);

create table public.document_labels (
  document_id uuid references public.documents(id) on delete cascade,
  label public.evidence_label not null,
  primary key (document_id, label)
);

create table public.events (
  id uuid primary key default gen_random_uuid(),
  case_id uuid not null references public.cases(id) on delete cascade,
  occurred_at timestamptz,
  date_precision text not null default 'exact',
  title text not null,
  description text,
  review_state public.review_state not null default 'draft',
  created_at timestamptz not null default now()
);

create table public.claims (
  id uuid primary key default gen_random_uuid(),
  case_id uuid not null references public.cases(id) on delete cascade,
  statement text not null,
  label public.evidence_label not null,
  review_state public.review_state not null default 'draft',
  created_at timestamptz not null default now()
);

create table public.claim_sources (
  claim_id uuid references public.claims(id) on delete cascade,
  document_id uuid references public.documents(id) on delete cascade,
  locator text,
  primary key (claim_id, document_id)
);

create table public.case_people (
  case_id uuid references public.cases(id) on delete cascade,
  person_id uuid references public.people(id) on delete cascade,
  role_label text not null,
  primary key (case_id, person_id, role_label)
);

create table public.case_locations (
  case_id uuid references public.cases(id) on delete cascade,
  location_id uuid references public.locations(id) on delete cascade,
  relationship_label text not null,
  primary key (case_id, location_id, relationship_label)
);

-- PRIVATE INTAKE: deliberately separate from public.cases / public.claims.
-- Do not build a public SELECT policy for these rows.
create table public.private_submissions (
  id uuid primary key default gen_random_uuid(),
  created_by uuid references auth.users(id) on delete set null,
  submission_kind text not null,
  story_text text not null,
  contact_ciphertext text,
  identity_ciphertext text,
  precise_location_ciphertext text,
  consent_publish boolean not null default false,
  consent_contact boolean not null default false,
  consent_aggregate boolean not null default false,
  requested_public_identity text not null default 'private',
  review_state public.review_state not null default 'review',
  created_at timestamptz not null default now()
);

alter table public.cases enable row level security;
alter table public.people enable row level security;
alter table public.locations enable row level security;
alter table public.documents enable row level security;
alter table public.document_labels enable row level security;
alter table public.events enable row level security;
alter table public.claims enable row level security;
alter table public.claim_sources enable row level security;
alter table public.case_people enable row level security;
alter table public.case_locations enable row level security;
alter table public.private_submissions enable row level security;

-- Public website can read only explicitly published/public editorial records.
create policy "published cases are public"
on public.cases for select to anon, authenticated
using (review_state = 'published' and visibility = 'public');

create policy "published documents are public"
on public.documents for select to anon, authenticated
using (review_state = 'published' and visibility = 'public');

create policy "published events are public"
on public.events for select to anon, authenticated
using (review_state = 'published');

create policy "published claims are public"
on public.claims for select to anon, authenticated
using (review_state = 'published');

-- Authenticated users may create a private submission tied to themselves.
-- For truly anonymous intake, use a dedicated server/Edge Function with abuse
-- protection and encryption rather than granting anonymous browser inserts.
create policy "users can create their own private submission"
on public.private_submissions for insert to authenticated
with check ((select auth.uid()) = created_by);

create policy "users can view their own private submission"
on public.private_submissions for select to authenticated
using ((select auth.uid()) = created_by);

-- NOTE: Editorial/admin write policies are intentionally NOT included here.
-- Add role-based policies only after defining trusted staff roles in app metadata.
