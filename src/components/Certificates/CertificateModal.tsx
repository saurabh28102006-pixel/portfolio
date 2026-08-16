'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Certificate } from '@/data/portfolio';
import { Award, ExternalLink, X, ShieldCheck, Calendar, Hash, FileText } from 'lucide-react';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  const pdfUrl = certificate?.pdfUrl || certificate?.credentialUrl;

  return (
    <AnimatePresence>
      {certificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl bg-black/80">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-3xl max-h-[90vh] bg-[#061426] border border-blue-500/30 hover:border-cyan-400/50 rounded-3xl p-6 sm:p-8 text-white shadow-2xl shadow-blue-950/60 relative flex flex-col space-y-5 overflow-y-auto"
            style={{
              boxShadow: `0 0 35px ${certificate.badgeColor}22`
            }}
          >
            {/* Header & Close */}
            <div className="flex items-start justify-between border-b border-blue-500/20 pb-4">
              <div className="flex items-center gap-3">
                <div
                  className="p-3 rounded-2xl border"
                  style={{
                    backgroundColor: `${certificate.badgeColor}15`,
                    borderColor: `${certificate.badgeColor}40`,
                    color: certificate.badgeColor
                  }}
                >
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                    Official Verified Certificate
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {certificate.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-[#020617] hover:bg-blue-950/50 text-slate-400 hover:text-white transition-colors border border-blue-500/20"
                aria-label="Close Certificate Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Embedded PDF Viewer if available */}
            {pdfUrl && (
              <div className="w-full h-72 sm:h-96 rounded-2xl border border-blue-500/30 overflow-hidden bg-[#020617] relative">
                <iframe
                  src={`${pdfUrl}#toolbar=0`}
                  className="w-full h-full border-none"
                  title={certificate.title}
                />
              </div>
            )}

            {/* Credential Details Grid */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#020617]/80 border border-blue-500/20 text-xs">
              <div className="space-y-1">
                <div className="text-slate-400 flex items-center gap-1.5 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>ISSUER</span>
                </div>
                <div className="font-semibold text-slate-200">{certificate.issuer}</div>
              </div>

              <div className="space-y-1">
                <div className="text-slate-400 flex items-center gap-1.5 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>ISSUE DATE</span>
                </div>
                <div className="font-semibold text-slate-200">{certificate.issueDate}</div>
              </div>

              {certificate.credentialId && (
                <div className="col-span-2 space-y-1 pt-2 border-t border-white/5">
                  <div className="text-slate-400 flex items-center gap-1.5 font-mono">
                    <Hash className="w-3.5 h-3.5 text-cyan-400" />
                    <span>CREDENTIAL ID</span>
                  </div>
                  <div className="font-mono text-cyan-300 font-medium">{certificate.credentialId}</div>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-between border-t border-blue-500/20 pt-4">
              {pdfUrl ? (
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-6 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
                >
                  <FileText className="w-4 h-4" />
                  <span>Open PDF in New Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <div />
              )}

              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
