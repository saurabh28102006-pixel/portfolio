'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory as SkillCategoryType } from '@/data/portfolio';
import { SkillBadge } from './SkillBadge';
import { Code2, Globe, Sparkles, Database, ShieldAlert, Terminal, Layers } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface SkillCategoryProps {
  category: SkillCategoryType;
  index: number;
}

export function SkillCategory({ category, index }: SkillCategoryProps) {
  const { isDay } = useTheme();

  const getIcon = (iconName: string, color: string) => {
    const props = { className: 'w-5 h-5 transition-transform duration-300 group-hover:scale-110' };
    switch (iconName) {
      case 'Code2':
        return <Code2 {...props} style={{ color }} />;
      case 'Globe':
        return <Globe {...props} style={{ color }} />;
      case 'Sparkles':
        return <Sparkles {...props} style={{ color }} />;
      case 'Database':
        return <Database {...props} style={{ color }} />;
      case 'ShieldAlert':
        return <ShieldAlert {...props} style={{ color }} />;
      case 'Terminal':
        return <Terminal {...props} style={{ color }} />;
      default:
        return <Layers {...props} style={{ color }} />;
    }
  };

  const themeColor = category.color || (isDay ? '#0284c7' : '#38bdf8');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`relative p-6 sm:p-7 rounded-3xl transition-all duration-300 shadow-xl hover:-translate-y-1.5 group flex flex-col justify-between overflow-hidden card-hover-sheen ${
        isDay
          ? 'bg-white/80 hover:bg-white/95 border border-sky-200/80 shadow-sky-900/5 hover:shadow-sky-400/20'
          : 'bg-[#061426]/90 hover:bg-[#0A1B32] border border-blue-500/20 hover:border-cyan-400/60 shadow-blue-950/25 hover:shadow-cyan-500/15'
      }`}
    >
      {/* Top Ambient Glow Gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity"
        style={{
          background: `linear-gradient(90deg, transparent, ${themeColor}, transparent)`
        }}
      />

      <div className="space-y-4 relative z-10">
        {/* Header with Icon, Category Title & Count */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div
              className="p-3 rounded-2xl border transition-all duration-300 shadow-inner group-hover:scale-105"
              style={{
                backgroundColor: isDay ? 'rgba(240, 249, 255, 0.9)' : 'rgba(2, 6, 23, 0.8)',
                borderColor: `${themeColor}40`,
                boxShadow: `0 0 15px ${themeColor}15`
              }}
            >
              {getIcon(category.icon, themeColor)}
            </div>
            <div>
              <h3 className={`text-lg sm:text-xl font-bold transition-colors ${isDay ? 'text-slate-900 group-hover:text-blue-600' : 'text-white group-hover:text-cyan-300'}`}>
                {category.title}
              </h3>
              <p className={`text-[11px] font-mono transition-colors ${isDay ? 'text-slate-600' : 'text-slate-400'}`}>
                {category.subtitle}
              </p>
            </div>
          </div>

          <span
            className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border"
            style={{
              color: themeColor,
              borderColor: `${themeColor}40`,
              backgroundColor: isDay ? 'rgba(224, 242, 254, 0.6)' : `${themeColor}10`
            }}
          >
            {category.skills.length} Skills
          </span>
        </div>

        {/* Description */}
        <p className={`text-xs sm:text-[13px] font-light leading-relaxed transition-colors ${isDay ? 'text-slate-700 font-normal' : 'text-slate-300'}`}>
          {category.description}
        </p>

        {/* Skill Badges Matrix */}
        <div className="flex flex-wrap gap-2 pt-2">
          {category.skills.map((skill) => (
            <SkillBadge key={skill} name={skill} color={themeColor} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

