import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, Github, Linkedin, Mail, Code2, Instagram } from "lucide-react";
import { HERO_DATA } from "../data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills & Tools", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0F19]/80 backdrop-blur-md border-b border-slate-800/80 py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-lime-400 p-[1px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#0F172A] rounded-[11px] flex items-center justify-center">
              {/* <Code2 className="w-5 h-5 text-lime-400 group-hover:text-violet-400 transition-colors" /> */}
              <img src="images/icon-web.png" className="w-8 h-8" alt="" />
            </div>
          </div>
          <span className="font-sans font-bold text-xl text-white tracking-tight">
            Farhan's <span className="text-lime-400">Portofolio</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-sans text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 relative py-2 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-lime-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Button & Socials */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href={HERO_DATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={HERO_DATA.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={HERO_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold text-white rounded-lg group bg-gradient-to-br from-violet-600 to-lime-400 group-hover:from-violet-600 group-hover:to-lime-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-800"
          >
            <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#0F172A] rounded-md group-hover:bg-opacity-0">
              Let's Connect
            </span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-[#0F172A]/95 border-b border-slate-800 px-6 py-6 flex flex-col gap-5 absolute top-full left-0 w-full backdrop-blur-md"
        >
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-sans text-base font-semibold text-slate-300 hover:text-lime-400 transition-colors py-2"
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center gap-6 pt-4 border-t border-slate-800">
            <a
              href={HERO_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={HERO_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${HERO_DATA.email}`}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-2.5 bg-gradient-to-r from-violet-600 to-lime-400 rounded-lg font-semibold text-sm text-white"
          >
            Let's Connect
          </a>
        </motion.div>
      )}
    </header>
  );
}
