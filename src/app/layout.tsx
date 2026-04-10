import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BuildSimple – Stop chasing subs. Start winning more bids.",
  description:
    "Automated bid management for general contractors. Let AI track quotes and follow up automatically so that you close bids faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white">{children}</body>
    </html>
  );
}
