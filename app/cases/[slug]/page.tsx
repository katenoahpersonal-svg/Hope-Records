import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Badge } from "@/components/Badge";
import { cases, documents } from "@/lib/mock-data";

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = cases.find((entry) => entry.slug === slug);
  if (!item) notFound();

  const relatedDocs = documents.filter((doc) =>
    doc.relatedCase.toLowerCase().includes(item.name.toLowerCase())
  );

  return (
    <main className="appShell">
      <Header />
      <div className="casePage">
        <Link className="backLink" href="/">← Back to the record</Link>
        <header className="caseHero">
          <span className="caseStatus">{item.status}</span>
          <h1>{item.name}</h1>
          <p>{item.location} · {item.dateLabel}</p>
          <p className="caseHeroSummary">{item.summary}</p>
        </header>

        <nav className="caseTabs" aria-label="Case sections">
          <a href="#overview">Overview</a>
          <a href="#timeline">Timeline</a>
          <a href="#evidence">Evidence</a>
          <a href="#questions">Questions</a>
          <a href="#sources">Sources</a>
        </nav>

        <section className="caseWorkspace" id="overview">
          <article className="workspaceCard">
            <p className="eyebrow">Editorial standard</p>
            <h2>Separate the record from the question.</h2>
            <p>Published assertions belong here only after a supporting source is attached. Allegations, testimony, disputed facts, and investigative questions stay visibly labeled.</p>
            <div className="badgeRow roomy">
              <Badge>PRIMARY RECORD</Badge><Badge>VERIFIED</Badge><Badge>DISPUTED</Badge><Badge>INVESTIGATIVE QUESTION</Badge>
            </div>
          </article>

          <article className="workspaceCard" id="timeline">
            <p className="eyebrow">Timeline</p>
            <h2>Chronology</h2>
            <div className="timelinePlaceholder">
              <div><span /> <strong>Source-backed event</strong><small>Date · linked primary record</small></div>
              <div><span /> <strong>Official statement</strong><small>Date · issuing institution</small></div>
              <div><span /> <strong>Later development</strong><small>Date · verified update</small></div>
            </div>
          </article>

          <article className="workspaceCard" id="evidence">
            <p className="eyebrow">Evidence & records</p>
            <h2>Related documents</h2>
            {relatedDocs.length ? relatedDocs.map((doc) => (
              <div className="recordRow" key={doc.id}>
                <div><strong>{doc.title}</strong><small>{doc.type} · {doc.date}</small></div>
                <div className="badgeRow">{doc.status.map((status) => <Badge key={status}>{status}</Badge>)}</div>
              </div>
            )) : <p>No verified documents have been attached to this demo workspace yet.</p>}
          </article>

          <article className="workspaceCard" id="questions">
            <p className="eyebrow">Unanswered questions</p>
            <h2>What needs reporting?</h2>
            <ol className="questionList">
              {item.questions.map((question) => <li key={question}>{question}</li>)}
            </ol>
          </article>

          <article className="workspaceCard warningCard" id="sources">
            <p className="eyebrow">Demo data notice</p>
            <h2>This is a product prototype, not a published investigation.</h2>
            <p>Case summaries and placeholder records in this starter are intentionally conservative. Before launch, each factual claim should be connected to a source record, reviewed, and dated.</p>
          </article>
        </section>
      </div>
    </main>
  );
}
