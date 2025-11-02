import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b13] font-inter text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative z-10 bg-[#0b0b13] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Hola, soy DarkFrxsty</h2>
            <p className="mt-3 text-white/70">
              Especialista en experiencias digitales con estética futurista. Me enfoco en
              aplicaciones web de alto impacto con animaciones suaves, 3D interactivo y
              diseño accesible.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/80">
              <li className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">React / Vite</li>
              <li className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">Framer Motion</li>
              <li className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">Spline / Three.js</li>
              <li className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">Tailwind CSS</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 opacity-30 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="aspect-[4/3] w-full rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.06),transparent_50%)]" />
              <p className="mt-4 text-sm text-white/70">
                Diseño con un enfoque en micro-interacciones, rendimiento y armonía visual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#0b0b13] py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-white/50">© {new Date().getFullYear()} DarkFrxsty. Todos los derechos reservados.</p>
        <div className="text-sm text-white/40">Hecho con pasión por la web del futuro.</div>
      </div>
    </footer>
  );
}

export default App;
