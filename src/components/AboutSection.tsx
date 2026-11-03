import React from 'react';
import { User, MapPin, GraduationCap, Compass, Code2, Sparkles, FileText, Download } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenCV: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCV }) => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 relative border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-2">
            <span>01</span>
            <span aria-hidden="true">/</span>
            <span>About Diya Karki</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading text-balance">
            Student Engineer, Creator & Practical Problem Solver
          </h2>
        </div>

        {/* 2-Column Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Narrative Prose */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Hello! I am <strong className="text-slate-900 dark:text-white font-semibold">Diya Karki</strong>, an undergraduate Computer Engineering student currently in my second semester at Far Western University in Nepal.
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
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <Code2 className="w-5 h-5 text-violet-500 mb-2" />
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Code & Systems</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Focusing on Python OOP, C fundamentals, and Android lifecycle mechanics.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <Sparkles className="w-5 h-5 text-indigo-500 mb-2" />
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">AI & Digital Media</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Leveraging prompt workflows, AI video synthesis, and creative storytelling.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <Compass className="w-5 h-5 text-emerald-500 mb-2" />
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Growth Mindset</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Dedicated to disciplined daily learning and building demonstrable tools.
                </p>
              </div>
            </div>

            {/* Actions: View CV & Contact */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
              >
                <FileText className="w-4 h-4 text-violet-400" />
                <span>View Official Resume / CV</span>
              </button>
              <a
                href={personal.cvPdfPath}
                download="Diya_Karki_CV.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors border border-slate-200 dark:border-slate-800"
              >
                <Download className="w-3.5 h-3.5 text-slate-500" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Right Column: Grounded Fact Sheet & Identity Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-linear-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
            <div>
              <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 flex items-center justify-center font-bold text-lg mb-4">
                DK
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                Academic & Profile Summary
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Verified candidate information directly from official CV
              </p>
            </div>

            <div className="space-y-4 divide-y divide-slate-100 dark:divide-slate-800/80 text-sm">
              <div className="pt-3 flex items-start justify-between gap-4">
                <span className="text-slate-500 dark:text-slate-400">Current Program</span>
                <span className="font-medium text-slate-900 dark:text-slate-100 text-right">
                  Bachelor's in Computer Engineering (2nd Sem)
                </span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-4">
                <span className="text-slate-500 dark:text-slate-400">University</span>
                <span className="font-medium text-slate-900 dark:text-slate-100 text-right">
                  Far Western University
                </span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-4">
                <span className="text-slate-500 dark:text-slate-400">Location</span>
                <span className="font-medium text-slate-900 dark:text-slate-100 text-right">
                  Nepal 🇳🇵
                </span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-4">
                <span className="text-slate-500 dark:text-slate-400">Career Objective</span>
                <span className="font-medium text-slate-900 dark:text-slate-100 text-right text-xs max-w-[240px]">
                  Computer Science / IT Internship to gain practical experience and contribute to real-world software
                </span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-4">
                <span className="text-slate-500 dark:text-slate-400">Current Status</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Open to Internships & Projects
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-violet-50/70 dark:bg-violet-950/30 border border-violet-100 dark:border-violet-900/40 text-xs text-violet-900 dark:text-violet-200">
              <p className="italic">
                "Driven by curiosity to understand how software works under the hood — and how to turn practical challenges into elegant code."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
