import React from "react";
import { ArrowUpRight, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const scrollToContact = (event) => {
    event.preventDefault();

    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.pushState(null, "", "#contact");
  };

  return (
    <section className="bg-black text-white w-full py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <p className="text-gray-400 flex gap-2 uppercase tracking-widest text-sm border-b border-gray-700 pb-2">
          <motion.span
            animate={{ rotate: [0, 10, -10, 5, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Handshake strokeWidth={1.5} />
          </motion.span>{" "}
          SAY HELLO
        </p>

        {/* Main content */}
        <div className="mt-10 flex flex-col md:flex-row items-start justify-between">
          <div className="mt-6 md:mt-0 md:ml-8 flex-1 ">
            <h2 className="text-4xl md:text-5xl font-bold leading-snug">
              I'm open for Internships <br /> & full-time roles.
            </h2>

            {/* Button */}
          </div>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="w-auto flex gap-2 mt-10 px-8 py-4 border text-center border-white rounded-full text-lg font-medium hover:bg-white hover:text-black transition"
          >
            Get in touch <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
