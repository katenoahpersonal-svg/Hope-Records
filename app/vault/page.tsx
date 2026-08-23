import Link from "next/link";
import { Header } from "@/components/Header";
import { DocumentCard } from "@/components/DocumentCard";
import { verifiedDocuments } from "@/lib/verified-documents";

export default function VaultPage() {
  return (
    <main className="appShell">
      <Header />
      <div className="innerPage">
        <Link className="backLink" href="/">← Back home</Link>
        <p className="eyebrow">Verified record vault</p>
        <h1>Records should be traceable.</h1>
        <p className="pageLead">Primary court and government records come first. When the underlying document is not publicly available, the record says so rather than pretending a news story is the document itself.</p>
        <div className="documentGrid documentGridWide">
          {verifiedDocuments.map((item) => <DocumentCard item={item} key={item.id} />)}
        </div>
      </div>
    </main>
  );
}
