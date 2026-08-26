import Link from "next/link";
import type { CaseRecord } from "@/lib/types";
import { applyEditorialOverrides } from "@/lib/editorial-overrides";
import { applyCurrentCaseUpdates } from "@/lib/current-updates";
import { applyCaseMediaOverrides } from "@/lib/media-overrides";

export function CaseCard({ item }: { item: CaseRecord }) {
  const displayItem = applyCaseMediaOverrides(applyCurrentCaseUpdates(applyEditorialOverrides(item)));

  return (
    <Link className="caseCardLink" href={`/cases/${displayItem.slug}`} aria-label={`Open ${displayItem.name} record`}>
      <article className="caseCard priorityCard">
        <div className="casePortrait">
          <img src={displayItem.heroImage} alt={`${displayItem.name} case photograph`} />
          <span className="casePortraitFlag">FEATURED FILE</span>
        </div>
        <div className="caseCardBody">
          <div className="caseCardHeading">
            <h3>{displayItem.name}</h3>
            <span className="caseStatus">{displayItem.status}</span>
          </div>
          <p className="caseMeta">{displayItem.dateLabel} · {displayItem.location}</p>
          <p className="compactCaseSummary">{displayItem.summary}</p>
          <div className="caseTagRow">{displayItem.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
          <span className="caseOpenLink">Open record →</span>
        </div>
      </article>
    </Link>
  );
}
