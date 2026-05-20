import React from "react";
import Home from "../components/Home";
import Stack from "../components/Stack";
import About from "../components/About";
import ProjectCarousel from "../components/ProjectCarousel";
import ContactSection from "../components/ContactSection";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const HomePage = () => {
  return (
    <main className="overflow-y-hidden">
      {/* Hero (no scroll trigger, just show immediately) */}
      <Home />

      {/* Tech Stack */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Stack />
      </motion.section>

      {/* About */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
      >
        <About />
      </motion.section>

      {/* Projects */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
      >
        <ProjectCarousel />
      </motion.section>

      {/* Contact */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={4}
      >
        <ContactSection />
      </motion.section>
    </main>
  );
};

export default HomePage;
