import type { Metadata } from "next";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";
import "./priority.css";
import "./compact.css";
import "./gallery.css";
import "./keshia.css";
import "./intake.css";
import "./brand.css";
import "./brand-case.css";
import "./simplify.css";
import "./home-fixes.css";
import "./tighten.css";
import "./polish.css";

export const metadata: Metadata = {
  title: "Hope Record",
  description: "Hope Record preserves records, protects dignity, and makes evidence easier to trace.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
