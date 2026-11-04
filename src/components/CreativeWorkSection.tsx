import React, { useState } from 'react';
import {
  Video,
  Sparkles,
  Music,
  Share2,
  Play,
  Pause,
  X,
  Maximize2,
  Layers,
  Wand2,
} from 'lucide-react';
import { PORTFOLIO_DATA, CreativeItem } from '../data/portfolioData';

export const CreativeWorkSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<CreativeItem | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioFreq, setAudioFreq] = useState<number[]>([40, 65, 30, 85, 95, 60, 45, 75, 55, 90, 70, 35]);

  // Web Audio API ambient chime tone toggle for the Music Creation demo
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
        return <Video className="w-4 h-4 text-[#E89D97]" />;
      case 'Digital Marketing':
        return <Layers className="w-4 h-4 text-[#D98A84]" />;
      case 'Music':
        return <Music className="w-4 h-4 text-[#E89D97]" />;
      case 'Social Media':
        return <Share2 className="w-4 h-4 text-[#D98A84]" />;
      case 'AI Experiments':
        return <Wand2 className="w-4 h-4 text-[#E89D97]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#D98A84]" />;
    }
  };

  return (
    <section id="creative" className="py-20 px-4 sm:px-6 relative border-t border-[#D98A84]/20 bg-[#161015]/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D98A84] mb-2">
              <span>04</span>
              <span aria-hidden="true">/</span>
              <span>CREATIVE PRACTICE & MEDIA</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8EFEB]">
              Creative Works & Experiments
            </h2>
            <p className="text-sm text-[#D5C7C1] mt-2 max-w-xl">
              Exploring AI video synthesis, graphic design, social media visuals, music production, and generative art.
            </p>
          </div>
          <span className="text-xs font-mono text-[#D98A84]">
            [CLICK CARDS TO INSPECT MEDIA SPECS]
          </span>
        </div>

        {/* Dynamic Bento Box for Creative Works (Numbered Editorial Case Studies) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.creativeWorks.map((work, index) => {
            const isFeatured = index === 0; // AI Video gets 2 columns
            const caseNumber = `0${index + 1}`;

            return (
              <div
                key={work.id}
                onClick={() => setActiveItem(work)}
                className={`group cursor-pointer rounded-2xl bg-[#1B131A] border border-[#D98A84]/25 hover:border-[#D98A84]/60 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Visual Thumbnail Presentation */}
                <div className="relative w-full h-52 sm:h-64 bg-gradient-to-br from-[#120D11] via-[#1B131A] to-[#231A22] overflow-hidden flex items-center justify-center p-6 text-center border-b border-[#D98A84]/20">
                  {/* Numbered Editorial Tag */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-xs font-mono text-[#D98A84]">
                    <span className="font-bold text-sm">{caseNumber}</span>
                    <span>/</span>
                    <span className="uppercase text-[10px] tracking-widest">{work.categoryLabel}</span>
                  </div>

                  {/* Mode-Specific Thumbnail Graphic */}
                  {work.category === 'AI Video' && (
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-2xl bg-[#8E3E47]/30 border border-[#D98A84]/40 text-[#E89D97] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Video className="w-8 h-8" />
                      </div>
                      <span className="text-xs font-mono text-[#E89D97] tracking-wider uppercase">
                        [ Text-to-Video Motion Pipeline ]
                      </span>
                    </div>
                  )}

                  {work.category === 'Digital Marketing' && (
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-2xl bg-[#8E3E47]/30 border border-[#D98A84]/40 text-[#E89D97] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Layers className="w-8 h-8" />
                      </div>
                      <span className="text-xs font-mono text-[#E89D97] tracking-wider uppercase">
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
                            className="w-2 bg-[#D98A84] rounded-t-sm transition-all duration-150"
                            style={{ height: `${val}%` }}
                          />
                        ))}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePlayAudio();
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#231A22] hover:bg-[#2D212A] text-[#F8EFEB] border border-[#D98A84]/40 rounded-full text-xs font-mono transition-colors"
                      >
                        {isPlayingAudio ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-[#F8EFEB]" />}
                        <span>{isPlayingAudio ? 'Synthesizing...' : 'Play Audio Sample'}</span>
                      </button>
                    </div>
                  )}

                  {work.category === 'Social Media' && (
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-2xl bg-[#8E3E47]/30 border border-[#D98A84]/40 text-[#E89D97] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Share2 className="w-8 h-8" />
                      </div>
                      <span className="text-xs font-mono text-[#E89D97] tracking-wider uppercase">
                        [ Carousel Layouts & Micro-Content ]
                      </span>
                    </div>
                  )}

                  {work.category === 'AI Experiments' && (
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-2xl bg-[#8E3E47]/30 border border-[#D98A84]/40 text-[#E89D97] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Wand2 className="w-8 h-8" />
                      </div>
                      <span className="text-xs font-mono text-[#E89D97] tracking-wider uppercase">
                        [ Generative Pipelines & Automation ]
                      </span>
                    </div>
                  )}

                  {/* Corner inspect icon */}
                  <div className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#120D11]/60 text-[#D5C7C1] hover:text-[#F8EFEB] border border-[#D98A84]/20 backdrop-blur-xs">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#F8EFEB] group-hover:text-[#D98A84] transition-colors">
                      {work.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#D5C7C1] mt-2 leading-relaxed">
                      {work.description}
                    </p>
                  </div>

                  {/* Tools unboxed footer */}
                  <div className="pt-4 mt-4 border-t border-[#D98A84]/15 flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-[#D5C7C1]/80">
                    <span className="font-semibold text-[#D98A84]">Stack:</span>
                    {work.toolsUsed.map((tool, idx) => (
                      <React.Fragment key={tool}>
                        {idx > 0 && <span aria-hidden="true" className="text-[#D98A84]/30">/</span>}
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#120D11]/85 backdrop-blur-md"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative w-full max-w-2xl rounded-2xl bg-[#1B131A] border border-[#D98A84]/30 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#D98A84]/20">
                <div className="flex items-center gap-2">
                  {getCategoryIcon(activeItem.category)}
                  <h3 className="text-base font-bold font-serif text-[#F8EFEB]">
                    {activeItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveItem(null)}
                  className="p-1 text-[#D5C7C1] hover:text-[#F8EFEB] rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-5">
                <div className="p-4 rounded-xl bg-[#231A22] border border-[#D98A84]/20 text-sm text-[#D5C7C1] leading-relaxed">
                  <span className="font-semibold font-mono text-[#F8EFEB] block mb-1.5">
                    Concept & Workflow:
                  </span>
                  {activeItem.details}
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#D98A84]">
                    Primary Tools & Libraries:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeItem.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 text-xs font-mono bg-[#231A22] text-[#F8EFEB] rounded-md border border-[#D98A84]/30"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#120D11] border border-[#D98A84]/20 text-xs text-[#E89D97]">
                  <p>
                    <strong>Creator note:</strong> Diya actively produces digital visuals, AI video prompts, and audio rhythms as creative hobbies alongside computer engineering studies at Far Western University.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-3 border-t border-[#D98A84]/20 bg-[#161015] flex justify-end">
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-4 py-2 text-xs font-semibold text-[#120D11] bg-[#D98A84] rounded-lg hover:bg-[#E89D97] transition-colors"
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
