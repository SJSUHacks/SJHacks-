import React from 'react';
import Image from 'next/image';

const SponsorsSection: React.FC = () => {
  return (
    <section id="sponsor" className="sponsors-section">
      <div className="section-container">
        <h2 className="section-title">Sponsors</h2>
        <div className="sponsors-grid">
          <div className="sponsor-card">
            <Image src="/assets/sponsors/fetch.ai.png" alt="fetch.ai logo" width={150} height={50} />
          </div>
          <div className="sponsor-card">
            <Image src="/assets/sponsors/nvidia.png" alt="NVIDIA logo" width={150} height={50} />
          </div>
          <div className="sponsor-card">
            <Image src="/assets/sponsors/hume.ai.png" alt="hume.ai logo" width={150} height={50} />
          </div>
          <div className="sponsor-card"></div>
          <div className="sponsor-card"></div>
          
          <div className="sponsor-card wide"></div>
          <div className="sponsor-card wide"></div>
          <div className="sponsor-card wide"></div>
          <div className="sponsor-card wide"></div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection; 