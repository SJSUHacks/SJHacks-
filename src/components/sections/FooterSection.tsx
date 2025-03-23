import React from 'react';
import Image from 'next/image';

const FooterSection: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="social-links">
        <a href="https://instagram.com" className="social-link" aria-label="Instagram">
          <Image src="/assets/instagram.svg" alt="Instagram" className="social-icon" width={24} height={24} />
        </a>
        <a href="mailto:contact@sjhacks.com" className="social-link" aria-label="Email">
          <Image src="/assets/email.svg" alt="Email" className="social-icon" width={24} height={24} />
        </a>
      </div>
      <p className="copyright">Made with love, by the SJHacks Team</p>
    </footer>
  );
};

export default FooterSection; 