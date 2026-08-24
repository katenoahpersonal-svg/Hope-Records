import Link from "next/link";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="siteHeader">
      <Link href="/" className="logoLink"><Logo /></Link>
      <nav className="desktopNav" aria-label="Primary navigation">
        <Link href="/#explore">Explore the Record</Link>
        <Link href="/share">Share Your Story</Link>
        <Link href="/#investigations">Investigations</Link>
        <Link href="/vault">Document Vault</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <Link className="signInButton" href="/contact#researcher-access">Researcher Access</Link>
    </header>
  );
}
