import Link from "next/link";

const topics = [
  ["Unresolved Cases", "/#investigations"],
  ["Missing Persons", "/#investigations"],
  ["Questioned Findings", "/#investigations"],
  ["Survivor Accounts", "/share?type=my-story"],
  ["Historical Records", "/vault"],
  ["Family Oral Histories", "/share?type=family-history"],
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
