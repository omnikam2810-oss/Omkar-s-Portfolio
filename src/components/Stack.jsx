import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiPython,
  SiHtml5,
  SiCss3,
  SiTypescript,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "Python", icon: <SiPython /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
];

const Stack = () => {
  return (
    <div className="relative bg-black text-white py-12 overflow-hidden px-4 sm:px-8 md:px-12">
      {/* Title */}
      <p className="text-gray-200 text-center mb-12 text-xs sm:text-sm md:text-base">
        Tech Stack I've worked with
      </p>

      {/* Marquee Container */}
      <div className="relative overflow-hidden">
        <div className="whitespace-nowrap flex animate-marquee">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 mx-4 sm:mx-6 md:mx-8 text-lg sm:text-2xl md:text-3xl font-light text-gray-400"
            >
              {tech.icon}
              <span className="text-gray-500 font-extralight text-sm sm:text-base md:text-lg">
                {tech.name}
              </span>
            </div>
          ))}

          {/* Duplicate for infinite scroll */}
          {techStack.map((tech, index) => (
            <div
              key={`dup-${index}`}
              className="flex items-center space-x-2 mx-4 sm:mx-6 md:mx-8 text-lg sm:text-2xl md:text-3xl font-light text-gray-400"
            >
              {tech.icon}
              <span className="text-gray-500 font-extralight text-sm sm:text-base md:text-lg">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Fade Shadows */}
        <div className="pointer-events-none absolute top-0 left-0 w-12 sm:w-16 md:w-24 h-full bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 w-12 sm:w-16 md:w-24 h-full bg-gradient-to-l from-black to-transparent" />
      </div>
    </div>
  );
};

export default Stack;
