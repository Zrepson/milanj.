
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import AccessibilityTools from "@/components/AccessibilityTools";

export const metadata: Metadata = {
  title: "Milan Joshi | Digital, Projects & Insurance",
  description:
    "Milan Joshi — web development, project coordination, digital strategy and life insurance services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-to-content" href="#main-content">
          Skip to content
        </a>
        <div className="site-content">
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
        </div>
        <AccessibilityTools />
      </body>
    </html>
  );
}
