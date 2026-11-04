import React, { useState } from 'react';
import {
  Terminal,
  Play,
  RotateCcw,
  Sparkles,
  Info,
  CheckCircle,
  X,
  Code2,
  Cpu,
  Layers,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const StudyBuddyShowcase: React.FC = () => {
  const { featuredProject } = PORTFOLIO_DATA;
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'tracker' | 'terminal' | 'packages'>('tracker');
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    '>>> Initializing Study Buddy Android Python Runtime v0.2...',
    '>>> Loading student profile: Diya Karki (Far Western University)',
    '>>> Current Module: "Computer Engineering & Python OOP Systems"',
    '>>> Status: Focus session ready. Click "Run Command" to simulate.',
  ]);
  const [isExecuting, setIsExecuting] = useState(false);

  // Simulated Python code execution
  const runSimulator = (mode: 'tracker' | 'terminal' | 'packages') => {
    setIsExecuting(true);
    if (mode === 'tracker') {
      setConsoleLogs((prev) => [
        ...prev,
        '>>> python run_session.py --subject "Data Structures & OOP" --duration 45m',
        '⏳ Starting Pomodoro focus timer: [45:00]',
        '📊 Logging study session to local SQLite db...',
        '✅ Session verified: +45 mins recorded for Computer Engineering.',
        '🎯 Daily Goal Progress: 180m / 240m (75% completed)',
      ]);
    } else if (mode === 'packages') {
      setConsoleLogs((prev) => [
        ...prev,
        '>>> pip install numpy matplotlib --target=/android/storage/pkgs',
        '📦 Resolving dependencies for ARM64 Android environment...',
        '📥 Downloading pre-compiled wheels for Android runtime...',
        '⚡ Installing package: numpy (1.26.4)',
        '⚡ Installing package: matplotlib (3.8.2)',
        '✅ Successfully installed 2 packages in isolated environment.',
      ]);
    } else {
      setConsoleLogs((prev) => [
        ...prev,
        '>>> python -c "from study_buddy import Analytics; Analytics.generate_weekly_report()"',
        '📈 Weekly Productivity Score: High Consistency (Streak: 6 days)',
        '💡 Recommendation: Revise Discrete Math logic proofs before tomorrow.',
      ]);
    }
    setTimeout(() => {
      setIsExecuting(false);
    }, 450);
  };

  const clearLogs = () => {
    setConsoleLogs(['>>> Terminal cleared. Ready for next command.']);
  };

  return (
    <section id="study-buddy" className="py-20 px-4 sm:px-6 relative border-t border-[#D98A84]/20 bg-[#120D11]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D98A84] mb-2">
            <span>03</span>
            <span aria-hidden="true">/</span>
            <span>FEATURED ENGINEERING PROJECT</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8EFEB]">
              {featuredProject.title}
            </h2>
            <div className="text-xs font-mono text-[#D5C7C1]">
              <span>Flagship Architecture</span>
              <span aria-hidden="true" className="mx-1.5">·</span>
              <span className="text-[#D98A84] font-medium">In Active Research & Prototyping</span>
            </div>
          </div>
        </div>

        {/* Project Hero Bento Box */}
        <div className="rounded-3xl bg-gradient-to-b from-[#1B131A] via-[#161015] to-[#120D11] text-[#F8EFEB] border border-[#D98A84]/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Background Gradient */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 bg-[#D98A84]/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Project Overview & Specs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Technologies unboxed list */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#D5C7C1]">
                <span className="text-[#D98A84] font-semibold">Tech Focus:</span>
                {featuredProject.techStack.map((tech, idx) => (
                  <React.Fragment key={tech}>
                    {idx > 0 && <span aria-hidden="true" className="text-[#D98A84]/40">·</span>}
                    <span className="text-[#F8EFEB] font-mono text-[11px]">{tech}</span>
                  </React.Fragment>
                ))}
              </div>

              {/* Tagline & Goal */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F8EFEB]">
                  {featuredProject.tagline}
                </h3>
                <div className="p-4 rounded-xl bg-[#231A22] border border-[#D98A84]/30 text-xs sm:text-sm text-[#E89D97] leading-relaxed">
                  <span className="font-semibold text-[#F8EFEB] font-mono text-xs block mb-1">
                    [ARCHITECTURE GOAL]
                  </span>
                  {featuredProject.primaryGoal}
                </div>
              </div>

              {/* Full Description */}
              <p className="text-sm sm:text-base text-[#D5C7C1] leading-relaxed">
                {featuredProject.fullDescription}
              </p>

              {/* Key Features Bullet Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {featuredProject.keyPillars.map((pillar) => (
                  <div key={pillar.title} className="p-3.5 rounded-xl bg-[#1B131A] border border-[#D98A84]/20">
                    <h5 className="text-xs font-semibold font-mono text-[#F8EFEB] mb-1 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#D98A84] shrink-0" />
                      <span>{pillar.title}</span>
                    </h5>
                    <p className="text-[11px] text-[#D5C7C1]/80 leading-relaxed">
                      {pillar.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => setShowDetailsModal(true)}
                  className="px-5 py-2.5 text-xs font-semibold text-[#120D11] bg-gradient-to-r from-[#D98A84] to-[#E89D97] hover:brightness-110 rounded-xl transition-all shadow-md shadow-[#D98A84]/20 inline-flex items-center gap-2 cursor-pointer"
                >
                  <Info className="w-4 h-4" />
                  <span>Learn More</span>
                </button>

                <button
                  onClick={() => runSimulator('tracker')}
                  className="px-5 py-2.5 text-xs font-semibold font-mono text-[#D5C7C1] hover:text-[#F8EFEB] bg-[#231A22] hover:bg-[#2D212A] rounded-xl transition-colors border border-[#D98A84]/30 inline-flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 text-[#D98A84]" />
                  <span>View Project Simulation</span>
                </button>
              </div>
            </div>

            {/* Right Column: Live Android Python IDE Simulator Console */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#0F0A0D] border border-[#D98A84]/30 overflow-hidden shadow-2xl flex flex-col">
                {/* Console Window Topbar */}
                <div className="px-4 py-3 bg-[#1B131A] border-b border-[#D98A84]/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#8E3E47]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#D98A84]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#E89D97]"></div>
                    <span className="text-xs font-mono text-[#D5C7C1] ml-2">study_buddy_ide.py</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={clearLogs}
                      className="p-1 text-[#D5C7C1]/70 hover:text-[#F8EFEB] rounded transition-colors"
                      title="Clear console"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Console Navigation Modes */}
                <div className="px-4 py-2 bg-[#161015] border-b border-[#D98A84]/20 flex items-center gap-2 text-xs">
                  <button
                    onClick={() => {
                      setActiveTab('tracker');
                      runSimulator('tracker');
                    }}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'tracker'
                        ? 'bg-[#D98A84]/20 text-[#E89D97] border border-[#D98A84]/40 font-medium'
                        : 'text-[#D5C7C1]/70 hover:text-[#F8EFEB]'
                    }`}
                  >
                    1. Study Session
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('packages');
                      runSimulator('packages');
                    }}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'packages'
                        ? 'bg-[#D98A84]/20 text-[#E89D97] border border-[#D98A84]/40 font-medium'
                        : 'text-[#D5C7C1]/70 hover:text-[#F8EFEB]'
                    }`}
                  >
                    2. Pip Installer
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('terminal');
                      runSimulator('terminal');
                    }}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'terminal'
                        ? 'bg-[#D98A84]/20 text-[#E89D97] border border-[#D98A84]/40 font-medium'
                        : 'text-[#D5C7C1]/70 hover:text-[#F8EFEB]'
                    }`}
                  >
                    3. Analytics
                  </button>
                </div>

                {/* Terminal Stream Body */}
                <div className="p-4 font-mono text-xs text-[#D5C7C1] bg-[#0F0A0D] h-64 overflow-y-auto space-y-1.5">
                  {consoleLogs.map((log, index) => (
                    <div
                      key={index}
                      className={`leading-relaxed ${
                        log.startsWith('>>>')
                          ? 'text-[#D98A84] font-semibold'
                          : log.startsWith('✅')
                          ? 'text-[#E89D97]'
                          : log.startsWith('📊') || log.startsWith('🎯')
                          ? 'text-[#F8EFEB]'
                          : 'text-[#D5C7C1]/90'
                      }`}
                    >
                      {log}
                    </div>
                  ))}
                  {isExecuting && (
                    <div className="text-xs text-[#E89D97] animate-pulse font-mono">
                      ... executing command in virtual Android environment ...
                    </div>
                  )}
                </div>

                {/* Terminal Footer Action */}
                <div className="px-4 py-3 bg-[#1B131A] border-t border-[#D98A84]/20 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-[#D5C7C1]/70">Android ARM64 Runtime</span>
                  <button
                    onClick={() => runSimulator(activeTab)}
                    disabled={isExecuting}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D98A84] hover:bg-[#E89D97] text-[#120D11] rounded text-[11px] font-mono font-bold transition-colors cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-[#120D11]" />
                    <span>Run Command</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learn More / Architectural Details Modal */}
      {showDetailsModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#120D11]/85 backdrop-blur-md"
          onClick={() => setShowDetailsModal(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl bg-[#1B131A] border border-[#D98A84]/30 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#D98A84]/20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#231A22] border border-[#D98A84]/30 text-[#D98A84] flex items-center justify-center">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-serif text-[#F8EFEB]">
                    Study Buddy — Technical Architecture
                  </h3>
                  <span className="text-xs font-mono text-[#D98A84]">
                    Designed & conceptualized by Diya Karki
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="p-1 text-[#D5C7C1] hover:text-[#F8EFEB] rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#D5C7C1]">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#D98A84] mb-2">
                  System Concept & Inspiration
                </h4>
                <p className="leading-relaxed">
                  Many computer science students in developing regions or on the move rely on smartphones or tablets for studying. However, traditional Android coding tools are either limited toy editors or lack a package installation system for real libraries. Study Buddy aims to combine a distraction-free student habit planner with an actual local Python interpreter.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#D98A84] mb-2">
                  Key Planned Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-[#231A22] border border-[#D98A84]/20">
                    <span className="font-semibold font-mono text-[#F8EFEB] block">1. Task & Session Engine</span>
                    <span className="text-[#D5C7C1]/80">OOP classes managing assignments, Pomodoro states, and due-date sorting.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#231A22] border border-[#D98A84]/20">
                    <span className="font-semibold font-mono text-[#F8EFEB] block">2. Android Runtime Bridge</span>
                    <span className="text-[#D5C7C1]/80">Embedding Python binaries (e.g., Chaquopy or Termux subprocess architecture) within Android.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#231A22] border border-[#D98A84]/20">
                    <span className="font-semibold font-mono text-[#F8EFEB] block">3. Isolated Pip Manager</span>
                    <span className="text-[#D5C7C1]/80">Allowing students to install mathematical and computational libraries offline.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#231A22] border border-[#D98A84]/20">
                    <span className="font-semibold font-mono text-[#F8EFEB] block">4. Study Analytics</span>
                    <span className="text-[#D5C7C1]/80">Weekly progress plots, learning curves, and study habit consistency metrics.</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#231A22] border border-[#D98A84]/25 text-xs">
                <span className="font-semibold font-mono text-[#F8EFEB] block mb-1">
                  How to inspect or contribute:
                </span>
                <p className="text-[#D5C7C1]/80">
                  This project is currently in the active prototype and research stage at Far Western University. For questions, collaboration, or code review, connect with Diya directly via the contact form below.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-[#D98A84]/20 bg-[#161015] flex justify-end">
              <button
                onClick={() => setShowDetailsModal(false)}
                className="px-4 py-2 text-xs font-semibold text-[#120D11] bg-[#D98A84] rounded-lg hover:bg-[#E89D97] transition-colors"
              >
                Close Overview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
