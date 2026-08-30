import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-white/10 bg-[#060709] font-mono text-xs text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 pb-8 border-b border-white/5">
          
          {/* Identity & Subtitle */}
          <div className="space-y-2">
            <div className="text-sm font-bold text-white tracking-widest uppercase">
              {personalInfo.name}
            </div>
            <div className="text-[11px] text-neutral-400 leading-relaxed">
              Penetration Tester • Bug Hunter • Security Researcher
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider text-neutral-400">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GITHUB
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-white transition-colors"
            >
              EMAIL
            </a>
          </div>

        </div>

        {/* Bottom copyright & location */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[10px] tracking-widest uppercase text-neutral-400">
          <div>
            © 2026 TEJAS THORAT. ALL RIGHTS RESERVED.
          </div>
          <div>
            AURANGABAD, MAHARASHTRA, INDIA
          </div>
        </div>

      </div>
    </footer>
  );
};
