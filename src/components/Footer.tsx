import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  CheckCircle2,
  MessageSquare,
  MapPin,
  Sparkles,
} from "lucide-react";
import { HERO_DATA } from "../data";

export default function Footer() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000); // hide success after 5s
    }, 1500);
  };

  return (
    <footer
      id="contact"
      className="bg-[#0B0F19] text-white pt-24 pb-12 relative overflow-hidden border-t border-slate-900/60"
    >
      {/* Visual background lights */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-lime-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Callout, contact links, and location badge */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {/* <span className="font-mono text-xs font-semibold tracking-widest text-lime-400 uppercase">
                // GET IN TOUCH
              </span> */}
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight text-white mt-2 mb-6">
                Let's Create{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-lime-400">
                  Something Impactful
                </span>{" "}
                Together
              </h2>
              <p className="font-sans text-sm text-slate-400 leading-relaxed mb-8 max-w-md">
                Interested in building robust full-stack systems, mobile apps,
                or analyzing complex datasets with machine learning? Let's
                connect for freelance work, internships, or professional
                collaboration opportunities!
              </p>

              {/* Contact Information Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3.5 text-sm text-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-lime-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-slate-500">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${HERO_DATA.email}`}
                      className="hover:text-white font-semibold transition-colors"
                    >
                      {HERO_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-sm text-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-violet-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-slate-500">
                      Location
                    </span>
                    <span className="font-semibold text-slate-300">
                      Bandung, Indonesia
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Navigation Links */}
              <div className="flex items-center gap-4">
                <a
                  href={HERO_DATA.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:shadow-md transition-all duration-300"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={HERO_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:shadow-md transition-all duration-300"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${HERO_DATA.email}`}
                  className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:shadow-md transition-all duration-300"
                  title="Direct Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick status box */}
            <div className="mt-12 bg-slate-900/40 border border-slate-800/80 rounded-xl p-4 flex items-center gap-3 w-fit backdrop-blur-md">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
              </span>
              <p className="font-mono text-[10px] text-slate-400">
                Available for remote freelance / full-time hire.
              </p>
            </div>
          </div>

          {/* Right Column: High-Craft Contact Form (Glassmorphism card) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-lime-400" />
                <h3 className="font-sans font-bold text-lg text-white">
                  Send a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="form-name"
                      className="font-mono text-[11px] text-slate-400 uppercase tracking-wider"
                    >
                      Your Name
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="Farhan..."
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full bg-slate-950/60 border border-slate-800 focus:border-violet-500 rounded-xl px-4 py-3 text-sm font-sans text-white placeholder-slate-600 outline-none transition-all focus:ring-1 focus:ring-violet-500/20"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="form-email"
                      className="font-mono text-[11px] text-slate-400 uppercase tracking-wider"
                    >
                      Email Address
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full bg-slate-950/60 border border-slate-800 focus:border-violet-500 rounded-xl px-4 py-3 text-sm font-sans text-white placeholder-slate-600 outline-none transition-all focus:ring-1 focus:ring-violet-500/20"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="form-subject"
                    className="font-mono text-[11px] text-slate-400 uppercase tracking-wider"
                  >
                    Inquiry / Subject
                  </label>
                  <input
                    id="form-subject"
                    type="text"
                    placeholder="Project collaboration, freelance inquiry..."
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    className="w-full bg-slate-950/60 border border-slate-800 focus:border-violet-500 rounded-xl px-4 py-3 text-sm font-sans text-white placeholder-slate-600 outline-none transition-all focus:ring-1 focus:ring-violet-500/20"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="form-message"
                    className="font-mono text-[11px] text-slate-400 uppercase tracking-wider"
                  >
                    Your Message
                    <span className="text-slate-600 font-sans ml-1">
                      (Required)
                    </span>
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    placeholder="Hi Farhan, I'm interested in working with you on..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full bg-slate-950/60 border border-slate-800 focus:border-violet-500 rounded-xl px-4 py-3 text-sm font-sans text-white placeholder-slate-600 outline-none transition-all focus:ring-1 focus:ring-violet-500/20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 disabled:opacity-50 text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-violet-950/20"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Dispatching message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-lime-400" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Submit Success Notification */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-sans mt-4"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>
                      Success! Your message was mock-sent to Farhan. Thank you
                      for reaching out!
                    </span>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-slate-900/80 mt-20 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono">
          <p>© 2026 Farhan. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-lime-400" /> Crafted with Modern
              React &amp; Tailwind
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
