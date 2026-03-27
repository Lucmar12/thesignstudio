import Nav from './components/Nav';
import Hero from './components/Hero';
import ChiSiamo from './components/ChiSiamo';
import EcoTeaser from './components/EcoTeaser';
import CosaFacciamo from './components/CosaFacciamo';
import Progetti from './components/Progetti';
import ComeLavoriamo from './components/ComeLavoriamo';
import Contatti from './components/Contatti';

export default function Home() {
  return (
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
  );
}
