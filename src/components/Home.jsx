import { ArrowUpRight } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center pt-32 pb-12 px-6 overflow-x-hidden">
      {/* Subtitle */}
      <p className="text-green-500 text-sm tracking-wider mb-3">
        ● CURRENTLY INTERN AT DRDO
      </p>

      {/* Main Title */}
      <h2 className="text-6xl md:text-8xl font-extrabold mb-4 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-400 bg-clip-text text-transparent">
        OMKAR NIKAM
      </h2>

      {/* Role with typing effect */}
      <p className="text-gray-400 text-2xl md:text-4xl font-medium mb-8 w-full overflow-x-hidden">
        <TypeAnimation
          sequence={[
            "Software Developer", 2000,
            "Full Stack - MERN", 2000,
            "Open for Opportunities", 2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="inline-block"
          cursor={true}
        />
      </p>

      {/* Button */}
      <NavLink
        to="/contact"
        className="bg-white text-black px-8 py-3 flex gap-2 rounded-full font-medium hover:bg-gray-200 transition"
      >
        Get in touch <ArrowUpRight />
      </NavLink>
    </section>
  );
};

export default Home;
