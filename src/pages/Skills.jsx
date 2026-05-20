import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();
  const s = t.skills;

  return (
    <PageWrapper>
      <section className="w-full max-w-5xl mt-12 px-4 pb-16">
        <motion.h2 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 400, damping: 30 }} className="font-display text-7xl tracking-widest text-text-primary mb-2">
          {s.title}
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-text-secondary mb-12">
          {s.sub}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {s.groups.map(({ category, skills }, i) => (
            <motion.div key={category} initial={{ opacity: 0, y: 40, rotate: -2 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.07, type: "spring", stiffness: 400, damping: 30 }} whileHover={{ y: -4, transition: { type: "spring", stiffness: 600, damping: 20 } }} className="bg-card border border-border rounded-sm p-6 shadow-[4px_4px_0px_rgba(0,0,0,0.35)] hover:border-rust/30 transition-colors">
              <h3 className="font-mono text-xs text-rust tracking-[0.2em] uppercase mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((sk) => (
                  <span key={sk} className="px-3 py-1 bg-bg border border-border rounded text-sm text-text-secondary font-mono">{sk}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
