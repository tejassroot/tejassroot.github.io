import React, { useState } from 'react';
import { Terminal, Copy, Check, CornerDownLeft, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const TerminalWidget: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [customInput, setCustomInput] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; out: string | string[] }>>([]);

  const defaultOutputs: Record<string, string | string[]> = {
    whoami: 'tejas-thorat (Penetration Tester | Bug Hunter | Cybersecurity Researcher)',
    focus: 'Web Security | API Security | Network Security',
    methodology: 'Manual Testing | Reconnaissance | Business Logic',
    status: '● Open to Cybersecurity Opportunities (VAPT / Red Team / Security Consulting)',
    tools: [
      '• Web/API: Burp Suite Pro, Httpx, Katana, Postman',
      '• Network: Wireshark, Nmap, Metasploit, Naabu',
      '• Recon: Subfinder, Dnsx, JSFinder, ReconAutomator',
      '• Scripting: Python (Asyncio), Bash, Regex, Linux CLI',
    ],
    certs: [
      '[IN PROGRESS] Certified Red Team Analyst (CRTA)',
      '[IN PROGRESS] Multi-Cloud Red Team Analyst (MCRTA)',
      '[COMPLETED] IBM Cybersecurity Fundamentals (June 2026)',
      '[COMPLETED] Cisco Ethical Hacker (May 2026)',
    ],
    contact: `Email: ${personalInfo.email} | Phone: ${personalInfo.phone} | Loc: ${personalInfo.location}`,
    help: 'Available commands: whoami, focus, methodology, status, tools, certs, contact, clear',
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = customInput.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setHistory([]);
      setCustomInput('');
      return;
    }

    const output = defaultOutputs[cleanCmd] || `zsh: command not found: ${cleanCmd}. Type "help" for available commands.`;
    setHistory(prev => [...prev, { cmd: customInput.trim(), out: output }]);
    setCustomInput('');
  };

  const runQuickChip = (cmd: string) => {
    if (cmd === 'clear') {
      setHistory([]);
      return;
    }
    const output = defaultOutputs[cmd] || `Output for ${cmd}`;
    setHistory(prev => [...prev, { cmd, out: output }]);
  };

  const handleCopyProfile = () => {
    const textToCopy = `> whoami\n${personalInfo.terminalDefaults.whoami}\n\n> focus\n${personalInfo.terminalDefaults.focus}\n\n> methodology\n${personalInfo.terminalDefaults.methodology}\n\n> status\n${personalInfo.terminalDefaults.status}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-xl overflow-hidden bg-[#0a0f19] border border-slate-800/90 shadow-2xl shadow-black/80 font-mono text-xs sm:text-sm text-slate-200">
      {/* Terminal Title Bar */}
      <div className="bg-[#0f1624] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono ml-2">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-300">tejas@sec-box</span>
            <span className="text-slate-600">:</span>
            <span className="text-cyan-400">~/profile</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyProfile}
            className="flex items-center gap-1 px-2 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-slate-200 text-[11px] transition-colors cursor-pointer"
            title="Copy Status Block"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="p-4 sm:p-5 space-y-4 max-h-[380px] overflow-y-auto font-mono scrollbar-thin">
        {/* Core default prompt outputs required by prompt */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="text-slate-500">&gt;</span>
            <span className="font-semibold text-emerald-400">whoami</span>
          </div>
          <div className="text-slate-200 pl-4 border-l border-emerald-500/20 py-0.5">
            {personalInfo.terminalDefaults.whoami}
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-cyan-400">
            <span className="text-slate-500">&gt;</span>
            <span className="font-semibold text-cyan-400">focus</span>
          </div>
          <div className="text-slate-200 pl-4 border-l border-cyan-500/20 py-0.5">
            {personalInfo.terminalDefaults.focus}
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-amber-400">
            <span className="text-slate-500">&gt;</span>
            <span className="font-semibold text-amber-400">methodology</span>
          </div>
          <div className="text-slate-200 pl-4 border-l border-amber-500/20 py-0.5">
            {personalInfo.terminalDefaults.methodology}
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-emerald-300">
            <span className="text-slate-500">&gt;</span>
            <span className="font-semibold text-emerald-300">status</span>
          </div>
          <div className="text-slate-200 pl-4 border-l border-emerald-500/20 py-0.5 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{personalInfo.terminalDefaults.status}</span>
          </div>
        </div>

        {/* Dynamic Command History */}
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1 pt-2 border-t border-slate-800/80">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-slate-500">&gt;</span>
              <span className="font-semibold text-cyan-300">{item.cmd}</span>
            </div>
            <div className="text-slate-300 pl-4 border-l border-slate-700/50 py-0.5 text-xs sm:text-sm">
              {Array.isArray(item.out) ? (
                <div className="space-y-1">
                  {item.out.map((line, lIdx) => (
                    <div key={lIdx}>{line}</div>
                  ))}
                </div>
              ) : (
                <div>{item.out}</div>
              )}
            </div>
          </div>
        ))}

        {/* Interactive Prompt Input */}
        <form onSubmit={handleCommand} className="pt-2 flex items-center gap-2 text-xs sm:text-sm">
          <span className="text-emerald-400 font-bold">&gt;</span>
          <input
            type="text"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder="Type 'tools', 'certs', 'contact' or 'help'..."
            className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder-slate-600 font-mono text-xs sm:text-sm"
          />
          <button
            type="submit"
            className="text-slate-500 hover:text-emerald-400 transition-colors p-1"
            title="Execute Command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>

      {/* Terminal Footer Quick Chips */}
      <div className="bg-[#0b111c] px-4 py-2 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5 text-[11px]">
        <span className="text-slate-500 flex items-center gap-1 text-[10px] uppercase tracking-wider mr-1">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>Quick Run:</span>
        </span>
        {['tools', 'certs', 'contact', 'help', 'clear'].map((chip) => (
          <button
            key={chip}
            onClick={() => runQuickChip(chip)}
            className="px-2 py-0.5 rounded bg-slate-800/70 hover:bg-slate-700 text-slate-300 hover:text-emerald-300 border border-slate-700/60 hover:border-emerald-500/40 transition-colors cursor-pointer"
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
};
