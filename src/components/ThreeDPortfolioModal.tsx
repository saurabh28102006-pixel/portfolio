'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface ThreeDPortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ThreeDPortfolioModal({ isOpen, onClose }: ThreeDPortfolioModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 bg-[#020617] overflow-hidden select-none"
        >
          {/* Responsive Floating Pill - "Return" (positioned cleanly below top bar on mobile, centered at top on desktop) */}
          <div className="fixed top-16 sm:top-4 left-1/2 -translate-x-1/2 z-[9999] flex items-center justify-center pointer-events-auto">
            <button
              onClick={onClose}
              aria-label="Return to 2D Portfolio"
              className="group px-4 py-2 sm:py-1.5 rounded-full bg-[#030917]/90 hover:bg-[#030917] text-cyan-300 hover:text-white border border-cyan-500/40 hover:border-cyan-400 text-xs font-mono font-medium tracking-[0.16em] uppercase flex items-center gap-2 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.7),0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_4px_25px_rgba(6,182,212,0.45)] transition-all duration-300 hover:scale-[1.05] active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-cyan-400 group-hover:text-cyan-300 group-hover:-translate-x-0.5 transition-transform" />
              <span>Return</span>
            </button>
          </div>

          {/* Fullscreen 3D Voyage Portfolio Frame */}
          <iframe
            src="/voyage/index.html?v=7"
            title="3D Voyage Interactive Portfolio"
            className="w-full h-full border-0 block"
            allow="autoplay; fullscreen; accelerometer; gyroscope"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
