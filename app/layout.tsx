
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import WelcomeScreen from "@/components/WelcomeScreen";

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
        <WelcomeScreen />

        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}