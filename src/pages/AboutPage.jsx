import React from "react";
import {
  LayoutPanelTop,
  FolderCode,
  Paintbrush,
  Smartphone,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import TechStackCards from "../components/TechStackCards";
import { motion } from "framer-motion";

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

const AboutPage = () => {
  return (
    <section>
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto my-12 px-4 gap-8">
        {/* Timeline */}
        <motion.div
          className="md:w-1/2 text-center md:text-left pl-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl text-green-300 font-bold mb-4"
            variants={fadeUp}
          >
            About Me
          </motion.h2>
          <div className="max-w-2xl mx-auto my-12">
            <div className="relative border-l border-gray-700">
              {/* Present */}
              <div className="ml-6 mt-2 mb-5">
                <div className="absolute w-3 h-3 bg-pink-500 rounded-full -left-1.5 border border-gray-900"></div>
                <time className="mb-1 text-sm text-gray-400">Present</time>
                <p className="text-gray-300 text-lg">Seeking new opportunities</p>
              </div>

              {/* 2026 */}
              <div className="mb-5 ml-6">
                <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-1.5 border border-gray-900"></div>
                <time className="mb-1 text-sm text-gray-400">2026</time>
                <p className="text-gray-300 text-lg">
                  Full Stack Intern at DRDO
                </p>
              </div>

              {/* 2024 */}
              <div className="mb-5 ml-6">
                <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-1.5 border border-gray-900"></div>
                <time className="mb-1 text-sm text-gray-400">2024</time>
                <p className="text-gray-300 text-lg">Started Exploring Web Development & DSA</p>
              </div>

              {/* 2022 */}
              <div className="mb-2 ml-6">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-gray-900"></div>
                <time className="mb-1 text-sm text-gray-400">2023-2027</time>
                <p className="text-gray-300 text-lg">BE- Computer Engineering</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative rounded-xl overflow-hidden flex flex-col items-center shadow-lg bg-white font-Roboto-light w-72">
            {/* Header */}
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

            {/* Profile Icon */}
            <div className="relative -mt-12 flex flex-col items-center gap-2 px-5 py-5">
              <div className="bg-green-200 rounded-full p-4">
                <img src="/omkar.svg" width={100} height={100} />
              </div>

              {/* Name & Bio */}
              <div className="text-center">
                <p className="text-black font-medium text-lg">Omkar Nikam</p>
                <p className="text-xs text-gray-500">
                  Software Developer | MERN
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-3">
                <a
                  href="https://github.com/omnikam2810-oss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/omkar-nikam-a2aba9372"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="mailto:omkarnikam2810@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition"
                >
                  <IoMdMail size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Internship Card */}
      <motion.div
        className="max-w-4xl mx-auto px-6 mb-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
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
            <p className="text-sm font-semibold uppercase tracking-wide text-green-300">
              Internship Experience
            </p>
            <h3 className="mt-1 text-2xl font-bold text-white">
              Full Stack Developer Intern at DRDO
            </h3>
            <p className="mt-1 text-sm text-gray-400">
              DRDO | Jan 2026 - Present
            </p>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              Worked on responsive MERN stack modules, REST APIs, dashboard UI
              improvements, and database integration while collaborating with a
              development team to deliver clean, maintainable features.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Tagline */}
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

      {/* Info Cards */}
      {/* <motion.div
        className="w-full flex justify-center py-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-[100%] px-12 text-center text-white">
          <div className="flex flex-col ">
            <div className="flex items-center  w-full">
              <span className="px-3 text-xl uppercase opacity-70 tracking-wide font-semibold">
                Experience
              </span>
              <div className="flex-grow border-t border-gray-600"></div>
            </div>
            <p className="text-lg text-start ml-5 mt-2 font-thin">⏳ 6 months</p>
          </div>

          <div className="flex flex-col ">
            <div className="flex items-center w-full">
              <span className="px-3 text-xl uppercase opacity-70 tracking-wide font-semibold">
                Location
              </span>
              <div className="flex-grow border-t border-gray-600"></div>
            </div>
            <p className="text-lg text-start ml-5 mt-2 font-thin">📍 India</p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center w-full">
              <span className="px-3 text-xl uppercase opacity-70 tracking-wide font-semibold">
                Freelance
              </span>
              <div className="flex-grow border-t border-gray-600"></div>
            </div>
            <p className="text-lg text-start ml-5 mt-2 font-thin">👋 Available</p>
          </div>
        </div>
      </motion.div> */}

      {/* Services & Tech Stack */}
      <div className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-2 gap-12 ">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-xl font-bold text-gray-300 mb-2">My Services</h2>
          <hr className="border-t border-gray-600 w-full mb-8" />

          <div className="group p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
              <LayoutPanelTop /> Full Stack Web Development
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Building responsive and scalable full-stack web applications using  modern technologies like React, Node.js, Express, and MongoDB.
            </p>

            <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
              <Smartphone /> App Development
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Exploring app development with React Native, focusing on building responsive cross-platform applications while continuously improving through real-world projects.
            </p>

            <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
              <Paintbrush /> Software Optimization & Problem Solving
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Improving application performance and solving complex problems using DSA and scalable system design.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-xl font-bold text-gray-300 mb-2">My Tech Stack</h2>
          <hr className="border-t border-gray-600 w-full mb-8" />
          <TechStackCards />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
