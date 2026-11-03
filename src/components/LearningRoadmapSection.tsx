import React from 'react';
import { Rocket, Target, Smartphone, Code2, Sparkles, Globe, Megaphone, Wand2, Compass } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const LearningRoadmapSection: React.FC = () => {
  const { learningRoadmap } = PORTFOLIO_DATA;

  const getTopicIcon = (topic: string) => {
    switch (topic) {
      case 'Android App Development':
        return <Smartphone className="w-5 h-5 text-emerald-500" />;
      case 'Python Development':
        return <Code2 className="w-5 h-5 text-violet-500" />;
      case 'AI and Generative AI':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Web Development':
        return <Globe className="w-5 h-5 text-blue-500" />;
      case 'Digital Marketing':
        return <Megaphone className="w-5 h-5 text-pink-500" />;
      case 'Creative Technology':
        return <Wand2 className="w-5 h-5 text-purple-500" />;
      default:
        return <Compass className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <section id="learning" className="py-20 px-4 sm:px-6 relative border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-2">
            <span>06</span>
            <span aria-hidden="true">/</span>
            <span>Continuous Curiosity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
            What I'm Learning
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
            A transparent view of active study areas, coding experiments, and future technology horizons.
          </p>
        </div>

        {/* 6-Card Grid for Learning Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {learningRoadmap.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-violet-500/40 dark:hover:border-violet-500/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon & unboxed status text */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getTopicIcon(item.topic)}
                  </div>
                  <span className="text-xs font-medium text-violet-600 dark:text-violet-400">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading mb-2">
                  {item.topic}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Next Milestone Box */}
              <div className="pt-3.5 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <Target className="w-3.5 h-3.5 text-violet-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700 dark:text-slate-200 block text-[11px]">
                      Immediate Target:
                    </span>
                    <span className="text-[11px] leading-snug">{item.nextGoal}</span>
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
