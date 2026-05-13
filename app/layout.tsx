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

const siteUrl = 'https://the-signstudio.com'; // aggiorna con dominio definitivo

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'The-Sign Studio — Interior, Graphic Design & Architettura',
    template: '%s — The-Sign Studio',
  },
  description: "The-Sign Studio: interior design, architettura e branding a Firenze, Prato, Scandicci e in tutta la Toscana e Umbria. Progettazione sostenibile, materiali locali, arredamento su misura. Est. 2023.",
  keywords: [
    // Firenze e area metropolitana
    'interior design Firenze', 'architetto Firenze', 'studio design Firenze',
    'ristrutturazione Firenze', 'progettazione interni Firenze', 'arredamento Firenze',
    'interior designer Firenze', 'branding Firenze', 'graphic design Firenze',
    'interior design Prato', 'architetto Prato', 'ristrutturazione Prato',
    'interior design Scandicci', 'interior design Sesto Fiorentino',
    'interior design Empoli', 'interior design Pistoia', 'interior design Arezzo',
    'interior design Siena', 'interior design Lucca',
    // Toscana
    'interior design Toscana', 'studio design Toscana', 'architettura Toscana',
    'ristrutturazione Toscana', 'graphic design Toscana', 'branding Toscana',
    'interior designer Toscana', 'progettazione sostenibile Toscana',
    // Umbria
    'interior design Umbria', 'architetto Umbria', 'interior design Perugia',
    'interior design Terni', 'interior design Spoleto', 'interior design Assisi',
    'ristrutturazione Umbria', 'studio design Umbria', 'graphic design Perugia',
    'branding Perugia', 'interior designer Umbria',
    // Servizi generici
    'design bioclimatico', 'architettura sostenibile', 'arredamento su misura',
    'progettazione interni', 'ristrutturazione casa', 'brand identity studio',
    'manuale identità visiva', 'progettazione bioclimatica', 'materiali naturali km0',
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
    title: 'The-Sign Studio — Interior Design, Architettura & Branding a Firenze e Umbria',
    description: "Studio di interior design, architettura e branding a Firenze, Prato, Scandicci e in tutta la Toscana e Umbria. Progettazione sostenibile, materiali locali, arredamento su misura.",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'The-Sign Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The-Sign Studio — Interior Design & Architettura',
    description: "Interior design, architettura e branding a Firenze, Prato, Scandicci e in Umbria. Progettazione sostenibile e materiali locali.",
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
      <head>
        {/* PNG per Safari */}
        <link rel="icon" href="/icon" type="image/png" sizes="32x32" />
        {/* SVG per Chrome/Firefox */}
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='5' fill='%233E3B2E'/%3E%3Cpath d='M20 10.5C18.5 9 16 9 16 9C12.5 9 10.5 10.8 10.5 13C10.5 15.2 12 16.2 15.5 17C19 17.8 21.5 18.8 21.5 21.2C21.5 23.6 19.2 25 16 25C13 25 11 23.2 11 23.2' stroke='%23F5F2EA' stroke-width='1.6' stroke-linecap='round' fill='none'/%3E%3C/svg%3E" type="image/svg+xml" />
      </head>
      <body className={`${geistSans.variable} ${cormorant.variable} antialiased`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
