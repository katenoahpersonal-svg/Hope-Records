import Link from "next/link";
import { Header } from "@/components/Header";
import { DocumentCard } from "@/components/DocumentCard";
import { verifiedDocuments } from "@/lib/verified-documents";

export default function VaultPage() {
  return (
    <main className="appShell">
      <Header />
      <div className="innerPage compactInnerPage vaultPage">
        <Link className="backLink" href="/">← Back home</Link>
        <p className="eyebrow">Verified record vault</p>
        <h1>Trace the record.</h1>
        <p className="pageLead">Primary court and government records come first. When an underlying document is not public yet, the archive says so.</p>
        <div className="documentGrid documentGridWide compactVaultGrid">
          {verifiedDocuments.map((item) => <DocumentCard item={item} key={item.id} />)}
        </div>
      </div>
    </main>
  );
}
