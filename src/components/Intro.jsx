import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GridBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="w-full h-full bg-gradient-to-b from-gray-800 via-gray-900 to-black">
        {/* Vertical grid lines */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.1)_0px,rgba(255,255,255,0.1)_1px,transparent_1px,transparent_50px)]" />
        {/* Horizontal grid lines */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.1)_0px,rgba(255,255,255,0.1)_1px,transparent_1px,transparent_50px)]" />

        {/* Light rays effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-transparent animate-pulse" />
      </div>
    </div>
  );
};

const Intro = ({ onFinish }) => {
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (animateOut) {
      const timer = setTimeout(() => {
        onFinish();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [animateOut, onFinish]);

  return (
    <AnimatePresence>
      {!animateOut && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center text-white z-50"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1 }}
        >
          {/* Grid background */}
          <GridBackground />

          {/* Content */}
          <div className="max-w-2xl px-6 md:px-12">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Hi, I’m{" "}
              <span className="text-blue-400">Omkar Nikam</span>,
            </h1>
            <h2 className="mt-2 text-3xl md:text-5xl font-bold text-white">
              A Full Stack Developer
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              With experience crafting scalable web applications, building
              efficient APIs, and designing seamless user experiences.
            </p>

            <button
              onClick={() => setAnimateOut(true)}
              className="mt-6 px-6 py-3 rounded-lg text-lg font-medium bg-blue-500 text-white shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Enter Portfolio
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
