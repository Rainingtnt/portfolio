import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Journey from "./pages/Journey";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      {/* P5 flash overlay on route change */}
      <motion.div
        key={location.pathname + "-flash"}
        initial={{ x: "-100%" }}
        animate={{ x: ["-100%", "0%", "0%", "100%"] }}
        transition={{ duration: 0.48, times: [0, 0.38, 0.62, 1], ease: [0.87, 0, 0.13, 1] }}
        className="fixed inset-0 z-[100] bg-rust pointer-events-none"
      />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col items-center px-4 bg-bg text-text-primary">
        <div className="fixed inset-0 bg-warm-glow pointer-events-none z-0" />
        <div className="relative z-10 w-full flex flex-col items-center">
          <Navbar />
          <main className="w-full flex-1">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
