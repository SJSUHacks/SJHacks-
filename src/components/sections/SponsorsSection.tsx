import React from "react";
const SponsorsSection: React.FC = () => {
  return (
    <section id="sponsors" className="relative">
      <div className="container mx-auto px-6 pt-36 justify-items-center flex flex-col">
        <h2 className="font-bold text-5xl text-[#01404B]">Sponsors</h2>
        {/* <div className="flex w-full mt-20">
          <Placeholder />
        </div> */}

        {/* <p className="text-xl text-[#01404B] leading-relaxed text-center mt-20">
          {"Coming Soon!"}
        </p> */}

         <div className="flex flex-wrap gap-3 items-center">
            <img
              src="/assets/current-sponsors/redbull-logo-png-transparent.png"
              alt="Red Bull Logo"
              className="flex-1 min-w-0 max-h-24 object-contain"
            />
            <img
              src="/assets/current-sponsors/f3credit.png"
              alt="F3 Credit Logo"
              className="flex-1 min-w-0 max-h-24 object-cover"
            />
             <img
              src="/assets/current-sponsors/interaction.co.png"
              alt="Interaction.co Logo"
              className="w-48 h-48 object-cover"
            />
             <img
              src="/assets/current-sponsors/SJSU_College_of_Science_logo.png"
              alt="SJSU College of Science Logo"
              className="flex-1 min-w-0 max-h-24 object-cover"
            />
              <img
              src="/assets/current-sponsors/TEASPOON_LOGO.png"
              alt="Teaspoon Logo"
              className="flex-1 min-w-0 max-h-24 object-cover"
            />
          </div>

            <div className="">
            <h2 className="font-semibold text-3xl text-[#01404B] pt-8">Past Sponsors</h2>
          </div>
          <div className="flex flex-wrap gap-8 items-center">
            <img
              src="/assets/past-sponsors/citysanjose.png"
              alt="City of San Jose Logo"
              className="flex-1 min-w-0 max-h-24 object-contain"
            />
            <img
              src="/assets/past-sponsors/creditcliq.png"
              alt="CreditCLIQ Logo"
              className="flex-1 min-w-0 max-h-24 object-contain"
            />
             <img
              src="/assets/past-sponsors/growme-Logo.png"
              alt="GrowMe Logo"
              className="flex-1 min-w-0 max-h-24 object-contain"
            />
             <img
              src="/assets/past-sponsors/monster.png"
              alt="Monster Logo"
              className="w-48 h-48 object-cover"
            />
          </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
