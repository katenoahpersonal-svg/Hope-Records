import Link from "next/link";
import type { CaseRecord } from "@/lib/types";
import { applyEditorialOverrides } from "@/lib/editorial-overrides";
import { getCaseHeroImage } from "@/lib/display-media";

export function CaseCard({ item }: { item: CaseRecord }) {
  const displayItem = applyEditorialOverrides(item);
  const heroImage = getCaseHeroImage(displayItem);

  return (
    <article className="caseCard priorityCard compactPriorityCard">
      <div className="casePortrait compactCasePortrait">
        <img src={heroImage} alt={`${displayItem.name} case photograph`} />
        <span className="casePortraitFlag">FEATURED RECORD</span>
      </div>
      <div className="caseCardBody compactCaseCardBody">
        <div className="caseCardHeading">
          <h3>{displayItem.name}</h3>
          <span className="caseStatus">{displayItem.status}</span>
        </div>
        <p className="caseMeta">{displayItem.location}</p>
        <p className="compactCaseSummary">{displayItem.summary}</p>
        <Link href={`/cases/${displayItem.slug}`}>Open living record →</Link>
      </div>
    </article>
  );
}
