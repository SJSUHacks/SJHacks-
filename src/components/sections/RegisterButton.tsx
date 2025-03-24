'use client';

import React from 'react';

const RegisterButton = () => {
  return (
    <button 
      onClick={() => window.open('https://tally.so/r/nGbeOo', '_blank')}
      className="group font-medium text-2xl bg-[#01404B] bg-opacity-90 py-2 px-10 rounded-md text-[#FFE375] flex items-center gap-x-2"
    >
      Register
    </button>
  );
};

export default RegisterButton;