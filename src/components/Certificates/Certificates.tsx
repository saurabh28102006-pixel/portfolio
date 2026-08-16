'use client';

import React, { useState } from 'react';
import { portfolioData, Certificate } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CertificateCard } from './CertificateCard';
import { CertificateModal } from './CertificateModal';

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <SectionHeading
        prefix="Certificates &"
        highlight="Achievements"
        subtitle="Continuous learning and practical skill development across security fundamentals, cloud infrastructure, and network architecture."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.certificates.map((cert, idx) => (
          <CertificateCard
            key={cert.id}
            certificate={cert}
            index={idx}
            onSelect={(c) => setSelectedCert(c)}
          />
        ))}
      </div>

      {/* Interactive Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
