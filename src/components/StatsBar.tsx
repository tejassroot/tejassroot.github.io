import React from 'react';

export const StatsBar: React.FC = () => {
  const metrics = [
    { value: '10+', label: 'APPLICATIONS ASSESSED', sub: 'Comprehensive VAPT' },
    { value: '20+', label: 'VULNERABILITIES VERIFIED', sub: 'Zero false-positives' },
    { value: '15+', label: 'TARGETS TESTED', sub: 'H1 & Bugcrowd scopes' },
    { value: '100K+', label: 'PACKETS ANALYZED', sub: 'Wireshark deep dissection' },
    { value: '10+', label: 'REPORTS AUTHORED', sub: 'Remediation-ready PoCs' },
  ];

  return (
    <section className="py-16 sm:py-20 relative z-10 border-t border-b border-white/10 bg-[#07090c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Typographic Metrics Grid - No Chunky Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          {metrics.map((item, idx) => (
            <div key={idx} className="space-y-1.5 text-left group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-mono font-light text-white tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
                {item.value}
              </div>
              <div className="text-[11px] font-mono tracking-[0.2em] text-neutral-300 uppercase font-semibold">
                {item.label}
              </div>
              <div className="text-[10px] font-mono text-neutral-400">
                {item.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
