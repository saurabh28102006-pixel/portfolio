'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { ParticleBackground } from '@/components/Home/ParticleBackground';
import { SocialSidebar } from '@/components/Home/SocialSidebar';
import { Hero } from '@/components/Home/Hero';
import { Skills } from '@/components/Skills/Skills';
import { Projects } from '@/components/Projects/Projects';
import { Certificates } from '@/components/Certificates/Certificates';
import { Contact } from '@/components/Contact/Contact';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { AudioPlayer } from '@/components/ui/AudioPlayer';
import { ThreeDPortfolioModal } from '@/components/ThreeDPortfolioModal';

export default function Home() {
  const [is3DOpen, setIs3DOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#020617] text-slate-100 selection:bg-cyan-500 selection:text-black overflow-x-hidden font-sans">
      {/* Cyber Blue Canvas Particle Background */}
      <ParticleBackground />

      {/* Desktop Custom Electric Blue / Cyan Cursor */}
      <CustomCursor disabled={is3DOpen} />

      {/* Background Ambient Audio Player with Equalizer */}
      <AudioPlayer is3DOpen={is3DOpen} />

      {/* Fixed Sticky Navbar with 3D Portfolio Button */}
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
