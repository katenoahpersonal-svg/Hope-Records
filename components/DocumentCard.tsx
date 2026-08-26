import { Badge } from "./Badge";
import type { DocumentRecord } from "@/lib/types";

function DocumentContents({ item }: { item: DocumentRecord }) {
  return (
    <>
      <div className="documentThumb" aria-hidden="true">
        <span /> <span /> <span /> <span /> <span />
      </div>
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
