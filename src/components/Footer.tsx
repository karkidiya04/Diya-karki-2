import React from 'react';
import { Github, Instagram, Youtube, Mail, Linkedin, ArrowUp, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenCV: () => void;
  onReplayConstruction: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCV, onReplayConstruction }) => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#D98A84]/20 bg-[#120D11] py-14 px-4 sm:px-6 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Slogan */}
        <div className="text-center md:text-left space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#8E3E47] to-[#D98A84] text-[#120D11] flex items-center justify-center font-bold text-xs">
              DK
            </span>
            <span className="text-xl font-serif font-bold text-[#F8EFEB]">
              {personal.name}
            </span>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#D98A84]">
            Building • Learning • Creating
          </p>
          <p className="text-xs text-[#D5C7C1]/70 max-w-sm">
            Computer Engineering student at Far Western University, Nepal.
          </p>
        </div>

        {/* Social Links Placeholders */}
        <div className="flex items-center gap-3">
          <a
            href={personal.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-[#1B131A] hover:bg-[#231A22] text-[#D5C7C1] hover:text-[#D98A84] border border-[#D98A84]/30 flex items-center justify-center transition-colors"
            aria-label="GitHub Profile Placeholder"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={personal.socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-[#1B131A] hover:bg-[#231A22] text-[#D5C7C1] hover:text-[#D98A84] border border-[#D98A84]/30 flex items-center justify-center transition-colors"
            aria-label="YouTube Channel Placeholder"
          >
            <Youtube className="w-4 h-4" />
          </a>

          <a
            href={personal.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-[#1B131A] hover:bg-[#231A22] text-[#D5C7C1] hover:text-[#D98A84] border border-[#D98A84]/30 flex items-center justify-center transition-colors"
            aria-label="Instagram Profile Placeholder"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <a
            href={personal.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-[#1B131A] hover:bg-[#231A22] text-[#D5C7C1] hover:text-[#D98A84] border border-[#D98A84]/30 flex items-center justify-center transition-colors"
            aria-label="LinkedIn Profile Placeholder"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personal.email}`}
            className="w-10 h-10 rounded-xl bg-[#1B131A] hover:bg-[#231A22] text-[#D5C7C1] hover:text-[#D98A84] border border-[#D98A84]/30 flex items-center justify-center transition-colors"
            aria-label="Direct Email Link"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={onReplayConstruction}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#D98A84] hover:text-[#F8EFEB] bg-[#1B131A] hover:bg-[#231A22] rounded-lg transition-colors border border-[#D98A84]/30"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Replay Build</span>
          </button>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#D5C7C1] hover:text-[#F8EFEB] bg-[#1B131A] hover:bg-[#231A22] rounded-lg transition-colors border border-[#D98A84]/30"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
