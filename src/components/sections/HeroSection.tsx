import React from "react";
import Image from "next/image";
import RegisterButton from "../RegisterButton";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="relative bg-gradient-to-b from-[#FFF3B8] to-[#FFE88D] text-[#01404B] h-screen">
        {/* SVG Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/design.svg"
            alt="San Jose Skyline"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="relative flex items-center justify-center flex-col pt-12 space-y-3">
          <h2 className="font-semibold text-2xl">April ? - ?, 2026</h2>

          <h1 className="font-extrabold text-7xl animate-bounce-sm">
            &lt;SJHacks/&gt;
          </h1>
          <RegisterButton />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
