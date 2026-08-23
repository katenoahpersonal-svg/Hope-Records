import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Badge } from "@/components/Badge";
import { cases } from "@/lib/mock-data";

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = cases.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return (
    <main className="appShell">
      <Header />
      <div className="casePage researchedCasePage">
        <Link className="backLink" href="/">← Back to The Living Record</Link>

        <header className="caseHero caseHeroWithMedia">
          <div>
            <span className="caseStatus">{item.status}</span>
            <p className="eyebrow caseFileEyebrow">Priority investigation · source review Aug. 23, 2026</p>
            <h1>{item.name}</h1>
            <p>{item.location} · {item.dateLabel}</p>
            <p className="caseHeroSummary">{item.summary}</p>
            <div className="caseTagRow heroTags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
          <figure className="caseHeroPortrait">
            <img src={item.heroImage} alt={`${item.name} — user-supplied research photograph`} />
            <figcaption>{item.imageNote}</figcaption>
          </figure>
        </header>

        <nav className="caseTabs" aria-label="Case sections">
          <a href="#overview">What the record shows</a>
          <a href="#timeline">Timeline</a>
          <a href="#questions">Questions</a>
          <a href="#media">Media</a>
          <a href="#sources">Sources</a>
        </nav>

        <section className="caseWorkspace" id="overview">
          <article className="workspaceCard evidenceStandardCard">
            <p className="eyebrow">Evidence standard</p>
            <h2>Fact, account, dispute, and question stay separate.</h2>
            <p>This file is intentionally conservative. A source can document that a person made a claim without proving the claim itself. Labels below describe the evidentiary posture of each statement.</p>
            <div className="badgeRow roomy">
              <Badge>PRIMARY RECORD</Badge><Badge>VERIFIED</Badge><Badge>CORROBORATED</Badge><Badge>DISPUTED</Badge><Badge>UNVERIFIED</Badge><Badge>INVESTIGATIVE QUESTION</Badge>
            </div>
          </article>

          <div className="findingGrid">
            {item.findings.map((finding) => (
              <article className="workspaceCard findingCard" key={finding.title}>
                <Badge>{finding.label}</Badge>
                <h2>{finding.title}</h2>
                <p>{finding.body}</p>
              </article>
            ))}
          </div>

          <article className="workspaceCard" id="timeline">
            <p className="eyebrow">Timeline</p>
            <h2>Source-backed chronology</h2>
            <div className="timelineResearch">
              {item.timeline.map((event) => (
                <div className="timelineResearchItem" key={`${event.date}-${event.title}`}>
                  <span className="timelineDot" aria-hidden="true" />
                  <div>
                    <small>{event.date}</small>
                    <strong>{event.title}</strong>
                    <p>{event.body}</p>
                    {event.label ? <Badge>{event.label}</Badge> : null}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="workspaceCard" id="questions">
            <p className="eyebrow">Unanswered questions</p>
            <h2>What evidence would materially change the file?</h2>
            <ol className="questionList researchQuestions">
              {item.questions.map((question) => <li key={question}>{question}</li>)}
            </ol>
          </article>

          <article className="workspaceCard mediaCard" id="media">
            <div className="mediaHeading">
              <div>
                <p className="eyebrow">Research media</p>
                <h2>User-supplied image set</h2>
              </div>
              <span>PROVENANCE REVIEW PENDING</span>
            </div>
            <img className="caseGalleryImage" src={item.galleryImage} alt={`${item.name} user-supplied research image collection`} />
            <p className="mediaNote">{item.imageNote} Images are associated with this case because they were supplied in the case-specific research batch; identities or relationships are not inferred from the photographs themselves.</p>
          </article>

          <article className="workspaceCard" id="sources">
            <p className="eyebrow">Source trail</p>
            <h2>Records and reporting used for this review</h2>
            <div className="sourceList">
              {item.sources.map((source) => (
                <a className="sourceRow" href={source.url} target="_blank" rel="noreferrer" key={source.url}>
                  <div>
                    <span>{source.kind}</span>
                    <strong>{source.title}</strong>
                    <small>{source.publisher}{source.note ? ` · ${source.note}` : ""}</small>
                  </div>
                  <b aria-hidden="true">↗</b>
                </a>
              ))}
            </div>
          </article>

          <article className="workspaceCard warningCard publicationCaution">
            <p className="eyebrow">Publication caution</p>
            <h2>What this file does not claim</h2>
            <p>{item.editorialNote}</p>
          </article>
        </section>
      </div>
    </main>
  );
}
