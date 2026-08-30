import React, { useState } from 'react';
import { methodologyData } from '../data/portfolioData';

export const Methodology: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(3); // Default to Manual Testing

  const selectedStep = methodologyData[activeStepIndex];

  return (
    <section id="methodology" className="py-24 sm:py-32 relative z-10 border-b border-white/10 bg-[#07090c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 sm:mb-20">
          <div className="lg:col-span-4 space-y-2">
            <div className="text-4xl sm:text-5xl font-mono font-light text-neutral-500">
              04
            </div>
            <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase font-semibold">
              METHODOLOGY
            </div>
          </div>
          <div className="lg:col-span-8 flex items-end">
            <p className="text-sm font-mono text-neutral-400">
              A structured 7-stage offensive lifecycle governed by thorough manual verification and ethical authorization.
            </p>
          </div>
        </div>

        {/* Sophisticated Horizontal System with Thin Connecting Line */}
        <div className="relative mb-12">
          {/* Horizontal Connecting Hairline */}
          <div className="hidden lg:block absolute top-[28px] left-8 right-8 h-[1px] bg-white/10 z-0" />

          {/* 7 Interactive Stage Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 relative z-10">
            {methodologyData.map((step, idx) => {
              const isSelected = activeStepIndex === idx;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  onMouseEnter={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-lg border text-left transition-all duration-200 cursor-pointer font-mono ${
                    isSelected
                      ? 'bg-[#0e1117] border-emerald-500/50 text-white shadow-sm'
                      : 'bg-[#090b0e] border-white/10 hover:border-white/20 text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold ${isSelected ? 'text-emerald-400' : 'text-neutral-400'}`}>
                      {step.step}
                    </span>
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isSelected ? 'bg-emerald-400' : 'bg-neutral-700'
                      }`}
                    />
                  </div>

                  <div className="text-xs font-sans font-semibold uppercase tracking-wider text-white line-clamp-1">
                    {step.title.split(' ')[0]}
                  </div>

                  <div className="text-[10px] font-mono text-neutral-400 mt-1">
                    PHASE 0{idx + 1}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <div className="bg-[#0b0d12] border border-white/10 rounded-xl p-8 sm:p-10 font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Summary & Deliverable (Cols 1-5) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-mono font-light text-neutral-500">
                  {selectedStep.step}
                </span>
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
                    PHASE INSPECTION
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {selectedStep.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                {selectedStep.summary}
              </p>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-1 text-xs font-mono">
                <span className="text-neutral-400 tracking-wider uppercase text-[10px]">DELIVERABLE:</span>
                <span className="text-emerald-400 font-medium">
                  {selectedStep.deliverable}
                </span>
              </div>
            </div>

            {/* Right: Technical Execution Objectives (Cols 6-12) */}
            <div className="lg:col-span-7 space-y-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-10">
              <div className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                EXECUTION PROCEDURES & CHECKS:
              </div>

              <ul className="space-y-3 text-sm text-neutral-300 leading-[1.6]">
                {selectedStep.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-3">
                    <span className="text-emerald-400 font-mono text-xs mt-1">—</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 text-xs font-mono text-neutral-400">
                * Strict zero-destructive policy: manual proof-of-concept verification with minimal attack surface disruption.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
