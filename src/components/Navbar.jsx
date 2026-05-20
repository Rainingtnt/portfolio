import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const LINKS = [
  { to: "/",         label: "Home"     },
  { to: "/journey",  label: "Journey"  },
  { to: "/projects", label: "Projects" },
  { to: "/skills",   label: "Skills"   },
  { to: "/contact",  label: "Contact"  },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/Rainingtnt",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/romaric-guilbert-893ab839a/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/romaricguilbert?igsh=cmxmazV0aGp4ZTFr",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const close = () => setOpen(false);

  const NAV_LINKS = [
    { to: "/",         label: t.nav.home     },
    { to: "/journey",  label: t.nav.journey  },
    { to: "/projects", label: t.nav.projects },
    { to: "/skills",   label: t.nav.skills   },
    { to: "/contact",  label: t.nav.contact  },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-bg/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" onClick={close} className="font-display text-2xl tracking-widest text-text-primary">
            RG<span className="text-rust">.</span>
          </Link>

          <div className="flex items-center gap-6">
            {/* Desktop links */}
            <div className="hidden sm:flex gap-6 text-sm font-medium">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`transition-colors tracking-wide ${
                    pathname === link.to
                      ? "text-rust"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Social icons — desktop only */}
            <div className="hidden sm:flex items-center gap-3">
              {SOCIALS.map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label} className="text-text-muted hover:text-rust transition-colors">
                  {icon}
                </a>
              ))}
            </div>

            {/* Language switcher */}
            <div className="flex items-center border border-border rounded-sm overflow-hidden text-sm">
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-1 transition-colors ${lang === "en" ? "bg-rust text-bg" : "text-text-muted hover:text-text-primary"}`}
                aria-label="English"
              >
                🇬🇧
              </button>
              <button
                onClick={() => setLang("fr")}
                className={`px-2 py-1 transition-colors ${lang === "fr" ? "bg-rust text-bg" : "text-text-muted hover:text-text-primary"}`}
                aria-label="Français"
              >
                🇫🇷
              </button>
            </div>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="sm:hidden flex flex-col gap-[5px] p-1"
            >
              <motion.span
                animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="block w-6 h-[2px] bg-text-primary origin-center"
              />
              <motion.span
                animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
                transition={{ duration: 0.15 }}
                className="block w-6 h-[2px] bg-text-primary"
              />
              <motion.span
                animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="block w-6 h-[2px] bg-text-primary origin-center"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
            animate={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)" }}
            exit={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
            transition={{ duration: 0.35, ease: [0.87, 0, 0.13, 1] }}
            className="fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-8 sm:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.06 + 0.15, type: "spring", stiffness: 400, damping: 30 }}
              >
                <Link
                  to={link.to}
                  onClick={close}
                  className={`font-display text-6xl tracking-widest transition-colors ${
                    pathname === link.to ? "text-rust" : "text-text-primary hover:text-rust"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* Socials in mobile menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.45 }}
              className="flex gap-6 mt-4"
            >
              {SOCIALS.map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label} className="text-text-muted hover:text-rust transition-colors">
                  <span className="w-6 h-6 block">{icon}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
