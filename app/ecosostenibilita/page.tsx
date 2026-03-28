import EcoHero from './components/EcoHero';
import EcoManifesto from './components/EcoManifesto';
import EcoApproccio from './components/EcoApproccio';
import EcoPrincipi from './components/EcoPrincipi';
import EcoCTA from './components/EcoCTA';
import Nav from '../components/Nav';

export const metadata = {
  title: 'Ecosostenibilità — Progettare per restare',
  description: 'L\'ecosostenibilità è il criterio con cui scelgo ogni materiale, ogni fornitore, ogni dettaglio costruttivo. Materiali locali a km 0, artigiani umbri e toscani, biofilia e zero VOC. Operiamo tra Umbria e Toscana: Firenze, Prato, Scandicci.',
  keywords: [
    'design sostenibile Umbria', 'design sostenibile Toscana', 'materiali naturali km0',
    'architettura bioclimatica Firenze', 'interior design ecologico Prato',
    'interior design ecologico Scandicci', 'travertino umbro', 'cotto Deruta',
    'progettazione biofilia', 'architettura sostenibile Firenze',
  ],
  openGraph: {
    title: 'Ecosostenibilità — The-Sign Studio',
    description: 'Materiali locali, artigiani umbri e toscani, zero VOC. La sostenibilità come punto di partenza, non di arrivo.',
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
