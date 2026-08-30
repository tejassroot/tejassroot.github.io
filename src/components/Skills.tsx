import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('web-api');

  const categories = [
    { id: 'web-api', label: 'WEB & API' },
    { id: 'network', label: 'NETWORK' },
    { id: 'recon', label: 'RECON' },
    { id: 'tools', label: 'TOOLS' },
    { id: 'programming', label: 'PROGRAMMING' },
  ];

  const activeCategory = skillCategories.find((c) => c.id === activeCategoryId) || skillCategories[0];

  return (
    <section id="skills" className="py-24 sm:py-32 relative z-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 sm:mb-20">
          <div className="lg:col-span-4 space-y-2">
            <div className="text-4xl sm:text-5xl font-mono font-light text-neutral-500">
              05
            </div>
            <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase font-semibold">
              SKILLS INDEX
            </div>
          </div>
          <div className="lg:col-span-8 flex items-end">
            <p className="text-sm font-mono text-neutral-400">
              Offensive proficiencies, vulnerability classes, assessment tooling, and systems programming.
            </p>
          </div>
        </div>

        {/* Elegant Interactive Skill Index (Left Category Tabs | Right Technologies List) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Navigation (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-1">
            {categories.map((cat) => {
              const isSelected = activeCategoryId === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-lg font-mono text-xs tracking-[0.2em] uppercase transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-neutral-900 border border-emerald-500/40 text-white font-semibold'
                      : 'bg-transparent text-neutral-400 hover:text-white hover:bg-neutral-900/40'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] ${isSelected ? 'text-emerald-400' : 'text-neutral-600'}`}>
                    0{categories.findIndex(c => c.id === cat.id) + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Display Area (Cols 5-12) */}
          <div className="lg:col-span-8 bg-[#0b0d11] border border-white/10 rounded-xl p-8 sm:p-10 space-y-8">
            
            {/* Category Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
              <div>
                <h3 className="text-2xl font-bold font-sans text-white tracking-tight">
                  {activeCategory.title}
                </h3>
                <p className="text-xs text-neutral-400 font-sans mt-1">
                  {activeCategory.description}
                </p>
              </div>
              <div className="text-xs font-mono text-emerald-400">
                {activeCategory.skills.length} VERIFIED COMPETENCIES
              </div>
            </div>

            {/* Typography-Driven Technology Items List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeCategory.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-neutral-900/60 border border-white/5 hover:border-white/15 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 group-hover:bg-emerald-400"></span>
                    <span className="text-sm font-medium text-neutral-200 group-hover:text-white font-sans">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-600 group-hover:text-neutral-400 uppercase">
                    CORE
                  </span>
                </div>
              ))}
            </div>

            {/* Note on Testing Rigor */}
            <div className="pt-4 border-t border-white/10 text-xs font-mono text-neutral-500">
              * Evaluated and applied during commercial VAPT engagements and active vulnerability research.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
