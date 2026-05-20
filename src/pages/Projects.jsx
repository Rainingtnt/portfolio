import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import { useLanguage } from "../context/LanguageContext";

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotate: -3 },
  show: (i) => ({ opacity: 1, y: 0, rotate: 0, transition: { delay: i * 0.08, type: "spring", stiffness: 400, damping: 30 } }),
};

function ProjectCard({ name, description, tech, repo, index }) {
  return (
    <motion.a href={repo} target="_blank" rel="noopener noreferrer" custom={index} variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }} whileHover={{ y: -6, transition: { type: "spring", stiffness: 600, damping: 20 } }} className="flex flex-col justify-between bg-card border border-border rounded-sm p-6 group shadow-[4px_4px_0px_rgba(0,0,0,0.35)] hover:border-rust/50 hover:shadow-[4px_4px_0px_rgba(212,135,74,0.2)] transition-colors">
      <div>
        <h4 className="font-display text-2xl tracking-wider text-text-primary mb-2 group-hover:text-rust transition-colors">{name}</h4>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="px-2 py-1 bg-bg border border-border rounded text-xs font-mono text-text-secondary">{t}</span>
        ))}
      </div>
    </motion.a>
  );
}

function SectionHeader({ comment, title }) {
  return (
    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ type: "spring", stiffness: 400, damping: 30 }} className="mb-6">
      <span className="font-mono text-xs text-text-muted tracking-widest uppercase">{comment}</span>
      <h3 className="font-display text-3xl tracking-widest text-text-secondary mt-1 mb-6">{title}</h3>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <PageWrapper>
      <section className="w-full max-w-6xl mt-12 px-4 pb-16">
        <motion.h2 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 400, damping: 30 }} className="font-display text-7xl tracking-widest text-text-primary mb-2">
          {p.title}
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-text-secondary mb-12">
          {p.sub}
        </motion.p>

        <SectionHeader comment={p.mastersComment} title={p.mastersTitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {p.masters.map((proj, i) => <ProjectCard key={proj.name} {...proj} index={i} />)}
        </div>

        <SectionHeader comment={p.bachelorComment} title={p.bachelorTitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {p.bachelor.map((proj, i) => <ProjectCard key={proj.name} {...proj} index={i} />)}
        </div>
      </section>
    </PageWrapper>
  );
}
