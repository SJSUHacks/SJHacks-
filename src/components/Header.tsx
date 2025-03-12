import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="logo-container">
        <img src="/assets/logoNew.svg" alt="SJHacks Logo" className="site-logo" />
      </div>
      <nav className="site-nav">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About Us</a>
      </nav>
      <a href="#sponsor" className="sponsor-button">Sponsor Us</a>
    </header>
  );
};

export default Header; 