import { motion } from "framer-motion";

export default function AnimatedText({
  text,
  className = "",
  charDelay = 0.035,
  initialDelay = 0,
  from = "top",
}) {
  const axis = from === "top" ? { y: -80 } : from === "bottom" ? { y: 80 } : { x: -80 };

  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, ...axis, rotate: from === "top" ? -15 : 15, scaleY: 1.5 }}
          animate={{ opacity: 1, y: 0, x: 0, rotate: 0, scaleY: 1 }}
          transition={{
            delay: initialDelay + i * charDelay,
            type: "spring",
            stiffness: 600,
            damping: 30,
          }}
          style={{ display: "inline-block", transformOrigin: "bottom center" }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}
