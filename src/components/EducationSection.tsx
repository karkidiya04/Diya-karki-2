import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 px-4 sm:px-6 relative border-t border-[#D98A84]/20 bg-[#120D11]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D98A84] mb-2">
            <span>05</span>
            <span aria-hidden="true">/</span>
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8EFEB]">
            Education
          </h2>
          <p className="text-sm text-[#D5C7C1] mt-2 max-w-xl">
            Currently enrolled undergraduate building foundational engineering and computing skills.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="rounded-2xl bg-[#1B131A] border border-[#D98A84]/30 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#D98A84]/15">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#8E3E47]/30 border border-[#D98A84]/40 text-[#E89D97] flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#D98A84] block mb-1">
                  bachelor's 2nd semester - Computer engineering
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F8EFEB]">
                  {education.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#D5C7C1] mt-2">
                  <span className="font-medium text-[#F8EFEB] flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-[#D98A84]" />
                    <span>{education.institution}</span>
                  </span>
                  <span aria-hidden="true" className="text-[#D98A84]/50">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D98A84]" />
                    <span>{education.location}</span>
                  </span>
                  <span aria-hidden="true" className="text-[#D98A84]/50">·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#D98A84]" />
                    <span>Ongoing (Undergraduate)</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="text-left md:text-right shrink-0">
              <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#D98A84] bg-[#231A22] px-3 py-1.5 rounded-lg border border-[#D98A84]/30">
                <Award className="w-3.5 h-3.5 text-[#D98A84]" />
                <span>Semester II Candidate</span>
              </span>
            </div>
          </div>

          {/* Academic Focus & Key Coursework */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#D98A84]">
                Core Engineering Focus
              </h4>
              <p className="text-xs sm:text-sm text-[#D5C7C1] leading-relaxed">
                {education.focus}
              </p>
            </div>

            <div className="md:col-span-7 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#D98A84]">
                Key Curriculum & Coursework
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {education.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-[#231A22] border border-[#D98A84]/15 text-[#D5C7C1] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D98A84] shrink-0"></span>
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
