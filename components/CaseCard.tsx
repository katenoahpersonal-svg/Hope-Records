import Link from "next/link";
import type { CaseRecord } from "@/lib/types";

export function CaseCard({ item }: { item: CaseRecord }) {
  return (
    <article className="caseCard priorityCard">
      <div className="casePortrait">
        <img src={item.heroImage} alt={`${item.name} — user-supplied research photograph`} />
        <span className="casePortraitFlag">FEATURED FILE</span>
      </div>
      <div className="caseCardBody">
        <div className="caseCardHeading">
          <h3>{item.name}</h3>
          <span className="caseStatus">{item.status}</span>
        </div>
        <p className="caseMeta">{item.dateLabel} · {item.location}</p>
        <p>{item.summary}</p>
        <div className="caseTagRow">{item.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
        <Link href={`/cases/${item.slug}`}>Open evidence file →</Link>
      </div>
    </article>
  );
}
