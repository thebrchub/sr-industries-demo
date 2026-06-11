import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Capabilities from './components/Capabilities';
import Gallery from './components/Gallery';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './layout/Footer';

function App() {
  return (
    <main className="w-full min-h-screen bg-[var(--color-background)] font-sans overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Process />
      <Capabilities />
      <Gallery />
      <Industries />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;