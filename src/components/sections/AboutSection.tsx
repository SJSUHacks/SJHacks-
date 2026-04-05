import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="pt-36">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start gap-16">
          <div className="">
            <h2 className="font-bold text-5xl text-[#01404B]">About</h2>
          </div>
          <div className="flex">
            <p className="text-xl text-[#01404B] leading-relaxed">
              SJHacks is a 24-hour hybrid hackathon at San José State
              University, designed to bring together changemakers from all
              backgrounds. Whether you are a coder, designer, or just passionate
              about solving problems, this event offers a space for you to
              collaborate, innovate, and create solutions that make a
              difference.
            </p>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
