import { MetadataRoute } from 'next';

const siteUrl = 'https://thesignstudio-lucmar12.vercel.app'; // aggiorna con dominio definitivo

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
