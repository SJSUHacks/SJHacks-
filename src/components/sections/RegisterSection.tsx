import React from 'react';
import EmailForm from '@/components/EmailForm';

interface RegisterSectionProps {
  onAlert: (message: string) => void;
}

const RegisterSection: React.FC<RegisterSectionProps> = ({ onAlert }) => {
  return (
    <section id="register" className="register-section">
      <div className="section-container">
        <h2 className="section-title">Stay Updated</h2>
        <EmailForm onAlert={onAlert} />
      </div>
    </section>
  );
};

export default RegisterSection; 