import React from "react";
import { LayoutPanelTop, Paintbrush, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import TechStackCards from "../components/TechStackCards";
import Projects from "./Projects";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const tagline = "A Wizard of Code, Turning Concepts into Magical Solutions.";
const highlightedTaglineStart = tagline.indexOf("Magical Solutions");

const typewriterContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.25,
    },
  },
};

const typewriterCharacter = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const timelineItems = [
  {
    year: "2026",
    description: "Full Stack Intern at DRDO",
    dotClassName: "bg-purple-500",
  },
  {
    year: "2024",
    description: "Started Exploring Web Development & DSA",
    dotClassName: "bg-green-500",
  },
  {
    year: "2023-2027",
    description: "BE- Computer Engineering",
    dotClassName: "bg-blue-500",
  },
];

const socialLinks = [
  {
    href: "https://github.com/omnikam2810-oss",
    className: "text-gray-600 hover:text-black transition",
    icon: <FaGithub size={20} />,
  },
  {
    href: "https://linkedin.com/in/omkar-nikam-a2aba9372",
    className: "text-blue-600 hover:text-blue-800 transition",
    icon: <FaLinkedin size={20} />,
  },
  {
    href: "mailto:omkarnikam2810@gmail.com",
    className: "text-blue-400 hover:text-blue-600 transition",
    icon: <IoMdMail size={20} />,
  },
];

const expertiseItems = [
  {
    title: "Full Stack Web Development",
    description:
      "Building responsive and scalable full-stack web applications using  modern technologies like React, Node.js, Express, and MongoDB.",
    icon: <LayoutPanelTop />,
  },
  {
    title: "App Development",
    description:
      "Exploring app development with React Native, focusing on building responsive cross-platform applications while continuously improving through real-world projects.",
    icon: <Smartphone />,
  },
  {
    title: "Software Optimization & Problem Solving",
    description:
      "Improving application performance and solving complex problems using DSA and scalable system design.",
    icon: <Paintbrush />,
  },
];

const internshipDescription =
  "Engineered and optimized scalable MERN stack modules within a secure offline intranet environment, focusing on high-performance RESTful API development, responsive dashboard interfaces, and efficient client-server communication. Contributed to backend optimization, asynchronous data processing, database integration, and modular frontend architecture while collaborating with the development team to deliver maintainable, production-ready enterprise features with improved system reliability and performance.";

const AboutPage = () => {
  return (
    <section className="pb-16">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto my-12 px-4 gap-8">
        <motion.div
          className="md:w-1/2 text-center md:text-left pl-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-2xl mx-auto my-12">
            <div className="relative border-l border-gray-700">
              {timelineItems.map((item, index) => (
                <div
                  key={item.year}
                  className={`${
                    index === timelineItems.length - 1 ? "mb-2" : "mb-5"
                  } ml-6`}
                >
                  <div
                    className={`absolute w-3 h-3 ${item.dotClassName} rounded-full -left-1.5 border border-gray-900`}
                  ></div>
                  <time className="mb-1 text-sm text-gray-400">
                    {item.year}
                  </time>
                  <p className="text-gray-300 text-lg">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative rounded-xl overflow-hidden flex flex-col items-center shadow-lg bg-white font-Roboto-light w-72">
            <div className="h-24 w-full bg-gray-900 overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src="/banner.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            <div className="relative -mt-12 flex flex-col items-center gap-2 px-5 py-5">
              <div className="bg-green-200 rounded-full p-4">
                <img src="/omkar.svg" width={100} height={100} />
              </div>

              <div className="text-center">
                <p className="text-black font-medium text-lg">Omkar Nikam</p>
                <p className="text-xs text-gray-500">
                  Software Developer | MERN
                </p>
              </div>

              <div className="flex items-center gap-4 mt-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={link.className}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-24">
        <Projects />
      </div>

      <motion.div
        id="internship"
        className="max-w-4xl mx-auto mt-32 px-6 mb-20"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="mb-6 text-center text-3xl font-bold text-green-300">
          Internships
        </h2>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 rounded-xl border-2 border-gray-800 bg-black p-6 shadow-lg shadow-green-900/10">
          <div className="shrink-0 rounded-full bg-white">
            <div className="rounded-full">
              <img
                src="/drdo.svg"
                alt="Internship profile"
                className="h-24 w-24 rounded-full object-contain"
              />
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="mt-1 text-2xl font-bold text-white">
              Full Stack Developer Intern at DRDO
            </h3>
            <p className="mt-1 text-sm text-gray-400">
              DRDO | Jan 2026 - Present
            </p>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              {internshipDescription}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.h1
        className="text-3xl font-bold px-12 mb-5 text-center"
        variants={typewriterContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        aria-label={tagline}
      >
        <span aria-hidden="true">
          {tagline.split("").map((character, index) => (
            <motion.span
              key={`${character}-${index}`}
              className={`inline-block ${
                index >= highlightedTaglineStart ? "text-green-300" : ""
              }`}
              variants={typewriterCharacter}
            >
              {character === " " ? "\u00A0" : character}
            </motion.span>
          ))}
        </span>
      </motion.h1>

      <div
        id="expertise"
        className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-2 gap-12 scroll-mt-24"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-xl font-bold text-gray-300 mb-2">My Expertise</h2>
          <hr className="border-t border-gray-600 w-full mb-8" />

          <div className="group p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 cursor-pointer">
            {expertiseItems.map((item, index) => (
              <div key={item.title}>
                <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
                  {item.icon} {item.title}
                </h3>
                <p
                  className={`text-gray-300 text-sm ${
                    index === expertiseItems.length - 1 ? "mb-4" : "mb-6"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-xl font-bold text-gray-300 mb-2">
            My Tech Stack
          </h2>
          <hr className="border-t border-gray-600 w-full mb-8" />
          <TechStackCards />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
