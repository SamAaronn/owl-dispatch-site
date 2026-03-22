import type { Metadata } from "next";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
