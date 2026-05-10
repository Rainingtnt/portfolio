import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

// Most recent first
const TIMELINE = [
  {
    period: "2026 — now",
    title: "Bachelor — AI & Data",
    tag: "Bachelor",
    content: "Building AI-powered tools in Python: a conversational assistant for pizzerias (EatIA), an NLP analysis engine for classic literature, and ML models predicting customer purchasing behaviour. Python became my main tool; AI became my direction.",
  },
  {
    period: "2026",
    title: "Switching to the Bachelor",
    tag: "Pivot",
    content: "Chose to move to the Bachelor track to focus on applied software engineering — Python, AI, data science. The shift wasn't a step back; it was a deliberate pivot toward where I want to go.",
  },
  {
    period: "Jan – Mar 2026",
    title: "Shell & advanced C",
    tag: "Masters",
    content: "Built a fully functional Bash-like shell: forking processes, piping, redirections, and environment variables — all from scratch. Solo stumper challenges pushed problem-solving under time pressure.",
  },
  {
    period: "Oct – Dec 2025",
    title: "Systems & Math modules",
    tag: "Masters",
    content: "Tackled Unix system programming (signals, /proc, process trees) and applied maths to code — simulating 3D ball trajectories, cracking cipher algorithms, and modelling architectural constraints.",
  },
  {
    period: "Sep 2025",
    title: "Epitech Masters — C Pool",
    tag: "Masters",
    content: "Dived straight into C: reimplementing printf, ls, top, and writing a duck-hunting game with CSFML. The pool was intense — no hand-holding, just a task, a man page, and a deadline.",
  },
];

const TAG_STYLES = {
  Masters:  "text-text-muted  border-border",
  Pivot:    "text-amber       border-amber/30",
  Bachelor: "text-rust        border-rust/30",
};
const DOT_COLORS = {
  Masters:  "bg-text-muted",
  Pivot:    "bg-amber",
  Bachelor: "bg-rust",
};

export default function Journey() {
  return (
    <PageWrapper>
      <section className="w-full max-w-3xl mt-12 px-4 pb-16">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="font-display text-7xl tracking-widest text-text-primary mb-2"
        >
          Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="text-text-secondary mb-12"
        >
          From writing C at 3am to training ML models — built project by project.
        </motion.p>

        <div className="relative border-l-2 border-border pl-8 space-y-12">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, type: "spring", stiffness: 350, damping: 30 }}
              className="relative"
            >
              {/* Animated dot */}
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 + 0.15, type: "spring", stiffness: 600, damping: 20 }}
                className={`absolute -left-[41px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-bg ${DOT_COLORS[item.tag]}`}
              />

              <p className="text-xs font-mono text-text-muted mb-1 tracking-widest">{item.period}</p>

              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <h3 className="font-display text-3xl tracking-wider text-text-primary">{item.title}</h3>
                <motion.span
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 + 0.25, type: "spring", stiffness: 500, damping: 25 }}
                  className={`px-2 py-0.5 border rounded-sm text-xs font-mono tracking-wide ${TAG_STYLES[item.tag]}`}
                >
                  {item.tag}
                </motion.span>
              </div>

              <p className="text-text-secondary leading-relaxed text-sm">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
