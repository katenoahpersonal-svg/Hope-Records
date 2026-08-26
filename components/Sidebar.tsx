import Link from "next/link";

const topics = [
  ["Unresolved Cases", "/topics/unresolved-cases"],
  ["Missing Persons", "/topics/missing-persons"],
  ["Questioned Findings", "/topics/questioned-findings"],
  ["Survivor Accounts", "/topics/survivor-accounts"],
  ["Historical Records", "/topics/historical-records"],
  ["Family Oral Histories", "/topics/family-oral-histories"],
];

export function Sidebar() {
  return (
    <aside className="sidebar" id="explore">
      <p className="eyebrow">Explore by topic</p>
      <div className="topicList">
        {topics.map(([label, href], index) => (
          <Link className={`topic topic-${index + 1}`} key={label} href={href}>
            <span>{label}</span>
            <b aria-hidden="true">→</b>
          </Link>
        ))}
      </div>
      <blockquote>
        <p>Justice is not a moment. It is a record we build together.</p>
      </blockquote>
    </aside>
  );
}
