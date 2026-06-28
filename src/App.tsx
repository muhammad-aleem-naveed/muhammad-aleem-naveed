import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Languages,
  GitBranch,
  Users,
  Menu,
  X,
} from "lucide-react";
import Reveal from "./components/Reveal";
import ToolRouter from "./components/ToolRouter";
import ProjectCard from "./components/ProjectCard";

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F2] font-sans antialiased selection:bg-white selection:text-black">
      {/* ---------- NAV ---------- */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
          <a
            href="#top"
            aria-label="Muhammad Aleem Naveed — Home"
            className="group flex items-center gap-3 min-w-0"
          >
            <div className="relative flex shrink-0 items-center">
              <img
                src="/logo-cropped.png"
                alt=""
                aria-hidden="true"
                className="h-7 w-auto sm:h-8 invert opacity-95 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <span className="hidden sm:block font-mono text-[13px] tracking-tight text-white/90 group-hover:text-white transition-colors truncate">
              MUHAMMAD ALEEM NAVEED
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#work" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#method" className="hover:text-white transition-colors">
              Method
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a
              href="#contact"
              className="text-white border border-white/20 rounded-full px-4 py-1.5 hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact
            </a>
          </nav>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-white/30 transition-colors"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden border-t border-white/[0.06] bg-black/90 backdrop-blur-xl px-6 py-4 flex flex-col gap-3 text-sm text-white/70">
            <a href="#work" onClick={() => setMenuOpen(false)} className="py-2 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#method" onClick={() => setMenuOpen(false)} className="py-2 hover:text-white transition-colors">
              Method
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="py-2 hover:text-white transition-colors">
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-1 text-center text-white border border-white/20 rounded-full px-4 py-2.5 hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact
            </a>
          </nav>
        )}
      </header>

      {/* ---------- HERO ---------- */}
      <section
        id="top"
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-32 pb-20 overflow-hidden"
      >
        {/* ambient grid backdrop */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-white/[0.04] blur-[120px]" />

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative mx-auto max-w-6xl w-full"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-[0.2em] text-white/40 uppercase mb-8"
          >
            AI Solutions Developer — Lahore, Pakistan
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[13vw] md:text-[6.5rem] leading-[0.95] font-bold tracking-tight text-white"
          >
            I ship software
            <br />
            <span className="text-white/30">by directing AI.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 max-w-xl text-lg md:text-xl text-white/60 leading-relaxed"
          >
            A self-taught builder who routes the right task to the right
            model. Most recently: a 10+ language PDF translator, designed,
            built, and packaged as a standalone Windows app —{" "}
            <span className="text-white">solo, in two days, zero paid
            tools.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-white text-black rounded-full pl-6 pr-5 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
            >
              See the work
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="mailto:aleem.developer26@gmail.com"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white border border-white/15 rounded-full px-6 py-3 text-sm transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        {/* stat strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative mx-auto max-w-6xl w-full mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8"
        >
          {[
            { value: "2 days", label: "Solo build, PDF translator" },
            { value: "10+", label: "Languages supported" },
            { value: "5", label: "AI platforms directed" },
            { value: "$0", label: "Paid APIs or libraries used" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl md:text-3xl font-semibold text-white">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/40 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ---------- METHOD / TOOL ROUTER ---------- */}
      <section id="method" className="px-6 md:px-10 py-28 md:py-36">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.2em] text-white/40 uppercase mb-4">
              The Method
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-white max-w-3xl">
              Five models. One director.
            </h2>
            <p className="mt-5 max-w-2xl text-white/50 text-base md:text-lg leading-relaxed">
              Every AI platform has a strength. The work isn't picking one —
              it's knowing which task belongs to which model, and prompting
              each one precisely enough to ship working output on the first
              few tries.
            </p>
          </Reveal>

          <div className="mt-16">
            <ToolRouter />
          </div>
        </div>
      </section>

      {/* ---------- PROJECTS ---------- */}
      <section id="work" className="px-6 md:px-10 py-28 md:py-36 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.2em] text-white/40 uppercase mb-4">
              Selected Work
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-white max-w-3xl">
              Shipped, not theoretical.
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              index="01"
              title="PDF Translation Tool"
              tagline="Desktop app · 10+ languages, layout-preserving"
              description="A standalone Windows application that translates PDF documents across 10+ languages while fully preserving the original formatting and layout. Architected, built, and packaged into a GUI executable in two days, working solo, using exclusively free and open resources — no paid APIs or libraries."
              tags={["Python", "Desktop GUI", "AI-Directed Architecture"]}
              meta={["Solo build", "2 days", "Demoed live to instructor & class"]}
              href="https://github.com/muhammad-aleem-naveed/A.Translator"
              image="/projects/pdf-translator.png"
            />
            <ProjectCard
              index="02"
              title="Distraction & Content Blocker"
              tagline="Chrome extension · focus & study sessions"
              description="A browser extension that blocks adult content and user-defined sites — YouTube included — for a set duration once activated. A session-lock feature disables AI chatbot access during active study sessions to protect academic integrity."
              tags={["JavaScript", "HTML/CSS", "Chrome Extension API"]}
              meta={["End-to-end AI-directed build", "Session locking"]}
              href="https://github.com/muhammad-aleem-naveed/SaveYourSelf"
              image="/projects/saveyourself.png"
            />
          </div>
        </div>
      </section>

      {/* ---------- ABOUT / SKILLS / EDUCATION ---------- */}
      <section id="about" className="px-6 md:px-10 py-28 md:py-36">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <Reveal>
              <p className="font-mono text-xs tracking-[0.2em] text-white/40 uppercase mb-4">
                About
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-white">
                Builder first.
                <br />
                Student in parallel.
              </h2>
              <p className="mt-6 text-white/50 leading-relaxed">
                Currently a 4th-semester BS Data Science student at the
                University of Central Punjab, Lahore — formalizing the
                fundamentals underneath work that's already shipping.
                Classmates regularly come to me for guidance on which AI tool
                fits their project.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <GitBranch size={16} className="text-white/30" />
                  Version control — Git &amp; GitHub, repos, commits, pushes
                </div>
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <Users size={16} className="text-white/30" />
                  Regularly consulted on AI tool selection by peers
                </div>
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <Languages size={16} className="text-white/30" />
                  English — fluent · Urdu — native
                </div>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:pl-8 md:border-l border-white/10">
            <Reveal>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10">
                <p className="font-mono text-xs tracking-[0.2em] text-white/40 uppercase mb-2">
                  Education
                </p>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-white">
                  BS, Data Science
                </h3>
                <p className="text-white/50 mt-1">
                  University of Central Punjab (UCP), Lahore
                </p>
                <p className="text-white/30 text-sm mt-1">
                  In Progress — 4th Semester
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10">
                <p className="font-mono text-xs tracking-[0.2em] text-white/40 uppercase mb-4">
                  Published
                </p>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-white leading-snug">
                  A practical guide to using AI well —
                  <span className="text-white/40">
                    {" "}
                    written and produced as an experiment in AI-driven
                    content itself.
                  </span>
                </h3>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- CONTACT / FOOTER ---------- */}
      <footer id="contact" className="px-6 md:px-10 py-20 md:py-28 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Let's build something
              <br />
              <span className="text-white/30">worth shipping.</span>
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div className="flex flex-col gap-3 text-sm text-white/50">
              <a
                href="mailto:aleem.developer26@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors w-fit"
              >
                <Mail size={15} />
                aleem.developer26@gmail.com
              </a>
              <a
                href="tel:+923104909026"
                className="flex items-center gap-2 hover:text-white transition-colors w-fit"
              >
                <Phone size={15} />
                +92 310 4909026
              </a>
              <div className="flex items-center gap-2 text-white/40">
                <MapPin size={15} />
                Lahore, Pakistan
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/muhammad-aleem-naveed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-aleem-naveed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row gap-3 justify-between text-xs text-white/30 font-mono">
            <span>© {new Date().getFullYear()} Muhammad Aleem Naveed</span>
            <span>Designed &amp; directed in-house.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
