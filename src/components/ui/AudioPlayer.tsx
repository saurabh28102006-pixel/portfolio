'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AudioPlayerProps {
  is3DOpen?: boolean;
}

export function AudioPlayer({ is3DOpen = false }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userHasPausedRef = useRef(false);
  const wasPlayingBefore3DRef = useRef(false);

  // Sync state with audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.32;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    // Initial gesture listener for auto-start relaxing space soundtrack
    const handleFirstGesture = () => {
      if (userHasPausedRef.current || is3DOpen) return;
      if (audio.paused) {
        audio.play().catch(() => {});
      }
    };

    window.addEventListener('click', handleFirstGesture, { once: true });
    window.addEventListener('scroll', handleFirstGesture, { once: true });
    window.addEventListener('keydown', handleFirstGesture, { once: true });
    window.addEventListener('touchstart', handleFirstGesture, { once: true });

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('scroll', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
    };
  }, [is3DOpen]);

  // Automatically pause 2D audio when user enters 3D portfolio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (is3DOpen) {
      if (!audio.paused) {
        wasPlayingBefore3DRef.current = true;
        audio.pause();
      }
    } else {
      // Returning to 2D
      if (wasPlayingBefore3DRef.current && !userHasPausedRef.current) {
        audio.play().catch(() => {});
        wasPlayingBefore3DRef.current = false;
      }
    }
  }, [is3DOpen]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      userHasPausedRef.current = false;
      audio.play().catch((err) => console.log('Audio play error:', err));
    } else {
      userHasPausedRef.current = true;
      audio.pause();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/space-ambient.mp3"
        loop
        preload="auto"
      />

      {/* Floating Circular Audio Equalizer Button (Hidden when 3D portfolio is open) */}
      <AnimatePresence>
        {!is3DOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 pointer-events-auto"
          >
            <button
              onClick={handleToggle}
              type="button"
              aria-label={isPlaying ? 'Mute Background Music' : 'Play Background Music'}
              className={`group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all duration-300 backdrop-blur-xl shadow-2xl cursor-pointer select-none hover:scale-110 active:scale-95 ${
                isPlaying
                  ? 'bg-[#0a192f]/75 border-white/50 hover:border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                  : 'bg-[#020617]/70 border-white/20 hover:border-white/50 text-white/50 hover:text-white'
              }`}
            >
              {/* Animated 4 Equalizer Wave Bars */}
              <div className="flex items-end justify-center gap-[3px] h-4.5 w-5">
                <span
                  className={`w-[2.5px] rounded-full transition-all duration-300 ${
                    isPlaying
                      ? 'bg-white shadow-[0_0_8px_#ffffff] animate-music-bar-1'
                      : 'bg-white/40 h-[3px]'
                  }`}
                  style={{ height: isPlaying ? undefined : '3px' }}
                />
                <span
                  className={`w-[2.5px] rounded-full transition-all duration-300 ${
                    isPlaying
                      ? 'bg-white shadow-[0_0_8px_#ffffff] animate-music-bar-2'
                      : 'bg-white/40 h-[6px]'
                  }`}
                  style={{ height: isPlaying ? undefined : '6px' }}
                />
                <span
                  className={`w-[2.5px] rounded-full transition-all duration-300 ${
                    isPlaying
                      ? 'bg-white shadow-[0_0_8px_#ffffff] animate-music-bar-3'
                      : 'bg-white/40 h-[3px]'
                  }`}
                  style={{ height: isPlaying ? undefined : '3px' }}
                />
                <span
                  className={`w-[2.5px] rounded-full transition-all duration-300 ${
                    isPlaying
                      ? 'bg-white shadow-[0_0_8px_#ffffff] animate-music-bar-4'
                      : 'bg-white/40 h-[8px]'
                  }`}
                  style={{ height: isPlaying ? undefined : '8px' }}
                />
              </div>

              {/* Glowing Pulse Ring when playing */}
              {isPlaying && (
                <span className="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping pointer-events-none" />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
