import React from 'react';

interface SkillBadgeProps {
  name: string;
  color?: string;
}

export function SkillBadge({ name, color = '#38bdf8' }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#020617]/90 text-slate-200 border border-blue-500/25 hover:border-cyan-400 hover:text-white hover:bg-[#030B18] transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_0_12px_rgba(34,211,238,0.3)] select-none cursor-default group/badge">
      <span
        className="w-1.5 h-1.5 rounded-full transition-transform group-hover/badge:scale-125"
        style={{ backgroundColor: color }}
      />
      <span>{name}</span>
    </span>
  );
}
