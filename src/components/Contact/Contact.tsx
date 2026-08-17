'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactForm } from './ContactForm';
import { ContactCard } from './ContactCard';
import { Mail, ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { useTheme } from '@/context/ThemeContext';

export function Contact() {
  const { isDay } = useTheme();

  const directChannels = [
    {
      title: 'Email Address',
      value: portfolioData.personal.email,
      description: 'Direct response within 24-48 hours',
      href: `mailto:${portfolioData.personal.email}`,
      icon: <Mail className="w-5 h-5" />
    },
    {
      title: 'LinkedIn Profile',
      value: 'linkedin.com/in/saurabh-kumar-595520421',
      description: 'Professional network & experience',
      href: portfolioData.personal.linkedin,
      icon: <LinkedinIcon className="w-5 h-5" />
    },
    {
      title: 'GitHub Repositories',
      value: 'github.com/saurabh28102006-pixel',
      description: 'Open source tools, scripts & security labs',
      href: portfolioData.personal.github,
      icon: <GithubIcon className="w-5 h-5" />
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <SectionHeading
        highlight="Contact"
        subtitle="Let's build something secure and meaningful together."
      />

      {/* Two-Column Contact Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Left: Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* Right: Direct Reach Out */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <h3 className={`text-lg font-bold transition-colors ${isDay ? 'text-slate-900' : 'text-white'}`}>
              Or reach out directly
            </h3>
            <p className={`text-xs font-light leading-relaxed transition-colors ${isDay ? 'text-slate-600' : 'text-slate-400'}`}>
              Prefer direct communication? Reach out via email or connect with me on LinkedIn and GitHub for collaborations and technical discussions.
            </p>

            <div className="space-y-3 pt-2">
              {directChannels.map((channel) => (
                <ContactCard
                  key={channel.title}
                  title={channel.title}
                  value={channel.value}
                  description={channel.description}
                  href={channel.href}
                  icon={channel.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Premium Glassmorphic Aesthetic Footer */}
      <footer
        className={`relative p-6 sm:p-8 rounded-3xl backdrop-blur-xl transition-all duration-500 shadow-xl card-hover-sheen ${
          isDay
            ? 'bg-white/80 border border-sky-200/90 shadow-sky-900/5'
            : 'bg-[#061426]/85 border border-blue-500/25 shadow-blue-950/40'
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Branding & Tech Stack */}
          <div className="flex flex-col items-center md:items-start space-y-1.5 text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className={`text-base font-extrabold tracking-tight ${isDay ? 'text-slate-900' : 'text-white'}`}>
                {portfolioData.personal.name}
              </span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-semibold ${
                isDay ? 'bg-sky-100 text-blue-800' : 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/30'
              }`}>
                .dev
              </span>
            </div>
            <p className={`text-xs flex items-center gap-1.5 ${isDay ? 'text-slate-600' : 'text-slate-400'}`}>
              <span>Crafted with</span>
              <Heart className={`w-3.5 h-3.5 fill-current animate-pulse ${isDay ? 'text-blue-600' : 'text-cyan-400'}`} />
              <span>using Next.js & Tailwind CSS</span>
            </p>
          </div>

          {/* Center: Social Links Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-300 hover:scale-105 ${
                isDay
                  ? 'bg-white text-slate-700 hover:text-blue-700 border border-sky-200 hover:border-blue-400 shadow-sm'
                  : 'bg-[#0a192f] text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/50 shadow-md'
              }`}
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-300 hover:scale-105 ${
                isDay
                  ? 'bg-white text-slate-700 hover:text-blue-700 border border-sky-200 hover:border-blue-400 shadow-sm'
                  : 'bg-[#0a192f] text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/50 shadow-md'
              }`}
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-300 hover:scale-105 ${
                isDay
                  ? 'bg-white text-slate-700 hover:text-blue-700 border border-sky-200 hover:border-blue-400 shadow-sm'
                  : 'bg-[#0a192f] text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/50 shadow-md'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Right: Copyright & Smooth Back-To-Top Button */}
          <div className="flex items-center gap-4">
            <span className={`text-xs font-mono ${isDay ? 'text-slate-500' : 'text-slate-500'}`}>
              © {new Date().getFullYear()} All rights reserved.
            </span>

            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Back to top"
              className={`p-2.5 rounded-xl border transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center ${
                isDay
                  ? 'bg-white text-slate-700 hover:text-blue-700 border-sky-200 hover:border-blue-400 shadow-sm'
                  : 'bg-[#0a192f] text-slate-300 hover:text-cyan-300 border-white/10 hover:border-cyan-400/50 shadow-md'
              }`}
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
}

