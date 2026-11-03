import React from 'react';
import { ArrowDown, Mail, FolderGit2, FileText, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ParticleCanvas } from './ParticleCanvas';

interface HeroSectionProps {
  isDark: boolean;
  onOpenCV: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isDark, onOpenCV }) => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Background Animated Canvas */}
      <ParticleCanvas isDark={isDark} />

      {/* Ambient Radial Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-tr from-violet-600/15 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Unboxed Metadata Header (Zero-Pill Discipline) */}
        <div className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-6">
          <span className="inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-violet-500" />
            <span>{personal.location}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
            <span>{personal.education}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span className="text-violet-600 dark:text-violet-400 font-medium">Far Western University</span>
        </div>

        {/* Large Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white font-heading text-balance leading-[1.08] mb-6">
          {personal.heroHeadline}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-violet-600 dark:text-violet-400 max-w-2xl mx-auto mb-6 tracking-tight">
          {personal.heroSubtitle}
        </p>

        {/* Short Description */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
          {personal.heroDescription}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          {/* View My Projects */}
          <a
            href="#study-buddy"
            className="px-6 py-3 text-sm font-semibold text-white bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-xl transition-all shadow-md shadow-violet-500/20 hover:shadow-violet-500/30 inline-flex items-center gap-2 group"
          >
            <FolderGit2 className="w-4 h-4 text-violet-200 group-hover:scale-110 transition-transform" />
            <span>View My Projects</span>
          </a>

          {/* Contact Me */}
          <a
            href="#contact"
            className="px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all border border-slate-200 dark:border-slate-800 shadow-xs inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            <span>Contact Me</span>
          </a>

          {/* View Resume / CV */}
          <button
            onClick={onOpenCV}
            className="px-5 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-xl transition-colors inline-flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-violet-500" />
            <span>View Resume</span>
          </button>
        </div>

        {/* Key Focus Highlights (Clean unboxed format) */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
          <div className="p-3.5 rounded-xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
            <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Primary Project</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 block">Study Buddy IDE</span>
            <span className="text-xs text-violet-600 dark:text-violet-400">Android & Python</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
            <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Academic Stage</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 block">BE Computer Eng.</span>
            <span className="text-xs text-indigo-600 dark:text-indigo-400">Semester 2 Undergraduate</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
            <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Creative Practice</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 block">Digital Media & AI</span>
            <span className="text-xs text-violet-600 dark:text-violet-400">Video, Music & Visuals</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
            <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Career Goal</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 block">Software / IT Intern</span>
            <span className="text-xs text-emerald-600 dark:text-emerald-400">Open to Opportunities</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-10 flex justify-center">
          <a
            href="#about"
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors inline-flex flex-col items-center gap-1.5 text-xs"
            aria-label="Scroll to About section"
          >
            <span>Explore Portfolio</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
