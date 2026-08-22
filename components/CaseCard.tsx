import Link from "next/link";
import type { CaseRecord } from "@/lib/types";

export function CaseCard({ item }: { item: CaseRecord }) {
  return (
    <article className="caseCard">
      <div className="portraitPlaceholder" aria-hidden="true">
        <span>{item.name.split(" ").map((word) => word[0]).join("")}</span>
      </div>
      <div className="caseCardBody">
        <div className="caseCardHeading">
          <h3>{item.name}</h3>
          <span className="caseStatus">{item.status}</span>
        </div>
        <p className="caseMeta">{item.dateLabel} · {item.location}</p>
        <p>{item.summary}</p>
        <Link href={`/cases/${item.slug}`}>View case →</Link>
      </div>
    </article>
  );
}
