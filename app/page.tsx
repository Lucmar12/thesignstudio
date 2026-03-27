import Nav from './components/Nav';
import Hero from './components/Hero';
import ChiSiamo from './components/ChiSiamo';
import EcoTeaser from './components/EcoTeaser';
import CosaFacciamo from './components/CosaFacciamo';
import Progetti from './components/Progetti';
import ComeLavoriamo from './components/ComeLavoriamo';
import Contatti from './components/Contatti';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'The-Sign Studio',
  description: 'Studio di interior design, architettura, branding e graphic design tra Umbria e Toscana. Operiamo a Firenze, Prato, Scandicci e in tutta Italia. Progettazione sostenibile con materiali locali.',
  url: 'https://the-signstudio.com',
  telephone: '+393896390261',
  email: 'thesignstudio023@hotmail.com',
  foundingDate: '2023',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Umbria',
    addressCountry: 'IT',
  },
  areaServed: ['Umbria', 'Toscana', 'Firenze', 'Prato', 'Scandicci', 'Italia'],
  serviceType: [
    'Interior Design',
    'Architettura',
    'Branding',
    'Graphic Design',
    'Progettazione bioclimatica',
  ],
  sameAs: [],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Nav />
        <Hero />
        <ChiSiamo />
        <EcoTeaser />
        <CosaFacciamo />
        <Progetti />
        <ComeLavoriamo />
        <Contatti />
      </main>
    </>
  );
}
