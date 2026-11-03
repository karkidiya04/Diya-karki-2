import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 px-4 sm:px-6 relative border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-2">
            <span>05</span>
            <span aria-hidden="true">/</span>
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
            Education
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
            Currently enrolled undergraduate building foundational engineering and computing skills.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-950/70 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-medium text-violet-600 dark:text-violet-400 block mb-1">
                  bachelor's 2nd semester - Computer engineering
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading">
                  {education.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-2">
                  <span className="font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{education.institution}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{education.location}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Ongoing (Undergraduate)</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="text-left md:text-right shrink-0">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-violet-950/60 px-3 py-1.5 rounded-lg border border-violet-200 dark:border-violet-800">
                <Award className="w-3.5 h-3.5 text-violet-500" />
                <span>Active 2nd Semester Candidate</span>
              </span>
            </div>
          </div>

          {/* Academic Focus & Key Coursework */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Core Engineering Focus
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {education.focus}
              </p>
            </div>

            <div className="md:col-span-7 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Key Curriculum & Coursework
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {education.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0"></span>
                    <span className="truncate">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
