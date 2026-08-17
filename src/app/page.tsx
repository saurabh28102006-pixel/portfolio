'use client';

import React, { useState } from 'react';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import { Navbar } from '@/components/Navbar';
import { ParticleBackground } from '@/components/Home/ParticleBackground';
import { SocialSidebar } from '@/components/Home/SocialSidebar';
import { Hero } from '@/components/Home/Hero';
import { Skills } from '@/components/Skills/Skills';
import { Projects } from '@/components/Projects/Projects';
import { Certificates } from '@/components/Certificates/Certificates';
import { Contact } from '@/components/Contact/Contact';
import { AudioPlayer } from '@/components/ui/AudioPlayer';
import { ThreeDPortfolioModal } from '@/components/ThreeDPortfolioModal';

function PortfolioMain() {
  const [is3DOpen, setIs3DOpen] = useState(false);
  const { isDay } = useTheme();

  return (
    <main
      className={`relative min-h-screen selection:bg-cyan-500 selection:text-black overflow-x-hidden font-sans transition-colors duration-700 ${
        isDay ? 'text-slate-900 selection:bg-sky-400 selection:text-white' : 'text-slate-100'
      }`}
    >
      {/* Cyber / Celestial Canvas Particle Background */}
      <ParticleBackground />

      {/* Background Ambient Audio Player with Equalizer */}
      <AudioPlayer is3DOpen={is3DOpen} />

      {/* Fixed Sticky Navbar with Theme Switcher & 3D Portfolio Button */}
      <Navbar onOpen3D={() => setIs3DOpen(true)} />

      {/* Fixed Left Vertical Social Sidebar */}
      <SocialSidebar />

      {/* 5 Primary Sections */}
      <div className="relative z-10 space-y-16 sm:space-y-24">
        {/* 1. HOME & HERO */}
        <Hero />

        {/* 2. SKILLS */}
        <Skills />

        {/* 3. PROJECTS */}
        <Projects />

        {/* 4. CERTIFICATES */}
        <Certificates />

        {/* 5. CONTACT */}
        <Contact />
      </div>

      {/* Fullscreen 3D Voyage Portfolio Modal */}
      <ThreeDPortfolioModal
        isOpen={is3DOpen}
        onClose={() => setIs3DOpen(false)}
      />
    </main>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <PortfolioMain />
    </ThemeProvider>
  );
}

