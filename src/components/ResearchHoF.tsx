import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { hallOfFameData } from '../data/portfolioData';

export const ResearchHoF: React.FC = () => {
  const researchDomains = [
    { num: '01', title: 'Web Application Security', detail: 'Complex access control validation, privilege escalation, and business logic flaws.' },
    { num: '02', title: 'API Security', detail: 'REST/GraphQL authorization drift, BOLA/IDOR, schema mining, and state boundary bypasses.' },
    { num: '03', title: 'Reconnaissance', detail: 'High-throughput attack-surface discovery, automated asset correlation, and endpoint discovery.' },
    { num: '04', title: 'Business Logic', detail: 'Workflow state corruption, transactional integrity testing, and authorization race conditions.' },
  ];

  return (
    <section id="research" className="py-24 sm:py-32 relative z-10 border-b border-white/10 bg-[#07090c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 sm:mb-20">
          <div className="lg:col-span-4 space-y-2">
            <div className="text-4xl sm:text-5xl font-mono font-light text-neutral-500">
              06
            </div>
            <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase font-semibold">
              SECURITY RESEARCH
            </div>
          </div>
          <div className="lg:col-span-8 flex items-end">
            <p className="text-sm font-mono text-neutral-400">
              Independent vulnerability research archive, coordinated disclosure, and enterprise recognitions.
            </p>
          </div>
        </div>

        {/* Large Statement & Researcher's Archive Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
          
          {/* Left: Large Editorial Statement */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-light tracking-[-0.03em] text-white leading-[1.1]">
              Manual testing. <br />
              Measured impact. <br />
              <span className="font-semibold text-emerald-400">Responsible disclosure.</span>
            </h3>

            <p className="text-base text-neutral-300 font-sans leading-relaxed max-w-lg">
              Conducting authorized security assessments on <strong>HackerOne</strong> and <strong>Bugcrowd</strong>. Focused on finding nuanced high-impact vulnerabilities that evade automated detection.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-neutral-400">
              <div className="space-y-0.5">
                <div className="text-xl font-light text-white font-mono">10+</div>
                <div className="text-[10px] tracking-wider uppercase">Valid Vulnerabilities</div>
              </div>
              <span className="text-neutral-700">|</span>
              <div className="space-y-0.5">
                <div className="text-xl font-light text-white font-mono">MED & HIGH</div>
                <div className="text-[10px] tracking-wider uppercase">Severity Findings</div>
              </div>
              <span className="text-neutral-700">|</span>
              <div className="space-y-0.5">
                <div className="text-xl font-light text-emerald-400 font-mono">100%</div>
                <div className="text-[10px] tracking-wider uppercase">Responsible Disclosure</div>
              </div>
            </div>
          </div>

          {/* Right: Indexed Research Domains */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-semibold mb-4">
              RESEARCH DIRECTORY:
            </div>

            {researchDomains.map((item) => (
              <div
                key={item.num}
                className="p-4 rounded-lg bg-[#0b0d11] border border-white/5 hover:border-white/15 transition-all flex items-start gap-4"
              >
                <span className="text-xs font-mono text-emerald-400 font-semibold mt-0.5">
                  {item.num}
                </span>
                <div className="space-y-0.5">
                  <div className="text-sm font-semibold text-white font-sans">
                    {item.title}
                  </div>
                  <div className="text-xs text-neutral-400 font-sans">
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* HALL OF FAME: Refined Recognition List (Understated) */}
        <div className="pt-16 border-t border-white/10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase font-semibold">
              HALL OF FAME & RECOGNITIONS
            </div>
            <span className="text-[11px] font-mono text-neutral-500">
              COORDINATED DISCLOSURE ACKNOWLEDGMENTS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {hallOfFameData.map((company, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg bg-[#0a0c10] border border-white/10 hover:border-emerald-500/30 transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold font-sans tracking-wide text-white group-hover:text-emerald-400 transition-colors uppercase">
                    {company.name}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400/80" />
                </div>
                <div className="text-[11px] font-mono text-neutral-400">
                  {company.domain}
                </div>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed pt-1">
                  {company.description}
                </p>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                  <span>{company.category}</span>
                  <span className="text-neutral-400">{company.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
