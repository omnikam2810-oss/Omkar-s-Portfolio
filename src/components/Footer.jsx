import React, { useState } from "react";
import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../constants/navigation";

const Footer = () => {
  const email = "omnikam2810@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <footer className="border-t border-gray-700 px-8 py-6 mx-12 mt-12">
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
        <nav className="flex justify-center md:justify-start">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium md:justify-start">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-gray-400 transition">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <a href={`mailto:${email}`} className="hover:text-white transition">
            {email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="flex h-5 w-5 items-center justify-center hover:text-white transition"
            aria-label="Copy email address"
            title="Copy email address"
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 text-gray-400 md:justify-end">
          <a
            href="https://github.com/omnikam2810-oss"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/omkar-nikam-a2aba9372"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${email}`} className="hover:text-white transition">
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} Omkar Nikam. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
