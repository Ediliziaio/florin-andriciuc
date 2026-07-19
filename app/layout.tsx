import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Wix_Madefor_Display, Wix_Madefor_Text, Lora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { StickyCta } from "@/components/StickyCta";
import { MetaPixel } from "@/components/MetaPixel";
import { JsonLd, personSchema, organizationSchema, websiteSchema } from "@/components/JsonLd";
import { site } from "@/lib/site";

// Google Consent Mode v2 — default NEGATO, riapplica la scelta salvata.
const CONSENT_DEFAULT = `
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});
gtag('set','ads_data_redaction',true);gtag('set','url_passthrough',true);
try{var c=JSON.parse(localStorage.getItem('fa_consent'));if(c){gtag('consent','update',{analytics_storage:c.analytics?'granted':'denied',ad_storage:c.marketing?'granted':'denied',ad_user_data:c.marketing?'granted':'denied',ad_personalization:c.marketing?'granted':'denied'});}}catch(e){}
`;

const wixDisplay = Wix_Madefor_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-wix-display",
  display: "swap",
});
const wixText = Wix_Madefor_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: site.domain,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
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
  const gtm = site.analytics.gtm;
  const ga4 = site.analytics.ga4;
  const metaPixel = site.analytics.metaPixel;
  return (
    <html lang="it" className={`${wixDisplay.variable} ${wixText.variable} ${lora.variable}`}>
      <body>
        {gtm && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtm}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        <Script id="consent-default" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT }} />
        {gtm && <GoogleTagManager gtmId={gtm} />}
        <JsonLd data={[personSchema, organizationSchema, websiteSchema]} />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCta />
        <CookieBanner />
        {ga4 && <GoogleAnalytics gaId={ga4} />}
        <MetaPixel />
        {metaPixel && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://www.facebook.com/tr?id=${metaPixel}&ev=PageView&noscript=1`}
            />
          </noscript>
        )}
      </body>
    </html>
  );
}
