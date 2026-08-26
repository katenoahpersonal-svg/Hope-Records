import { Badge } from "./Badge";
import type { DocumentRecord } from "@/lib/types";

function getCoverLabel(item: DocumentRecord) {
  const text = `${item.title} ${item.type}`.toLowerCase();
  if (text.includes("opinion")) return "COURT OPINION";
  if (text.includes("docket")) return "COURT DOCKET";
  if (text.includes("subpoena") || text.includes("filing")) return "FILED RECORD";
  if (text.includes("autopsy") || text.includes("forensic")) return "FORENSIC REVIEW";
  if (text.includes("prosecutorial") || text.includes("grand jury")) return "OFFICIAL RECORD";
  if (text.includes("domestic-violence") || text.includes("protection-order")) return "RECORD SET";
  return "PUBLIC RECORD";
}

function getCoverClass(item: DocumentRecord) {
  const label = getCoverLabel(item).toLowerCase();
  if (label.includes("court")) return "documentCoverCourt";
  if (label.includes("forensic")) return "documentCoverForensic";
  if (label.includes("official")) return "documentCoverOfficial";
  if (label.includes("filed")) return "documentCoverFiled";
  return "documentCoverArchive";
}

function DocumentCover({ item }: { item: DocumentRecord }) {
  if (item.coverImage) {
    return (
      <div className="documentCover documentCoverImage">
        <img src={item.coverImage} alt={`First-page preview of ${item.title}`} loading="lazy" />
      </div>
    );
  }

  return (
    <div className={`documentCover documentCoverGenerated ${getCoverClass(item)}`} aria-hidden="true">
      <div className="documentPaper">
        <div className="documentPaperTopline">
          <span>{item.issuer}</span>
          <b>{item.date}</b>
        </div>
        <div className="documentPaperRule" />
        <span className="documentPaperType">{getCoverLabel(item)}</span>
        <h4>{item.title}</h4>
        <p>{item.relatedCase}</p>
        <div className="documentPaperLines">
          <i /><i /><i /><i /><i />
        </div>
        <div className="documentPaperFooter">
          <span>ARCHIVAL PREVIEW</span>
          <b>HR</b>
        </div>
      </div>
    </div>
  );
}

function DocumentContents({ item }: { item: DocumentRecord }) {
  return (
    <>
      <DocumentCover item={item} />
      <div className="documentCardCopy">
        <h3>{item.title}</h3>
        <p>{item.type} · {item.date}</p>
        <p className="documentIssuer">{item.issuer}</p>
        <div className="badgeRow">
          {item.status.map((status) => <Badge key={status}>{status}</Badge>)}
        </div>
        {item.url ? (
          <span className="documentSourceLink">Open source record ↗</span>
        ) : (
          <p className="documentPending">Underlying public file still being located.</p>
        )}
      </div>
    </>
  );
}

export function DocumentCard({ item }: { item: DocumentRecord }) {
  if (item.url) {
    return (
      <a className="documentCard documentCardLink" href={item.url} target="_blank" rel="noreferrer" aria-label={`Open source record: ${item.title}`}>
        <DocumentContents item={item} />
      </a>
    );
  }

  return (
    <article className="documentCard">
      <DocumentContents item={item} />
    </article>
  );
}
