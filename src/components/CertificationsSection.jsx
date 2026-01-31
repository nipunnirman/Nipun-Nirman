import React from 'react';
import { ExternalLink } from 'lucide-react';

export const CertificationsSection = ({ certifications }) => (
  <section className="py-20 px-6 bg-black">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center cyber-text">Certifications</h2>
      <div className="glow-box">
        <div className="glow-box-content p-8">
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div key={i} className="flex items-center gap-3">
                <ExternalLink className="text-[#34c3eb] flex-shrink-0" size={20} />
                <span className="text-gray-300">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);