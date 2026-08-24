import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { CaseWorkspaceTabs } from "@/components/CaseWorkspaceTabs";
import { cases } from "@/lib/mock-data";
import { applyEditorialOverrides } from "@/lib/editorial-overrides";
import { applyCurrentCaseUpdates } from "@/lib/current-updates";
import { applyCaseMediaOverrides } from "@/lib/media-overrides";

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const baseItem = cases.find((entry) => entry.slug === slug);
  if (!baseItem) notFound();
  const item = applyCaseMediaOverrides(applyCurrentCaseUpdates(applyEditorialOverrides(baseItem)));

  return (
    <main className="appShell">
      <Header />
      <div className="casePage researchedCasePage compactResearchedCasePage">
        <Link className="backLink compactBackLink" href="/">← Back to Hope Record</Link>

        <header className="caseHero caseHeroWithMedia compactCaseHero">
          <div>
            <span className="caseStatus">{item.status}</span>
            <p className="eyebrow caseFileEyebrow">Hope Record case file · evidence review Aug. 24, 2026</p>
            <h1>{item.name}</h1>
            <p className="caseLocationLine">{item.location} · {item.dateLabel}</p>
            <p className="caseHeroSummary">{item.summary}</p>
            <div className="caseTagRow heroTags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
          <figure className="caseHeroPortrait compactHeroPortrait">
            <img src={item.heroImage} alt={`${item.name} case photograph`} />
          </figure>
        </header>

        <CaseWorkspaceTabs item={item} />
      </div>
    </main>
  );
}
