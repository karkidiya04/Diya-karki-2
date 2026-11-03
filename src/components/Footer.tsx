import React from 'react';
import { Github, Instagram, Youtube, Mail, Linkedin, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCV }) => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 px-4 sm:px-6 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Slogan */}
        <div className="text-center md:text-left space-y-1.5">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="w-7 h-7 rounded-lg bg-linear-to-tr from-violet-600 to-indigo-500 text-white flex items-center justify-center font-bold text-xs">
              DK
            </span>
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white font-heading">
              {personal.name}
            </span>
          </div>
          <p className="text-xs sm:text-sm font-medium text-violet-600 dark:text-violet-400">
            Building • Learning • Creating
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
            Computer Engineering student at Far Western University, Nepal.
          </p>
        </div>

        {/* Social Links Placeholders */}
        <div className="flex items-center gap-3">
          <a
            href={personal.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-violet-50 dark:hover:bg-violet-950/60 text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 border border-slate-200 dark:border-slate-800 flex items-center justify-center transition-colors"
            aria-label="GitHub Profile Placeholder"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={personal.socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-rose-50 dark:hover:bg-rose-950/60 text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 border border-slate-200 dark:border-slate-800 flex items-center justify-center transition-colors"
            aria-label="YouTube Channel Placeholder"
          >
            <Youtube className="w-4 h-4" />
          </a>

          <a
            href={personal.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-pink-50 dark:hover:bg-pink-950/60 text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 border border-slate-200 dark:border-slate-800 flex items-center justify-center transition-colors"
            aria-label="Instagram Profile Placeholder"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <a
            href={personal.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-blue-950/60 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800 flex items-center justify-center transition-colors"
            aria-label="LinkedIn Profile Placeholder"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personal.email}`}
            className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 border border-slate-200 dark:border-slate-800 flex items-center justify-center transition-colors"
            aria-label="Direct Email Link"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Back to top button */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors border border-slate-200 dark:border-slate-800"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
