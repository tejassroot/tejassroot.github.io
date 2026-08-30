import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

const navLinks = [
  { name: 'ABOUT', href: '#about' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'METHODOLOGY', href: '#methodology' },
  { name: 'RESEARCH', href: '#research' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'experience', 'projects', 'methodology', 'research', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090a0c]/85 backdrop-blur-md border-b border-white/10 py-3.5'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Brand Name / Minimal Monogram */}
          <a
            href="#"
            className="group flex items-center gap-2 text-white font-mono text-sm tracking-[0.2em] uppercase font-bold focus:outline-none"
          >
            <span>TEJAS THORAT</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-80 group-hover:opacity-100 transition-opacity"></span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-[11px] font-mono tracking-[0.2em]">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-200 uppercase ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-emerald-400" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Minimal Resume Trigger */}
          <div className="hidden md:flex items-center gap-5">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1 text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-300 hover:text-emerald-400 transition-colors cursor-pointer group"
            >
              <span>RESUME</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={onOpenResume}
              className="text-[11px] font-mono tracking-wider text-emerald-400 uppercase font-semibold"
            >
              RESUME
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Elegant Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#090a0c] pt-28 px-8 pb-12 flex flex-col justify-between md:hidden animate-in fade-in duration-200">
          <div className="space-y-6">
            <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 pb-4 border-b border-white/10">
              NAVIGATION INDEX
            </div>
            <div className="flex flex-col space-y-5">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-sans font-light tracking-tight text-white hover:text-emerald-400 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-neutral-400">0{idx + 1}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3.5 rounded-lg border border-white/15 text-white font-mono text-xs tracking-widest uppercase flex items-center justify-center gap-2"
            >
              <span>VIEW RESUME (PDF)</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            </button>
            <div className="text-center text-[10px] font-mono text-neutral-400">
              AURANGABAD, MAHARASHTRA, INDIA
            </div>
          </div>
        </div>
      )}
    </>
  );
};
