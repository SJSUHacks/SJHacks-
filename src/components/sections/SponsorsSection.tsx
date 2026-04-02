import React from "react";
import Placeholder from "../Placeholder";

const SponsorsSection: React.FC = () => {
  return (
    <section id="sponsors" className="relative">
      <div className="container mx-auto px-6 justify-items-center flex flex-col">
        <h2 className="font-bold text-5xl text-[#01404B] mb-16">Sponsors</h2>
        <div className="flex w-full mt-20">
          <Placeholder />
        </div>

        <p className="text-xl text-[#01404B] leading-relaxed text-center mt-20">
          {"Coming Soon!"}
        </p>
      </div>
    </section>
  );
};

export default SponsorsSection;
