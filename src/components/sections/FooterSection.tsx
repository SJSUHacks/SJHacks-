import React from 'react';

const FooterSection: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="social-links">
        <a href="https://instagram.com" className="social-link" aria-label="Instagram">
          <img src="/assets/instagram.svg" alt="Instagram" className="social-icon" />
        </a>
        <a href="mailto:contact@sjhacks.com" className="social-link" aria-label="Email">
          <img src="/assets/email.svg" alt="Email" className="social-icon" />
        </a>
      </div>
      <p className="copyright">Made with love, by the SJHacks Team</p>
    </footer>
  );
};

export default FooterSection; 