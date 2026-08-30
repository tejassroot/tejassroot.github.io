import React from 'react';
import { certificationsData, honorsData, educationData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 sm:py-32 relative z-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 sm:mb-20">
          <div className="lg:col-span-4 space-y-2">
            <div className="text-4xl sm:text-5xl font-mono font-light text-neutral-500">
              07
            </div>
            <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase font-semibold">
              CREDENTIALS & ACADEMICS
            </div>
          </div>
          <div className="lg:col-span-8 flex items-end">
            <p className="text-sm font-mono text-neutral-400">
              Verified offensive certifications, active red team studies, honorary recognitions, and formal education.
            </p>
          </div>
        </div>

        {/* 12-Column Grid: Certifications (Cols 1-7) & Education/Honors (Cols 8-12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Certifications Timeline (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-12">
            <div className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase font-semibold pb-4 border-b border-white/10">
              CERTIFICATIONS TIMELINE
            </div>

            {/* In Progress Group */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span className="tracking-widest uppercase">ACTIVE STUDIES / IN PROGRESS</span>
              </div>

              <div className="space-y-4">
                {certificationsData.filter(c => c.status === 'In Progress').map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-lg bg-[#0b0d11] border border-white/10 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold font-sans text-white">
                        {cert.title}
                      </h4>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                        {cert.badgeCode}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-neutral-400">
                      {cert.issuer}
                    </div>
                    <p className="text-xs text-neutral-400 font-sans leading-relaxed pt-1">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Completed Group */}
            <div className="space-y-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span className="tracking-widest uppercase">2026 / COMPLETED</span>
              </div>

              <div className="space-y-4">
                {certificationsData.filter(c => c.status === 'Completed').map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-lg bg-[#0b0d11] border border-white/10 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold font-sans text-white">
                        {cert.title}
                      </h4>
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                        {cert.date}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-neutral-400">
                      {cert.issuer}
                    </div>
                    <p className="text-xs text-neutral-400 font-sans leading-relaxed pt-1">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Honors & Education (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Honors Section with Generous Whitespace */}
            <div className="space-y-4">
              <div className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase font-semibold pb-4 border-b border-white/10">
                HONORS & AWARDS
              </div>

              {honorsData.map((honor, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg bg-[#0b0d11] border border-white/10 space-y-3"
                >
                  <div className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase">
                    RIL / {honor.date}
                  </div>
                  <h4 className="text-2xl font-bold font-sans text-white tracking-tight">
                    {honor.title}
                  </h4>
                  <div className="text-xs font-mono text-neutral-300 font-medium">
                    {honor.organization}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed italic">
                    "{honor.description}"
                  </p>
                </div>
              ))}
            </div>

            {/* Education Minimal Timeline */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase font-semibold pb-4 border-b border-white/10">
                EDUCATION
              </div>

              <div className="space-y-6">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-xs font-mono text-emerald-400 font-semibold">
                      {edu.period.toUpperCase()}
                    </div>
                    <h4 className="text-base font-bold font-sans text-white">
                      {edu.degree}
                    </h4>
                    <div className="text-xs font-mono text-neutral-400">
                      {edu.institution}
                    </div>
                    <div className="text-[11px] font-mono text-neutral-500">
                      {edu.location}
                    </div>
                    {edu.details && (
                      <p className="text-xs text-neutral-400 font-sans pt-1 leading-relaxed">
                        {edu.details}
                      </p>
                    )}
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
