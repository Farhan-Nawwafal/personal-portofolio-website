import React from "react";
import { motion } from "motion/react";
import {
  Download,
  Compass,
  Github,
  Linkedin,
  Mail,
  Brain,
  Code2,
  Database,
  Instagram,
} from "lucide-react";
import { HERO_DATA } from "../data";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left: Headline & Description */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Sub-badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-semibold mb-6 w-fit backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
            </span>
            <span className="font-mono text-lime-400">Farhan's Workspace</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
            Hi, I am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-lime-400">
              Farhan
            </span>
            .
            <br />I Build <span className="text-white">Scalable Code</span>{" "}
            &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">
              Extract Data Insights
            </span>
            .
          </h1>

          {/* Sub-text */}
          <p className="font-sans text-base sm:text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
            {HERO_DATA.description}
          </p>

          {/* Actions & Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-sm flex items-center gap-2 transition-all duration-300 shadow-lg shadow-violet-950/40 hover:shadow-violet-900/50 hover:-translate-y-0.5 group"
            >
              <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
              Explore My Projects
            </a>

            <a
              href={HERO_DATA.cvUrl}
              className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-lime-400" />
              Download CV / Resume
            </a>
          </div>

          {/* Secondary stats/social anchors */}
          <div className="flex items-center gap-6 mt-12 pt-10 border-t border-slate-900">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white font-sans">
                3+ Status
              </span>
              <span className="text-xs text-slate-500 font-mono mt-1">
                Timeline Stages
              </span>
            </div>
            <div className="h-8 w-px bg-slate-900" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white font-sans">
                5+ Core
              </span>
              <span className="text-xs text-slate-500 font-mono mt-1">
                Slices &amp; Projects
              </span>
            </div>
            <div className="h-8 w-px bg-slate-900" />
            <div className="flex items-center gap-3">
              <a
                href={HERO_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900/50 border border-slate-800/80 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={HERO_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900/50 border border-slate-800/80 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={HERO_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900/50 border border-slate-800/80 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                title="LinkedIn"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${HERO_DATA.email}`}
                className="w-10 h-10 rounded-lg bg-slate-900/50 border border-slate-800/80 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Premium Image Placeholder with glowing effect & widgets */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative mt-10 lg:mt-0"
        >
          {/* Main Circle Glow Background */}
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-violet-600 to-lime-400 blur-3xl opacity-40 animate-pulse pointer-events-none" />

          {/* Photo frame container */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl p-[2px] bg-gradient-to-tr from-violet-500 via-indigo-500 to-lime-400 shadow-2xl overflow-visible glow-violet">
            <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#0F172A] relative">
              <img
                src={HERO_DATA.avatarUrl}
                alt="Farhan"
                className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60" />
            </div>

            {/* Float Widget 1: ML & AI Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-[#0F172A]/90 backdrop-blur-md border border-slate-800 p-3 rounded-xl flex items-center gap-2.5 shadow-xl"
            >
              <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                <Brain className="w-4 h-4 text-lime-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white font-sans">
                  Data Science &amp; AI
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  Models &amp; Pipelines
                </span>
              </div>
            </motion.div>

            {/* Float Widget 2: Full-Stack Dev Badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                delay: 2,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -right-6 bg-[#0F172A]/90 backdrop-blur-md border border-slate-800 p-3 rounded-xl flex items-center gap-2.5 shadow-xl"
            >
              <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-violet-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white font-sans">
                  Full-Stack Web Dev
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  Modern Architectures
                </span>
              </div>
            </motion.div>

            {/* Small Monospace Code Tag on bottom of image frame */}
            {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-950/80 border border-slate-800 rounded-full px-3 py-1 text-[10px] font-mono text-slate-400 tracking-wider flex items-center gap-1.5 backdrop-blur-md">
              <Database className="w-3 h-3 text-violet-400" />
              <span>farhan_query_exec_ok</span>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
