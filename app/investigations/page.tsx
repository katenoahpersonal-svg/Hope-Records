import Link from "next/link";
import { Header } from "@/components/Header";
import { CaseCard } from "@/components/CaseCard";
import { cases } from "@/lib/mock-data";
import { applyEditorialOverrides } from "@/lib/editorial-overrides";

const investigations = cases.map(applyEditorialOverrides);

export default function InvestigationsPage() {
  return (
    <main className="appShell">
      <Header />
      <div className="innerPage compactInnerPage investigationsPage">
        <Link className="backLink" href="/">← Back home</Link>
        <p className="eyebrow">Investigations</p>
        <h1>Open records under review.</h1>
        <p className="pageLead">Each file separates verified facts, attributed accounts, disputed claims, source material, and unanswered questions.</p>

        <div className="caseGrid investigationsGrid">
          {investigations.map((item) => <CaseCard item={item} key={item.slug} />)}
        </div>
      </div>
    </main>
  );
}
