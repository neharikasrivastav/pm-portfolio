"use client";

import { motion } from "framer-motion";
import { JSX } from "react";
import { Typewriter } from "react-simple-typewriter"; 
const headline = "Neharika Srivastava";

import { useTheme } from "next-themes";

function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-sm px-3 py-1.5 rounded-full border border-white/20 hover:border-white/40"
      title="Toggle theme"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}


const container = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1, y: 0,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 }
  }
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

function StaggeredHeadline() {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className="text-4xl sm:text-6xl font-bold tracking-tight"
    >
      {headline.split(" ").map((w, i) => (
        <motion.span key={i} variants={item} className="inline-block mr-2">
          {w}
        </motion.span>
      ))}
    </motion.h1>
  );
}


// ---- brand tokens (tweak these) ----
const ACCENT = "#fcbf49"; // gold
const SUBTLE = "rgba(252,191,73,.12)";

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-yellow-200/30 selection:text-yellow-100">
      <Header />
      <Hero />
      <ImpactStats />
      <CaseStudies />
      <Timeline />
      <ContactCTA />
      <Footer />
    </main>
  );
}

// -------------------- Header --------------------
function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
    <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
      <a href="#" className="font-semibold tracking-wide">NS</a>
      <div className="flex items-center gap-4">
        <nav className="hidden sm:flex gap-6 text-sm text-white/80">
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#timeline" className="hover:text-white">Experience</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <ModeToggle />
      </div>
    </div>
  </header>
  
  );
}

// -------------------- Hero --------------------
function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* animated mesh glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60rem 60rem at 10% -10%, rgba(252,191,73,.08), transparent 40%), radial-gradient(50rem 50rem at 110% 20%, rgba(252,191,73,.06), transparent 45%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-4 py-24 sm:py-28">
      <StaggeredHeadline />


        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg sm:text-xl text-white/70"
        >
          Product Manager focused on AI & healthcare. I ship outcomes:&nbsp;
          <span className="text-white">
    <Typewriter
      words={[
        "faster decisions",
        "cleaner workflows",
        "measurable lifts",
      ]}
      loop={0}             // 0 = infinite
      typeSpeed={60}       // typing speed (ms per char)
      deleteSpeed={40}     // backspace speed
      delaySpeed={1400}    // pause at end of word
      cursor
      cursorStyle="|"
    />
  </span>
  .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#work"
            className="px-5 py-3 rounded-full font-medium"
            style={{ background: ACCENT, color: "#111" }}
          >
            View my work
          </a>
          <a
            href="/resume.pdf"
            className="px-5 py-3 rounded-full font-medium border border-white/20 hover:border-white/40"
          >
            Download resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// -------------------- Impact Stats --------------------
function ImpactStats() {
  const items = [
    { kpi: "20%", label: "Faster case resolution" },
    { kpi: "3", label: "AI features launched" },
    { kpi: "$2M+", label: "Revenue influenced" },
  ];

  return (
    <section className="border-y border-white/10 bg-[color:var(--subtle)]" style={{ "--subtle": SUBTLE } as React.CSSProperties}>
      <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-white/10 p-6 text-center"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div className="text-4xl font-extrabold" style={{ color: ACCENT }}>
              {it.kpi}
            </div>
            <div className="mt-2 text-sm text-white/70">{it.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// -------------------- Case Studies --------------------
function CaseStudies() {
  const cases = [
    {
      title: "LLM QA Monitor",
      impact: "60% QA efficiency",
      summary:
        "Shipped an LLM-based quality monitoring framework for RAG answers; built metrics, alerts, and reviewer tooling.",
    },
    {
      title: "Auto-Scoring Pipeline",
      impact: "15M+ answers/mo",
      summary:
        "Rolled out GPT-4 + RAGAS scoring across workflows; decreased manual review and improved trust signals.",
    },
    {
      title: "Case Handoff Summaries",
      impact: "20% faster TTR",
      summary:
        "One-click secure summaries to specialists; tighter loops and better member satisfaction.",
    },
  ];

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl sm:text-3xl font-semibold">Featured work</h2>
        <span className="text-xs text-white/50">Tap a card for details</span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((c, i) => (
          <motion.a
            key={i}
            href="#"
            whileHover={{ y: -4 }}
            className="group rounded-2xl border border-white/10 p-5"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div className="text-sm tracking-wide text-white/60">Case Study</div>
            <div className="mt-2 text-xl font-semibold">{c.title}</div>
            <div className="mt-2 inline-flex items-center gap-2 text-sm">
              <span
                className="px-2 py-0.5 rounded-full"
                style={{ background: SUBTLE, color: ACCENT, border: `1px solid ${ACCENT}22` }}
              >
                {c.impact}
              </span>
            </div>
            <p className="mt-3 text-white/70 text-sm leading-6">{c.summary}</p>
            <div className="mt-4 text-sm text-white/60 group-hover:text-white transition">
              Read more →
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

// -------------------- Timeline --------------------
function Timeline() {
  const roles = [
    {
      company: "Optum (UnitedHealth Group)",
      role: "Product Manager Intern",
      when: "May–Aug 2025",
      impact: "20% faster case resolution via handoff summaries",
    },
    {
      company: "ABM Industries",
      role: "Part-time Product Manager",
      when: "Jan–Apr 2025",
      impact: "Predictive maintenance dashboards; reduced downtime",
    },
    {
      company: "Fanory",
      role: "Product Manager",
      when: "2023–2024",
      impact: "Shipped creator analytics & growth features",
    },
  ];

  return (
    <section id="timeline" className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-10">Experience</h2>
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-white/10" />
        <div className="space-y-10">
          {roles.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative sm:grid sm:grid-cols-2 gap-8`}
            >
              <div className="sm:pr-10 sm:text-right">
                <div className="text-sm text-white/60">{r.when}</div>
                <div className="font-semibold">{r.company}</div>
              </div>
              <div className="sm:pl-10">
                <div className="font-medium">{r.role}</div>
                <div className="mt-1 text-sm text-white/70">{r.impact}</div>
              </div>
              <span
                className="absolute left-[14px] sm:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full ring-2 ring-black"
                style={{ background: ACCENT }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -------------------- Contact --------------------
function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(40rem 40rem at 80% 10%, rgba(252,191,73,.08), transparent 40%)",
        }}
      />
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h2 className="text-3xl font-semibold">Let’s build something great</h2>
        <p className="mt-3 text-white/70">
          I’m open to PM roles in AI, healthcare, and data platforms.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:neharika.neharika123@gmail.com"
            className="px-6 py-3 rounded-full font-medium"
            style={{ background: ACCENT, color: "#111" }}
          >
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/neharika-"
            target="_blank"
            className="px-6 py-3 rounded-full font-medium border border-white/20 hover:border-white/40"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

// -------------------- Footer --------------------
function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between text-sm text-white/50">
        <span>© {new Date().getFullYear()} Neharika Srivastava</span>
        <a href="#" className="hover:text-white" style={{ color: ACCENT }}>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
