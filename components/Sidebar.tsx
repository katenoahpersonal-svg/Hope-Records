const topics = [
  ["⚖", "Unresolved Cases"],
  ["○", "Missing Persons"],
  ["?", "Questioned Findings"],
  ["□", "Survivor Accounts"],
  ["▤", "Historical Records"],
  ["◎", "Family Oral Histories"],
];

export function Sidebar() {
  return (
    <aside className="sidebar" id="explore">
      <p className="eyebrow">Explore by topic</p>
      <div className="topicList">
        {topics.map(([icon, label], index) => (
          <button className={`topic topic-${index + 1}`} key={label} type="button">
            <span aria-hidden="true">{icon}</span>
            {label}
          </button>
        ))}
      </div>
      <blockquote>
        <span className="quoteMark">“</span>
        <p>Justice is not a moment. It is a record we build together.</p>
        <footer>— The Living Record</footer>
      </blockquote>
    </aside>
  );
}
