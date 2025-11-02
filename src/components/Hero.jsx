import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b0b13]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="pointer-events-none relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl"
        >
          DarkFrxsty
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="mt-4 max-w-2xl text-balance text-lg text-white/80 md:text-xl"
        >
          Desarrollador con visión futurista. Construyo experiencias web inmersivas con
          3D, animaciones fluidas e interfaces que se sienten mágicas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
          className="pointer-events-auto mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Ver proyectos
            <span className="ml-2 inline-block translate-x-0 transition group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#contact"
            className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110"
          >
            Colaboremos
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-[#0b0b13] to-transparent" />
    </section>
  );
}
