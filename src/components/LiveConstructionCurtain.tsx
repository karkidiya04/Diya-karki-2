import React, { useState, useEffect, useRef } from 'react';
import { FastForward, Volume2, VolumeX, Sparkles, Check, Code, Layers, MousePointer } from 'lucide-react';

interface LiveConstructionCurtainProps {
  onComplete: () => void;
  onSkip: () => void;
  isBuilding: boolean;
}

export const LiveConstructionCurtain: React.FC<LiveConstructionCurtainProps> = ({
  onComplete,
  onSkip,
  isBuilding,
}) => {
  const [phase, setPhase] = useState<number>(1);
  const [typedTitle, setTypedTitle] = useState<string>('');
  const [progressPercent, setProgressPercent] = useState<number>(12);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [isFinishing, setIsFinishing] = useState<boolean>(false);

  // Simulated cursor coordinates
  const [cursor1, setCursor1] = useState({ x: 22, y: 35, action: 'Drafting Grid Guidelines...' });
  const [cursor2, setCursor2] = useState({ x: 74, y: 22, action: 'Calibrating Typography...' });
  const [cursor3, setCursor3] = useState({ x: 50, y: 72, action: 'Wiring Python Runtime...' });

  // Web Audio click helper
  const playClickSound = (freq = 440) => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      }
    } catch {
      // Audio fallback
    }
  };

  useEffect(() => {
    if (!isBuilding) return;

    // Full name to type in phase 2
    const targetTitle = "Hi, I'm Diya karki";

    // Phase 1: Calibrate grid and spawn cursors (0 - 1.6s)
    const t1 = setTimeout(() => {
      setPhase(2);
      setProgressPercent(38);
      setCursor1({ x: 48, y: 32, action: 'Typing Headline...' });
      setCursor2({ x: 80, y: 20, action: 'Aligning Stamp...' });
      setCursor3({ x: 25, y: 65, action: 'Laying Out Cards...' });
      playClickSound(520);
    }, 1400);

    // Phase 2: Live Typing effect
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex <= targetTitle.length) {
        setTypedTitle(targetTitle.slice(0, charIndex));
        charIndex++;
        if (charIndex % 3 === 0) playClickSound(640);
      }
    }, 70);

    // Phase 3: Assemble Study Buddy and Creative bento (3.2s)
    const t2 = setTimeout(() => {
      clearInterval(typeInterval);
      setTypedTitle(targetTitle);
      setPhase(3);
      setProgressPercent(74);
      setCursor1({ x: 30, y: 55, action: 'Mounting Study Buddy IDE...' });
      setCursor2({ x: 70, y: 60, action: 'Attaching Creative Bento...' });
      setCursor3({ x: 85, y: 78, action: 'Connecting Coordinates...' });
      playClickSound(680);
    }, 3200);

    // Phase 4: Finalizing assembly (5.0s)
    const t3 = setTimeout(() => {
      setPhase(4);
      setProgressPercent(100);
      setCursor1({ x: 50, y: 45, action: 'Components Verified ✓' });
      setCursor2({ x: 52, y: 47, action: 'Rendering Portfolio ✓' });
      setCursor3({ x: 48, y: 43, action: 'Ready!' });
      playClickSound(880);
    }, 4900);

    // Completion transition (6.0s)
    const t4 = setTimeout(() => {
      setIsFinishing(true);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 5800);

    return () => {
      clearTimeout(t1);
      clearInterval(typeInterval);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [isBuilding, soundEnabled, onComplete]);

  if (!isBuilding) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#120D11] text-[#F8EFEB] flex flex-col justify-between p-4 sm:p-8 select-none transition-opacity duration-500 overflow-hidden ${
        isFinishing ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Blueprint Grid Lines & Measurement Coordinates */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-60 pointer-events-none" />

      {/* Ambient Radial Spotlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-[#D98A84]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Bar Status & Controls */}
      <div className="relative z-20 flex items-center justify-between gap-4 border-b border-[#D98A84]/20 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#231A22] border border-[#D98A84]/40 flex items-center justify-center text-[#E89D97]">
            <Layers className="w-4 h-4 animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold text-[#D98A84] uppercase tracking-wider">
                LIVE CONSTRUCTION ENGINE
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#D98A84]/20 text-[#E89D97] border border-[#D98A84]/30">
                ACTIVE
              </span>
            </div>
            <p className="text-xs text-[#D5C7C1]/70 font-mono hidden sm:block">
              {phase === 1 && 'Step 1/4: Projecting Architectural Blueprint & Dimensions...'}
              {phase === 2 && 'Step 2/4: Generating Editorial Typographic Specimen...'}
              {phase === 3 && 'Step 3/4: Mounting Python IDE & Creative Media Bento...'}
              {phase === 4 && 'Step 4/4: All Systems Operational. Unlocking Portfolio...'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-lg bg-[#1B131A] border border-[#D98A84]/30 text-[#D5C7C1] hover:text-[#F8EFEB] transition-colors"
            title={soundEnabled ? 'Mute construction clicks' : 'Enable construction sound'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-[#D98A84]" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Skip Button */}
          <button
            onClick={onSkip}
            className="px-4 py-2 text-xs font-semibold text-[#120D11] bg-linear-to-r from-[#D98A84] to-[#E89D97] hover:brightness-110 rounded-lg transition-all shadow-md shadow-[#D98A84]/20 inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>Skip to Portfolio</span>
            <FastForward className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Center Stage: Live Building Preview Wireframe */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full my-6">
        {/* Wireframe Bounding Box */}
        <div className="relative w-full border border-dashed border-[#D98A84]/50 rounded-2xl p-6 sm:p-10 bg-[#1B131A]/70 backdrop-blur-md shadow-2xl overflow-hidden transition-all duration-500">
          {/* Dimensional measurement pins */}
          <div className="absolute top-2 left-3 text-[10px] font-mono text-[#D98A84]/80 flex items-center gap-2">
            <span>[X: 000, Y: 000]</span>
            <span>·</span>
            <span>SCALE: 1.00</span>
          </div>
          <div className="absolute top-2 right-3 text-[10px] font-mono text-[#E89D97]/80">
            FRAME: 1440 × 900
          </div>

          <div className="text-center space-y-4 my-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D98A84] block">
              DIYA KARKI · BACHELOR'S 2ND SEMESTER · COMPUTER ENGINEERING
            </span>

            {/* Live-typed headline */}
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#F8EFEB] tracking-tight min-h-[4.5rem] flex items-center justify-center">
              <span>{typedTitle}</span>
              <span className="inline-block w-1 h-10 sm:h-12 bg-[#D98A84] ml-1.5 animate-pulse" />
            </h1>

            <p className="text-sm sm:text-base text-[#D5C7C1] max-w-xl mx-auto font-sans leading-relaxed">
              {phase >= 2
                ? 'Computer Science Student • Developer • AI & Digital Creator'
                : 'Allocating virtual workspace parameters...'}
            </p>

            {/* Phase 3 Component Spawn Previews */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div
                className={`p-3 rounded-xl border transition-all duration-500 ${
                  phase >= 3
                    ? 'border-[#D98A84]/60 bg-[#231A22]'
                    : 'border-dashed border-[#D98A84]/20 bg-transparent opacity-40'
                }`}
              >
                <div className="text-[10px] font-mono text-[#D98A84] mb-1">MODULE 01</div>
                <div className="text-xs font-semibold text-[#F8EFEB]">Study Buddy IDE</div>
                <div className="text-[10px] text-[#D5C7C1]">Python & Android Runtime</div>
              </div>

              <div
                className={`p-3 rounded-xl border transition-all duration-500 ${
                  phase >= 3
                    ? 'border-[#E89D97]/60 bg-[#231A22]'
                    : 'border-dashed border-[#D98A84]/20 bg-transparent opacity-40'
                }`}
              >
                <div className="text-[10px] font-mono text-[#E89D97] mb-1">MODULE 02</div>
                <div className="text-xs font-semibold text-[#F8EFEB]">Creative Works</div>
                <div className="text-[10px] text-[#D5C7C1]">AI Video, Music & Visuals</div>
              </div>

              <div
                className={`p-3 rounded-xl border transition-all duration-500 ${
                  phase >= 3
                    ? 'border-[#8E3E47]/60 bg-[#231A22]'
                    : 'border-dashed border-[#D98A84]/20 bg-transparent opacity-40'
                }`}
              >
                <div className="text-[10px] font-mono text-[#D98A84] mb-1">MODULE 03</div>
                <div className="text-xs font-semibold text-[#F8EFEB]">Official CV</div>
                <div className="text-[10px] text-[#D5C7C1]">Far Western University</div>
              </div>
            </div>
          </div>

          {/* Construction Blueprint Stamp */}
          <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full border border-dashed border-[#D98A84]/40 opacity-40 animate-spin-slow pointer-events-none" />
        </div>
      </div>

      {/* Simulated Collaborative Cursors */}
      {/* Cursor 1: Diya (Developer) */}
      <div
        className="absolute z-30 pointer-events-none transition-all duration-700 ease-out flex items-start gap-1"
        style={{ left: `${cursor1.x}%`, top: `${cursor1.y}%` }}
      >
        <svg
          className="w-5 h-5 text-[#D98A84] fill-[#D98A84] drop-shadow-md"
          viewBox="0 0 24 24"
        >
          <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
        </svg>
        <div className="px-2 py-0.5 rounded-md bg-[#D98A84] text-[#120D11] text-[10px] font-mono font-bold whitespace-nowrap shadow-lg flex items-center gap-1">
          <span>Diya (Code)</span>
          <span className="text-[9px] opacity-80">· {cursor1.action}</span>
        </div>
      </div>

      {/* Cursor 2: Studio Engine */}
      <div
        className="absolute z-30 pointer-events-none transition-all duration-800 ease-out flex items-start gap-1"
        style={{ left: `${cursor2.x}%`, top: `${cursor2.y}%` }}
      >
        <svg
          className="w-5 h-5 text-[#E89D97] fill-[#E89D97] drop-shadow-md"
          viewBox="0 0 24 24"
        >
          <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
        </svg>
        <div className="px-2 py-0.5 rounded-md bg-[#E89D97] text-[#120D11] text-[10px] font-mono font-bold whitespace-nowrap shadow-lg flex items-center gap-1">
          <span>Studio Engine</span>
          <span className="text-[9px] opacity-80">· {cursor2.action}</span>
        </div>
      </div>

      {/* Cursor 3: Blueprint Bot */}
      <div
        className="absolute z-30 pointer-events-none transition-all duration-900 ease-out flex items-start gap-1"
        style={{ left: `${cursor3.x}%`, top: `${cursor3.y}%` }}
      >
        <svg
          className="w-5 h-5 text-[#D5C7C1] fill-[#D5C7C1] drop-shadow-md"
          viewBox="0 0 24 24"
        >
          <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
        </svg>
        <div className="px-2 py-0.5 rounded-md bg-[#2D212A] border border-[#D98A84]/40 text-[#F8EFEB] text-[10px] font-mono font-bold whitespace-nowrap shadow-lg flex items-center gap-1">
          <span>Blueprint Bot</span>
          <span className="text-[9px] text-[#D98A84]">· {cursor3.action}</span>
        </div>
      </div>

      {/* Bottom Progress Bar & Telemetry */}
      <div className="relative z-20 space-y-2 border-t border-[#D98A84]/20 pt-4">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-[#D98A84]">
            CONSTRUCTION PROGRESS: <strong className="text-[#F8EFEB]">{progressPercent}%</strong>
          </span>
          <span className="text-[#D5C7C1]/70">
            STAGE {phase} OF 4 · INITIALIZING EXPERIENCE
          </span>
        </div>
        <div className="w-full h-1.5 bg-[#1B131A] rounded-full overflow-hidden border border-[#D98A84]/20">
          <div
            className="h-full bg-linear-to-r from-[#8E3E47] via-[#D98A84] to-[#E89D97] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
};
