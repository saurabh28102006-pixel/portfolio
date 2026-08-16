'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 max-w-2xl"
    >
      {portfolioData.personal.stats.map((stat, idx) => (
        <div
          key={idx}
          className="p-4 rounded-2xl bg-[#061426]/80 backdrop-blur-md border border-blue-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
        >
          <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors drop-shadow-sm flex items-center gap-1">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {stat.value}
            </span>
          </div>
          <div className="text-xs font-semibold text-slate-300 tracking-wide mt-1">
            {stat.label}
          </div>
          <div className="text-[11px] text-slate-500 font-light mt-0.5">
            {stat.description}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
