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
              SJHacks is a 24-hour in-person hackathon at San José State
              University, designed to bring together changemakers from all
              backgrounds. Whether you are a coder, designer, or just passionate
              about solving problems, this event offers a space for you to
              collaborate, innovate, and create solutions that make a
              difference.
            </p>
          </div>

          <p className="text-2xl text-[#01404B] font-semibold leading-relaxed">
            {"Featured on "}
               <a
            href="https://www.pbs.org/video/ai-today-f0gyob/"
            className="text-[#0097B2] underline"
          >
            PBS Connect the Bay: AI Today!
          </a>
            <img
              src="/assets/pbs_logo.png"
              alt="PBS Logo"
              className="h-48 object-contain"
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
