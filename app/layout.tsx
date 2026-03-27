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
  description: "Studio di interior design, architettura, branding e graphic design tra Umbria e Toscana. Operiamo a Firenze, Prato, Scandicci e in tutta Italia. Progettazione sostenibile con materiali locali. Est. 2023.",
  keywords: [
    'interior design Umbria', 'interior design Toscana', 'interior design Firenze',
    'interior design Prato', 'interior design Scandicci', 'architettura sostenibile',
    'branding studio Firenze', 'graphic design Perugia', 'graphic design Toscana',
    'progettazione interni Firenze', 'ristrutturazione Umbria', 'ristrutturazione Toscana',
    'design bioclimatico', 'studio design Firenze', 'studio design Umbria',
    'arredamento su misura', 'architetto Firenze', 'architetto Prato', 'architetto Scandicci',
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
    title: 'The-Sign Studio — Interior, Graphic Design & Architettura',
    description: "Studio di interior design, architettura e branding tra Umbria e Toscana. Operiamo a Firenze, Prato, Scandicci e in tutta Italia.",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'The-Sign Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The-Sign Studio — Interior Design & Architettura',
    description: "Studio di interior design e architettura sostenibile tra Umbria e Toscana. Firenze, Prato, Scandicci.",
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
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='5' fill='%233E3B2E'/%3E%3Cpath d='M20 10.5C18.5 9 16 9 16 9C12.5 9 10.5 10.8 10.5 13C10.5 15.2 12 16.2 15.5 17C19 17.8 21.5 18.8 21.5 21.2C21.5 23.6 19.2 25 16 25C13 25 11 23.2 11 23.2' stroke='%23F5F2EA' stroke-width='1.6' stroke-linecap='round' fill='none'/%3E%3C/svg%3E" type="image/svg+xml" />
      </head>
      <body className={`${geistSans.variable} ${cormorant.variable} antialiased`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
