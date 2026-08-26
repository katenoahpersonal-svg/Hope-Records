import Link from "next/link";

const nodes = [
  ["RECORD", "Documents and files", "/vault"],
  ["PEOPLE", "Individuals and communities", "/investigations"],
  ["LOCATION", "Places that matter", "/#map"],
  ["EVENT", "What happened and when", "/investigations"],
  ["IMPACT", "Ongoing effects and accountability", "/topics/questioned-findings"]
];

export function RecordGraph() {
  return (
    <section className="recordGraph">
      <p className="eyebrow">How the record connects</p>
      <p className="graphIntro">Cases are built from records, people, locations, events, and claims.</p>
      <div className="graphNodes">
        {nodes.map(([label, description, href], index) => (
          <div className="graphNodeWrap" key={label}>
            <Link className="graphNode graphNodeLink" href={href}>
              <strong>{label}</strong>
              <small>{description}</small>
              <span aria-hidden="true">Open →</span>
            </Link>
            {index < nodes.length - 1 && <span className="graphConnector" aria-hidden="true">→</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
