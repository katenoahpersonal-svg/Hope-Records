import type { Metadata } from "next";
import "./globals.css";
import "./priority.css";

export const metadata: Metadata = {
  title: "The Living Record",
  description: "A public-interest archive for verified records, testimony, and unanswered questions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
