'use client';

import React from 'react';

const RegisterButton = () => {
  return (
    <button 
      onClick={() => window.open('https://tally.so/r/nGbeOo', '_blank')}
      className="group flex items-center gap-x-3 rounded-2xl bg-[#1F6668] px-12 py-3 text-3xl font-semibold text-[#FFE375] shadow-[0_4px_0_rgba(1,64,75,0.35)] transition-transform duration-200 hover:-translate-y-0.5"
    >
      Register
      <span aria-hidden="true">-&gt;</span>
    </button>
  );
};

export default RegisterButton;
