'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface ContactCardProps {
  title: string;
  value: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export function ContactCard({ title, value, description, href, icon }: ContactCardProps) {
  const { isDay } = useTheme();

  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel="noreferrer"
      className={`p-5 rounded-2xl transition-all duration-300 shadow-md hover:translate-x-1.5 group flex items-center justify-between card-hover-sheen ${
        isDay
          ? 'bg-white/80 hover:bg-white/95 border border-sky-200/80 shadow-sky-900/5 hover:shadow-sky-400/20'
          : 'bg-[#061426] hover:bg-[#0A1B32] border border-blue-500/20 hover:border-cyan-400/60 shadow-blue-950/20 hover:shadow-cyan-500/15'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl border group-hover:scale-105 transition-all ${
          isDay ? 'bg-sky-100/80 border-sky-200 text-blue-600' : 'bg-blue-950/60 border-blue-500/30 text-cyan-400 group-hover:text-cyan-300'
        }`}>
          {icon}
        </div>
        <div>
          <h4 className={`text-sm font-bold transition-colors ${
            isDay ? 'text-slate-900 group-hover:text-blue-600' : 'text-white group-hover:text-cyan-300'
          }`}>
            {title}
          </h4>
          <p className={`text-xs font-mono mt-0.5 ${isDay ? 'text-blue-700 font-semibold' : 'text-cyan-400/90'}`}>{value}</p>
          <p className={`text-[11px] font-light mt-0.5 ${isDay ? 'text-slate-600' : 'text-slate-400'}`}>{description}</p>
        </div>
      </div>

      <div className={`p-2 rounded-lg group-hover:translate-x-1 transition-all ${
        isDay ? 'text-slate-400 group-hover:text-blue-600' : 'text-slate-400 group-hover:text-cyan-300'
      }`}>
        <ArrowRight className="w-5 h-5" />
      </div>
    </a>
  );
}

