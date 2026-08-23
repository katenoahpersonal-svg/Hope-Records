import { Badge } from "./Badge";
import type { DocumentRecord } from "@/lib/types";

export function DocumentCard({ item }: { item: DocumentRecord }) {
  return (
    <article className="documentCard">
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
        <a className="documentSourceLink" href={item.url} target="_blank" rel="noreferrer">
          Open source record ↗
        </a>
      ) : (
        <p className="documentPending">Underlying public file still being located.</p>
      )}
    </article>
  );
}
