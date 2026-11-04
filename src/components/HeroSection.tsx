import React from 'react';
import { ArrowDown, Mail, FolderGit2, FileText, MapPin, GraduationCap, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ParticleCanvas } from './ParticleCanvas';
import { EditorialStamp } from './EditorialStamp';

interface HeroSectionProps {
  onOpenCV: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCV }) => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden bg-[#120D11]">
      {/* Background Subtle Canvas */}
      <ParticleCanvas isDark={true} />

      {/* Blueprint Grid Lines & Overlay */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-40 pointer-events-none" />

      {/* Architectural Corner Markers */}
      <div className="absolute top-20 left-4 text-[10px] font-mono text-[#D98A84]/40 hidden sm:block">
        [SYS_ORIGIN: 0.0, 0.0]
      </div>
      <div className="absolute top-20 right-4 text-[10px] font-mono text-[#D98A84]/40 hidden sm:block">
        [VIEWPORT: DESKTOP_1440]
      </div>

      {/* Ambient Radial Spotlight */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#D98A84]/12 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Top Split: Metadata and Rotating Stamp */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* Unboxed Metadata (Zero-Pill Discipline) */}
          <div className="flex items-center flex-wrap gap-2 text-xs font-mono text-[#D5C7C1]">
            <span className="inline-flex items-center gap-1.5 text-[#F8EFEB]">
              <MapPin className="w-3.5 h-3.5 text-[#D98A84]" />
              <span>{personal.location}</span>
            </span>
            <span aria-hidden="true" className="text-[#D98A84]/50">·</span>
            <span className="inline-flex items-center gap-1.5 text-[#F8EFEB]">
              <GraduationCap className="w-3.5 h-3.5 text-[#E89D97]" />
              <span>{personal.education}</span>
            </span>
            <span aria-hidden="true" className="text-[#D98A84]/50">·</span>
            <span className="text-[#D98A84] font-medium">Far Western University</span>
          </div>

          {/* Rotating Circular Stamp Seal from Reference Image */}
          <div className="shrink-0">
            <EditorialStamp
              text="• LET'S BUILD SOMETHING • DIYA KARKI • 2026 •"
              size={105}
              icon="arrow"
            />
          </div>
        </div>

        {/* Large Headline with Overlaid Script Accent */}
        <div className="relative mb-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-extrabold tracking-tight text-[#F8EFEB] leading-[1.04] text-balance">
            {personal.heroHeadline}
          </h1>

          {/* Cursive script annotation floating on the title (inspired by reference image) */}
          <div className="sm:absolute sm:top-2 sm:right-6 mt-3 sm:mt-0 transform -rotate-3 select-none pointer-events-none">
            <span className="text-xl sm:text-2xl font-script italic text-[#E89D97] drop-shadow-md">
              "Ideas that turn into code."
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl font-mono text-[#D98A84] mb-6 tracking-tight">
          {personal.heroSubtitle}
        </p>

        {/* Short Description */}
        <p className="text-base sm:text-lg text-[#D5C7C1] max-w-2xl leading-relaxed mb-10 text-balance">
          {personal.heroDescription}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
          {/* View My Projects */}
          <a
            href="#study-buddy"
            className="px-6 py-3 text-sm font-semibold text-[#120D11] bg-gradient-to-r from-[#D98A84] to-[#E89D97] hover:brightness-110 rounded-xl transition-all shadow-md shadow-[#D98A84]/20 inline-flex items-center gap-2 group cursor-pointer"
          >
            <FolderGit2 className="w-4 h-4 text-[#120D11] group-hover:scale-110 transition-transform" />
            <span>View My Projects</span>
          </a>

          {/* Contact Me */}
          <a
            href="#contact"
            className="px-6 py-3 text-sm font-semibold text-[#F8EFEB] bg-[#1B131A] hover:bg-[#231A22] rounded-xl transition-all border border-[#D98A84]/30 shadow-xs inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-[#D98A84]" />
            <span>Contact Me</span>
          </a>

          {/* View Resume / CV */}
          <button
            onClick={onOpenCV}
            className="px-5 py-3 text-sm font-medium text-[#D5C7C1] hover:text-[#F8EFEB] hover:bg-[#1B131A] rounded-xl transition-colors border border-transparent hover:border-[#D98A84]/20 inline-flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-[#E89D97]" />
            <span>View Resume</span>
          </button>
        </div>

        {/* Editorial KPI strip below hero split */}
        <div className="mt-16 pt-8 border-t border-[#D98A84]/20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
          <div className="p-4 rounded-xl bg-[#1B131A]/80 border border-[#D98A84]/20">
            <span className="text-[11px] font-mono text-[#D98A84] block mb-1">01 / FLAGSHIP</span>
            <span className="text-sm font-bold text-[#F8EFEB] block">Study Buddy IDE</span>
            <span className="text-xs text-[#D5C7C1]">Android Python Environment</span>
          </div>

          <div className="p-4 rounded-xl bg-[#1B131A]/80 border border-[#D98A84]/20">
            <span className="text-[11px] font-mono text-[#D98A84] block mb-1">02 / EDUCATION</span>
            <span className="text-sm font-bold text-[#F8EFEB] block">BE Computer Eng.</span>
            <span className="text-xs text-[#D5C7C1]">Semester II · Far Western</span>
          </div>

          <div className="p-4 rounded-xl bg-[#1B131A]/80 border border-[#D98A84]/20">
            <span className="text-[11px] font-mono text-[#D98A84] block mb-1">03 / CREATIVE</span>
            <span className="text-sm font-bold text-[#F8EFEB] block">AI & Digital Media</span>
            <span className="text-xs text-[#D5C7C1]">Motion, Audio & Visuals</span>
          </div>

          <div className="p-4 rounded-xl bg-[#1B131A]/80 border border-[#D98A84]/20">
            <span className="text-[11px] font-mono text-[#D98A84] block mb-1">04 / AVAILABILITY</span>
            <span className="text-sm font-bold text-[#F8EFEB] block">Internship Candidate</span>
            <span className="text-xs text-[#E89D97]">Open for Opportunities</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="text-[#D5C7C1]/70 hover:text-[#D98A84] transition-colors inline-flex flex-col items-center gap-1.5 text-xs font-mono"
            aria-label="Scroll to About section"
          >
            <span>DISCOVER WORKS</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#D98A84]" />
          </a>
        </div>
      </div>
    </section>
  );
};
