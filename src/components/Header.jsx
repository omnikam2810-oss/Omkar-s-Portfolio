import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Get in touch", to: "/contact" },
  ];

  return (
    <header className="flex mx-12 justify-between items-center px-6 py-4 md:px-12 border-b border-gray-700 relative">
      {/* Logo */}
      <h1 className="text-lg font-bold tracking-wide">
        <NavLink to="/">OMKAR NIKAM</NavLink>
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-semibold"
                    : "hover:text-gray-400 transition"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger (Mobile) */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-black border-t border-gray-700 md:hidden"
          >
            <ul className="flex flex-col items-center space-y-6 py-6 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setIsOpen(false)} // close on click
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-semibold"
                        : "hover:text-gray-400 transition"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
