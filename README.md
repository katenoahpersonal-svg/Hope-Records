# The Living Record

A public-interest archive connecting cases, verified records, attributed testimony, timelines, people, places, source trails, and unanswered investigative questions.

## Current priority investigations

As of the Aug. 23, 2026 source review, the homepage centers three evidence-first case files:

- **Nolan Xavier Wells** — unresolved death / timeline and forensic-record reconstruction
- **Latarsha Sanders** — Massachusetts Supreme Judicial Court new-trial ruling / psychiatric-evidence record
- **Keshia Golden** — active Cook County self-defense prosecution / domestic-violence record review

Each case page deliberately separates **verified facts**, **official or party accounts**, **disputed claims**, **unverified information**, and **investigative questions**. Source links are visible so the evidentiary basis can be checked rather than hidden behind summary prose.

## Local development

Use Node.js 20.9+ (Node 22 recommended).

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## GitHub Pages deployment

This repository is preconfigured for GitHub Pages, including project sites hosted under a repository subpath such as:

`https://YOUR-USERNAME.github.io/Hope-Records/`

The GitHub Action automatically detects the repository name and configures the correct Next.js `basePath` and asset path during deployment.

### One-time GitHub setting

In the repository go to:

**Settings → Pages → Build and deployment → Source → GitHub Actions**

Then push to `main` (or run the Pages workflow manually from the Actions tab).

Do **not** choose “Deploy from a branch.” That mode can publish repository documentation instead of building the Next.js application.

## Included interface

- Responsive editorial homepage
- Three featured priority investigations
- Evidence-first static case routes at `/cases/[slug]/`
- Verified/disputed/unverified/investigative-question labels
- Source-backed chronologies and visible source trails
- User-supplied research media with provenance/republication cautions
- Document Vault at `/vault/`
- Privacy-first Share Story prototype at `/share/`
- Starter Supabase/Postgres relational schema in `supabase/schema.sql`
- `SECURITY.md` with pre-launch requirements for sensitive submissions

## Editorial rule

Publication should never collapse an allegation into a fact. Primary records are preferred; secondary reporting is attributed; party and advocacy sources are labeled; uncertainty stays visible. User-supplied photographs are research media, not proof of identity or relationship, and photographer/source/republication rights should be confirmed before broader reuse.
