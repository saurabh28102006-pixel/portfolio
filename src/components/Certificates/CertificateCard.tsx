import React from 'react';
import { motion } from 'framer-motion';
import { Certificate } from '@/data/portfolio';
import { Award, FileText, Calendar, ArrowUpRight } from 'lucide-react';

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
  onSelect: (cert: Certificate) => void;
}

export function CertificateCard({ certificate, index, onSelect }: CertificateCardProps) {
  const handleOpenPdf = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = certificate.pdfUrl || certificate.credentialUrl;
    if (url) {
      window.open(url, '_blank');
    }
    onSelect(certificate);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="p-6 rounded-2xl bg-[#061426] hover:bg-[#0A1B32] border border-blue-500/20 hover:border-cyan-400/60 transition-all duration-300 shadow-md shadow-blue-950/20 hover:shadow-cyan-500/15 hover:-translate-y-1 group flex flex-col justify-between space-y-6 cursor-pointer"
      onClick={handleOpenPdf}
    >
      <div className="space-y-4">
        {/* Top Issuer Badge & Date */}
        <div className="flex items-start justify-between gap-3">
          <div
            className="p-3 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-105"
            style={{
              backgroundColor: `${certificate.badgeColor}18`,
              borderColor: `${certificate.badgeColor}40`,
              color: certificate.badgeColor
            }}
          >
            <Award className="w-6 h-6" />
          </div>

          <div className="flex items-center gap-1 text-xs font-mono text-slate-400 bg-[#020617] px-2.5 py-1 rounded-lg border border-blue-500/15">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            <span>{certificate.issueDate}</span>
          </div>
        </div>

        {/* Title & Issuer */}
        <div>
          <span className="text-xs font-mono font-semibold text-cyan-400/90 tracking-wide uppercase">
            {certificate.issuer}
          </span>
          <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mt-0.5 leading-snug">
            {certificate.title}
          </h3>
        </div>

        {/* Topics Covered */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {certificate.topics.slice(0, 3).map((topic, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-md bg-[#020617] text-[11px] font-mono text-slate-300 border border-blue-500/15"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action */}
      <div className="pt-4 border-t border-blue-500/20 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-cyan-300 group-hover:text-cyan-200">
        <span className="flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5" />
          <span>Open PDF Certificate</span>
        </span>
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </motion.div>
  );
}
