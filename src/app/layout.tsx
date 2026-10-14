import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BuildSimple – Do more with your current team",
  description:
    "AI bid management for general contractors. BuildSimple finds your subs, follows up, compares quotes and builds your estimate, so your team can bid up to 33% more projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <head>
        {/* Scroll-reveal content starts hidden and is shown by JS; without JS it would never appear. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              "<style>.reveal,.reveal-left,.reveal-right,.reveal-scale{opacity:1!important;transform:none!important}</style>",
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">{children}</body>
    </html>
  );
}
