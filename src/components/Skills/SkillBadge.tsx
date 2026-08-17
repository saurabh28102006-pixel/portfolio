'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

interface SkillBadgeProps {
  name: string;
  color?: string;
}

export function SkillBadge({ name, color = '#38bdf8' }: SkillBadgeProps) {
  const { isDay } = useTheme();

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all duration-200 hover:scale-[1.04] select-none cursor-default group/badge ${
        isDay
          ? 'bg-sky-50/90 text-slate-800 border-sky-200/90 hover:border-blue-400 hover:bg-white hover:shadow-[0_0_12px_rgba(56,189,248,0.35)]'
          : 'bg-[#020617]/90 text-slate-200 border-blue-500/25 hover:border-cyan-400 hover:text-white hover:bg-[#030B18] hover:shadow-[0_0_12px_rgba(34,211,238,0.3)]'
      }`}
    >
      <span
        className="w-1.5 h-1.5 rounded-full transition-transform group-hover/badge:scale-125"
        style={{ backgroundColor: color }}
      />
      <span>{name}</span>
    </span>
  );
}

