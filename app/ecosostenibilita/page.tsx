import EcoHero from './components/EcoHero';
import EcoManifesto from './components/EcoManifesto';
import EcoApproccio from './components/EcoApproccio';
import EcoPrincipi from './components/EcoPrincipi';
import EcoMateriali from './components/EcoMateriali';
import EcoCTA from './components/EcoCTA';
import Nav from '../components/Nav';

export const metadata = {
  title: 'Ecosostenibilità — The-Sign Studio',
  description: 'L\'ecosostenibilità è il criterio con cui scelgo ogni materiale, ogni fornitore, ogni dettaglio costruttivo. Non un\'opzione aggiuntiva: è il progetto stesso.',
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
