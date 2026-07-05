import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS_DATA } from "../data";
import { Project, ProjectStatus } from "../types";
import {
  Calendar,
  User,
  Code,
  Layers,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Star,
  GitFork,
  UserCheck,
} from "lucide-react";
import { ScrollReveal, StaggerContainer } from "./ScrollReveal";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectStatus>(
    "all",
  );
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === "all") return true;
    return project.status === activeFilter;
  });

  const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {
      case "completed":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ✓ Completed
          </span>
        );
      case "in-progress":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            ⚡ In Progress
          </span>
        );
      case "future":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            🚀 Future Projects
          </span>
        );
    }
  };

  const getRoleStatusColor = (roleStatus: string) => {
    switch (roleStatus) {
      case "Team Leader":
        return "text-amber-400 bg-amber-500/5 border-amber-500/10";
      case "Team Member":
        return "text-blue-400 bg-blue-500/5 border-blue-500/10";
      case "Independent":
        return "text-lime-400 bg-lime-500/5 border-lime-500/10";
      default:
        return "text-indigo-400 bg-indigo-500/5 border-indigo-500/10";
    }
  };

  const toggleExpand = (id: string) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-[#0B0F19] relative overflow-hidden"
    >
      {/* Soft light glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-lime-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            {/* <span className="font-mono text-xs font-semibold tracking-widest text-lime-400 uppercase">
              // WORK TIMELINE
            </span> */}
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight mt-2">
              Projects &amp; Roadmap
            </h2>
            <p className="font-sans text-sm text-slate-400 max-w-xl mt-3">
              Explore my curated portfolio split across completed, active
              development, and future interest stages.
            </p>
          </div>

          {/* Filter Controls (Tabs) */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 p-1.5 bg-slate-900/60 backdrop-blur-md rounded-xl border border-slate-800/80 w-fit">
            {[
              { id: "all", label: "All Projects" },
              { id: "completed", label: "✓ Completed" },
              { id: "in-progress", label: "⚡ In Progress" },
              { id: "future", label: "🚀 Future Projects" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFilter(tab.id as any);
                  setExpandedCard(null);
                }}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  activeFilter === tab.id
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Bento Grid with staggered reveals */}
        <StaggerContainer
          key={activeFilter}
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isExpanded = expandedCard === project.id;
              return (
                <motion.div
                  layout
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        damping: 25,
                        stiffness: 100,
                      },
                    },
                  }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`group relative rounded-2xl border transition-all duration-300 backdrop-blur-md overflow-hidden ${
                    isExpanded
                      ? "bg-slate-900/90 border-violet-500/40 shadow-xl shadow-violet-950/20 md:col-span-2 lg:col-span-2"
                      : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/60 hover:shadow-lg hover:shadow-slate-950/40 hover:-translate-y-1"
                  }`}
                >
                  {/* Neon Glow Light Effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/0 via-violet-500/0 to-lime-400/0 group-hover:from-violet-500/2 group-hover:to-lime-400/5 transition-all duration-300 pointer-events-none" />

                  {/* Card Header Padding */}
                  <div className="p-6 sm:p-8 flex flex-col h-full justify-between">
                    <div>
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                        <div className="flex items-center gap-2">
                          {getStatusBadge(project.status)}
                          <span className="text-[10px] font-mono font-medium tracking-wider uppercase text-slate-500">
                            {project.type}
                          </span>
                        </div>
                        {/* Role Status */}
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${getRoleStatusColor(project.roleStatus)}`}
                        >
                          <UserCheck className="w-3 h-3" />
                          {project.roleStatus}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="font-sans font-bold text-xl text-white leading-snug group-hover:text-lime-400 transition-colors">
                        {project.title}
                      </h3>

                      {/* Role & Team Size */}
                      <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400 font-mono mt-2 mb-4">
                        <div className="flex items-center gap-1.5">
                          <Code className="w-3.5 h-3.5 text-violet-400" />
                          <span>
                            Role:{" "}
                            <strong className="text-slate-300">
                              {project.role}
                            </strong>
                          </span>
                        </div>
                        <div className="h-3.5 w-px bg-slate-800 hidden sm:block" />
                        <div className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-lime-400" />
                          <span>
                            Team Size:{" "}
                            <strong className="text-slate-300">
                              {project.teamSize}{" "}
                              {project.teamSize === 1 ? "Person" : "People"}
                            </strong>
                          </span>
                        </div>
                      </div>

                      {/* Brief Story */}
                      <p className="font-sans text-sm text-slate-400 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Expandable Deep Dive Details */}
                      {isExpanded && project.details && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-slate-800/80 pt-5 mt-5 mb-6"
                        >
                          <h4 className="font-sans text-xs font-bold text-white tracking-wider uppercase mb-3 text-lime-400">
                            Key Milestones &amp; Responsibilities
                          </h4>
                          <ul className="space-y-2.5 text-xs text-slate-400 font-sans">
                            {project.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </div>

                    <div>
                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[10px] px-2.5 py-1 rounded bg-slate-950/80 text-slate-300 border border-slate-800/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links & Expand Button */}
                      <div className="flex items-center justify-between border-t border-slate-800/40 pt-4">
                        <button
                          onClick={() => toggleExpand(project.id)}
                          className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                        >
                          {isExpanded ? (
                            <>
                              Collapse Details{" "}
                              <ChevronUp className="w-3.5 h-3.5 text-violet-400" />
                            </>
                          ) : (
                            <>
                              View Contribution{" "}
                              <ChevronDown className="w-3.5 h-3.5 text-lime-400" />
                            </>
                          )}
                        </button>

                        <div className="flex items-center gap-3">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                              title="GitHub Code"
                            >
                              <GitFork className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-600/10 to-indigo-600/10 border border-violet-500/20 text-xs font-semibold text-violet-300 hover:bg-violet-500/20 hover:text-white transition-all"
                            >
                              Details <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </StaggerContainer>
      </div>
    </section>
  );
}
