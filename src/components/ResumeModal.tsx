import React, { useState } from 'react';
import { X, Printer, Copy, Check } from 'lucide-react';
import { 
  personalInfo, 
  experienceData, 
  skillCategories, 
  projectsData, 
  certificationsData, 
  honorsData, 
  educationData, 
  hallOfFameData 
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const plainText = `
TEJAS THORAT
Penetration Tester | Bug Hunter | Cybersecurity Researcher
Location: ${personalInfo.location}
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}

==================================================
PROFESSIONAL SUMMARY
==================================================
${personalInfo.about}

==================================================
KEY EXPERIENCE
==================================================
1. ${experienceData[0].role} — ${experienceData[0].company} (${experienceData[0].period})
Location: ${experienceData[0].location}
${experienceData[0].achievements.map(a => `• ${a}`).join('\n')}

2. ${experienceData[1].role} — ${experienceData[1].company} (${experienceData[1].period})
${experienceData[1].achievements.map(a => `• ${a}`).join('\n')}

==================================================
CORE TECHNICAL SKILLS
==================================================
${skillCategories.map(c => `• ${c.title}: ${c.skills.map(s => s.name).join(', ')}`).join('\n')}

==================================================
FEATURED PROJECTS
==================================================
1. ${projectsData[0].name}
Stack: ${projectsData[0].stack.join(', ')}
${projectsData[0].description}
Highlights:
${projectsData[0].highlights.map(h => `• ${h}`).join('\n')}

2. ${projectsData[1].name}
Stack: ${projectsData[1].stack.join(', ')}
${projectsData[1].description}
Highlights:
${projectsData[1].highlights.map(h => `• ${h}`).join('\n')}

==================================================
SECURITY RESEARCH & HALL OF FAME
==================================================
Active researcher on HackerOne and Bugcrowd with 10+ valid medium/high vulnerabilities reported.
Hall of Fame Recognitions: ${hallOfFameData.map(h => h.name).join(', ')}

==================================================
CERTIFICATIONS & HONORS
==================================================
${certificationsData.map(c => `• ${c.title} (${c.issuer} - ${c.status === 'In Progress' ? 'In Progress' : c.date})`).join('\n')}
• Honor: ${honorsData[0].title} (${honorsData[0].organization}, ${honorsData[0].date})

==================================================
EDUCATION
==================================================
${educationData.map(e => `• ${e.degree} — ${e.institution} (${e.period})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
      
      {/* Modal Sheet */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c0e12] border border-white/15 rounded-xl shadow-2xl flex flex-col overflow-hidden text-neutral-200 font-sans">
        
        {/* Top Control Bar */}
        <div className="px-6 py-4 bg-[#090a0d] border-b border-white/10 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-mono text-xs tracking-widest uppercase text-white font-bold">
              TEJAS_THORAT_CV.PDF
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono tracking-wider uppercase font-semibold bg-white text-black hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / SAVE PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono tracking-wider uppercase text-neutral-300 hover:text-white border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY ATS TEXT</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded text-neutral-400 hover:text-white transition-colors cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Printable Content */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-10 scrollbar-thin text-neutral-200 print-document">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-8 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-emerald-400 font-mono text-sm font-semibold tracking-wide">
                {personalInfo.title}
              </p>
            </div>

            <div className="text-xs font-mono text-neutral-400 space-y-1 sm:text-right">
              <div>{personalInfo.location}</div>
              <div>{personalInfo.email}</div>
              <div>{personalInfo.phone}</div>
              <div>{personalInfo.linkedin}</div>
              <div>{personalInfo.github}</div>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 font-semibold">
              PROFESSIONAL SUMMARY
            </div>
            <p className="text-sm text-neutral-300 font-sans leading-relaxed">
              {personalInfo.about}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 font-semibold">
              WORK EXPERIENCE
            </div>

            {experienceData.map((exp, idx) => (
              <div key={idx} className="space-y-2 pt-4 border-t border-white/10 first:border-none first:pt-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span className="font-bold text-white text-base font-sans">{exp.role}</span>
                    <span className="text-neutral-400 font-mono text-xs"> — {exp.company}</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">{exp.period} | {exp.location}</span>
                </div>

                <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-300 font-sans pl-2">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <span className="text-neutral-500 font-mono">—</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills Matrix */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 font-semibold">
              TECHNICAL SKILLS MATRIX
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="p-3 rounded bg-neutral-900/60 border border-white/10 space-y-1">
                  <span className="font-mono font-semibold text-white">{cat.title}:</span>
                  <p className="text-neutral-400 leading-relaxed font-sans">
                    {cat.skills.map(s => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 font-semibold">
              FEATURED SECURITY PROJECTS
            </div>

            {projectsData.map((proj, idx) => (
              <div key={idx} className="p-4 rounded bg-neutral-900/40 border border-white/10 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">{proj.name}</span>
                  <span className="font-mono text-emerald-400 text-[11px]">Stack: {proj.stack.join(', ')}</span>
                </div>
                <p className="text-neutral-300 font-sans">{proj.description}</p>
                <div className="space-y-1 pl-2 font-sans text-neutral-400">
                  {proj.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2">
                      <span>—</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bug Bounty & Hall of Fame */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 font-semibold">
              SECURITY RESEARCH & RECOGNITIONS
            </div>
            <p className="text-xs text-neutral-300 font-sans">
              10+ valid vulnerabilities reported via coordinated disclosure on HackerOne and Bugcrowd.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {hallOfFameData.map((hof, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded bg-neutral-900 border border-white/10 text-neutral-300 text-xs font-mono">
                  {hof.name}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications & Education Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-white/10">
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 font-semibold">
                CERTIFICATIONS & HONORS
              </div>
              <ul className="space-y-1.5 text-xs text-neutral-300 font-mono">
                {certificationsData.map((c, idx) => (
                  <li key={idx} className="flex items-center justify-between">
                    <span>• {c.title}</span>
                    <span className="text-neutral-500">({c.status === 'In Progress' ? 'In Progress' : c.date})</span>
                  </li>
                ))}
                <li className="text-emerald-400 font-semibold pt-1">
                  ★ {honorsData[0].title} — {honorsData[0].organization}
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 font-semibold">
                EDUCATION
              </div>
              <ul className="space-y-2 text-xs text-neutral-300 font-sans">
                {educationData.map((e, idx) => (
                  <li key={idx}>
                    <div className="font-semibold text-white">{e.degree}</div>
                    <div className="text-neutral-400 font-mono text-[11px]">{e.institution} ({e.period})</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
