import React, { useState } from 'react';
import {
  Video,
  Sparkles,
  Music,
  Share2,
  Cpu,
  Play,
  Pause,
  ExternalLink,
  X,
  Volume2,
  Maximize2,
  Eye,
  Layers,
  Wand2,
} from 'lucide-react';
import { PORTFOLIO_DATA, CreativeItem } from '../data/portfolioData';

export const CreativeWorkSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<CreativeItem | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioFreq, setAudioFreq] = useState<number[]>([40, 65, 30, 85, 95, 60, 45, 75, 55, 90, 70, 35]);

  // Simple Web Audio API ambient chime tone toggle for the Music Creation demo
  const togglePlayAudio = () => {
    if (isPlayingAudio) {
      setIsPlayingAudio(false);
      return;
    }

    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        const audioCtx = new AudioContextClass();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, audioCtx.currentTime); // A4
        osc.frequency.exponentialRampToValueAtTime(554.37, audioCtx.currentTime + 0.3); // C#5
        osc.frequency.exponentialRampToValueAtTime(659.25, audioCtx.currentTime + 0.6); // E5

        gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.2);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + 1.2);
      }
    } catch {
      // Audio context fallback
    }

    setIsPlayingAudio(true);
    // Animate visualizer
    const interval = setInterval(() => {
      setAudioFreq(Array.from({ length: 12 }, () => Math.floor(Math.random() * 70 + 25)));
    }, 180);

    setTimeout(() => {
      clearInterval(interval);
      setIsPlayingAudio(false);
    }, 2800);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Video':
        return <Video className="w-4 h-4 text-purple-400" />;
      case 'Digital Marketing':
        return <Layers className="w-4 h-4 text-pink-400" />;
      case 'Music':
        return <Music className="w-4 h-4 text-blue-400" />;
      case 'Social Media':
        return <Share2 className="w-4 h-4 text-emerald-400" />;
      case 'AI Experiments':
        return <Wand2 className="w-4 h-4 text-amber-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section id="creative" className="py-20 px-4 sm:px-6 relative border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-2">
              <span>04</span>
              <span aria-hidden="true">/</span>
              <span>Creative Practice & Media</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
              Creative Work & Experiments
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
              Exploring AI video synthesis, graphic design, social media visuals, music production, and generative art.
            </p>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            Click any card to inspect media details
          </span>
        </div>

        {/* Dynamic Bento Box for Creative Works */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.creativeWorks.map((work, index) => {
            const isFeatured = index === 0; // AI Video gets wider presence

            return (
              <div
                key={work.id}
                onClick={() => setActiveItem(work)}
                className={`group cursor-pointer rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-violet-500/50 dark:hover:border-violet-500/50 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Visual Thumbnail Presentation */}
                <div className="relative w-full h-52 sm:h-60 bg-linear-to-br from-slate-900 via-slate-950 to-slate-900 overflow-hidden flex items-center justify-center p-6 text-center">
                  {/* Subtle decorative grid/gradient backdrop */}
                  <div
                    className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))]"
                    style={{
                      backgroundImage: `radial-gradient(circle at 50% 50%, ${work.accentColor}25, transparent 75%)`,
                    }}
                  />

                  {/* Mode-Specific Thumbnail Graphic */}
                  {work.category === 'AI Video' && (
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-400/40 text-purple-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Video className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-mono text-purple-200/90 tracking-wide">
                        [ Text-to-Video Motion Pipeline ]
                      </span>
                    </div>
                  )}

                  {work.category === 'Digital Marketing' && (
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-pink-500/20 border border-pink-400/40 text-pink-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Layers className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-mono text-pink-200/90 tracking-wide">
                        [ Brand Strategy & Graphic Assets ]
                      </span>
                    </div>
                  )}

                  {work.category === 'Music' && (
                    <div className="relative z-10 flex flex-col items-center gap-3 w-full max-w-xs">
                      {/* Audio Visualizer Bars */}
                      <div className="flex items-end justify-center gap-1.5 h-12 w-full">
                        {audioFreq.map((val, i) => (
                          <div
                            key={i}
                            className="w-2 bg-blue-400 rounded-t-sm transition-all duration-150"
                            style={{ height: `${val}%` }}
                          />
                        ))}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePlayAudio();
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600/80 hover:bg-blue-500 text-white rounded-full text-xs font-medium backdrop-blur-xs transition-colors"
                      >
                        {isPlayingAudio ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-white" />}
                        <span>{isPlayingAudio ? 'Playing Chime...' : 'Test Sound Sample'}</span>
                      </button>
                    </div>
                  )}

                  {work.category === 'Social Media' && (
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Share2 className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-mono text-emerald-200/90 tracking-wide">
                        [ Carousel Layouts & Micro-Content ]
                      </span>
                    </div>
                  )}

                  {work.category === 'AI Experiments' && (
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Wand2 className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-mono text-amber-200/90 tracking-wide">
                        [ Generative Synthesis & Script Tests ]
                      </span>
                    </div>
                  )}

                  {/* Corner inspect icon */}
                  <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/40 text-white/70 hover:text-white backdrop-blur-xs">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata Header */}
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
                      <span className="flex items-center gap-1.5">
                        {getCategoryIcon(work.category)}
                        <span className="text-slate-700 dark:text-slate-300">{work.categoryLabel}</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono text-[11px]">Showcase</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {work.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {work.description}
                    </p>
                  </div>

                  {/* Tools unboxed footer */}
                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="font-medium text-slate-700 dark:text-slate-300">Tools:</span>
                    {work.toolsUsed.map((tool, idx) => (
                      <React.Fragment key={tool}>
                        {idx > 0 && <span aria-hidden="true" className="text-slate-400">/</span>}
                        <span>{tool}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Media Detail Modal / Lightbox */}
        {activeItem && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  {getCategoryIcon(activeItem.category)}
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {activeItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveItem(null)}
                  className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-5">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <span className="font-semibold text-slate-900 dark:text-white block mb-1.5">
                    Concept & Workflow:
                  </span>
                  {activeItem.details}
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Primary Tools & Libraries:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeItem.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-violet-50 dark:bg-violet-950/40 border border-violet-100 dark:border-violet-900/40 text-xs text-violet-800 dark:text-violet-300">
                  <p>
                    <strong>Creator note:</strong> Diya actively produces digital visuals, AI video prompts, and audio rhythms as creative hobbies alongside computer engineering studies. Replaceable with client and public releases.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex justify-end">
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-violet-600 rounded-lg hover:bg-violet-500 transition-colors"
                >
                  Close Viewer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
