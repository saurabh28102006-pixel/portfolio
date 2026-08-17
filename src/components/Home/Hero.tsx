'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Send, Terminal, FileText } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export function Hero() {
  const { isDay } = useTheme();
  const [roleText, setRoleText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentFullRole = portfolioData.personal.rolesList[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setRoleText(currentFullRole.substring(0, roleText.length + 1));
        if (roleText.length + 1 === currentFullRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setRoleText(currentFullRole.substring(0, roleText.length - 1));
        if (roleText.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % portfolioData.personal.rolesList.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [roleText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex flex-col justify-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10"
    >
      <div className="flex flex-col space-y-6 max-w-3xl">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wide w-fit shadow-md transition-all duration-300 ${
            isDay
              ? 'bg-white/80 border border-sky-300/80 text-blue-900 shadow-sky-200/50'
              : 'bg-[#061426]/90 border border-blue-500/30 text-cyan-300 shadow-blue-950/30'
          }`}
        >
          <span className={`w-2 h-2 rounded-full animate-ping ${isDay ? 'bg-blue-600' : 'bg-cyan-400'}`} />
          <span className={`font-semibold ${isDay ? 'text-slate-800' : 'text-slate-200'}`}>AVAILABLE:</span>
          <span className="font-bold">{portfolioData.personal.status}</span>
        </motion.div>

        {/* Main Hero Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-1"
        >
          <span className={`text-lg sm:text-2xl font-light font-sans transition-colors ${isDay ? 'text-slate-800' : 'text-slate-300'}`}>
            Hi, I&apos;m
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] break-words">
            <span
              className={`animate-text-shimmer ${
                isDay
                  ? 'bg-gradient-to-r from-blue-900 via-sky-600 to-indigo-800 bg-clip-text text-transparent drop-shadow-sm'
                  : 'bg-gradient-to-r from-blue-400 via-cyan-300 via-sky-200 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(6,182,212,0.45)]'
              }`}
            >
              {portfolioData.personal.name}
            </span>
          </h1>
        </motion.div>

        {/* Dynamic Typewriter Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`flex items-center gap-2 font-mono text-xl sm:text-2xl lg:text-3xl font-bold min-h-[36px] sm:min-h-[40px] ${
            isDay ? 'text-blue-900' : 'text-cyan-400'
          }`}
        >
          <Terminal className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 ${isDay ? 'text-blue-700' : 'text-cyan-400'}`} />
          <span className="truncate">{roleText}</span>
          <span className={`w-2 sm:w-2.5 h-5 sm:h-6 inline-block shrink-0 animate-pulse ${isDay ? 'bg-blue-700' : 'bg-cyan-400'}`} />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className={`text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl transition-colors ${
            isDay ? 'text-slate-800 font-normal' : 'text-slate-300'
          }`}
        >
          {portfolioData.personal.bio}
        </motion.p>

        {/* Hero Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
        >
          <a
            href="mailto:saurabh2732006@gmail.com"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Get In Touch</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider transition-all shadow-md hover:scale-[1.02] active:scale-95 cursor-pointer ${
              isDay
                ? 'bg-white/80 hover:bg-white text-slate-800 border border-sky-300 hover:border-blue-500 shadow-sky-100'
                : 'bg-[#061426] hover:bg-[#0A1B32] text-slate-200 hover:text-white border border-blue-500/30 hover:border-cyan-400'
            }`}
          >
            <FileText className={`w-4 h-4 ${isDay ? 'text-blue-600' : 'text-cyan-400'}`} />
            <span>View Resume</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}



