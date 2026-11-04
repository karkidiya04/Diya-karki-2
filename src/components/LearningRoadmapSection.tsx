import React from 'react';
import { Target, Smartphone, Code2, Sparkles, Globe, Megaphone, Wand2, Compass } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const LearningRoadmapSection: React.FC = () => {
  const { learningRoadmap } = PORTFOLIO_DATA;

  const getTopicIcon = (topic: string) => {
    switch (topic) {
      case 'Android App Development':
        return <Smartphone className="w-5 h-5 text-[#D98A84]" />;
      case 'Python Development':
        return <Code2 className="w-5 h-5 text-[#E89D97]" />;
      case 'AI and Generative AI':
        return <Sparkles className="w-5 h-5 text-[#D98A84]" />;
      case 'Web Development':
        return <Globe className="w-5 h-5 text-[#E89D97]" />;
      case 'Digital Marketing':
        return <Megaphone className="w-5 h-5 text-[#D98A84]" />;
      case 'Creative Technology':
        return <Wand2 className="w-5 h-5 text-[#E89D97]" />;
      default:
        return <Compass className="w-5 h-5 text-[#D5C7C1]" />;
    }
  };

  return (
    <section id="learning" className="py-20 px-4 sm:px-6 relative border-t border-[#D98A84]/20 bg-[#161015]/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D98A84] mb-2">
            <span>06</span>
            <span aria-hidden="true">/</span>
            <span>CONTINUOUS CURIOSITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8EFEB]">
            What I'm Learning
          </h2>
          <p className="text-sm text-[#D5C7C1] mt-2 max-w-xl">
            A transparent view of active study areas, coding experiments, and future technology horizons.
          </p>
        </div>

        {/* 6-Card Grid for Learning Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {learningRoadmap.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#1B131A] border border-[#D98A84]/20 hover:border-[#D98A84]/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon & unboxed status text */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#231A22] border border-[#D98A84]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getTopicIcon(item.topic)}
                  </div>
                  <span className="text-xs font-mono text-[#D98A84]">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-base font-bold font-mono text-[#F8EFEB] mb-2">
                  {item.topic}
                </h3>

                <p className="text-xs sm:text-sm text-[#D5C7C1] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Next Milestone Box */}
              <div className="pt-3.5 border-t border-[#D98A84]/15">
                <div className="flex items-start gap-2 text-xs text-[#D5C7C1]">
                  <Target className="w-3.5 h-3.5 text-[#D98A84] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold font-mono text-[#F8EFEB] block text-[11px]">
                      Immediate Target:
                    </span>
                    <span className="text-[11px] leading-snug text-[#D5C7C1]/80">{item.nextGoal}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
