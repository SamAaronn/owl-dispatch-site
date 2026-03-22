import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Owl Dispatch | AI Night-Shift Dispatch for Towing Companies",
  description:
    "AI-powered overnight dispatch that answers calls, collects job details, and dispatches drivers via SMS. Never miss another after-hours tow call.",
  keywords: [
    "towing dispatch",
    "AI dispatch",
    "after hours towing",
    "overnight dispatch",
    "tow truck answering service",
  ],
  openGraph: {
    title: "Owl Dispatch | AI Night-Shift Dispatch for Towing Companies",
    description:
      "AI-powered overnight dispatch that answers calls, collects job details, and dispatches drivers via SMS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased" style={{ fontFamily: "var(--font-inter), system-ui, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
