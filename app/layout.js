import { Poppins, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqChatWidget from "@/components/FaqChatWidget";
import { siteUrl } from "@/lib/site";
import { localBusinessSchema } from "@/lib/structuredData";

const heading = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const title = "CINI'S | Sterile & Office Cleaning Services";
const description =
  "Commercial and pharmaceutical cleaning since 1995 — cleanrooms, laboratories, lab preparation, post-maintenance and office cleaning across Melbourne.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | CINI'S",
  },
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "CINI'S",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <FaqChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
