'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X } from 'lucide-react';

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
      {/* Floating Cyber Glass Navbar Capsule */}
      <div
        className={`w-full max-w-6xl mx-auto rounded-2xl sm:rounded-full transition-all duration-300 pointer-events-auto backdrop-blur-2xl flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-2.5 ${
          isScrolled
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
            <span className="text-sm sm:text-base font-bold tracking-wide text-white group-hover:text-cyan-300 transition-colors font-sans">
              Saurabh
            </span>
            <span className="px-1.5 py-0.5 rounded-md bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono font-semibold tracking-wider">
              .dev
            </span>
          </div>
        </button>

        {/* CENTER: Desktop Nav Pills */}
        <nav className="hidden md:flex items-center gap-1 bg-black/30 p-1 rounded-full border border-white/10">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3.5 lg:px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 focus:outline-none cursor-pointer ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/70 via-cyan-500/60 to-blue-500/70 border border-cyan-400/60 shadow-[0_0_12px_rgba(6,182,212,0.35)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* RIGHT: Holographic 3D Portfolio Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpen3D}
            aria-label="Launch 3D Portfolio Experience"
            className="group relative px-4 py-2 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-600/80 via-cyan-600/80 to-blue-600/80 hover:from-blue-500 hover:to-cyan-400 text-white border border-cyan-400/50 hover:border-cyan-300 transition-all duration-300 shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:scale-105 flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-200 group-hover:rotate-12 group-hover:scale-110 transition-transform" />
            <span>3D World</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/15 text-slate-200 hover:text-white focus:outline-none cursor-pointer"
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
            className="absolute top-16 left-4 right-4 bg-[#030917]/95 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl p-4 shadow-2xl space-y-3 pointer-events-auto md:hidden"
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
                        ? 'bg-blue-600/25 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpen3D();
                }}
                className="w-full py-2.5 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Launch 3D World</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
