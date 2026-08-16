import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/data/portfolio';
import { GithubIcon } from '@/components/ui/Icons';
import { FolderGit2, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="p-5 rounded-2xl bg-[#061426] hover:bg-[#0A1B32] border border-blue-500/20 hover:border-cyan-400/50 transition-all duration-300 shadow-md shadow-blue-950/20 hover:shadow-cyan-500/10 hover:-translate-y-1 group flex flex-col justify-between space-y-4"
    >
      <div className="space-y-3">
        {/* Header with Folder Icon and GitHub */}
        <div className="flex items-center justify-between">
          <div className="p-2 rounded-lg bg-blue-950/50 border border-blue-500/30 text-cyan-400 group-hover:text-cyan-300">
            <FolderGit2 className="w-5 h-5" />
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 transition-colors"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Title */}
        <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h4>

        {/* Description */}
        <p className="text-xs text-slate-400 font-light leading-relaxed">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded bg-[#020617] text-[10px] font-mono text-slate-300 border border-blue-500/15"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
