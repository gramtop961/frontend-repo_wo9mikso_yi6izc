import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Nebula UI",
    description:
      "Sistema de diseño oscuro y minimalista con micro-interacciones y transiciones 3D.",
    tags: ["React", "Framer Motion", "Tailwind"],
    link: "#",
    accent: "from-purple-500 to-cyan-400",
  },
  {
    title: "Cosmo Shop",
    description:
      "E-commerce de alto rendimiento con animaciones del carrito y vista 360° de productos.",
    tags: ["Vite", "Mongo", "Stripe"],
    link: "#",
    accent: "from-fuchsia-500 to-indigo-500",
  },
  {
    title: "Orbit Labs",
    description:
      "Landing experimental con escenas 3D interactivas y desplazamiento parallax.",
    tags: ["Spline", "Three.js", "GSAP"],
    link: "#",
    accent: "from-cyan-400 to-emerald-400",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 bg-[#0b0b13] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Proyectos destacados</h2>
            <p className="mt-2 text-white/60">Una muestra de mi enfoque en detalle, performance e interacción.</p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-xl border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:bg-white/5 md:block"
          >
            Solicitar demo
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-black/30"
            >
              <div className={`absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-2xl`}></div>

              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <ExternalLink size={18} className="text-white/40 transition group-hover:scale-110 group-hover:text-white" />
              </div>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="mt-6 h-40 w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-tr from-[#0e0e18] to-[#151527]"
              >
                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.06),transparent_50%)]" />
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
