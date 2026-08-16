'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillCategory } from './SkillCategory';
import { motion, AnimatePresence } from 'framer-motion';

export function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = portfolioData.skills;
  const filteredCategories =
    activeFilter === 'all'
      ? categories
      : categories.filter((c) => c.id === activeFilter);

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <SectionHeading
        highlight="Technical Skills"
        subtitle="Core engineering languages, full-stack frameworks, AI models, and cloud database architecture."
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
            activeFilter === 'all'
              ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 scale-105'
              : 'bg-[#061426] text-slate-400 hover:text-white border border-blue-500/20 hover:border-cyan-400/50'
          }`}
        >
          All Domains ({categories.length})
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
              activeFilter === cat.id
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 scale-105'
                : 'bg-[#061426] text-slate-400 hover:text-white border border-blue-500/20 hover:border-cyan-400/50'
            }`}
          >
            {cat.title.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Bento Grid of Skill Categories */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredCategories.map((category, idx) => (
            <SkillCategory key={category.id} category={category} index={idx} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
