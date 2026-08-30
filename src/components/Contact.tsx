import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="contact" className="py-28 sm:py-36 relative z-10 bg-[#07090c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Editorial Closing Statement Layout */}
        <div className="max-w-4xl space-y-10">
          
          <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase font-semibold">
            08 / CONTACT
          </div>

          {/* Large Typography Statement */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-light tracking-[-0.04em] text-white leading-[1.05]">
            Let's investigate <br />
            <span className="font-semibold text-neutral-100">something interesting.</span>
          </h2>

          <p className="text-lg sm:text-xl text-neutral-400 font-sans font-light leading-relaxed max-w-2xl">
            Open to cybersecurity opportunities, penetration testing, security research, and collaboration.
          </p>

          {/* Primary Action Buttons & Direct Links */}
          <div className="pt-4 flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${personalInfo.email}?subject=Cybersecurity%20Inquiry%20%E2%80%94%20Tejas%20Thorat`}
              className="inline-flex items-center gap-2 text-sm font-mono tracking-[0.2em] uppercase font-bold text-slate-950 bg-white hover:bg-neutral-200 px-7 py-4 rounded-lg transition-all group"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 text-sm font-mono tracking-[0.2em] uppercase font-medium text-white hover:text-emerald-400 px-6 py-4 rounded-lg border border-white/15 hover:border-white/30 transition-all cursor-pointer group"
            >
              <span>VIEW RESUME</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Direct Communication Channels Matrix */}
          <div className="pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            
            {/* Email */}
            <div className="space-y-1">
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest">EMAIL</div>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-white hover:text-emerald-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copiedKey === 'email' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest">PHONE</div>
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-white hover:text-emerald-400 transition-colors"
                >
                  {personalInfo.phone}
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy Phone"
                >
                  {copiedKey === 'phone' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="space-y-1">
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest">LINKEDIN</div>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-400 transition-colors flex items-center gap-1"
              >
                <span>linkedin.com/in/tejas-thorat-542533253</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* GitHub */}
            <div className="space-y-1">
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest">GITHUB</div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-400 transition-colors flex items-center gap-1"
              >
                <span>github.com/tejassroot</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
