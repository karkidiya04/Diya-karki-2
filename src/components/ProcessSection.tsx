import React from 'react';
import { ArrowRight, Code, Layers, Sparkles, Terminal } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      subtitle: 'Foundations & Problem Formulation',
      description:
        'Grounding every project in core computer science principles — analyzing data structures, operating systems, and student pain points before writing a single line of code.',
    },
    {
      number: '02',
      title: 'DEFINE',
      subtitle: 'Architecture & System Logic',
      description:
        'Designing modular Object-Oriented structures, defining clean Python interfaces, and mapping Android lifecycle constraints for offline reliability.',
    },
    {
      number: '03',
      title: 'BUILD & CRAFT',
      subtitle: 'Iterative Implementation',
      description:
        'Writing clean, maintainable code in Python, C, and modern web frameworks while experimenting with AI video pipelines and digital audio synthesis.',
    },
    {
      number: '04',
      title: 'DELIVER',
      subtitle: 'Verification & Deployment',
      description:
        'Testing performance, verifying mobile packaging, and releasing practical software tools that students and developers can actually run.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 border-t border-[#D98A84]/20 relative bg-[#120D11]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D98A84] mb-2">
              <span>METHODOLOGY</span>
              <span aria-hidden="true">/</span>
              <span>THE PROCESS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F8EFEB]">
              Engineering & Creative Process
            </h2>
          </div>
          <p className="text-xs font-mono text-[#D5C7C1]/70">
            Disciplined execution from concept to working prototype
          </p>
        </div>

        {/* 2-Column Split: Steps list on left, moodboard collage card on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Numbered Process Steps */}
          <div className="lg:col-span-7 space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="p-5 sm:p-6 rounded-2xl bg-[#1B131A] border border-[#D98A84]/20 hover:border-[#D98A84]/50 transition-all group flex items-start gap-5"
              >
                <span className="text-2xl sm:text-3xl font-mono font-bold text-[#D98A84] group-hover:scale-105 transition-transform">
                  {step.number}
                </span>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-mono font-bold text-[#F8EFEB] tracking-wide">
                      {step.title}
                    </h3>
                    <span aria-hidden="true" className="text-[#D98A84]">·</span>
                    <span className="text-xs text-[#E89D97]">{step.subtitle}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#D5C7C1] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Editorial Moodboard / Torn Paper Note */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#231A22] via-[#1B131A] to-[#161015] border border-[#D98A84]/30 shadow-xl relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D98A84]/10 rounded-full blur-2xl pointer-events-none" />

            {/* Top Tape Accent */}
            <div className="w-24 h-4 bg-[#E89D97]/30 border border-[#E89D97]/40 rounded-sm mx-auto -mt-3 mb-6 transform -rotate-1 backdrop-blur-xs" />

            {/* Torn Paper Note Element */}
            <div className="p-6 rounded-xl bg-[#F8EFEB] text-[#120D11] shadow-2xl transform rotate-1 border border-[#DDD0C8] my-auto">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8E3E47] block mb-2 font-bold">
                DIYA'S PHILOSOPHY
              </span>
              <p className="text-2xl sm:text-3xl font-script italic leading-tight text-[#120D11] mb-4">
                "Strategy is the soul.
                <br />
                Code is the voice."
              </p>
              <div className="pt-3 border-t border-[#120D11]/15 flex items-center justify-between text-[11px] font-mono text-[#120D11]/70">
                <span>Far Western University</span>
                <span>Nepal 🇳🇵</span>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="mt-8 pt-4 border-t border-[#D98A84]/20 flex items-center justify-between text-xs font-mono text-[#D5C7C1]">
              <span className="flex items-center gap-1.5 text-[#D98A84]">
                <Terminal className="w-3.5 h-3.5" />
                <span>Python & Android Architecture</span>
              </span>
              <span className="text-[11px]">2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
