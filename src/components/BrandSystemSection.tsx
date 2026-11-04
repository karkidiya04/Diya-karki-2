import React, { useState } from 'react';
import { Palette, Type, Code, Compass, Eye, Check } from 'lucide-react';

export const BrandSystemSection: React.FC = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const colors = [
    { name: 'Obsidian Espresso', hex: '#120D11', textDark: false },
    { name: 'Burgundy Wine', hex: '#8E3E47', textDark: false },
    { name: 'Terracotta Clay', hex: '#D98A84', textDark: true },
    { name: 'Dusty Rose', hex: '#E89D97', textDark: true },
    { name: 'Cream Cotton', hex: '#F8EFEB', textDark: true },
  ];

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1400);
  };

  return (
    <section className="py-16 px-4 sm:px-6 border-t border-[#D98A84]/20 relative bg-[#161015]/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D98A84] mb-1">
              <span>SYSTEM DESIGN</span>
              <span aria-hidden="true">/</span>
              <span>VISUAL IDENTITY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F8EFEB]">
              Design & Architecture Systems
            </h3>
          </div>
          <span className="text-xs font-mono text-[#D5C7C1]/70 hidden sm:inline">
            SPECIMEN v2.0 · 2026
          </span>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Box 1: Color Palette Swatches */}
          <div className="md:col-span-5 p-6 rounded-2xl bg-[#1B131A] border border-[#D98A84]/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#D98A84] uppercase tracking-wider">
                  COLOR PALETTE
                </span>
                <span className="text-[11px] font-mono text-[#D5C7C1]/60">Click to copy HEX</span>
              </div>

              {/* Swatch Strip */}
              <div className="grid grid-cols-5 h-16 rounded-xl overflow-hidden border border-[#D98A84]/30 mb-4 shadow-md">
                {colors.map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => handleCopy(c.hex)}
                    style={{ backgroundColor: c.hex }}
                    className="h-full relative group transition-transform hover:scale-105 hover:z-10 cursor-pointer"
                    title={`${c.name} (${c.hex})`}
                  >
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      {copiedColor === c.hex ? (
                        <Check className={`w-3.5 h-3.5 ${c.textDark ? 'text-[#120D11]' : 'text-white'}`} />
                      ) : (
                        <span className={`text-[9px] font-mono font-bold ${c.textDark ? 'text-[#120D11]' : 'text-white'}`}>
                          HEX
                        </span>
                      )}
                    </span>
                  </button>
                ))}
              </div>

              {/* Color Labels */}
              <div className="space-y-1.5 text-xs font-mono">
                {colors.map((c) => (
                  <div key={c.hex} className="flex items-center justify-between text-[#D5C7C1]">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.hex }} />
                      <span className="text-[11px]">{c.name}</span>
                    </span>
                    <span className="text-[11px] text-[#D98A84]">{c.hex}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D98A84]/10 text-[11px] text-[#D5C7C1]/70 leading-relaxed">
              Warm editorial earth palette blending tech obsidian with organic rose terracotta.
            </div>
          </div>

          {/* Box 2: Typography Specimen */}
          <div className="md:col-span-4 p-6 rounded-2xl bg-[#1B131A] border border-[#D98A84]/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#D98A84] uppercase tracking-wider">
                  TYPOGRAPHY
                </span>
                <span className="text-[11px] font-mono text-[#D5C7C1]/60">2+1 Font Rule</span>
              </div>

              <div className="space-y-4">
                <div className="pb-3 border-b border-[#D98A84]/10">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-2xl font-serif text-[#F8EFEB] font-bold">Aa</span>
                    <span className="text-xs font-mono text-[#D98A84]">PLAYFAIR DISPLAY</span>
                  </div>
                  <p className="text-xs text-[#D5C7C1]/70">
                    Oversized editorial titles, case study headers, and author branding.
                  </p>
                </div>

                <div className="pb-3 border-b border-[#D98A84]/10">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-xl font-heading text-[#F8EFEB] font-semibold">Aa</span>
                    <span className="text-xs font-mono text-[#E89D97]">OUTFIT / DM SANS</span>
                  </div>
                  <p className="text-xs text-[#D5C7C1]/70">
                    Highly readable body paragraphs, clear navigation, and metadata labels.
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-lg font-mono text-[#D98A84]">{'<01 />'}</span>
                    <span className="text-xs font-mono text-[#D5C7C1]">JETBRAINS MONO</span>
                  </div>
                  <p className="text-xs text-[#D5C7C1]/70">
                    Python code snippets, IDE terminal execution, and technical coordinates.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#D98A84]/10 text-[11px] text-[#D5C7C1]/70">
              Balanced editorial contrast ensuring WCAG AA legibility across dark espresso surfaces.
            </div>
          </div>

          {/* Box 3: Architectural Graphic Patterns & Motifs */}
          <div className="md:col-span-3 p-6 rounded-2xl bg-[#1B131A] border border-[#D98A84]/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#D98A84] uppercase tracking-wider">
                  PATTERNS & MOTIFS
                </span>
              </div>

              <div className="space-y-3">
                {/* Visual arch motif preview inspired by reference */}
                <div className="h-28 rounded-xl bg-[#231A22] border border-[#D98A84]/30 flex items-center justify-center relative overflow-hidden">
                  <div className="w-14 h-20 border-2 border-t-2 border-[#D98A84]/60 rounded-t-full bg-gradient-to-b from-[#D98A84]/10 to-transparent flex items-center justify-center">
                    <div className="w-8 h-12 border border-[#E89D97]/50 rounded-t-full bg-gradient-to-b from-[#E89D97]/15 to-transparent" />
                  </div>
                  <div className="absolute top-2 right-2 text-[9px] font-mono text-[#D98A84]/60">
                    ARCH MOTIF
                  </div>
                </div>

                <p className="text-xs text-[#D5C7C1] leading-relaxed">
                  Clean mathematical arcs, hairline dividers, and unboxed metadata separators (<code className="text-[#D98A84]">·</code>).
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#231A22] border border-[#D98A84]/20 text-[11px] text-[#E89D97] italic font-script text-center">
              "Strategy is the soul. Code is the engine."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
