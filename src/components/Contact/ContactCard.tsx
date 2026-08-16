import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ContactCardProps {
  title: string;
  value: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export function ContactCard({ title, value, description, href, icon }: ContactCardProps) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel="noreferrer"
      className="p-5 rounded-2xl bg-[#061426] hover:bg-[#0A1B32] border border-blue-500/20 hover:border-cyan-400/60 transition-all duration-300 shadow-md shadow-blue-950/20 hover:shadow-cyan-500/15 hover:translate-x-1.5 group flex items-center justify-between"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-500/30 text-cyan-400 group-hover:text-cyan-300 group-hover:scale-105 transition-all">
          {icon}
        </div>
        <div>
          <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
            {title}
          </h4>
          <p className="text-xs font-mono text-cyan-400/90 mt-0.5">{value}</p>
          <p className="text-[11px] text-slate-400 font-light mt-0.5">{description}</p>
        </div>
      </div>

      <div className="p-2 rounded-lg text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all">
        <ArrowRight className="w-5 h-5" />
      </div>
    </a>
  );
}
