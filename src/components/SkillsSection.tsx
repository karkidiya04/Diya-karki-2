import React, { useState } from 'react';
import { Code, Smartphone, Cpu, Sparkles, Megaphone, Palette, Video, Music2, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Development' | 'AI & Emerging Tech' | 'Creative & Media'>('All');

  const getSkillIcon = (id: string) => {
    switch (id) {
      case 'python':
        return <Code className="w-5 h-5 text-violet-500" />;
      case 'android':
        return <Smartphone className="w-5 h-5 text-emerald-500" />;
      case 'cs-foundations':
        return <Cpu className="w-5 h-5 text-blue-500" />;
      case 'ai-tools':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'digital-marketing':
        return <Megaphone className="w-5 h-5 text-rose-500" />;
      case 'graphic-design':
        return <Palette className="w-5 h-5 text-fuchsia-500" />;
      case 'video-creation':
        return <Video className="w-5 h-5 text-purple-500" />;
      case 'music-creation':
        return <Music2 className="w-5 h-5 text-cyan-500" />;
      default:
        return <Code className="w-5 h-5 text-slate-500" />;
    }
  };

  const filteredSkills =
    activeCategory === 'All'
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 relative border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-2">
              <span>02</span>
              <span aria-hidden="true">/</span>
              <span>Capabilities & Toolkit</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
              Technical & Creative Skills
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
              Honest assessment of programming fundamentals, mobile concepts, AI workflows, and digital design media.
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented button controls) */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto">
            {(['All', 'Development', 'AI & Emerging Tech', 'Creative & Media'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill: SkillItem) => (
            <div
              key={skill.id}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800 hover:border-violet-500/50 dark:hover:border-violet-500/50 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getSkillIcon(skill.id)}
                  </div>
                  {/* Category as clean unboxed text */}
                  <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
                    {skill.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-4 leading-relaxed">
                  {skill.levelDescription}
                </p>

                {/* Progress Bar (Grounded realistic percentage) */}
                <div className="space-y-1.5 mb-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400 text-[11px]">Proficiency Level</span>
                    <span className="font-mono text-xs font-semibold text-violet-600 dark:text-violet-400 tabular-nums">
                      {skill.progressPercent}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-violet-600 to-indigo-500 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${skill.progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Highlights List */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
                {skill.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-violet-500/70 shrink-0" />
                    <span className="truncate">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Realism Notice */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <span>
            <strong className="text-slate-700 dark:text-slate-300">Note:</strong> Skill assessments reflect foundational academic coursework, ongoing hobby experiments, and active projects — no inflated master claims.
          </span>
          <span className="font-mono text-[11px] text-violet-600 dark:text-violet-400">
            Updated Semester II, 2026
          </span>
        </div>
      </div>
    </section>
  );
};
