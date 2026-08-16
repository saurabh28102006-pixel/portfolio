import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/data/portfolio';
import Image from 'next/image';
import { ExternalLink, Terminal, HardDrive, Activity, CandlestickChart } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

interface FeaturedProjectProps {
  project: Project;
  index: number;
}

export function FeaturedProject({ project, index }: FeaturedProjectProps) {
  // Visual illustration header generator based on project image type or file path
  const renderVisual = (imgKey: string) => {
    if (imgKey && (imgKey.startsWith('/') || imgKey.includes('.'))) {
      return (
        <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden border border-blue-500/20 relative group-hover:border-cyan-400/50 transition-colors bg-[#030B18]">
          <Image
            src={imgKey}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/80 via-transparent to-transparent pointer-events-none" />
        </div>
      );
    }

    switch (imgKey) {
      case 'storage':
        return (
          <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-blue-950/80 via-[#030B18] to-cyan-950/40 rounded-xl p-5 flex flex-col justify-between border border-blue-500/20 relative overflow-hidden group-hover:border-cyan-400/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                <HardDrive className="w-4 h-4 text-cyan-400" />
                <span>AES-256 ENCRYPTED STORAGE</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                ZERO-KNOWLEDGE
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2.5 my-auto">
              {['/documents/specs.enc', '/keys/master.shard', '/backups/vault.tar'].map((f, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-[#020617]/90 border border-blue-500/30 text-[10px] font-mono text-slate-300 truncate">
                  🔒 {f}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>SHREDDING: ACTIVE</span>
              <span className="text-emerald-400">● 100% CLIENT ENCRYPTED</span>
            </div>
          </div>
        );
      case 'soc':
        return (
          <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-red-950/40 via-[#030B18] to-blue-950/80 rounded-xl p-5 flex flex-col justify-between border border-blue-500/20 relative overflow-hidden group-hover:border-cyan-400/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-red-400">
                <Activity className="w-4 h-4 text-red-400 animate-pulse" />
                <span>SURICATA & WAZUH SIEM LAB</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30">
                MITRE ATT&CK
              </span>
            </div>
            <div className="space-y-1.5 my-auto font-mono text-[11px]">
              <div className="text-red-300 bg-red-950/50 px-2.5 py-1 rounded border border-red-500/30 flex justify-between">
                <span>[ALERT] Pass-the-Hash Detected</span>
                <span className="text-red-400 font-bold">SEV-1</span>
              </div>
              <div className="text-amber-300 bg-amber-950/40 px-2.5 py-1 rounded border border-amber-500/30 flex justify-between">
                <span>[SOAR] Automated Quarantine Applied</span>
                <span className="text-emerald-400">BLOCK IP</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>NODES: 15 ACTIVE</span>
              <span className="text-cyan-400">ZEEK PCAP INGESTING</span>
            </div>
          </div>
        );
      case 'trading':
        return (
          <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-emerald-950/40 via-[#030B18] to-blue-950/80 rounded-xl p-5 flex flex-col justify-between border border-blue-500/20 relative overflow-hidden group-hover:border-cyan-400/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <CandlestickChart className="w-4 h-4 text-emerald-400" />
                <span>SUB-MS MATCHING ENGINE</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
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
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>LATENCY: 0.18ms</span>
              <span className="text-emerald-400">● WEBSOCKET L2 DEPTH</span>
            </div>
          </div>
        );
      case 'scanner':
        return (
          <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-cyan-950/50 via-[#030B18] to-blue-950/70 rounded-xl p-5 flex flex-col justify-between border border-blue-500/20 relative overflow-hidden group-hover:border-cyan-400/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>HEADLESS FUZZING ENGINE</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                ASYNC CRAWL
              </span>
            </div>
            <div className="space-y-1 my-auto font-mono text-[10px] text-slate-300 bg-[#020617]/90 p-2.5 rounded-lg border border-blue-500/30">
              <p className="text-cyan-400">$ aegis scan --target https://app.internal</p>
              <p className="text-slate-400">[*] Crawled 142 SPA routes | Verified DOM mutations</p>
              <p className="text-amber-300">[!] Discovered AST payload reflection in /v1/auth</p>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>WAF EVASION: ENABLED</span>
              <span className="text-cyan-400">PDF REPORT GENERATED</span>
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
      className="p-6 rounded-3xl bg-[#061426] hover:bg-[#0A1B32] border border-blue-500/20 hover:border-cyan-400/60 transition-all duration-300 shadow-xl shadow-blue-950/30 hover:shadow-cyan-500/20 hover:-translate-y-1.5 group flex flex-col justify-between space-y-6"
    >
      <div className="space-y-4">
        {/* Project Visual Card */}
        {renderVisual(project.image)}

        {/* Category & Title */}
        <div>
          <span className="inline-block text-xs font-mono font-semibold text-cyan-400 tracking-wider uppercase mb-1">
            {project.category}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
          {project.description}
        </p>

        {/* Key Features Bullet Points */}
        <div className="space-y-1.5 pt-1">
          {project.features.slice(0, 3).map((feat, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
              <span className="text-cyan-400 mt-0.5">▹</span>
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-[#020617] text-[11px] font-mono text-slate-300 border border-blue-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 pt-4 border-t border-blue-500/20">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white flex items-center justify-center gap-2 shadow-md shadow-blue-600/30 transition-all hover:scale-[1.02]"
          >
            <span>Visit</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#020617] hover:bg-blue-950/40 text-slate-200 hover:text-white border border-blue-500/30 hover:border-cyan-400 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
        >
          <GithubIcon className="w-4 h-4" />
          <span>Code</span>
        </a>
      </div>
    </motion.div>
  );
}
