'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/data/portfolio';
import Image from 'next/image';
import { ExternalLink, Terminal, HardDrive, Activity, CandlestickChart } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { useTheme } from '@/context/ThemeContext';

interface FeaturedProjectProps {
  project: Project;
  index: number;
}

export function FeaturedProject({ project, index }: FeaturedProjectProps) {
  const { isDay } = useTheme();

  // Visual illustration header generator based on project image type or file path
  const renderVisual = (imgKey: string) => {
    if (imgKey && (imgKey.startsWith('/') || imgKey.includes('.'))) {
      return (
        <div className={`w-full h-48 sm:h-56 rounded-xl overflow-hidden border relative transition-colors ${
          isDay ? 'border-sky-200 bg-sky-100/50 group-hover:border-blue-400' : 'border-blue-500/20 bg-[#030B18] group-hover:border-cyan-400/50'
        }`}>
          <Image
            src={imgKey}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            priority={index < 2}
          />
          <div className={`absolute inset-0 pointer-events-none ${
            isDay ? 'bg-gradient-to-t from-white/30 via-transparent to-transparent' : 'bg-gradient-to-t from-[#061426]/80 via-transparent to-transparent'
          }`} />
        </div>
      );
    }

    switch (imgKey) {
      case 'storage':
        return (
          <div className={`w-full h-48 sm:h-56 rounded-xl p-5 flex flex-col justify-between border relative overflow-hidden transition-colors ${
            isDay
              ? 'bg-gradient-to-br from-sky-100 via-white to-blue-50 border-sky-200 group-hover:border-blue-400'
              : 'bg-gradient-to-br from-blue-950/80 via-[#030B18] to-cyan-950/40 border-blue-500/20 group-hover:border-cyan-400/50'
          }`}>
            <div className="flex items-center justify-between">
              <div className={`flex items-center gap-2 text-xs font-mono font-semibold ${isDay ? 'text-blue-800' : 'text-cyan-300'}`}>
                <HardDrive className={`w-4 h-4 ${isDay ? 'text-blue-600' : 'text-cyan-400'}`} />
                <span>AES-256 ENCRYPTED STORAGE</span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                isDay ? 'bg-blue-100 text-blue-700 border-blue-200' : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
              }`}>
                ZERO-KNOWLEDGE
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2.5 my-auto">
              {['/documents/specs.enc', '/keys/master.shard', '/backups/vault.tar'].map((f, i) => (
                <div
                  key={i}
                  className={`p-2.5 rounded-lg border text-[10px] font-mono truncate ${
                    isDay ? 'bg-white text-slate-800 border-sky-200' : 'bg-[#020617]/90 text-slate-300 border-blue-500/30'
                  }`}
                >
                  🔒 {f}
                </div>
              ))}
            </div>
            <div className={`flex items-center justify-between text-[11px] font-mono ${isDay ? 'text-slate-600' : 'text-slate-400'}`}>
              <span>SHREDDING: ACTIVE</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">● 100% CLIENT ENCRYPTED</span>
            </div>
          </div>
        );
      case 'soc':
        return (
          <div className={`w-full h-48 sm:h-56 rounded-xl p-5 flex flex-col justify-between border relative overflow-hidden transition-colors ${
            isDay
              ? 'bg-gradient-to-br from-rose-50 via-white to-sky-50 border-rose-200 group-hover:border-rose-400'
              : 'bg-gradient-to-br from-red-950/40 via-[#030B18] to-blue-950/80 border-blue-500/20 group-hover:border-cyan-400/50'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-rose-600 dark:text-red-400">
                <Activity className="w-4 h-4 text-rose-600 dark:text-red-400 animate-pulse" />
                <span>SURICATA & WAZUH SIEM LAB</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-700 dark:text-red-300 border border-red-500/30">
                MITRE ATT&CK
              </span>
            </div>
            <div className="space-y-1.5 my-auto font-mono text-[11px]">
              <div className="text-red-700 dark:text-red-300 bg-red-100/70 dark:bg-red-950/50 px-2.5 py-1 rounded border border-red-400/40 flex justify-between">
                <span>[ALERT] Pass-the-Hash Detected</span>
                <span className="text-red-600 dark:text-red-400 font-bold">SEV-1</span>
              </div>
              <div className="text-amber-800 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-950/40 px-2.5 py-1 rounded border border-amber-400/40 flex justify-between">
                <span>[SOAR] Automated Quarantine Applied</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">BLOCK IP</span>
              </div>
            </div>
            <div className={`flex items-center justify-between text-[11px] font-mono ${isDay ? 'text-slate-600' : 'text-slate-400'}`}>
              <span>NODES: 15 ACTIVE</span>
              <span className="text-blue-600 dark:text-cyan-400 font-semibold">ZEEK PCAP INGESTING</span>
            </div>
          </div>
        );
      case 'trading':
        return (
          <div className={`w-full h-48 sm:h-56 rounded-xl p-5 flex flex-col justify-between border relative overflow-hidden transition-colors ${
            isDay
              ? 'bg-gradient-to-br from-emerald-50 via-white to-sky-50 border-emerald-200 group-hover:border-emerald-400'
              : 'bg-gradient-to-br from-emerald-950/40 via-[#030B18] to-blue-950/80 border-blue-500/20 group-hover:border-cyan-400/50'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400">
                <CandlestickChart className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>SUB-MS MATCHING ENGINE</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                50K ORD/SEC
              </span>
            </div>
            <div className="flex items-end justify-between h-16 px-4 my-auto">
              {[35, 55, 40, 75, 60, 90, 80, 100].map((h, i) => (
                <div
                  key={i}
                  className="w-4 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className={`flex items-center justify-between text-[11px] font-mono ${isDay ? 'text-slate-600' : 'text-slate-400'}`}>
              <span>LATENCY: 0.18ms</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">● WEBSOCKET L2 DEPTH</span>
            </div>
          </div>
        );
      case 'scanner':
        return (
          <div className={`w-full h-48 sm:h-56 rounded-xl p-5 flex flex-col justify-between border relative overflow-hidden transition-colors ${
            isDay
              ? 'bg-gradient-to-br from-sky-50 via-white to-blue-50 border-sky-200 group-hover:border-blue-400'
              : 'bg-gradient-to-br from-cyan-950/50 via-[#030B18] to-blue-950/70 border-blue-500/20 group-hover:border-cyan-400/50'
          }`}>
            <div className="flex items-center justify-between">
              <div className={`flex items-center gap-2 text-xs font-mono font-semibold ${isDay ? 'text-blue-800' : 'text-cyan-300'}`}>
                <Terminal className={`w-4 h-4 ${isDay ? 'text-blue-600' : 'text-cyan-400'}`} />
                <span>HEADLESS FUZZING ENGINE</span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                isDay ? 'bg-sky-100 text-sky-800 border-sky-200' : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
              }`}>
                ASYNC CRAWL
              </span>
            </div>
            <div className={`space-y-1 my-auto font-mono text-[10px] p-2.5 rounded-lg border ${
              isDay ? 'bg-white text-slate-800 border-sky-200' : 'bg-[#020617]/90 text-slate-300 border-blue-500/30'
            }`}>
              <p className={isDay ? 'text-blue-700 font-bold' : 'text-cyan-400'}>$ aegis scan --target https://app.internal</p>
              <p className={isDay ? 'text-slate-600' : 'text-slate-400'}>[*] Crawled 142 SPA routes | Verified DOM mutations</p>
              <p className="text-amber-600 dark:text-amber-300">[!] Discovered AST payload reflection in /v1/auth</p>
            </div>
            <div className={`flex items-center justify-between text-[11px] font-mono ${isDay ? 'text-slate-600' : 'text-slate-400'}`}>
              <span>WAF EVASION: ENABLED</span>
              <span className="text-blue-600 dark:text-cyan-400 font-semibold">PDF REPORT GENERATED</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className={`p-6 rounded-3xl transition-all duration-300 shadow-xl hover:-translate-y-1.5 group flex flex-col justify-between space-y-6 card-hover-sheen ${
        isDay
          ? 'bg-white/80 hover:bg-white/95 border border-sky-200/80 shadow-sky-900/5 hover:shadow-sky-400/20'
          : 'bg-[#061426] hover:bg-[#0A1B32] border border-blue-500/20 hover:border-cyan-400/60 shadow-blue-950/30 hover:shadow-cyan-500/20'
      }`}
    >
      <div className="space-y-4">
        {/* Project Visual Card */}
        {renderVisual(project.image)}

        {/* Category & Title */}
        <div>
          <span className={`inline-block text-xs font-mono font-semibold tracking-wider uppercase mb-1 ${
            isDay ? 'text-blue-700' : 'text-cyan-400'
          }`}>
            {project.category}
          </span>
          <h3 className={`text-xl sm:text-2xl font-bold transition-colors ${
            isDay ? 'text-slate-900 group-hover:text-blue-600' : 'text-white group-hover:text-cyan-300'
          }`}>
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className={`text-xs sm:text-sm font-light leading-relaxed transition-colors ${
          isDay ? 'text-slate-700 font-normal' : 'text-slate-300'
        }`}>
          {project.description}
        </p>

        {/* Key Features Bullet Points */}
        <div className="space-y-1.5 pt-1">
          {project.features.slice(0, 3).map((feat, i) => (
            <div key={i} className={`flex items-start gap-2 text-xs transition-colors ${isDay ? 'text-slate-600' : 'text-slate-400'}`}>
              <span className={`${isDay ? 'text-blue-600' : 'text-cyan-400'} mt-0.5`}>▹</span>
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono border transition-colors ${
                isDay
                  ? 'bg-sky-50 text-slate-800 border-sky-200'
                  : 'bg-[#020617] text-slate-300 border-blue-500/20'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className={`flex items-center gap-3 pt-4 border-t ${isDay ? 'border-sky-100' : 'border-blue-500/20'}`}>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white flex items-center justify-center gap-2 shadow-md shadow-blue-600/30 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span>Visit</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider border flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer ${
            isDay
              ? 'bg-sky-50 hover:bg-white text-slate-800 border-sky-200 hover:border-blue-400'
              : 'bg-[#020617] hover:bg-blue-950/40 text-slate-200 hover:text-white border-blue-500/30 hover:border-cyan-400'
          }`}
        >
          <GithubIcon className="w-4 h-4" />
          <span>Code</span>
        </a>
      </div>
    </motion.div>
  );
}

