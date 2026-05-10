import { useState } from "react";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const fieldVariants = {
  hidden: { opacity: 0, x: -30 },
  show: (i) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 400, damping: 30 },
  }),
};

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    window.location.href =
      `mailto:romguilbert5@gmail.com` +
      `?subject=${encodeURIComponent(data.get("subject"))}` +
      `&body=${encodeURIComponent(`Name: ${data.get("name")}\n\n${data.get("message")}`)}`;
    setSent(true);
  }

  return (
    <PageWrapper>
      <section className="w-full max-w-xl mt-12 px-4 pb-16">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="font-display text-7xl tracking-widest text-text-primary mb-2"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="text-text-secondary mb-8"
        >
          Open to opportunities, collaborations, and interesting projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, type: "spring", stiffness: 400, damping: 30 }}
          className="flex flex-col gap-2 mb-8 font-mono text-sm"
        >
          <a href="mailto:romguilbert5@gmail.com" className="text-rust hover:text-amber transition">
            romguilbert5@gmail.com
          </a>
          <a href="https://github.com/Rainingtnt" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-rust transition">
            github.com/Rainingtnt
          </a>
          <a href="https://www.linkedin.com/in/romaric-guilbert-893ab839a/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-rust transition">
            linkedin.com/in/romaric-guilbert
          </a>
          <a href="https://www.instagram.com/romaricguilbert?igsh=cmxmazV0aGp4ZTFr" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-rust transition">
            instagram.com/romaricguilbert
          </a>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.85, type: "spring", stiffness: 500, damping: 25 }}
          whileHover={{ y: -2 }}
          href="/Guilbert_Romaric_CV.pdf"
          download
          className="inline-flex items-center gap-2 mb-10 px-5 py-2.5 border border-border rounded-sm text-sm font-mono text-text-secondary hover:border-rust/50 hover:text-rust transition shadow-[3px_3px_0px_rgba(0,0,0,0.3)]"
        >
          Download CV (PDF)
        </motion.a>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
            className="bg-card border border-rust/30 rounded-sm p-8 text-center shadow-[4px_4px_0px_rgba(212,135,74,0.2)]"
          >
            <p className="font-display text-3xl tracking-wider text-rust">Email client opened!</p>
            <p className="text-text-secondary text-sm mt-2">Thanks for reaching out.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { name: "name",    label: "Name",    type: "input",    placeholder: "Your name" },
              { name: "subject", label: "Subject", type: "input",    placeholder: "What's this about?" },
              { name: "message", label: "Message", type: "textarea", placeholder: "Tell me about your project..." },
            ].map(({ name, label, type, placeholder }, i) => (
              <motion.div key={name} custom={i} variants={fieldVariants} initial="hidden" animate="show">
                <label className="block text-xs font-mono text-text-muted uppercase tracking-[0.2em] mb-1.5">
                  {label}
                </label>
                {type === "textarea" ? (
                  <textarea
                    name={name} required rows={5} placeholder={placeholder}
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-text-primary placeholder-text-muted font-mono text-sm focus:outline-none focus:border-rust/50 transition resize-none"
                  />
                ) : (
                  <input
                    name={name} type="text" required placeholder={placeholder}
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-text-primary placeholder-text-muted font-mono text-sm focus:outline-none focus:border-rust/50 transition"
                  />
                )}
              </motion.div>
            ))}

            <motion.button
              custom={3} variants={fieldVariants} initial="hidden" animate="show"
              whileHover={{ y: -2, backgroundColor: "#c4943a" }}
              whileTap={{ scale: 0.97, y: 2 }}
              type="submit"
              className="w-full py-3 bg-rust text-bg font-display text-2xl tracking-widest rounded-sm transition shadow-[3px_3px_0px_rgba(0,0,0,0.4)]"
            >
              Send
            </motion.button>
          </form>
        )}
      </section>
    </PageWrapper>
  );
}
