import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../constants/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname, hash } = useLocation();

  const getHashLinkClass = (to) =>
    pathname === "/" && hash === to.replace("/", "")
      ? "text-white font-semibold"
      : "hover:text-gray-400 transition";

  return (
    <header className="flex mx-12 justify-between items-center px-6 py-4 md:px-12 border-b border-gray-700 relative">
      {/* Logo */}
      <h1 className="text-lg font-bold tracking-wide">
        <NavLink to="/">OMKAR NIKAM</NavLink>
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex items-center space-x-8 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className={getHashLinkClass(link.to)}>
                {link.name}
              </Link>
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
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={getHashLinkClass(link.to)}
                  >
                    {link.name}
                  </Link>
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
