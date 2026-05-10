import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import AnimatedText from "../components/AnimatedText";

const ABOUT_ITEMS = [
  { emoji: "🏚️", label: "Urbex",       desc: "Exploring forgotten places", rotate: "-rotate-1" },
  { emoji: "🛍️", label: "Thrifting",   desc: "Finding gems in old shops",  rotate: "rotate-1"  },
  { emoji: "🎸", label: "90's rock",   desc: "The golden era of guitars",  rotate: "-rotate-2" },
  { emoji: "🎨", label: "Digital art", desc: "Artist on Instagram",        rotate: "rotate-2",  href: "https://www.instagram.com/romaricguilbert?igsh=cmxmazV0aGp4ZTFr" },
  { emoji: "🍳", label: "Cooking",     desc: "Always experimenting",       rotate: "-rotate-1" },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.9 } },
};

const popIn = {
  hidden: { opacity: 0, scale: 0.7, rotate: -6 },
  show: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 500, damping: 28 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 30 } },
};

export default function Home() {
  return (
    <PageWrapper>
      <div className="w-full max-w-5xl px-4">

        {/* Hero */}
        <section className="relative min-h-[88vh] flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">

          {/* Speed lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              background: `repeating-conic-gradient(
                from 0deg at 15% 60%,
                transparent 0deg,
                transparent 11.5deg,
                #d4874a 12deg,
                transparent 12.5deg
              )`,
            }}
          />

          {/* Left — text */}
          <div className="flex-1 flex flex-col justify-center z-10 pt-16 lg:pt-0">
            <p className="text-rust font-mono text-xs mb-4 tracking-[0.35em] uppercase">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 400, damping: 30 }}
                style={{ display: "inline-block" }}
              >
                // hi, I'm
              </motion.span>
            </p>

            <h1 className="font-display leading-none tracking-wider mb-2">
              <div className="text-[clamp(3.5rem,9vw,7.5rem)] text-text-primary block overflow-hidden">
                <AnimatedText text="ROMARIC" initialDelay={0.25} charDelay={0.04} />
              </div>
              <div className="text-[clamp(3.5rem,9vw,7.5rem)] text-rust block overflow-hidden">
                <AnimatedText text="GUILBERT" initialDelay={0.55} charDelay={0.04} />
              </div>
            </h1>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.05, type: "spring", stiffness: 300, damping: 28 }}
              className="text-base sm:text-lg text-text-secondary mt-5 mb-6 font-light tracking-wide"
            >
              From low-level C to AI — always building.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.15, duration: 0.5 }}
              className="text-text-secondary text-sm max-w-md leading-relaxed mb-10"
            >
              Epitech Bachelor student. I went from writing printf from scratch in C
              to building AI-powered assistants in Python. I make things that work,
              and sometimes things that look good too.
            </motion.p>

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-4"
            >
              {[
                { to: "/projects", label: "Projects", primary: true },
                { to: "/journey",  label: "My journey" },
              ].map(({ to, label, primary }) => (
                <motion.div key={to} variants={popIn}>
                  <Link
                    to={to}
                    className={`px-6 py-3 font-semibold rounded-sm tracking-wide transition shadow-[3px_3px_0px_rgba(0,0,0,0.5)] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] ${
                      primary
                        ? "bg-rust text-bg hover:bg-amber"
                        : "border border-border text-text-secondary hover:border-rust hover:text-text-primary"
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={popIn}>
                <a
                  href={`${import.meta.env.BASE_URL}Guilbert_Romaric_CV.pdf`}
                  download
                  className="px-6 py-3 border border-border text-text-secondary rounded-sm font-medium tracking-wide hover:border-rust hover:text-text-primary transition shadow-[3px_3px_0px_rgba(0,0,0,0.5)] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
                >
                  Download CV
                </a>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="mt-8 text-xs text-text-muted font-mono tracking-widest"
            >
              Toulouse · Internship Jun–Aug 2026 · French (native) · English (fluent)
            </motion.p>
          </div>

          {/* Right — polaroid */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotate: 8 }}
            animate={{ opacity: 1, x: 0, rotate: 3 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 180, damping: 22 }}
            whileHover={{ rotate: 0, scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            className="relative flex-shrink-0 z-10 cursor-default hidden sm:block"
            style={{ filter: "drop-shadow(8px 10px 0px rgba(0,0,0,0.65))" }}
          >
            {/* Tape strip */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-5 z-10 opacity-75"
              style={{ background: "rgba(212,135,74,0.4)", backdropFilter: "blur(1px)" }}
            />

            {/* Polaroid frame */}
            <div className="bg-[#f0e6cc] p-3 pb-10" style={{ width: "240px" }}>
              <div className="relative overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}photo.png`}
                  alt="Romaric Guilbert"
                  className="w-full block"
                  style={{ filter: "sepia(0.12) contrast(1.05)" }}
                />
                {/* Grain on photo */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    backgroundSize: "150px",
                  }}
                />
              </div>
              <p
                className="text-center mt-2 text-[#2a1f0e] text-xs tracking-widest"
                style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
              >
                Romaric, 2026
              </p>
            </div>
          </motion.div>

        </section>

        {/* Divider */}
        <div className="flex items-center gap-4 py-2">
          <div className="h-px flex-1 bg-border" />
          <span className="text-text-muted font-mono text-xs tracking-widest">about</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* About Me */}
        <section className="py-14">
          <motion.div
            initial={{ opacity: 0, x: -40, skewX: -5 }}
            whileInView={{ opacity: 1, x: 0, skewX: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <h3 className="font-display text-5xl tracking-widest text-text-primary mb-1">
              Beyond the code
            </h3>
            <p className="text-text-secondary text-sm mb-10">
              What I actually do when there's no deadline.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-wrap gap-6 justify-start"
          >
            {ABOUT_ITEMS.map(({ emoji, label, desc, rotate, href }) => {
              const Tag = href ? motion.a : motion.div;
              return (
                <Tag
                  key={label}
                  {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
                  variants={{
                    hidden: { opacity: 0, y: 40, rotate: -8 },
                    show: {
                      opacity: 1, y: 0, rotate: rotate.includes("-") ? -1 : 1,
                      transition: { type: "spring", stiffness: 450, damping: 28 },
                    },
                  }}
                  whileHover={{ rotate: 0, y: -6, transition: { type: "spring", stiffness: 600, damping: 20 } }}
                  className="bg-card border border-border rounded-sm p-5 w-36 cursor-default shadow-[4px_4px_0px_rgba(0,0,0,0.4)] hover:border-rust/40 transition-colors"
                >
                  <span className="text-4xl block mb-3">{emoji}</span>
                  <p className="font-display text-xl tracking-wider text-text-primary">{label}</p>
                  <p className="text-text-secondary text-xs mt-1 leading-snug">{desc}</p>
                </Tag>
              );
            })}
          </motion.div>
        </section>

        {/* Divider */}
        <div className="flex items-center gap-4 py-2">
          <div className="h-px flex-1 bg-border" />
          <span className="text-text-muted font-mono text-xs tracking-widest">stack</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Tech strip */}
        <section className="py-14">
          <motion.h3
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="font-display text-5xl tracking-widest text-text-primary mb-8"
          >
            My tools
          </motion.h3>
          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {[
              "C", "Python", "React", "JavaScript", "TailwindCSS",
              "Jupyter", "pandas", "scikit-learn", "Git", "Linux", "Bash",
            ].map((tech) => (
              <motion.span
                key={tech}
                variants={slideUp}
                whileHover={{ y: -3, color: "#d4874a", borderColor: "rgba(212,135,74,0.5)", transition: { duration: 0.15 } }}
                className="px-4 py-2 bg-card border border-border rounded font-mono text-sm text-text-secondary transition cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </section>

      </div>
    </PageWrapper>
  );
}
