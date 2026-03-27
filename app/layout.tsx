import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const siteUrl = 'https://thesignstudio-lucmar12.vercel.app'; // aggiorna con dominio definitivo

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'The-Sign Studio — Interior Design & Architettura, Umbria',
    template: '%s — The-Sign Studio',
  },
  description: "Studio di interior design, architettura, branding e graphic design dall'Umbria. Progettazione sostenibile con materiali locali, ascolto del cliente e visione autentica. Est. 2023.",
  keywords: [
    'interior design Umbria', 'architettura sostenibile', 'branding studio',
    'graphic design Perugia', 'progettazione interni', 'ristrutturazione Umbria',
    'design bioeclimatico', 'studio design Umbria', 'arredamento su misura',
    'The-Sign Studio',
  ],
  authors: [{ name: 'The-Sign Studio' }],
  creator: 'The-Sign Studio',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: siteUrl,
    siteName: 'The-Sign Studio',
    title: 'The-Sign Studio — Interior Design & Architettura, Umbria',
    description: "Studio di interior design, architettura, branding e graphic design dall'Umbria. Progettazione sostenibile con materiali locali.",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'The-Sign Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The-Sign Studio — Interior Design & Architettura',
    description: "Studio di interior design e architettura sostenibile dall'Umbria.",
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${geistSans.variable} ${cormorant.variable} antialiased`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
