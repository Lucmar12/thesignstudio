import EcoHero from './components/EcoHero';
import EcoManifesto from './components/EcoManifesto';
import EcoApproccio from './components/EcoApproccio';
import EcoPrincipi from './components/EcoPrincipi';
import EcoMateriali from './components/EcoMateriali';
import EcoCTA from './components/EcoCTA';
import Nav from '../components/Nav';

export const metadata = {
  title: 'Ecosostenibilità — Progettare per restare',
  description: 'L\'ecosostenibilità è il criterio con cui scelgo ogni materiale, ogni fornitore, ogni dettaglio costruttivo. Materiali locali a km 0, artigiani umbri, biofilia e zero VOC.',
  keywords: [
    'design sostenibile Umbria', 'materiali naturali km0', 'architettura bioclimatica',
    'interior design ecologico', 'travertino umbro', 'cotto Deruta', 'progettazione biofilia',
  ],
  openGraph: {
    title: 'Ecosostenibilità — The-Sign Studio',
    description: 'Materiali locali, artigiani umbri, zero VOC. La sostenibilità come punto di partenza, non di arrivo.',
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
      <EcoMateriali />
      <EcoCTA />
    </main>
  );
}
