'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactForm } from './ContactForm';
import { ContactCard } from './ContactCard';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export function Contact() {
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

  return (
    <section id="contact" className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <SectionHeading
        highlight="Contact"
        subtitle="Let's build something secure and meaningful together."
      />

      {/* Two-Column Contact Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
        {/* Left: Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* Right: Direct Reach Out */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">
              Or reach out directly
            </h3>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
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

      {/* Clean Minimal Footer */}
      <footer className="border-t border-blue-500/20 pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
        <div>
          <span className="font-bold text-white">{portfolioData.personal.name}</span>
          <span className="text-slate-500 mx-2">•</span>
          <span>{portfolioData.personal.role}</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="hover:text-cyan-300 transition-colors"
          >
            Email
          </a>
        </div>

        <div className="text-slate-500">
          © {new Date().getFullYear()} Saurabh Kumar. All rights reserved.
        </div>
      </footer>
    </section>
  );
}
