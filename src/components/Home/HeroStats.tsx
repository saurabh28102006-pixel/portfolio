'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { useTheme } from '@/context/ThemeContext';

export function HeroStats() {
  const { isDay } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 pt-6 max-w-3xl"
    >
      {portfolioData.personal.stats.map((stat, idx) => (
        <div
          key={idx}
          className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-md transition-all duration-300 card-hover-sheen group cursor-default ${
            isDay
              ? 'bg-white/70 border border-white/80 hover:border-sky-300 shadow-md shadow-sky-900/5 hover:shadow-lg hover:shadow-sky-400/20 hover:-translate-y-1'
              : 'bg-[#061426]/80 border border-blue-500/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/15 hover:-translate-y-1'
          }`}
        >
          <div className="text-2xl sm:text-3xl font-extrabold transition-colors drop-shadow-sm flex items-center gap-1">
            <span
              className={
                isDay
                  ? 'bg-gradient-to-r from-blue-700 to-sky-600 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent'
              }
            >
              {stat.value}
            </span>
          </div>
          <div className={`text-xs font-semibold tracking-wide mt-1 transition-colors ${isDay ? 'text-slate-800' : 'text-slate-300'}`}>
            {stat.label}
          </div>
          <div className={`text-[11px] font-light mt-0.5 transition-colors ${isDay ? 'text-slate-600' : 'text-slate-500'}`}>
            {stat.description}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

