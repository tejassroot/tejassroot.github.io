import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const focusAreas = [
    { title: 'Web Security', desc: 'Broken Access Control (BAC), authentication flaws, state tampering, and OWASP Top 10 vectors.' },
    { title: 'API Security', desc: 'REST & GraphQL authorization drift, BOLA/IDOR, schema introspection, and logic bypasses.' },
    { title: 'Network Security', desc: 'Internal/external perimeter audits, Wireshark deep packet analysis, and enterprise wireless reviews.' },
    { title: 'Reconnaissance', desc: 'High-speed attack-surface mapping, hidden asset correlation, and automated JS endpoint mining.' },
    { title: 'Business Logic', desc: 'Deep human-led state-machine analysis, parameter manipulation, and race conditions.' },
    { title: 'Attack Surface Mapping', desc: 'Subdomain discovery, port probing, cloud asset identification, and continuous ingress cataloging.' },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative z-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Number & Section Eyebrow (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-4xl sm:text-5xl font-mono font-light text-neutral-500">
              01
            </div>
            <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase font-semibold">
              ABOUT
            </div>
            <p className="text-xs font-mono text-neutral-400 max-w-xs leading-relaxed">
              Offensive methodology, manual verification discipline, and actionable remediation engineering.
            </p>
          </div>

          {/* Right Column: Professional Summary & Focus Areas (Cols 5-12) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Main Narrative Paragraph */}
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl text-neutral-200 font-sans font-light leading-[1.6] tracking-[-0.015em]">
                {personalInfo.about}
              </p>
            </div>

            {/* Thin Divider */}
            <div className="w-full h-[1px] bg-white/10" />

            {/* FOCUS Sub-section */}
            <div className="space-y-6">
              <div className="text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase font-semibold">
                FOCUS
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {focusAreas.map((area, idx) => (
                  <div key={idx} className="space-y-1 border-l border-white/10 pl-4">
                    <div className="text-sm font-semibold text-white font-sans">
                      {area.title}
                    </div>
                    <div className="text-xs text-neutral-400 font-sans leading-relaxed">
                      {area.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
