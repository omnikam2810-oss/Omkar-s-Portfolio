import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import useProjects from "../hooks/useProjects";

const ProjectCarousel = () => {
  const projects = useProjects();
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    if (!projects.length) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  useEffect(() => {
    if (current >= projects.length) {
      setCurrent(0);
    }
  }, [current, projects.length]);

  if (!projects.length) return null;

  const project = projects[current];

  // Convert stack string → array (split by |)
  const techStack = project.stack
    ? project.stack.split("|").map((t) => t.trim())
    : [];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-black text-white">
      <h1 className="text-3xl md:text-5xl lg:text-5xl text-gray-300 mb-10 font-bold tracking-wide pb-2">
        My Projects
      </h1>

      <div className="relative w-full max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-xl"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/2 rounded-xl object-cover shadow-lg"
            />

            {/* Project Info */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-bold">{project.title}</h2>
              <p className="text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white text-black rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 mt-4 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                View Project <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 gap-3">
          {projects.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                index === current ? "bg-white" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
