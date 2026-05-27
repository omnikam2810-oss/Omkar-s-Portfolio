import React from "react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact size={26} />, color: "rgb(97,218,251)" },
  { name: "Next.js", icon: <SiNextdotjs size={26} />, color: "rgb(255,255,255)" },
  { name: "Node.js", icon: <FaNodeJs size={26} />, color: "rgb(83,181,72)" },
  { name: "MongoDB", icon: <SiMongodb size={26} />, color: "rgb(0,128,0)" },
  { name: "Express", icon: <SiExpress size={26} />, color: "rgb(111,111,111)" },
  { name: "PostgreSQL", icon: <SiPostgresql size={26} />, color: "rgb(51,103,145)" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={26} />, color: "rgb(56,189,248)" },
  { name: "HTML5", icon: <SiHtml5 size={26} />, color: "rgb(227,76,38)" },
  { name: "CSS", icon: <SiCss3 size={26} />, color: "rgb(38,77,228)" },
  { name: "JavaScript", icon: <SiJavascript size={26} />, color: "rgb(240,219,79)" },
  { name: "Git", icon: <FaGitAlt size={26} />, color: "rgb(240,80,51)" },
];

const TechStackCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {techStack.map((tech) => (
        <div
          key={tech.name}
          className="flex items-center gap-3 rounded-lg border border-gray-800 bg-black px-3 py-2.5"
        >
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center"
            style={{ color: tech.color }}
            aria-hidden="true"
          >
            {tech.icon}
          </span>
          <span className="text-sm font-medium text-gray-300">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStackCards;
