import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problema } from './components/Problema';
import { Caravana } from './components/Caravana';
import { Producto } from './components/Producto';
import { Alertas } from './components/Alertas';
import { Cliente } from './components/Cliente';
import { Modelo } from './components/Modelo';
import { Tecnologia } from './components/Tecnologia';
import { Piloto } from './components/Piloto';
import { Riesgos } from './components/Riesgos';
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <Header />

      <main id="contenido">
        <Hero />
        <Problema />
        <Caravana />
        <Producto />
        <Alertas />
        <Cliente />
        <Modelo />
        <Tecnologia />
        <Piloto />
        <Riesgos />
        <Contacto />
      </main>

      <Footer />
    </>
  );
}
