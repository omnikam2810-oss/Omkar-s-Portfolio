import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        
        {/* Left: Text content */}
        <div className="w-full md:flex-1 text-center md:text-left space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-300 font-bold tracking-wide border-b-2 border-white pb-2">
            About Me
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            Hi, I'm Omkar! I'm a passionate developer with a love for building clean, efficient, and aesthetically pleasing web applications.  
            I enjoy working on full-stack projects and exploring new technologies that make my work both creative and meaningful.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            Currently, I am working as an Intern at DRDO, where I am gaining practical experience in software development and real-world problem solving.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            Exploring Data Structures & Algorithms, problem-solving techniques, and scalable software engineering while continuously strengthening my skills as a full-stack developer and building efficient, real-world applications.
          </p>
          
          <div className="mt-6 w-full md:w-3/4 lg:w-1/2">
            <NavLink
              to="/about"
              className="px-4 sm:px-6 py-3 h-12 rounded-full border flex justify-center items-center gap-2 sm:gap-4 border-white hover:bg-white hover:text-black transition"
            >
              More About Me <ArrowUpRight size={18} className="sm:size-auto" />
            </NavLink>
          </div>
        </div>

        {/* Right: SVG image */}
        <div className="w-full md:flex-1 flex justify-center md:justify-end order-first md:order-last">
          <img
            src="/code.svg"
            alt="Decorative illustration"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default About;