# The Living Record

A public-interest archive prototype connecting cases, verified records, testimony, timelines, people, places, and investigative questions.

## Local development

Use Node.js 20.9+ (Node 22 recommended).

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## GitHub Pages deployment

This repository is preconfigured for GitHub Pages, including project sites hosted under a repository subpath such as:

`https://YOUR-USERNAME.github.io/Hope/`

The GitHub Action automatically detects the repository name and configures the correct Next.js `basePath` and asset path during deployment.

### One-time GitHub setting

In the repository go to:

**Settings → Pages → Build and deployment → Source → GitHub Actions**

Then push to `main` (or run the Pages workflow manually from the Actions tab).

Do **not** choose “Deploy from a branch.” That mode can publish this README instead of building the Next.js application.

## Included prototype

- Responsive editorial homepage
- Explore-topic sidebar and map preview
- Featured case/research workspace cards
- Static case routes at `/cases/[slug]/`
- Document Vault at `/vault/`
- Privacy-first Share Story prototype at `/share/`
- Evidence labels for primary records, verification, disputes, testimony, and investigative questions
- Starter Supabase/Postgres relational schema in `supabase/schema.sql`
- `SECURITY.md` with pre-launch requirements for sensitive submissions

## Editorial rule

The seed case data is demonstration content and must not be treated as completed reporting. Before publication, factual assertions should be source-linked, reviewed, and dated.
