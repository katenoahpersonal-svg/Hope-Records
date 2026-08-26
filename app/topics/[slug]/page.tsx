import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { CaseCard } from "@/components/CaseCard";
import { DocumentCard } from "@/components/DocumentCard";
import { cases } from "@/lib/mock-data";
import { verifiedDocuments } from "@/lib/verified-documents";
import { getTopic, topics } from "@/lib/topics";

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export const dynamicParams = false;

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const matchingCases = cases.filter((item) => topic.caseSlugs.includes(item.slug));

  return (
    <main className="appShell">
      <Header />
      <div className="innerPage compactInnerPage topicPage">
        <Link className="backLink" href="/">← Back home</Link>
        <p className="eyebrow">{topic.eyebrow}</p>
        <h1>{topic.title}</h1>
        <p className="pageLead">{topic.description}</p>

        {matchingCases.length ? (
          <section className="topicSection">
            <div className="topicSectionHeading">
              <h2>Records in this topic</h2>
            </div>
            <div className="caseGrid topicCaseGrid">
              {matchingCases.map((item) => <CaseCard item={item} key={item.slug} />)}
            </div>
          </section>
        ) : null}

        {topic.showDocuments ? (
          <section className="topicSection">
            <div className="topicSectionHeading">
              <h2>Document archive</h2>
              <Link href="/vault">View full vault →</Link>
            </div>
            <div className="documentGrid topicDocumentGrid">
              {verifiedDocuments.slice(0, 4).map((item) => <DocumentCard item={item} key={item.id} />)}
            </div>
          </section>
        ) : null}

        {!matchingCases.length && !topic.showDocuments && topic.emptyMessage ? (
          <div className="topicEmptyState">
            <p>{topic.emptyMessage}</p>
          </div>
        ) : null}

        <div className="topicActionRow">
          <Link className="primaryButton" href={topic.ctaHref}>{topic.ctaLabel}</Link>
          <Link className="secondaryTextLink" href="/investigations">Browse investigations →</Link>
        </div>
      </div>
    </main>
  );
}
