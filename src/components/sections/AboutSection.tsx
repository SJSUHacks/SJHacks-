import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-title-col">
            <h2 className="section-title">About Us</h2>
          </div>
          <div className="about-content-col">
            <div className="about-content">
              <p className="about-text">
                SJHacks is a 24-hour, in-person hackathon in San Jose 
                designed to bring together changemakers from all 
                backgrounds. Whether you are a coder, designer, or just 
                passionate about solving problems, this event offers a 
                space for you to collaborate, innovate, and create solutions 
                that make a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 