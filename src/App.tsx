import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Methodology } from './components/Methodology';
import { Skills } from './components/Skills';
import { ResearchHoF } from './components/ResearchHoF';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090a0c] text-[#f4f4f6] font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-300 relative">
      {/* Refined Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content */}
      <main>
        {/* Editorial Hero with Attack Surface Visualizer */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Typographic Metrics Transition */}
        <StatsBar />

        {/* 01 / About & Focus */}
        <About />

        {/* 02 / Experience Vertical Timeline */}
        <Experience />

        {/* 03 / Projects Large Case Studies */}
        <Projects />

        {/* 04 / Methodology Horizontal Flow */}
        <Methodology />

        {/* 05 / Skills Index */}
        <Skills />

        {/* 06 / Security Research & Hall of Fame */}
        <ResearchHoF />

        {/* 07 / Certifications, Honors & Education */}
        <Certifications />

        {/* 08 / Contact Closing Statement */}
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Print-Ready Editorial Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
