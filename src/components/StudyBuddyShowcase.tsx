import React, { useState } from 'react';
import {
  Terminal,
  Play,
  RotateCcw,
  Sparkles,
  ExternalLink,
  Info,
  Layers,
  Smartphone,
  Cpu,
  Package,
  CheckCircle,
  X,
  Code2,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const StudyBuddyShowcase: React.FC = () => {
  const { featuredProject } = PORTFOLIO_DATA;
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'tracker' | 'terminal' | 'packages'>('tracker');
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    '>>> Initializing Study Buddy Android Python Runtime v0.2...',
    '>>> Loading student profile: Diya Karki (Semester II)',
    '>>> Current Task: "Computer Systems & Python OOP Assignment"',
    '>>> Status: Focus session ready. Click "Execute Script" to test.',
  ]);
  const [isExecuting, setIsExecuting] = useState(false);

  // Simulated Python code execution
  const runSimulator = (mode: 'tracker' | 'terminal' | 'packages') => {
    setIsExecuting(true);
    if (mode === 'tracker') {
      setConsoleLogs((prev) => [
        ...prev,
        '>>> python run_session.py --subject "Data Structures" --duration 45m',
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
    <section id="study-buddy" className="py-20 px-4 sm:px-6 relative border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-2">
            <span>03</span>
            <span aria-hidden="true">/</span>
            <span>Featured Engineering Project</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
              {featuredProject.title}
            </h2>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              <span>Flagship Project</span>
              <span aria-hidden="true" className="mx-1.5">·</span>
              <span className="text-violet-600 dark:text-violet-400 font-medium">In Active Development</span>
            </div>
          </div>
        </div>

        {/* Project Hero Bento Box */}
        <div className="rounded-3xl bg-linear-to-b from-slate-900 via-slate-950 to-slate-950 text-white border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Background Gradient */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Project Overview & Specs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Technologies unboxed list */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <span className="text-slate-200 font-semibold">Tech Focus:</span>
                {featuredProject.techStack.map((tech, idx) => (
                  <React.Fragment key={tech}>
                    {idx > 0 && <span aria-hidden="true" className="text-slate-600">·</span>}
                    <span className="text-violet-300 font-mono text-[11px]">{tech}</span>
                  </React.Fragment>
                ))}
              </div>

              {/* Tagline & Goal */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  {featuredProject.tagline}
                </h3>
                <div className="p-4 rounded-xl bg-violet-950/40 border border-violet-800/40 text-xs sm:text-sm text-violet-200 leading-relaxed">
                  <span className="font-semibold text-white block mb-1">Architecture Goal:</span>
                  {featuredProject.primaryGoal}
                </div>
              </div>

              {/* Full Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {featuredProject.fullDescription}
              </p>

              {/* Key Features Bullet Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {featuredProject.keyPillars.map((pillar) => (
                  <div key={pillar.title} className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                    <h5 className="text-xs font-semibold text-white mb-1 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                      <span>{pillar.title}</span>
                    </h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {pillar.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => setShowDetailsModal(true)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-xl transition-all shadow-md shadow-violet-600/30 inline-flex items-center gap-2"
                >
                  <Info className="w-4 h-4" />
                  <span>Learn More</span>
                </button>

                <button
                  onClick={() => runSimulator('tracker')}
                  className="px-5 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700 inline-flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 text-emerald-400" />
                  <span>View Project Simulation</span>
                </button>
              </div>
            </div>

            {/* Right Column: Live Android Python IDE Simulator Console */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl flex flex-col">
                {/* Console Window Topbar */}
                <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="text-xs font-mono text-slate-400 ml-2">study_buddy_ide.py</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={clearLogs}
                      className="p-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded transition-colors"
                      title="Clear console"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Console Navigation Modes */}
                <div className="px-4 py-2 bg-slate-900/50 border-b border-slate-800 flex items-center gap-2 text-xs">
                  <button
                    onClick={() => {
                      setActiveTab('tracker');
                      runSimulator('tracker');
                    }}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'tracker'
                        ? 'bg-violet-600/30 text-violet-300 border border-violet-500/50 font-medium'
                        : 'text-slate-400 hover:text-slate-200'
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
                        ? 'bg-violet-600/30 text-violet-300 border border-violet-500/50 font-medium'
                        : 'text-slate-400 hover:text-slate-200'
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
                        ? 'bg-violet-600/30 text-violet-300 border border-violet-500/50 font-medium'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    3. Analytics
                  </button>
                </div>

                {/* Terminal Stream Body */}
                <div className="p-4 font-mono text-xs text-slate-300 bg-slate-950 h-64 overflow-y-auto space-y-1.5">
                  {consoleLogs.map((log, index) => (
                    <div
                      key={index}
                      className={`leading-relaxed ${
                        log.startsWith('>>>')
                          ? 'text-violet-400 font-semibold'
                          : log.startsWith('✅')
                          ? 'text-emerald-400'
                          : log.startsWith('📊') || log.startsWith('🎯')
                          ? 'text-amber-300'
                          : 'text-slate-300'
                      }`}
                    >
                      {log}
                    </div>
                  ))}
                  {isExecuting && (
                    <div className="text-xs text-violet-400 animate-pulse">
                      ... executing command in virtual Android environment ...
                    </div>
                  )}
                </div>

                {/* Terminal Footer Action */}
                <div className="px-4 py-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400">Environment: Android ARM64 Runtime</span>
                  <button
                    onClick={() => runSimulator(activeTab)}
                    disabled={isExecuting}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-[11px] font-mono transition-colors"
                  >
                    <Play className="w-3 h-3 fill-white" />
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md"
          onClick={() => setShowDetailsModal(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400 flex items-center justify-center">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Study Buddy — Technical Architecture
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Designed & conceptualized by Diya Karki
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-2">
                  System Concept & Inspiration
                </h4>
                <p className="leading-relaxed">
                  Many computer science students in developing regions or on the move rely on smartphones or tablets for studying. However, traditional Android coding tools are either limited toy editors or lack a package installation system for real libraries. Study Buddy aims to combine a distraction-free student habit planner with an actual local Python interpreter.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-2">
                  Key Planned Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span className="font-semibold text-slate-900 dark:text-white block">1. Task & Session Engine</span>
                    <span className="text-slate-500 dark:text-slate-400">OOP classes managing assignments, Pomodoro states, and due-date sorting.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span className="font-semibold text-slate-900 dark:text-white block">2. Android Runtime Bridge</span>
                    <span className="text-slate-500 dark:text-slate-400">Embedding Python binaries (e.g., Chaquopy or Termux subprocess architecture) within Android.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span className="font-semibold text-slate-900 dark:text-white block">3. Isolated Pip Manager</span>
                    <span className="text-slate-500 dark:text-slate-400">Allowing students to install mathematical and computational libraries offline.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span className="font-semibold text-slate-900 dark:text-white block">4. Study Analytics</span>
                    <span className="text-slate-500 dark:text-slate-400">Weekly progress plots, learning curves, and study habit consistency metrics.</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 text-xs">
                <span className="font-semibold text-slate-900 dark:text-white block mb-1">
                  How to inspect or contribute:
                </span>
                <p className="text-slate-500 dark:text-slate-400">
                  This project is currently in the active prototype and research stage at Far Western University. For questions, collaboration, or code review, connect with Diya directly via the contact form below.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex justify-end">
              <button
                onClick={() => setShowDetailsModal(false)}
                className="px-4 py-2 text-xs font-semibold text-white bg-violet-600 rounded-lg hover:bg-violet-500 transition-colors"
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
