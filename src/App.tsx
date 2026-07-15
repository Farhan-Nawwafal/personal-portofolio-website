import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import LearningHub from "./components/LearningHub";

export default function App() {
  return (
    <div className="bg-[#0B0F19] text-white min-h-screen font-sans antialiased selection:bg-lime-400 selection:text-black">
      {/* Dynamic Background Noise/Mesh texture (Visual Identity enhancement) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:20px_20px] z-50" />

      {/* Navigation Header */}
      <Header />

      {/* Main Container */}
      <main>
        {/* Intro & Banner */}
        <Hero />

        {/* Dynamic Timeline Grid */}
        <Projects />

        {/* Visual Skills Map */}
        <Skills />

        {/* Learning Hub & Insights Section */}
        <LearningHub />
      </main>

      {/* Footer & CTA Connect */}
      <Footer />
    </div>
  );
}
