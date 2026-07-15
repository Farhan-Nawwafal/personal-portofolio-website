import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Award,
  GraduationCap,
  Users,
  BookOpen,
  FileText,
  ExternalLink,
  ArrowUpRight,
  Hourglass,
  Lightbulb,
  CheckCircle,
  Compass,
  Laptop,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import {
  CERTIFICATIONS_DATA as CERTIFICATIONS,
  COURSES_DATA as COURSES,
  EVENTS_DATA as EVENTS,
  ARTICLES_DATA as ARTICLES,
} from "../data"; // atau path yang sesuai

export default function LearningHub() {
  const [activeTab, setActiveTab] = useState<
    "all" | "certs-courses" | "events" | "articles"
  >("all");

  return (
    <section
      id="learning-hub"
      className="py-24 bg-[#0F172A] relative overflow-hidden border-t border-slate-900"
    >
      {/* Visual Identity Decorator Glows */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-lime-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-violet-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight mt-2">
              Learning Hub &amp; Written Insights
            </h2>
            <p className="font-sans text-sm text-slate-400 max-w-xl mt-3 leading-relaxed">
              Bukti nyata komitmen saya sebagai full-time learner, penulis
              teknis, dan tech enthusiast melalui eksplorasi sertifikasi, event
              komunitas, dan publikasi artikel.
            </p>
          </div>

          {/* Tab Filter Controls */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 p-1.5 bg-slate-900/60 backdrop-blur-md rounded-xl border border-slate-800/80 w-fit">
            {[
              { id: "all", label: "All Activities" },
              { id: "certs-courses", label: "Certs & Courses" },
              { id: "events", label: "Events" },
              { id: "articles", label: "Digital Journalling" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Interactive Bento Grid Layout */}
        <StaggerContainer
          key={activeTab}
          staggerDelay={0.06}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
        >
          {/* SECTION A: Certifications & Courses (Interactive Cards) */}
          {(activeTab === "all" || activeTab === "certs-courses") && (
            <>
              {CERTIFICATIONS.map((cert) => (
                <StaggerItem
                  key={cert.id}
                  className="md:col-span-1 lg:col-span-4 bg-slate-900/40 border border-slate-800/80 hover:border-violet-500/40 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between group transition-all duration-300 hover:shadow-lg hover:shadow-violet-950/20 hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/0 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div>
                    {/* Header Image Frame */}
                    <div className="w-full h-40 rounded-xl overflow-hidden mb-5 relative bg-slate-950 border border-slate-800">
                      <img
                        src={cert.imageUrl}
                        alt={cert.title}
                        className="w-full h-full object-cover grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-[#0F172A]/90 border border-slate-800/60 rounded-full px-2.5 py-1 text-[9px] font-mono text-lime-400 tracking-wider flex items-center gap-1.5 backdrop-blur-md">
                        <Award className="w-3 h-3" />
                        <span>Sertifikat</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="font-mono text-[10px] text-violet-400 font-semibold">
                        {cert.provider}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-slate-700" />
                      <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {cert.status}
                      </span>
                    </div>

                    <h3 className="font-sans font-bold text-base text-white group-hover:text-lime-400 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed mt-2.5">
                      {cert.description}
                    </p>
                  </div>

                  {cert.credentialUrl && (
                    <div className="mt-6 pt-4 border-t border-slate-800/40 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-500">
                        Verified Credential
                      </span>
                      <a
                        href={cert.credentialUrl}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-300 hover:text-white transition-colors"
                      >
                        Lihat{" "}
                        <ArrowUpRight className="w-3.5 h-3.5 text-lime-400" />
                      </a>
                    </div>
                  )}
                </StaggerItem>
              ))}

              {COURSES.map((course) => (
                <StaggerItem
                  key={course.id}
                  className="md:col-span-1 lg:col-span-4 bg-slate-900/40 border border-slate-800/80 hover:border-violet-500/40 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between group transition-all duration-300 hover:shadow-lg hover:shadow-violet-950/20 hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/0 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div>
                    {/* Header Image Frame */}
                    <div className="w-full h-40 rounded-xl overflow-hidden mb-5 relative bg-slate-950 border border-slate-800">
                      <img
                        src={course.imageUrl}
                        alt={course.title}
                        className="w-full h-full object-cover grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-[#0F172A]/90 border border-slate-800/60 rounded-full px-2.5 py-1 text-[9px] font-mono text-violet-400 tracking-wider flex items-center gap-1.5 backdrop-blur-md">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>Kursus</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="font-mono text-[10px] text-violet-400 font-semibold">
                        {course.platform}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-slate-700" />
                      <span
                        className={`font-mono text-[9px] px-2 py-0.5 rounded border ${
                          course.status === "Completed"
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                            : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                        }`}
                      >
                        {course.status}
                      </span>
                    </div>

                    <h3 className="font-sans font-bold text-base text-white group-hover:text-lime-400 transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed mt-2.5">
                      {course.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/40 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-500">
                      Platform Online
                    </span>
                    <Laptop className="w-4 h-4 text-slate-500" />
                  </div>
                </StaggerItem>
              ))}
            </>
          )}

          {/* SECTION B: Events & Community Activity */}
          {(activeTab === "all" || activeTab === "events") && (
            <>
              {EVENTS.map((event) => (
                <StaggerItem
                  key={event.id}
                  className="md:col-span-1 lg:col-span-4 bg-slate-900/40 border border-slate-800/80 hover:border-lime-500/30 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between group transition-all duration-300 hover:shadow-lg hover:shadow-lime-950/10 hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-lime-500/0 to-lime-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div>
                    {/* Header Image Frame */}
                    <div className="w-full h-40 rounded-xl overflow-hidden mb-5 relative bg-slate-950 border border-slate-800">
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-full h-full object-cover grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-[#0F172A]/90 border border-slate-800/60 rounded-full px-2.5 py-1 text-[9px] font-mono text-lime-400 tracking-wider flex items-center gap-1.5 backdrop-blur-md">
                        <Users className="w-3.5 h-3.5" />
                        <span>{event.eventType}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-1.5 mb-2">
                      <span className="font-mono text-[10px] text-slate-500">
                        {event.date}
                      </span>
                      <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-lime-500/10 text-lime-400 border border-lime-500/20">
                        {event.status}
                      </span>
                    </div>

                    <h3 className="font-sans font-bold text-base text-white group-hover:text-lime-400 transition-colors leading-snug">
                      {event.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed mt-2.5">
                      {event.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/40 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-500">
                      {event.location}
                    </span>
                    <Compass className="w-4 h-4 text-lime-400" />
                  </div>
                </StaggerItem>
              ))}
            </>
          )}

          {/* SECTION C: Written Insights & Medium Hub (Highly interactive bento grids) */}
          {(activeTab === "all" || activeTab === "articles") && (
            <div className="col-span-1 md:col-span-2 lg:col-span-12 mt-4">
              <ScrollReveal delay={0.08}>
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-1.5 h-6 bg-gradient-to-b from-lime-400 to-emerald-400 rounded-full" />
                  <h3 className="font-sans font-bold text-xl text-white">
                    Written Insights &amp; Articles Hub
                  </h3>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ARTICLES.map((art) => {
                  const isPublished = art.status === "Published";
                  const isInProgress = art.status === "In Progress";
                  const isIdea = art.status === "Idea";

                  // Dynamic styles based on design guidelines
                  let borderStyle =
                    "border-slate-800/80 hover:border-slate-700";
                  let badgeStyle =
                    "bg-slate-500/10 text-slate-400 border-slate-500/20";
                  let cardOpacity = "opacity-100";
                  let icon = <Lightbulb className="w-3.5 h-3.5" />;

                  if (isPublished) {
                    borderStyle =
                      "border-slate-800/80 hover:border-emerald-500/40 hover:bg-slate-900/60";
                    badgeStyle =
                      "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
                    icon = <CheckCircle className="w-3.5 h-3.5" />;
                  } else if (isInProgress) {
                    borderStyle =
                      "border-slate-800/80 hover:border-amber-500/30";
                    badgeStyle =
                      "bg-amber-500/10 text-amber-400 border-amber-500/20";
                    icon = <Hourglass className="w-3.5 h-3.5" />;
                  } else if (isIdea) {
                    cardOpacity =
                      "opacity-60 hover:opacity-100 transition-opacity duration-300";
                  }

                  // Render single article card
                  const CardContent = (
                    <div className="p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden">
                      {isPublished && (
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/0 to-emerald-500/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      )}
                      <div>
                        {/* Upper Badges */}
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${badgeStyle}`}
                          >
                            {icon}
                            {art.status}
                          </span>
                          <span className="font-mono text-[10px] text-slate-500">
                            {art.readTime || art.date}
                          </span>
                        </div>

                        {/* Article Title */}
                        <h4 className="font-sans font-bold text-lg text-white leading-snug group-hover:text-lime-400 transition-colors">
                          {art.title}
                        </h4>

                        {/* Article Description */}
                        <p className="font-sans text-xs text-slate-400 leading-relaxed mt-3">
                          {art.description}
                        </p>
                      </div>

                      {/* Footer Actions */}
                      <div className="mt-8 pt-4 border-t border-slate-800/40 flex items-center justify-between text-xs font-semibold">
                        <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[10px]">
                          <FileText className="w-3.5 h-3.5 text-violet-400" />
                          <span>Written Essay</span>
                        </div>
                        {isPublished ? (
                          <span className="inline-flex items-center gap-1 text-emerald-400 hover:text-white transition-colors group-hover:translate-x-0.5 duration-300">
                            Read Article <ArrowUpRight className="w-4 h-4" />
                          </span>
                        ) : isInProgress ? (
                          <span className="text-amber-500 font-mono text-[10px]">
                            Sedang Ditulis...
                          </span>
                        ) : (
                          <span className="text-slate-500 font-mono text-[10px]">
                            Rencana Masa Depan
                          </span>
                        )}
                      </div>
                    </div>
                  );

                  return (
                    <StaggerItem
                      key={art.id}
                      className={`group rounded-2xl border bg-slate-900/40 backdrop-blur-md flex flex-col transition-all duration-300 hover:shadow-lg ${borderStyle} ${cardOpacity} ${!isPublished ? "pointer-events-none" : ""}`}
                    >
                      {isPublished ? (
                        <a
                          href={art.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block h-full cursor-pointer"
                        >
                          {CardContent}
                        </a>
                      ) : (
                        <div className="block h-full">{CardContent}</div>
                      )}
                    </StaggerItem>
                  );
                })}
              </div>
            </div>
          )}
        </StaggerContainer>
      </div>
    </section>
  );
}
