import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory as SkillCategoryType } from '@/data/portfolio';
import { SkillBadge } from './SkillBadge';
import { Code2, Globe, Sparkles, Database, ShieldAlert, Terminal, Layers } from 'lucide-react';

interface SkillCategoryProps {
  category: SkillCategoryType;
  index: number;
}

export function SkillCategory({ category, index }: SkillCategoryProps) {
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

  const themeColor = category.color || '#38bdf8';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative p-6 sm:p-7 rounded-3xl bg-[#061426]/90 hover:bg-[#0A1B32] border border-blue-500/20 hover:border-cyan-400/60 transition-all duration-300 shadow-xl shadow-blue-950/25 hover:shadow-cyan-500/15 hover:-translate-y-1.5 group flex flex-col justify-between overflow-hidden"
    >
      {/* Top Ambient Glow Gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity"
        style={{
          background: `linear-gradient(90deg, transparent, ${themeColor}, transparent)`
        }}
      />

      {/* Japanese Kanji Background Watermark */}
      {category.kanji && (
        <span className="absolute -bottom-4 -right-2 text-7xl font-extrabold text-white/[0.03] group-hover:text-white/[0.07] font-mono pointer-events-none select-none transition-colors duration-300">
          {category.kanji}
        </span>
      )}

      <div className="space-y-4 relative z-10">
        {/* Header with Icon, Category Title & Count */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div
              className="p-3 rounded-2xl border transition-all duration-300 shadow-inner group-hover:scale-105"
              style={{
                backgroundColor: 'rgba(2, 6, 23, 0.8)',
                borderColor: `${themeColor}40`,
                boxShadow: `0 0 15px ${themeColor}15`
              }}
            >
              {getIcon(category.icon, themeColor)}
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {category.title}
              </h3>
              <p className="text-[11px] font-mono text-slate-400">
                {category.subtitle}
              </p>
            </div>
          </div>

          <span
            className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border"
            style={{
              color: themeColor,
              borderColor: `${themeColor}40`,
              backgroundColor: `${themeColor}10`
            }}
          >
            {category.skills.length} Skills
          </span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-[13px] text-slate-300 font-light leading-relaxed">
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
