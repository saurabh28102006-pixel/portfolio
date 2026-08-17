'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/data/portfolio';
import { GithubIcon } from '@/components/ui/Icons';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { isDay } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`p-5 rounded-2xl transition-all duration-300 shadow-md hover:-translate-y-1 group flex flex-col justify-between space-y-4 card-hover-sheen ${
        isDay
          ? 'bg-white/80 hover:bg-white/95 border border-sky-200/80 shadow-sky-900/5 hover:shadow-sky-400/20'
          : 'bg-[#061426] hover:bg-[#0A1B32] border border-blue-500/20 hover:border-cyan-400/50 shadow-blue-950/20 hover:shadow-cyan-500/10'
      }`}
    >
      <div className="space-y-3">
        {/* Header with Folder Icon and GitHub */}
        <div className="flex items-center justify-between">
          <div className={`p-2 rounded-lg border ${
            isDay ? 'bg-sky-100/80 border-sky-200 text-blue-600' : 'bg-blue-950/50 border-blue-500/30 text-cyan-400 group-hover:text-cyan-300'
          }`}>
            <FolderGit2 className="w-5 h-5" />
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={`p-1.5 rounded-lg transition-colors ${
                  isDay ? 'text-slate-600 hover:text-blue-600' : 'text-slate-400 hover:text-cyan-300'
                }`}
                aria-label="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={`p-1.5 rounded-lg transition-colors ${
                isDay ? 'text-slate-600 hover:text-blue-600' : 'text-slate-400 hover:text-cyan-300'
              }`}
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Title */}
        <h4 className={`text-base font-bold transition-colors ${
          isDay ? 'text-slate-900 group-hover:text-blue-600' : 'text-white group-hover:text-cyan-300'
        }`}>
          {project.title}
        </h4>

        {/* Description */}
        <p className={`text-xs font-light leading-relaxed transition-colors ${
          isDay ? 'text-slate-700 font-normal' : 'text-slate-400'
        }`}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((t) => (
            <span
              key={t}
              className={`px-2 py-0.5 rounded text-[10px] font-mono border transition-colors ${
                isDay
                  ? 'bg-sky-50 text-slate-800 border-sky-200'
                  : 'bg-[#020617] text-slate-300 border-blue-500/15'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

