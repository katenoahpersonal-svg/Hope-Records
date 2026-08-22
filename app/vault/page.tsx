import Link from "next/link";
import { Header } from "@/components/Header";
import { DocumentCard } from "@/components/DocumentCard";
import { documents } from "@/lib/mock-data";

export default function VaultPage() {
  return (
    <main className="appShell">
      <Header />
      <div className="innerPage">
        <Link className="backLink" href="/">← Back home</Link>
        <p className="eyebrow">Document vault</p>
        <h1>Records should be traceable.</h1>
        <p className="pageLead">Every published document will eventually carry provenance, source metadata, access level, related cases, and verification state.</p>
        <div className="documentGrid documentGridWide">
          {documents.map((item) => <DocumentCard item={item} key={item.id} />)}
        </div>
      </div>
    </main>
  );
}
