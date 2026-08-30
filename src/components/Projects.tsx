import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 relative z-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 sm:mb-20">
          <div className="lg:col-span-4 space-y-2">
            <div className="text-4xl sm:text-5xl font-mono font-light text-neutral-500">
              03
            </div>
            <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase font-semibold">
              PROJECTS
            </div>
          </div>
          <div className="lg:col-span-8 flex items-end">
            <p className="text-sm font-mono text-neutral-400">
              Custom reconnaissance frameworks and high-concurrency asset intelligence engines.
            </p>
          </div>
        </div>

        {/* Large Editorial Case-Study Panels */}
        <div className="space-y-20 sm:space-y-24">
          {projectsData.map((project, idx) => {
            return (
              <div
                key={project.id}
                className="group border-t border-white/15 pt-10 sm:pt-14 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                  
                  {/* Left Column (Cols 1-6): Overview, Metrics & Action */}
                  <div className="lg:col-span-6 space-y-6">
                    
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                      <span>PROJECT 0{idx + 1}</span>
                      <span className="uppercase tracking-widest">{project.tagline}</span>
                    </div>

                    {/* Project Title with arrow hover animation */}
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-light tracking-tight text-white group-hover:text-neutral-100 transition-colors">
                        {project.name}
                      </h3>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono tracking-[0.2em] text-neutral-400 group-hover:text-emerald-400 uppercase font-semibold transition-colors shrink-0"
                      >
                        <span>VIEW ON GITHUB</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>

                    <p className="text-base text-neutral-300 font-sans leading-[1.65]">
                      {project.description}
                    </p>

                    {/* Key Metrics Callouts */}
                    <div className="grid grid-cols-3 gap-6 py-3 border-y border-white/10">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="space-y-0.5">
                          <div className="text-2xl sm:text-3xl font-mono font-light text-white group-hover:text-emerald-400 transition-colors">
                            {m.value}
                          </div>
                          <div className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Highlights List */}
                    <div className="space-y-2 pt-1">
                      <div className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-medium">
                        KEY CAPABILITIES & RESULTS:
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-neutral-300 font-sans">
                        {project.highlights.map((hl, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5">
                            <span className="text-emerald-400 font-mono text-xs mt-0.5">—</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Stack */}
                    <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-neutral-400">
                      <span className="text-neutral-400 uppercase tracking-widest text-[10px]">STACK:</span>
                      {project.stack.map((tech, tIdx) => (
                        <span key={tIdx} className="text-neutral-300">
                          {tech}{tIdx < project.stack.length - 1 ? ' /' : ''}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Right Column (Cols 7-12): Visual System / Reconnaissance Pipeline */}
                  <div className="lg:col-span-6 bg-[#0c0e12] border border-white/10 p-6 sm:p-8 rounded-xl font-mono text-xs space-y-6">
                    
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 text-neutral-400">
                      <span className="text-white font-semibold tracking-wider text-[11px]">
                        {project.id === 'reconautomator' ? 'PIPELINE ARCHITECTURE' : 'DISCOVERY TELEMETRY'}
                      </span>
                      <span className="text-[10px] tracking-widest text-emerald-400">
                        {project.id === 'reconautomator' ? '6-STAGE CHAIN' : 'ASYNC WORKERS'}
                      </span>
                    </div>

                    {project.id === 'reconautomator' ? (
                      /* ReconAutomator Horizontal/Vertical Pipeline */
                      <div className="space-y-3">
                        <div className="text-[10px] text-neutral-400 tracking-wider uppercase mb-2">
                          EXECUTION FLOW:
                        </div>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center">
                          {[
                            { step: '01', title: 'SUBDOMAINS', tool: 'Subfinder' },
                            { step: '02', title: 'DNS', tool: 'Dnsx' },
                            { step: '03', title: 'HTTP PROBE', tool: 'Httpx' },
                            { step: '04', title: 'PORTS', tool: 'Naabu' },
                            { step: '05', title: 'CRAWLING', tool: 'Katana' },
                            { step: '06', title: 'ENDPOINTS', tool: 'Extract AST' },
                          ].map((pipe, pIdx) => (
                            <div
                              key={pIdx}
                              className="p-3 rounded bg-neutral-900/80 border border-white/10 space-y-1 hover:border-emerald-500/40 transition-colors"
                            >
                              <div className="text-[9px] text-neutral-400 font-mono">STEP {pipe.step}</div>
                              <div className="text-xs font-semibold text-white tracking-wide">{pipe.title}</div>
                              <div className="text-[10px] text-emerald-400 font-mono">{pipe.tool}</div>
                            </div>
                          ))}
                        </div>

                        {/* Pipeline metrics summary */}
                        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
                          <span>Attack Surface Mapping:</span>
                          <span className="text-white font-medium">60% Faster Discovery</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-neutral-400">
                          <span>Verified Endpoint Extraction:</span>
                          <span className="text-emerald-400 font-medium">200+ REST & GraphQL</span>
                        </div>
                      </div>
                    ) : (
                      /* JSFinder Route & Map Discovery System */
                      <div className="space-y-4">
                        <div className="text-[10px] text-neutral-400 tracking-wider uppercase">
                          ASSET DISSECTION METRICS:
                        </div>

                        <div className="space-y-2">
                          <div className="p-3 rounded bg-neutral-900/80 border border-white/10 flex items-center justify-between">
                            <span className="text-neutral-300">JavaScript File Ingestion</span>
                            <span className="text-white font-semibold">500+ Files / Run</span>
                          </div>
                          <div className="p-3 rounded bg-neutral-900/80 border border-white/10 flex items-center justify-between">
                            <span className="text-neutral-300">Concurrent Subdomain Sweep</span>
                            <span className="text-white font-semibold">50+ Subdomains</span>
                          </div>
                          <div className="p-3 rounded bg-neutral-900/80 border border-white/10 flex items-center justify-between">
                            <span className="text-neutral-300">Unbundled Source Maps</span>
                            <span className="text-emerald-400 font-semibold">.map File Extraction</span>
                          </div>
                          <div className="p-3 rounded bg-neutral-900/80 border border-white/10 flex items-center justify-between">
                            <span className="text-neutral-300">Scope Guardrails</span>
                            <span className="text-neutral-400 font-semibold">Dynamic Rate Limiting</span>
                          </div>
                        </div>

                        <div className="pt-2 text-[11px] text-neutral-400">
                          Engineered for deep client-side reconnaissance and undocumented API route discovery.
                        </div>
                      </div>
                    )}

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
