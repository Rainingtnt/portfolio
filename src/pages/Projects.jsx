import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const MASTER_PROJECTS = [
  {
    name: "myprintf",
    description: "Full reimplementation of printf in C — format specifiers, flags, width, precision, and variadic arguments from scratch without any standard library.",
    tech: ["C", "Low-level", "Variadic args"],
    repo: "https://github.com/Rainingtnt/myprintf",
  },
  {
    name: "minishell",
    description: "A functional Bash-like shell in C: command parsing, process forking, pipes, redirections, built-ins (cd, env, exit), and environment variable management.",
    tech: ["C", "POSIX", "Process management", "Pipes"],
    repo: "https://github.com/Rainingtnt/minishell",
  },
  {
    name: "myhunter",
    description: "A duck-hunting graphical game built with CSFML. Handles sprite animation, mouse input, game state, scoring, and a full game loop.",
    tech: ["C", "CSFML", "Game dev", "2D graphics"],
    repo: "https://github.com/Rainingtnt/myhunter",
  },
  {
    name: "myradar",
    description: "Air traffic control simulation with animated radar display. Planes follow computed trajectories and trigger alerts when paths intersect.",
    tech: ["C", "CSFML", "Simulation", "Algorithms"],
    repo: "https://github.com/Rainingtnt/myradar",
  },
  {
    name: "101pong",
    description: "Math project simulating a 3D ball trajectory with vector physics. Determines whether the ball will reach a paddle plane based on initial position and velocity.",
    tech: ["C", "Mathematics", "3D vectors", "Physics"],
    repo: "https://github.com/Rainingtnt/101pong",
  },
  {
    name: "mytop / myls",
    description: "Reimplementations of the Unix top and ls commands in C — reading /proc, handling signals, formatting output, and supporting key flags.",
    tech: ["C", "POSIX", "Unix", "/proc"],
    repo: "https://github.com/Rainingtnt/mytop",
  },
];

const BACHELOR_PROJECTS = [
  {
    name: "EatIA",
    description: "An AI-powered conversational assistant for pizzerias — takes orders, handles reservations, and answers customers when staff are overwhelmed during peak hours.",
    tech: ["Python", "AI", "NLP", "Conversational UI"],
    repo: "https://github.com/Rainingtnt/EatIA",
  },
  {
    name: "Alice in Wonderland",
    description: "A CLI NLP tool that analyses literary texts: lexical diversity, character & location extraction, book summary generation, and finding similar books in a collection.",
    tech: ["Python", "NLP", "Text analysis", "CLI"],
    repo: "https://github.com/Rainingtnt/alice-in-wonderland",
  },
  {
    name: "NextBuy",
    description: "Data science project on grocery e-commerce data: exploratory analysis, visualisation, and ML models predicting customer purchase behaviour.",
    tech: ["Python", "Jupyter", "pandas", "scikit-learn", "ML"],
    repo: "https://github.com/Rainingtnt/nextbuy",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotate: -3 },
  show: (i) => ({
    opacity: 1, y: 0, rotate: 0,
    transition: { delay: i * 0.08, type: "spring", stiffness: 400, damping: 30 },
  }),
};

function ProjectCard({ name, description, tech, repo, index }) {
  return (
    <motion.a
      href={repo}
      target="_blank"
      rel="noopener noreferrer"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 600, damping: 20 } }}
      className="flex flex-col justify-between bg-card border border-border rounded-sm p-6 group shadow-[4px_4px_0px_rgba(0,0,0,0.35)] hover:border-rust/50 hover:shadow-[4px_4px_0px_rgba(212,135,74,0.2)] transition-colors"
    >
      <div>
        <h4 className="font-display text-2xl tracking-wider text-text-primary mb-2 group-hover:text-rust transition-colors">
          {name}
        </h4>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="px-2 py-1 bg-bg border border-border rounded text-xs font-mono text-text-secondary">
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

function SectionHeader({ label, comment, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50, skewX: "-4deg" }}
      whileInView={{ opacity: 1, x: 0, skewX: "0deg" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="mb-6"
    >
      <span className="font-mono text-xs text-text-muted tracking-widest uppercase">{comment}</span>
      <h3 className="font-display text-3xl tracking-widest text-text-secondary mt-1 mb-6">{title}</h3>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <PageWrapper>
      <section className="w-full max-w-6xl mt-12 px-4 pb-16">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="font-display text-7xl tracking-widest text-text-primary mb-2"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-text-secondary mb-12"
        >
          A selection of what I built across both programs.
        </motion.p>

        <SectionHeader comment="// masters — C & system" title="Low-level & systems" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {MASTER_PROJECTS.map((p, i) => <ProjectCard key={p.name} {...p} index={i} />)}
        </div>

        <SectionHeader comment="// bachelor — AI & data" title="AI & data science" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BACHELOR_PROJECTS.map((p, i) => <ProjectCard key={p.name} {...p} index={i} />)}
        </div>
      </section>
    </PageWrapper>
  );
}
