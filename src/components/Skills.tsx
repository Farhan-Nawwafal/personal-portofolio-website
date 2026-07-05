import React from "react";
import { SKILLS_DATA } from "../data";
import { SkillCategory } from "../types";
import {
  Smartphone,
  Database,
  Brain,
  Sparkles,
  Terminal,
  CheckCircle2,
  Shield,
  Server,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

export default function Skills() {
  const categories: {
    id: SkillCategory;
    label: string;
    icon: React.ReactNode;
    color: string;
    bg: string;
    accent: string;
  }[] = [
    {
      id: "frontend-mobile",
      label: "Frontend & Mobile",
      icon: <Smartphone className="w-5 h-5 text-lime-400" />,
      color: "text-lime-400",
      bg: "bg-lime-500/10",
      accent: "border-lime-500/20 hover:border-lime-400/40",
    },
    {
      id: "backend-db",
      label: "Backend & Databases",
      icon: <Database className="w-5 h-5 text-violet-400" />,
      color: "text-violet-400",
      bg: "bg-violet-500/10",
      accent: "border-violet-500/20 hover:border-violet-400/40",
    },
    {
      id: "data-science-ai",
      label: "Data Science & AI",
      icon: <Brain className="w-5 h-5 text-blue-400" />,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      accent: "border-blue-500/20 hover:border-blue-400/40",
    },
    {
      id: "google-cloud",
      label: "Google Cloud Platform",
      icon: <Server className="w-5 h-5 text-blue-400" />,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      accent: "border-blue-500/20 hover:border-blue-400/40",
    },
  ];

  const getSkillsByCategory = (category: SkillCategory) => {
    return SKILLS_DATA.filter((skill) => skill.category === category);
  };

  return (
    <section
      id="skills"
      className="py-24 bg-[#0F172A] relative overflow-hidden border-t border-slate-900"
    >
      {/* Decorative radial blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-lime-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          {/* <span className="font-mono text-xs font-semibold tracking-widest text-lime-400 uppercase">
            // TOOLBELT &amp; EXPERTISE
          </span> */}
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight mt-2">
            Professional Tech Stack
          </h2>
          <p className="font-sans text-sm text-slate-400 mt-3 leading-relaxed">
            Leverage modern software frameworks, robust databases, and advanced
            machine learning tools to build production-grade architectures.
          </p>
        </ScrollReveal>

        {/* Categories Bento Row */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const skills = getSkillsByCategory(cat.id);
            return (
              <StaggerItem
                key={cat.id}
                className={`rounded-2xl bg-slate-900/40 border p-6 sm:p-8 backdrop-blur-md transition-all duration-300 ${cat.accent}`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/60">
                  <div className={`p-2.5 rounded-xl ${cat.bg}`}>{cat.icon}</div>
                  <div>
                    <h3 className="font-sans font-bold text-lg text-white">
                      {cat.label}
                    </h3>
                    <span className="font-mono text-[10px] text-slate-500">
                      {skills.length} core technologies
                    </span>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/40 border border-slate-800/50 hover:bg-slate-900/60 hover:border-slate-800 transition-all duration-200 group"
                    >
                      <Terminal
                        className={`w-3.5 h-3.5 ${cat.color} opacity-60 group-hover:opacity-100 transition-opacity`}
                      />
                      <span className="font-sans text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Micro-Accents/Highlights */}
                <div className="mt-8 pt-5 border-t border-slate-800/40 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />{" "}
                    Enterprise-ready
                  </span>
                  <span className="flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-violet-400" /> Fully
                    scalable
                  </span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Custom Visual Banner - Developer Principles */}
        <ScrollReveal
          delay={0.15}
          className="mt-12 rounded-2xl bg-gradient-to-r from-violet-950/20 to-lime-950/10 border border-slate-800/80 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-violet-600/10 rounded-xl mt-1">
              <Sparkles className="w-5 h-5 text-violet-400" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-white text-base">
                Architectural Principle: Simplicity &amp; Scalability
              </h4>
              <p className="font-sans text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
                Whether implementing an end-to-end data science clustering model
                or creating a robust Point-Of-Sale database architecture, I
                prioritize clean documentation, RESTful patterns, and
                state-driven responsive code.
              </p>
            </div>
          </div>
          <div className="flex gap-4 shrink-0 font-mono text-[10px] text-slate-500 bg-slate-950/40 px-4 py-2.5 rounded-lg border border-slate-800/60">
            <div>
              <strong className="text-lime-400">REST API:</strong> 50% Clean
            </div>
            <div className="h-4 w-px bg-slate-800" />
            <div>
              <strong className="text-violet-400">Clean Code:</strong>{" "}
              Standardized
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
