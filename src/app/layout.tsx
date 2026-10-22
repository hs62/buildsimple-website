import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const GTM_ID = "GTM-MDB7QMTK";
// Production builds only, so local development doesn't send test visits to Google Analytics.
const loadGtm = process.env.NODE_ENV === "production";

export const metadata: Metadata = {
  title: "BuildSimple – AI for Construction. Bidding made simple.",
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
        {loadGtm && (
          // Google's own snippet, kept in <head> so GTM loads before the page hydrates, as Google recommends.
          // eslint-disable-next-line @next/next/next-script-for-ga
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}
        {/* Scroll-reveal content starts hidden and is shown by JS; without JS it would never appear. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              "<style>.reveal,.reveal-left,.reveal-right,.reveal-scale{opacity:1!important;transform:none!important}</style>",
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        {loadGtm && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}
