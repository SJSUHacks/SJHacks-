import React from 'react';

const SponsorsSection: React.FC = () => {
  return (
    <section id="sponsor" className="sponsors-section">
      <div className="section-container">
        <h2 className="section-title">Sponsors</h2>
        <div className="sponsors-grid">
          <div className="sponsor-card">
            <img src="/assets/sponsors/fetch.ai.png" alt="fetch.ai logo" />
          </div>
          <div className="sponsor-card">
            <img src="/assets/sponsors/nvidia.png" alt="NVIDIA logo" />
          </div>
          <div className="sponsor-card">
            <img src="/assets/sponsors/hume.ai.png" alt="hume.ai logo" />
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