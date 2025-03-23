import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="date">April 8th - 9th, 2025</div>
        <h1 className="site-title">&lt;SJHacks/&gt;</h1>
        
        <div className="holder">
          <h2 className="tagline">
            Join SJSU&apos;s <span className="yellow">biggest interdisciplinary hackathon</span> of 
            Silicon Valley and be the <span className="yellow">first</span> to know when 
            the <span className="yellow">applications</span> are live!
          </h2>
          
          <div className="details">
            <div className="info">
              <Image src="/assets/calendar.svg" alt="SiliconXHacks Date" className="infologo" width={24} height={24} />
              April 2025
            </div>
            <div className="info">
              <Image src="/assets/location.svg" alt="SiliconXHacks location" className="infologo" width={24} height={24} />
              San Jose State University
            </div>
          </div>

          <a href="#register" className="register-button">Register →</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 