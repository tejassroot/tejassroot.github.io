import React from 'react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 relative z-10 border-b border-white/10 bg-[#07090c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 sm:mb-20">
          <div className="lg:col-span-4 space-y-2">
            <div className="text-4xl sm:text-5xl font-mono font-light text-neutral-500">
              02
            </div>
            <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase font-semibold">
              EXPERIENCE
            </div>
          </div>
          <div className="lg:col-span-8 flex items-end">
            <p className="text-sm font-mono text-neutral-400">
              Commercial penetration testing engagements, vulnerability assessments, and independent research.
            </p>
          </div>
        </div>

        {/* Vertical Career Timeline: Left Year | Center Role/Company | Right Achievements */}
        <div className="space-y-16 sm:space-y-20">
          {experienceData.map((exp, idx) => {
            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 border-t border-white/10 first:border-none first:pt-0"
              >
                {/* Col 1-3: Large Date / Year on the left */}
                <div className="lg:col-span-3 space-y-1">
                  <div className="text-lg sm:text-xl font-mono font-light text-white tracking-tight">
                    {exp.period.toUpperCase()}
                  </div>
                  <div className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                    {exp.location}
                  </div>
                </div>

                {/* Col 4-6: Role & Company in the center */}
                <div className="lg:col-span-4 space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-sans font-semibold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-mono text-emerald-400/90 font-medium">
                    {exp.company}
                  </div>
                  <div className="text-xs font-mono text-neutral-400">
                    {exp.type}
                  </div>
                </div>

                {/* Col 7-12: Description & Achievements on the right */}
                <div className="lg:col-span-5 space-y-4">
                  <ul className="space-y-3 text-sm text-neutral-300 font-sans leading-[1.6]">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-3">
                        <span className="text-neutral-400 font-mono text-xs mt-1">—</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills metadata footer */}
                  <div className="pt-3 border-t border-white/10 flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] font-mono text-neutral-400">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-neutral-400 hover:text-white transition-colors">
                        #{skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
