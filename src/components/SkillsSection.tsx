import React, { useState } from 'react';
import { Code, Smartphone, Cpu, Sparkles, Megaphone, Palette, Video, Music2, CheckCircle2, Eye, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Development' | 'AI & Emerging Tech' | 'Creative & Media'>('All');
  const [blueprintView, setBlueprintView] = useState<boolean>(false);

  const getSkillIcon = (id: string) => {
    switch (id) {
      case 'python':
        return <Code className="w-5 h-5 text-[#D98A84]" />;
      case 'android':
        return <Smartphone className="w-5 h-5 text-[#E89D97]" />;
      case 'cs-foundations':
        return <Cpu className="w-5 h-5 text-[#D5C7C1]" />;
      case 'ai-tools':
        return <Sparkles className="w-5 h-5 text-[#D98A84]" />;
      case 'digital-marketing':
        return <Megaphone className="w-5 h-5 text-[#E89D97]" />;
      case 'graphic-design':
        return <Palette className="w-5 h-5 text-[#D98A84]" />;
      case 'video-creation':
        return <Video className="w-5 h-5 text-[#E89D97]" />;
      case 'music-creation':
        return <Music2 className="w-5 h-5 text-[#D5C7C1]" />;
      default:
        return <Code className="w-5 h-5 text-[#D98A84]" />;
    }
  };

  const filteredSkills =
    activeCategory === 'All'
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 relative border-t border-[#D98A84]/20 bg-[#161015]/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D98A84] mb-2">
              <span>02</span>
              <span aria-hidden="true">/</span>
              <span>CAPABILITIES & TOOLKIT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8EFEB]">
              Technical & Creative Skills
            </h2>
            <p className="text-sm text-[#D5C7C1] mt-2 max-w-xl">
              Honest assessment of programming fundamentals, mobile concepts, AI workflows, and digital design media.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Blueprint Wireframe View Toggle */}
            <button
              onClick={() => setBlueprintView(!blueprintView)}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all inline-flex items-center gap-1.5 ${
                blueprintView
                  ? 'bg-[#D98A84] text-[#120D11] border-[#D98A84] font-bold'
                  : 'bg-[#1B131A] text-[#D5C7C1] border-[#D98A84]/30 hover:border-[#D98A84]/60'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{blueprintView ? 'Blueprint View: ON' : 'Blueprint View: OFF'}</span>
            </button>

            {/* Interactive Filter Tabs */}
            <div className="flex items-center gap-1 p-1 bg-[#1B131A] rounded-xl border border-[#D98A84]/20 overflow-x-auto">
              {(['All', 'Development', 'AI & Emerging Tech', 'Creative & Media'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    activeCategory === cat
                      ? 'bg-[#231A22] text-[#E89D97] border border-[#D98A84]/30 font-semibold'
                      : 'text-[#D5C7C1]/70 hover:text-[#F8EFEB]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill: SkillItem) => (
            <div
              key={skill.id}
              className={`p-5 rounded-2xl transition-all duration-300 flex flex-col justify-between group ${
                blueprintView
                  ? 'border border-dashed border-[#D98A84]/50 bg-[#120D11] shadow-none'
                  : 'bg-[#1B131A] border border-[#D98A84]/20 hover:border-[#D98A84]/50 hover:shadow-xl hover:shadow-[#D98A84]/5'
              }`}
            >
              <div>
                {/* Blueprint Measurement Marker */}
                {blueprintView && (
                  <div className="text-[9px] font-mono text-[#D98A84]/70 mb-2 flex justify-between">
                    <span>NODE_{skill.id.toUpperCase()}</span>
                    <span>W: 280 H: 240</span>
                  </div>
                )}

                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#231A22] border border-[#D98A84]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getSkillIcon(skill.id)}
                  </div>
                  {/* Category as clean unboxed text */}
                  <span className="text-[11px] font-mono text-[#D98A84]/70">
                    {skill.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#F8EFEB] font-mono">
                  {skill.name}
                </h3>
                <p className="text-xs text-[#D5C7C1] mt-1 mb-4 leading-relaxed">
                  {skill.levelDescription}
                </p>

                {/* Progress Bar (Grounded realistic percentage) */}
                <div className="space-y-1.5 mb-5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#D5C7C1]/70 text-[11px]">Proficiency</span>
                    <span className="font-mono text-xs font-semibold text-[#D98A84] tabular-nums">
                      {skill.progressPercent}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-[#231A22] rounded-full overflow-hidden border border-[#D98A84]/20">
                    <div
                      className="h-full bg-gradient-to-r from-[#8E3E47] via-[#D98A84] to-[#E89D97] rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${skill.progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Highlights List */}
              <div className="pt-3 border-t border-[#D98A84]/15 space-y-1.5">
                {skill.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#D5C7C1]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D98A84] shrink-0" />
                    <span className="truncate">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Realism Notice */}
        <div className="mt-8 p-4 rounded-xl bg-[#1B131A] border border-[#D98A84]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#D5C7C1]">
          <span>
            <strong className="text-[#F8EFEB]">Academic & Project Assessment:</strong> Reflects real undergraduate coursework, active Android/Python research, and self-directed media production.
          </span>
          <span className="font-mono text-[11px] text-[#D98A84]">
            Semester II · 2026
          </span>
        </div>
      </div>
    </section>
  );
};
