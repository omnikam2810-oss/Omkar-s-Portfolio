import { ArrowUpRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export const projects = [
  {
    title: "RepoLens - AI-Powered GitHub Repository Analyzer",
    description:
      "Everything an engineering team needs to understand a codebase faster.",
    image: "/RepoLens.png",
    stack: "REACTJS | NODEJS | EXPRESSJS | TAILWIND CSS | VITE ",
    link: "https://repo-lens-zeta.vercel.app/",
  },
  {
    title: "DesignSync",
    description:
      "A clean control centre for design delivery. DesignSync is a design handoff tool that streamlines the process of delivering design assets and specifications to development teams, ensuring a smooth transition from design to code.",
    image: "/DesignSync.png",
    stack:
      "REACT | NODEJS | EXPRESS | TAILWIND CSS | MONGODB | CLODINARY | VITE | SOCKET.IO",
    link: "https://outlaw-seven.vercel.app/",
  },
  {
    title: "3D DEVELOPERS PORTFOLIO",
    description:
      "Built a fully responsive 3D portfolio website featuring interactive animations, smooth camera transitions, dynamic project showcases, and optimized performance to create an engaging user experience while highlighting technical projects and skills.",
    stack:
      "JAVASCRIPT | REACT | FRAMER MOTION | TAILWIND CSS | VITE",
    image: "/Portfolio.png",
    link: "https://github.com/omnikam2810-oss/Outlaw",
  },
  {
    title: "",
    description:
      "",
    stack:
      "",
    image: "",
    link: "",
  },
  
    
];

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
  return (
    <div className="max-w-7xl mx-auto p-4 my-12 h-auto">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div className="flip-card-front">
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
    </div>
  );
};

export default Projects;
