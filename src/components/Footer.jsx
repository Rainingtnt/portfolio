import { Link } from "react-router-dom";

const SOCIALS = [
  { label: "GitHub",    href: "https://github.com/Rainingtnt" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/romaric-guilbert-893ab839a/" },
  { label: "Instagram", href: "https://www.instagram.com/romaricguilbert?igsh=cmxmazV0aGp4ZTFr" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display text-lg tracking-widest text-text-primary">
            RG<span className="text-rust">.</span>
          </span>
          <span className="text-text-muted font-mono text-xs">© 2026 Romaric Guilbert</span>
        </div>

        <div className="flex items-center gap-5 font-mono text-xs">
          {SOCIALS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-rust transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <Link
          to="/contact"
          className="font-mono text-xs text-text-muted hover:text-rust transition-colors"
        >
          romguilbert5@gmail.com
        </Link>
      </div>
    </footer>
  );
}
