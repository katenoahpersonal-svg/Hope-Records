import Link from "next/link";
import type { CaseRecord } from "@/lib/types";
import { applyEditorialOverrides } from "@/lib/editorial-overrides";

export function CaseCard({ item }: { item: CaseRecord }) {
  const displayItem = applyEditorialOverrides(item);

  return (
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
        <p>{displayItem.summary}</p>
        <div className="caseTagRow">{displayItem.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
        <Link href={`/cases/${displayItem.slug}`}>Open evidence file →</Link>
      </div>
    </article>
  );
}
