import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { AttackSurfaceVisualizer } from './AttackSurfaceVisualizer';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="hero" className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* 12-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (Cols 1-7): Editorial Typography & Direct Action */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Eyebrow Stack */}
            <div className="space-y-1">
              <div className="text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase font-medium">
                PENETRATION TESTER
              </div>
              <div className="text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase font-medium">
                BUG HUNTER
              </div>
              <div className="text-[11px] font-mono tracking-[0.25em] text-emerald-400 uppercase font-medium">
                SECURITY RESEARCHER
              </div>
            </div>

            {/* Main Visual Centerpiece Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.035em] text-white leading-[1.08] font-sans">
              Finding the vulnerabilities <br className="hidden sm:inline" />
              that <span className="font-semibold text-white">automated scanners miss.</span>
            </h1>

            {/* Editorial Subtitle */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-xl font-sans leading-[1.65] font-normal">
              Penetration tester focused on web applications, APIs, enterprise networks, reconnaissance, and manual vulnerability research.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase font-bold text-white bg-white/10 hover:bg-white/15 px-5 py-3 rounded-lg border border-white/15 transition-all group"
              >
                <span>VIEW EXPERIENCE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase font-medium text-neutral-400 hover:text-white transition-colors group"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Metadata Footer Status Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-[11px] font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>OPEN TO CYBERSECURITY OPPORTUNITIES</span>
              </div>
              <span>•</span>
              <div>AURANGABAD, MAHARASHTRA, INDIA</div>
            </div>

          </div>

          {/* Right Column (Cols 8-12): Abstract Attack-Surface Visualizer */}
          <div className="lg:col-span-5 relative">
            <AttackSurfaceVisualizer />
          </div>

        </div>

      </div>
    </section>
  );
};
