'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeaturedProject } from './FeaturedProject';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const featured = portfolioData.projects.filter((p) => p.featured);
  const secondary = portfolioData.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <SectionHeading
        prefix="My"
        highlight="Projects"
        subtitle="Some of my selected work."
      />

      {/* 2-Column Featured Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {featured.map((project, idx) => (
          <FeaturedProject key={project.id} project={project} index={idx} />
        ))}
      </div>

      {/* Secondary Project Grid if available */}
      {secondary.length > 0 && (
        <div className="space-y-6 pt-6">
          <h3 className="text-center text-sm font-mono text-cyan-400/80 uppercase tracking-widest">
            More Noteworthy Architectures
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondary.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
