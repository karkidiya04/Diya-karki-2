import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Play, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenCV: () => void;
  onReplayConstruction: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV, onReplayConstruction }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Study Buddy', href: '#study-buddy' },
    { label: 'Creative', href: '#creative' },
    { label: 'Process', href: '#process' },
    { label: 'Learning', href: '#learning' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#120D11]/90 backdrop-blur-md border-b border-[#D98A84]/20 shadow-md py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-8">
          {/* Zone 1: Brand title wordmark */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-[#F8EFEB] whitespace-nowrap shrink-0 group flex items-center gap-2.5"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#8E3E47] to-[#D98A84] text-[#120D11] flex items-center justify-center font-bold text-xs shadow-sm group-hover:scale-105 transition-transform">
              DK
            </span>
            <span className="font-serif tracking-tight text-xl font-bold">{PORTFOLIO_DATA.personal.name}</span>
          </a>

          {/* Zone 2: Navigation Links (desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-mono tracking-wider uppercase text-[#D5C7C1]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#D98A84] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Replay Construction Engine */}
            <button
              onClick={onReplayConstruction}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-[#D98A84] bg-[#1B131A] hover:bg-[#231A22] border border-[#D98A84]/30 rounded-lg transition-colors"
              title="Re-run the interactive construction sequence"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Live Build</span>
            </button>

            {/* Resume button */}
            <button
              onClick={onOpenCV}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#F8EFEB] bg-[#231A22] hover:bg-[#2D212A] rounded-lg transition-colors border border-[#D98A84]/30 whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-[#D98A84]" />
              <span className="hidden sm:inline">Resume</span>
            </button>

            {/* Primary Action Button */}
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold text-[#120D11] bg-gradient-to-r from-[#D98A84] to-[#E89D97] hover:brightness-110 rounded-lg transition-all shadow-sm shadow-[#D98A84]/20 whitespace-nowrap shrink-0 inline-flex items-center gap-1"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#D5C7C1] hover:bg-[#1B131A] transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#120D11]/90 backdrop-blur-md pt-20 px-4">
          <div className="rounded-2xl bg-[#1B131A] border border-[#D98A84]/30 p-6 shadow-2xl space-y-4">
            <div className="flex flex-col space-y-3 font-mono text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-[#F8EFEB] hover:bg-[#231A22] hover:text-[#D98A84] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-[#D98A84]/20 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReplayConstruction();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-mono text-[#D98A84] bg-[#231A22] rounded-lg border border-[#D98A84]/30"
              >
                <Sparkles className="w-4 h-4" />
                <span>Replay Construction Sequence</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-[#F8EFEB] bg-[#231A22] rounded-lg"
              >
                <FileText className="w-4 h-4 text-[#D98A84]" />
                <span>View Full Curriculum Vitae</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 text-sm font-semibold text-[#120D11] bg-gradient-to-r from-[#D98A84] to-[#E89D97] rounded-lg"
              >
                <span>Contact Diya Karki</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
