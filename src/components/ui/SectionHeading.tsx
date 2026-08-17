'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface SectionHeadingProps {
  prefix?: string;
  highlight: string;
  suffix?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionHeading({
  prefix = '',
  highlight,
  suffix = '',
  subtitle,
  align = 'center'
}: SectionHeadingProps) {
  const { isDay } = useTheme();

  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  }[align];

  return (
    <div className={`flex flex-col ${alignClass} mb-12 sm:mb-16 space-y-3`}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2"
      >
        <span className={`w-2 h-2 rounded-full animate-pulse shadow-sm ${isDay ? 'bg-blue-600 shadow-blue-500' : 'bg-cyan-400 shadow-cyan-400'}`} />
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight transition-colors ${isDay ? 'text-slate-900' : 'text-white'}`}>
          {prefix && <span>{prefix} </span>}
          <span
            className={
              isDay
                ? 'bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.35)]'
            }
          >
            {highlight}
          </span>
          {suffix && <span> {suffix}</span>}
        </h2>
      </motion.div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-sm sm:text-base max-w-xl font-normal leading-relaxed transition-colors ${
            isDay ? 'text-slate-700 font-medium' : 'text-slate-400'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

