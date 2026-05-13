import EcoHero from './components/EcoHero';
import EcoManifesto from './components/EcoManifesto';
import EcoApproccio from './components/EcoApproccio';
import EcoPrincipi from './components/EcoPrincipi';
import EcoCTA from './components/EcoCTA';
import Nav from '../components/Nav';

export const metadata = {
  title: 'Ecosostenibilità — Progettare per restare',
  description: 'Progettazione sostenibile a Firenze, Prato, Scandicci e Umbria. Materiali naturali km0, zero VOC, artigiani locali. Interior design e architettura bioclimatica tra Toscana e Umbria.',
  keywords: [
    'design sostenibile Firenze', 'design sostenibile Umbria', 'design sostenibile Toscana',
    'materiali naturali km0', 'architettura bioclimatica Firenze', 'architettura bioclimatica Umbria',
    'interior design ecologico Firenze', 'interior design ecologico Prato',
    'interior design ecologico Scandicci', 'progettazione sostenibile Toscana',
    'zero VOC interni', 'progettazione biofilia', 'architettura sostenibile Firenze',
    'ristrutturazione ecosostenibile Firenze', 'ristrutturazione ecosostenibile Umbria',
  ],
  alternates: {
    canonical: 'https://the-signstudio.com/ecosostenibilita',
  },
  openGraph: {
    title: 'Ecosostenibilità — The-Sign Studio',
    description: 'Progettazione sostenibile a Firenze e Umbria. Materiali locali km0, zero VOC, artigiani umbri e toscani. La sostenibilità come punto di partenza.',
    url: 'https://the-signstudio.com/ecosostenibilita',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecosostenibilità — The-Sign Studio',
    description: 'Interior design e architettura sostenibile a Firenze, Prato e Umbria. Materiali locali, zero VOC.',
  },
};

export default function EcosostenibilitaPage() {
  return (
    <main>
      <Nav />
      <EcoHero />
      <EcoManifesto />
      <EcoApproccio />
      <EcoPrincipi />
      <EcoCTA />
    </main>
  );
}
