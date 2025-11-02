import { motion } from "framer-motion";
import { Rocket, User, FolderGit2, Mail } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { href: "#about", label: "Sobre mí", Icon: User },
    { href: "#projects", label: "Proyectos", Icon: FolderGit2 },
    { href: "#contact", label: "Contacto", Icon: Mail },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl"
        >
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 text-white shadow-lg shadow-purple-500/30">
              <Rocket size={18} />
            </div>
            <div className="leading-tight">
              <p className="text-sm text-white/60">Portafolio</p>
              <p className="font-semibold tracking-wide text-white">DarkFrxsty</p>
            </div>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map(({ href, label, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className="group flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                >
                  <Icon size={16} className="text-white/60 transition group-hover:text-white" />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110"
          >
            Hablemos
          </a>
        </motion.nav>
      </div>
    </div>
  );
}
