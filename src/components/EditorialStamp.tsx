import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface EditorialStampProps {
  text?: string;
  className?: string;
  size?: number;
  icon?: 'arrow' | 'star';
}

export const EditorialStamp: React.FC<EditorialStampProps> = ({
  text = "• LET'S WORK TOGETHER • DIYA KARKI • COMPUTER ENGINEERING •",
  className = '',
  size = 110,
  icon = 'arrow',
}) => {
  const radius = size * 0.38;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none group cursor-pointer ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Outer Rotating SVG Ring with Circular Text */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full animate-spin-slow group-hover:[animation-duration:8s] transition-all"
      >
        <defs>
          <path
            id="stampPath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="rgba(217, 138, 132, 0.35)"
          strokeWidth="1"
          strokeDasharray="2, 2"
        />
        <text
          fontSize="9"
          fontWeight="600"
          letterSpacing="1.8"
          fill="#E89D97"
          className="uppercase font-mono"
        >
          <textPath href="#stampPath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Center Icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-8 h-8 rounded-full bg-[#231A22] border border-[#D98A84]/40 flex items-center justify-center text-[#E89D97] group-hover:scale-110 group-hover:bg-[#D98A84] group-hover:text-[#120D11] transition-all duration-300">
          {icon === 'arrow' ? (
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          ) : (
            <Sparkles className="w-4 h-4 animate-pulse" />
          )}
        </div>
      </div>
    </div>
  );
};
