import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import { useLanguage } from "../context/LanguageContext";

const TAG_STYLES = {
  Masters:  "text-text-muted border-border",
  Pivot:    "text-amber border-amber/30",
  Bachelor: "text-rust border-rust/30",
};
const DOT_COLORS = {
  Masters:  "bg-text-muted",
  Pivot:    "bg-amber",
  Bachelor: "bg-rust",
};

export default function Journey() {
  const { t } = useLanguage();
  const j = t.journey;

  return (
    <PageWrapper>
      <section className="w-full max-w-3xl mt-12 px-4 pb-16">
        <motion.h2 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 400, damping: 30 }} className="font-display text-7xl tracking-widest text-text-primary mb-2">
          {j.title}
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-text-secondary mb-12">
          {j.sub}
        </motion.p>

        <div className="relative border-l-2 border-border pl-8 space-y-12">
          {j.timeline.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.06, type: "spring", stiffness: 350, damping: 30 }} className="relative">
              <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 + 0.15, type: "spring", stiffness: 600, damping: 20 }} className={`absolute -left-[41px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-bg ${DOT_COLORS[item.tag]}`} />
              <p className="text-xs font-mono text-text-muted mb-1 tracking-widest">{item.period}</p>
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <h3 className="font-display text-3xl tracking-wider text-text-primary">{item.title}</h3>
                <motion.span initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 + 0.25, type: "spring", stiffness: 500, damping: 25 }} className={`px-2 py-0.5 border rounded-sm text-xs font-mono tracking-wide ${TAG_STYLES[item.tag]}`}>
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
