const nodes = [
  ["▤", "RECORD", "Documents and files"],
  ["◎", "PEOPLE", "Individuals and communities"],
  ["⌖", "LOCATION", "Places that matter"],
  ["□", "EVENT", "What happened and when"],
  ["⚖", "IMPACT", "Ongoing effects and accountability"]
];

export function RecordGraph() {
  return (
    <section className="recordGraph">
      <p className="eyebrow">How the record connects</p>
      <p className="graphIntro">Cases are built from records, people, locations, events, and claims.</p>
      <div className="graphNodes">
        {nodes.map(([icon, label, description], index) => (
          <div className="graphNodeWrap" key={label}>
            <div className="graphNode">
              <span className="graphIcon" aria-hidden="true">{icon}</span>
              <strong>{label}</strong>
              <small>{description}</small>
            </div>
            {index < nodes.length - 1 && <span className="graphConnector" aria-hidden="true">→</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
