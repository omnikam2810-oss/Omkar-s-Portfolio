import { ArrowUpRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import useProjects from "../hooks/useProjects";

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Projects = () => {
  const projects = useProjects();

  return (
    <section id="projects" className="max-w-7xl mx-auto p-4 my-12 h-auto scroll-mt-24">
      {/* Section Heading */}
      <motion.h2
        className="text-4xl text-gray-300 text-center font-bold mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        My Projects
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flip-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index} // pass index for stagger delay
          >
            <div className="flip-card-inner">
              {/* Front */}
              <div className="flip-card-front rounded-xl border-2 border-gray-800 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>

              {/* Back */}
              <div className="flip-card-back">
                <h3 className="text-lg font-semibold mb-2 text-green-500">
                  {project.title}
                </h3>
                <p className="text-sm mb-2 text-center">
                  {project.description}
                </p>
                <p className="text-xs font-mono mb-3 text-center font-semibold text-sky-500">
                  {project.stack}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block px-4 py-2 border border-gray-300 text-white rounded overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
                  <span className="relative z-10 flex gap-2 group-hover:text-gray-900 transition-colors duration-500">
                    View Project <ArrowUpRight />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
