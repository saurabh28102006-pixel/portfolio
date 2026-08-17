'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface NavbarProps {
  onOpen3D: () => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' }
];

export function Navbar({ onOpen3D }: NavbarProps) {
  const { isDay, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy detection
      const scrollPosition = window.scrollY + 220;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-40 flex justify-center px-3 sm:px-6 pointer-events-none">
      {/* Floating Glass Navbar Capsule */}
      <div
        className={`w-full max-w-6xl mx-auto rounded-2xl sm:rounded-full transition-all duration-500 pointer-events-auto backdrop-blur-2xl flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-2.5 ${
          isDay
            ? isScrolled
              ? 'bg-white/85 border border-sky-300/60 shadow-[0_12px_40px_rgba(14,116,144,0.15),0_0_20px_rgba(56,189,248,0.2)]'
              : 'bg-white/70 border border-white/80 shadow-[0_8px_32px_rgba(14,116,144,0.1)]'
            : isScrolled
              ? 'bg-[#030917]/85 border border-cyan-500/30 shadow-[0_12px_40px_rgba(0,0,0,0.7),0_0_25px_rgba(6,182,212,0.15)]'
              : 'bg-[#030917]/70 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
        }`}
      >
        {/* LEFT: Sleek Monogram Brand Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none cursor-pointer select-none"
          aria-label="Scroll to top"
        >
          {/* Monogram Squircle Badge */}
          <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-blue-600/30 via-slate-900 to-cyan-500/20 border border-blue-500/40 group-hover:border-cyan-400 shadow-md transition-all duration-300 overflow-hidden">
            <span className="font-mono text-xs sm:text-sm font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              SK
            </span>
            <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          </div>

          {/* Typography */}
          <div className="flex items-center gap-1.5">
            <span
              className={`text-sm sm:text-base font-bold tracking-wide transition-colors font-sans ${
                isDay ? 'text-slate-900 group-hover:text-blue-600' : 'text-white group-hover:text-cyan-300'
              }`}
            >
              Saurabh
            </span>
            <span className="px-1.5 py-0.5 rounded-md bg-cyan-500/15 text-cyan-400 dark:text-cyan-300 border border-cyan-500/30 text-[10px] font-mono font-semibold tracking-wider">
              .dev
            </span>
          </div>
        </button>

        {/* CENTER: Desktop Nav Pills */}
        <nav
          className={`hidden md:flex items-center gap-1 p-1 rounded-full border transition-colors duration-300 ${
            isDay ? 'bg-sky-100/60 border-sky-200/60' : 'bg-black/30 border-white/10'
          }`}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3.5 lg:px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 focus:outline-none cursor-pointer ${
                  isActive
                    ? isDay ? 'text-blue-950 font-bold' : 'text-white font-semibold'
                    : isDay ? 'text-slate-700 hover:text-slate-950 font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className={`absolute inset-0 rounded-full border shadow-sm ${
                      isDay
                        ? 'bg-white text-blue-900 border-sky-300 shadow-[0_2px_10px_rgba(14,116,144,0.15)]'
                        : 'bg-gradient-to-r from-blue-600/70 via-cyan-500/60 to-blue-500/70 border-cyan-400/60 shadow-[0_0_12px_rgba(6,182,212,0.35)]'
                    }`}
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* RIGHT: Actions (Theme Toggle + 3D Portfolio Button) */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Simple Clean Theme Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={isDay ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-medium transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5 ${
              isDay
                ? 'bg-white/80 hover:bg-white text-slate-800 hover:text-slate-950 border-slate-200/80 shadow-sm'
                : 'bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border-white/15'
            }`}
            title={isDay ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {isDay ? <Sun className="w-3.5 h-3.5 text-amber-500" /> : <Moon className="w-3.5 h-3.5 text-cyan-300" />}
            <span>{isDay ? 'Light' : 'Dark'}</span>
          </button>

          {/* Glowing Neon Electric Blue 3D Portfolio Button */}
          <button
            onClick={onOpen3D}
            aria-label="Launch 3D Portfolio Experience"
            className="group relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide bg-[#020917] text-[#38bdf8] hover:text-[#bae6fd] border border-[#38bdf8] hover:border-[#7dd3fc] transition-all duration-300 shadow-[0_0_14px_rgba(56,189,248,0.5),inset_0_0_8px_rgba(14,165,233,0.2)] hover:shadow-[0_0_24px_rgba(56,189,248,0.85),inset_0_0_12px_rgba(14,165,233,0.35)] hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            {/* 3D Coordinate Nodes Icon */}
            <svg
              className="w-4 h-4 text-[#38bdf8] group-hover:rotate-45 group-hover:scale-110 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
              <circle cx="12" cy="12" r="2.5" fill="#38bdf8" />
              <circle cx="12" cy="3" r="1.5" fill="#38bdf8" />
              <circle cx="21" cy="12" r="1.5" fill="#38bdf8" />
              <circle cx="12" cy="21" r="1.5" fill="#38bdf8" />
              <circle cx="3" cy="12" r="1.5" fill="#38bdf8" />
              <path d="M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6" opacity="0.6" />
            </svg>
            <span>3D Portfolio</span>
          </button>
        </div>

        {/* Mobile Hamburger & Quick Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Change theme"
            className={`px-2.5 py-1.5 rounded-xl border text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1 ${
              isDay
                ? 'bg-white/80 text-slate-800 border-slate-200'
                : 'bg-white/5 border-white/15 text-slate-200'
            }`}
          >
            {isDay ? <Sun className="w-3.5 h-3.5 text-amber-500" /> : <Moon className="w-3.5 h-3.5 text-cyan-300" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl border transition-colors focus:outline-none cursor-pointer ${
              isDay
                ? 'bg-sky-100/90 border-sky-300 text-slate-800 hover:text-black'
                : 'bg-white/5 border-white/15 text-slate-200 hover:text-white'
            }`}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-16 left-4 right-4 backdrop-blur-2xl border rounded-2xl p-4 shadow-2xl space-y-3 pointer-events-auto md:hidden ${
              isDay
                ? 'bg-white/95 border-sky-200 text-slate-900 shadow-sky-900/10'
                : 'bg-[#030917]/95 border-cyan-500/30 text-white shadow-black/80'
            }`}
          >
            <div className="flex flex-col space-y-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-mono font-medium transition-colors flex items-center justify-between cursor-pointer ${
                      isActive
                        ? isDay
                          ? 'bg-sky-100 text-blue-700 font-bold border border-sky-300'
                          : 'bg-blue-600/25 text-cyan-300 border border-cyan-500/40'
                        : isDay
                          ? 'text-slate-700 hover:text-slate-950 hover:bg-sky-50'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDay ? 'bg-blue-600' : 'bg-cyan-400'}`} />
                    )}
                  </button>
                );
              })}
            </div>

            <div className={`pt-2 border-t flex flex-col gap-2 ${isDay ? 'border-sky-100' : 'border-white/10'}`}>
              <button
                onClick={() => {
                  toggleTheme();
                  setMobileMenuOpen(false);
                }}
                className={`w-full py-2.5 px-3 rounded-xl text-xs font-mono font-semibold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                  isDay
                    ? 'bg-slate-100 border-slate-200 text-slate-800'
                    : 'bg-white/5 border-white/10 text-slate-200'
                }`}
              >
                {isDay ? <Sun className="w-3.5 h-3.5 text-amber-500" /> : <Moon className="w-3.5 h-3.5 text-cyan-300" />}
                <span>Theme: {isDay ? 'Light Mode' : 'Dark Mode'}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpen3D();
                }}
                className="w-full py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide bg-[#020917] text-[#38bdf8] hover:text-[#bae6fd] border border-[#38bdf8] flex items-center justify-center gap-2 shadow-[0_0_14px_rgba(56,189,248,0.5),inset_0_0_8px_rgba(14,165,233,0.2)] active:scale-95 cursor-pointer"
              >
                <svg
                  className="w-4 h-4 text-[#38bdf8]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
                  <circle cx="12" cy="12" r="2.5" fill="#38bdf8" />
                  <circle cx="12" cy="3" r="1.5" fill="#38bdf8" />
                  <circle cx="21" cy="12" r="1.5" fill="#38bdf8" />
                  <circle cx="12" cy="21" r="1.5" fill="#38bdf8" />
                  <circle cx="3" cy="12" r="1.5" fill="#38bdf8" />
                </svg>
                <span>3D Portfolio</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

