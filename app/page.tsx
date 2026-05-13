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
  description: 'Studio di interior design, architettura, branding e graphic design a Firenze, Prato, Scandicci e in tutta la Toscana e Umbria. Progettazione sostenibile con materiali locali.',
  url: 'https://the-signstudio.com',
  telephone: '+393896390261',
  email: 'thesignstudio023@hotmail.com',
  foundingDate: '2023',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Umbria',
    addressCountry: 'IT',
  },
  areaServed: [
    'Firenze', 'Prato', 'Scandicci', 'Sesto Fiorentino', 'Empoli', 'Pistoia',
    'Arezzo', 'Siena', 'Lucca', 'Toscana',
    'Perugia', 'Terni', 'Spoleto', 'Assisi', 'Foligno', 'Orvieto', 'Gubbio', 'Umbria',
    'Italia',
  ],
  serviceType: [
    'Interior Design',
    'Architettura',
    'Branding',
    'Graphic Design',
    'Progettazione bioclimatica',
    'Ristrutturazione',
    'Arredamento su misura',
    'Brand Identity',
  ],
  sameAs: [
    'https://www.instagram.com/the_signstudioofficial',
  ],
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
