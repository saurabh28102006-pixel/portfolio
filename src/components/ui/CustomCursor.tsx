'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CustomCursorProps {
  disabled?: boolean;
}

export function CustomCursor({ disabled = false }: CustomCursorProps) {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check touch devices
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (hasTouch || disabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement;
      const clickable = target.closest('button, a, input, textarea, [role="button"], .cursor-pointer');
      setIsPointer(Boolean(clickable));
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [disabled]);

  if (!isVisible || disabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* 1. Precision Glowing Center Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee,0_0_20px_rgba(34,211,238,0.5)]"
        animate={{
          x: mousePos.x - (isPointer ? 3 : 2.5),
          y: mousePos.y - (isPointer ? 3 : 2.5),
          width: isPointer ? 6 : 5,
          height: isPointer ? 6 : 5,
          scale: isClicking ? 0.7 : 1
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 850,
          mass: 0.08
        }}
      />

      {/* 2. Sleek Fluid Cyber Aura Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full"
        animate={{
          x: mousePos.x - (isPointer ? 22 : 14),
          y: mousePos.y - (isPointer ? 22 : 14),
          width: isPointer ? 44 : 28,
          height: isPointer ? 44 : 28,
          scale: isClicking ? 0.85 : 1,
          borderWidth: isPointer ? '1.5px' : '1px',
          borderColor: isPointer ? 'rgba(34, 211, 238, 0.9)' : 'rgba(56, 189, 248, 0.35)',
          backgroundColor: isPointer ? 'rgba(6, 182, 212, 0.14)' : 'rgba(14, 165, 233, 0.03)',
          boxShadow: isPointer
            ? '0 0 25px rgba(34, 211, 238, 0.35), inset 0 0 10px rgba(34, 211, 238, 0.2)'
            : '0 0 10px rgba(56, 189, 248, 0.15)'
        }}
        transition={{
          type: 'spring',
          damping: 26,
          stiffness: 380,
          mass: 0.25
        }}
      />
    </div>
  );
}
