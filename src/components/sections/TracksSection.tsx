import React from "react";
import Placeholder from "../Placeholder";

const TracksSection: React.FC = () => {
  return (
    <section id="tracks" className="">
      <div className="container mx-auto px-6 flex justify-center flex-col">
        <h2 className="font-bold text-5xl text-[#01404B] mb-16">Tracks</h2>

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

export default TracksSection;
