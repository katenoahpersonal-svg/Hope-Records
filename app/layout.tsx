import type { Metadata } from "next";
import "./globals.css";
import "./priority.css";
import "./compact.css";
import "./gallery.css";
import "./keshia.css";
import "./intake.css";

export const metadata: Metadata = {
  title: "Hope Record",
  description: "Hope Record is a public-interest archive for verified records, testimony, and unanswered questions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
