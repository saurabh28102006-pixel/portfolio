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
          {/* Centered Top Floating Pill - "Return" */}
          <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] flex items-center justify-center pointer-events-auto">
            <button
              onClick={onClose}
              aria-label="Return to 2D Portfolio"
              className="group px-4 py-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white/90 hover:text-white border border-white/25 hover:border-cyan-400/70 text-xs font-light tracking-[0.16em] uppercase flex items-center gap-2 backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-[1.04] cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-white/70 group-hover:text-cyan-300 group-hover:-translate-x-0.5 transition-transform" />
              <span>Return</span>
            </button>
          </div>

          {/* Fullscreen 3D Voyage Portfolio Frame */}
          <iframe
            src="/voyage/index.html"
            title="3D Voyage Interactive Portfolio"
            className="w-full h-full border-0 block"
            allow="autoplay; fullscreen; accelerometer; gyroscope"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
