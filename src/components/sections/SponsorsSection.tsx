import React from 'react';
import Image from 'next/image';

const SponsorsSection: React.FC = () => {
  return (
    <section id="sponsor" className="sponsors-section">
      <div className="section-container">
        <h2 className="section-title">Sponsors</h2>
        <div className="sponsors-grid">
          <a 
            href="https://fetch.ai/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="sponsor-card hover:opacity-80 transition-opacity"
          >
            <Image 
              src="/assets/sponsors/fetchai.png" 
              alt="fetch.ai logo" 
              width={150} 
              height={50} 
              className="object-contain"
            />
          </a>

          <a 
            href="https://www.sprint.dev/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="sponsor-card hover:opacity-80 transition-opacity"
          >
            <Image 
              src="/assets/sponsors/sprintlogo.png" 
              alt="Sprint logo" 
              width={150} 
              height={50} 
              className="object-contain"
            />
          </a>

          <a 
            href="https://www.sanjoseca.gov/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="sponsor-card hover:opacity-80 transition-opacity"
          >
            <Image 
              src="/assets/sponsors/citysanjose.png" 
              alt="City of San Jose logo" 
              width={150} 
              height={50} 
              className="object-contain"
            />
          </a>

          <a 
            href="https://www.monsterenergy.com/en-us/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="sponsor-card hover:opacity-80 transition-opacity"
          >
            <Image 
              src="/assets/sponsors/monster.png" 
              alt="Monster Energy logo" 
              width={150} 
              height={50} 
              className="object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection; 