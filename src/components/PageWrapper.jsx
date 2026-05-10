import { motion } from "framer-motion";

// Persona 5 style: diagonal clip-path slam + flash overlay
const variants = {
  initial: {
    opacity: 0,
    x: 60,
    clipPath: "polygon(6% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  animate: {
    opacity: 1,
    x: 0,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
      opacity: { duration: 0.15 },
      x: { type: "spring", stiffness: 400, damping: 35 },
    },
  },
  exit: {
    opacity: 0,
    x: -60,
    clipPath: "polygon(0% 0%, 94% 0%, 100% 100%, 0% 100%)",
    transition: {
      duration: 0.28,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export default function PageWrapper({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full flex justify-center"
    >
      {children}
    </motion.div>
  );
}
