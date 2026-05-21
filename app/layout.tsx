import type { Metadata } from "next";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atelier — AI-Driven Development Studio",
  description:
    "At the intersection of Artificial Intelligence and Appreciative Inquiry. Purpose-driven technology that serves humanity.",
  openGraph: {
    title: "Atelier — AI-Driven Development Studio",
    description:
      "At the intersection of Artificial Intelligence and Appreciative Inquiry. Purpose-driven technology that serves humanity.",
    type: "website",
    locale: "en_US",
    siteName: "Atelier",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier — AI-Driven Development Studio",
    description:
      "At the intersection of Artificial Intelligence and Appreciative Inquiry. Purpose-driven technology that serves humanity.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${dmMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-navy antialiased">
        <CursorGlow />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
