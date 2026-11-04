import React from 'react';
import { MapPin, GraduationCap, Compass, Code2, Sparkles, FileText, Download, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenCV: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCV }) => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 relative border-t border-[#D98A84]/20 bg-[#120D11]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D98A84] mb-2">
            <span>01</span>
            <span aria-hidden="true">/</span>
            <span>ABOUT DIYA KARKI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8EFEB] text-balance">
            Student Engineer, Creator & Practical Problem Solver
          </h2>
        </div>

        {/* 2-Column Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Narrative Prose */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-[#D5C7C1] leading-relaxed">
              <p>
                Hello! I am <strong className="text-[#F8EFEB] font-semibold">Diya Karki</strong>, an undergraduate Computer Engineering student currently in my second semester at Far Western University in Nepal.
              </p>
              <p>
                My passion lies at the intersection of logical software engineering and creative digital expression. Rather than just reading textbooks, I thrive when building actual projects: whether designing the architecture for an Android-friendly Python environment, testing generative AI pipelines, or crafting digital media that engages audiences.
              </p>
              <p>
                As an early-career engineer, I believe in staying grounded: I am honest about what I know, transparent about what I am actively learning, and relentless in my curiosity. Every new assignment, bug, or idea is an opportunity to strengthen my foundations.
              </p>
            </div>

            {/* Core Trait Blocks (Unboxed cards with hairline borders) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4">
              <div className="p-4 rounded-xl bg-[#1B131A] border border-[#D98A84]/20 hover:border-[#D98A84]/40 transition-colors">
                <Code2 className="w-5 h-5 text-[#D98A84] mb-2" />
                <h4 className="text-sm font-mono font-semibold text-[#F8EFEB] mb-1">Code & Systems</h4>
                <p className="text-xs text-[#D5C7C1]/80 leading-relaxed">
                  Focusing on Python OOP, C fundamentals, and Android lifecycle mechanics.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1B131A] border border-[#D98A84]/20 hover:border-[#D98A84]/40 transition-colors">
                <Sparkles className="w-5 h-5 text-[#E89D97] mb-2" />
                <h4 className="text-sm font-mono font-semibold text-[#F8EFEB] mb-1">AI & Digital Media</h4>
                <p className="text-xs text-[#D5C7C1]/80 leading-relaxed">
                  Leveraging prompt workflows, AI video synthesis, and creative storytelling.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1B131A] border border-[#D98A84]/20 hover:border-[#D98A84]/40 transition-colors">
                <Compass className="w-5 h-5 text-[#D98A84] mb-2" />
                <h4 className="text-sm font-mono font-semibold text-[#F8EFEB] mb-1">Growth Mindset</h4>
                <p className="text-xs text-[#D5C7C1]/80 leading-relaxed">
                  Dedicated to disciplined daily learning and building demonstrable tools.
                </p>
              </div>
            </div>

            {/* Actions: View CV & Contact */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#120D11] bg-gradient-to-r from-[#D98A84] to-[#E89D97] hover:brightness-110 rounded-lg transition-all shadow-sm shadow-[#D98A84]/20"
              >
                <FileText className="w-4 h-4 text-[#120D11]" />
                <span>View Official Resume / CV</span>
              </button>
              <a
                href={personal.cvPdfPath}
                download="Diya_Karki_CV.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-[#D5C7C1] hover:text-[#F8EFEB] bg-[#1B131A] hover:bg-[#231A22] rounded-lg transition-colors border border-[#D98A84]/30"
              >
                <Download className="w-3.5 h-3.5 text-[#D98A84]" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Right Column: Grounded Fact Sheet & Identity Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#1B131A] to-[#231A22] border border-[#D98A84]/30 shadow-xl space-y-6">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#8E3E47]/30 border border-[#D98A84]/40 text-[#E89D97] flex items-center justify-center font-bold text-lg mb-4 font-mono">
                DK
              </div>
              <h3 className="text-xl font-bold font-serif text-[#F8EFEB]">
                Academic & Profile Summary
              </h3>
              <p className="text-xs font-mono text-[#D98A84] mt-1">
                Verified candidate information directly from official CV
              </p>
            </div>

            <div className="space-y-4 divide-y divide-[#D98A84]/15 text-sm font-mono">
              <div className="pt-3 flex items-start justify-between gap-4">
                <span className="text-[#D5C7C1]/70 text-xs">Current Program</span>
                <span className="font-medium text-[#F8EFEB] text-right text-xs">
                  Bachelor's in Computer Engineering (2nd Sem)
                </span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-4">
                <span className="text-[#D5C7C1]/70 text-xs">University</span>
                <span className="font-medium text-[#F8EFEB] text-right text-xs">
                  Far Western University
                </span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-4">
                <span className="text-[#D5C7C1]/70 text-xs">Location</span>
                <span className="font-medium text-[#F8EFEB] text-right text-xs">
                  Nepal 🇳🇵
                </span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-4">
                <span className="text-[#D5C7C1]/70 text-xs">Career Objective</span>
                <span className="font-medium text-[#F8EFEB] text-right text-[11px] max-w-[240px]">
                  Computer Science / IT Internship to gain practical experience and contribute to real-world software
                </span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-4">
                <span className="text-[#D5C7C1]/70 text-xs">Current Status</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D98A84]">
                  <span className="w-2 h-2 rounded-full bg-[#D98A84] animate-pulse"></span>
                  Open to Opportunities
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#120D11] border border-[#D98A84]/25 text-xs text-[#E89D97]">
              <p className="italic font-script text-base">
                "Driven by curiosity to understand how software works under the hood — and how to turn practical challenges into elegant code."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
