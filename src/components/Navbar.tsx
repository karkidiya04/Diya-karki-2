import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme, onOpenCV }) => {
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
    { label: 'Creative Work', href: '#creative' },
    { label: 'Learning', href: '#learning' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-xs py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-8">
          {/* Zone 1: Brand title wordmark */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 group flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-lg bg-linear-to-tr from-violet-600 to-indigo-500 text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
              DK
            </span>
            <span className="font-heading font-semibold">{PORTFOLIO_DATA.personal.name}</span>
          </a>

          {/* Zone 2: Navigation Links (desktop) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Controls */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Resume button */}
            <button
              onClick={onOpenCV}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-200 dark:border-slate-700 whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-violet-500" />
              <span>Resume</span>
            </button>

            {/* Primary Action Button */}
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold text-white bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-lg transition-all shadow-sm hover:shadow-violet-500/20 whitespace-nowrap shrink-0 inline-flex items-center gap-1"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-slate-950/70 backdrop-blur-sm pt-20 px-4">
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl space-y-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2 text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-lg"
              >
                <FileText className="w-4 h-4 text-violet-500" />
                <span>View Full Curriculum Vitae</span>
              </button>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 text-sm font-semibold text-white bg-violet-600 rounded-lg"
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
