import type { Metadata, Viewport } from "next";
import { Wix_Madefor_Display, Wix_Madefor_Text, Lora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SiteAnalytics } from "@/components/SiteAnalytics";
import { StickyCta } from "@/components/StickyCta";
import { MetaPixel } from "@/components/MetaPixel";
import { SalvaCampagna } from "@/components/SalvaCampagna";
import { JsonLd, personSchema, organizationSchema, websiteSchema } from "@/components/JsonLd";
import { site } from "@/lib/site";


const wixDisplay = Wix_Madefor_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-wix-display",
  display: "swap",
});
// The variable font avoids extensionless Google Fonts URLs rejected by Next 15.
const wixText = Wix_Madefor_Text({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-wix-text",
  display: "swap",
});
const lora = Lora({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: site.seo.title,
    template: `%s — ${site.name}`,
  },
  description: site.seo.description,
  applicationName: site.name,
  keywords: [
    "Florin Andriciuc",
    "imprenditore edile",
    "software gestionale edilizia",
    "marketing per imprese edili",
    "vendita edile",
    "controllo di gestione edilizia",
    "EdiliziaInCloud",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": [{ url: "/feed.xml", title: "Blog di Florin Andriciuc" }] },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: site.domain,
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  ...(site.googleVerification ? { verification: { google: site.googleVerification } } : {}),
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#0d1f3c",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${wixDisplay.variable} ${wixText.variable} ${lora.variable}`}>
      <body>
        <SalvaCampagna />
        <JsonLd data={[personSchema, organizationSchema, websiteSchema]} />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCta />
        <CookieBanner />
        <SiteAnalytics />
        <MetaPixel />
      </body>
    </html>
  );
}
