'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export function SocialSidebar() {
  const socials = [
    {
      name: 'GitHub',
      url: portfolioData.personal.github,
      icon: <GithubIcon className="w-5 h-5" />
    },
    {
      name: 'LinkedIn',
      url: portfolioData.personal.linkedin,
      icon: <LinkedinIcon className="w-5 h-5" />
    },
    {
      name: 'Email',
      url: `mailto:${portfolioData.personal.email}`,
      icon: <Mail className="w-5 h-5" />
    }
  ];

  return (
    <aside aria-label="Social links" className="hidden lg:flex fixed left-6 bottom-0 z-30 flex-col items-center gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-col items-center gap-5"
      >
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            aria-label={s.name}
            className="text-slate-400 hover:text-cyan-300 transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] p-1.5"
          >
            {s.icon}
          </a>
        ))}
      </motion.div>

      {/* Connecting Vertical Line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 90 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="w-[1px] bg-gradient-to-b from-blue-500/40 via-cyan-400/60 to-transparent"
      />
    </aside>
  );
}
