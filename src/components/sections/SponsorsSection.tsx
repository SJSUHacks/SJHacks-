import React from "react";
import Image from "next/image";
const SponsorsSection: React.FC = () => {
  return (
    <section id="sponsors" className="relative">
      <div className="container mx-auto px-6 pt-36 justify-items-center flex flex-col">
        <h2 className="font-bold text-5xl text-[#01404B] pb-8">Sponsors</h2>
        {/* <div className="flex w-full mt-20">
          <Placeholder />
        </div> */}

        {/* <p className="text-xl text-[#01404B] leading-relaxed text-center mt-20">
          {"Coming Soon!"}
        </p> */}

        <div className="flex flex-wrap gap-2 md:gap-3 items-center w-full">
          <div className="relative h-20 md:h-40 lg:h-48 md:flex-1 min-w-[160px] md:min-w-0">
            <Image src="/assets/current-sponsors/redbull-logo-png-transparent.png" alt="Red Bull Logo" fill className="object-contain" sizes="(max-width: 768px) 80px, 150px" />
          </div>
          <div className="relative h-20 md:h-40 lg:h-48 md:flex-1 min-w-[160px] md:min-w-0">
            <Image src="/assets/current-sponsors/f3credit.png" alt="F3 Credit Logo" fill className="object-contain" sizes="(max-width: 768px) 80px, 150px" />
          </div>
          <div className="relative h-20 md:h-40 lg:h-48 md:flex-1 min-w-[160px] md:min-w-0">
            <Image src="/assets/current-sponsors/poke.png" alt="Poke Logo" fill className="object-contain" sizes="(max-width: 768px) 96px, 192px" />
          </div>
          <div className="relative h-20 md:h-40 lg:h-48 md:flex-1 min-w-[130px] md:min-w-0">
            <Image src="/assets/current-sponsors/WITH-CYBER.png" alt="WITH CYBER Logo" fill className="object-contain" sizes="(max-width: 768px) 60px, 150px" />
          </div>
          <div className="relative h-20 md:h-40 lg:h-48 md:flex-1 min-w-[100px] md:min-w-0">
            <Image src="/assets/current-sponsors/TEASPOON_LOGO.png" alt="Teaspoon Logo" fill className="object-contain" sizes="(max-width: 768px) 80px, 150px" />
          </div>
          <div className="relative h-20 md:h-40 lg:h-48 min-w-[160px] w-56 md:w-80">
            <Image src="/assets/current-sponsors/COLL_COB.png" alt="SJSU College Logo" fill className="object-contain" sizes="(max-width: 768px) 224px, 320px" />
          </div>
        </div>

        <div className="">
          <h2 className="font-semibold text-3xl text-[#01404B] pt-24 pb-8">Past Sponsors</h2>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-3 items-center w-full">
          <div className="relative h-20 md:h-40 lg:h-48 min-w-[160px] w-56 md:w-80">
            <Image src="/assets/past-sponsors/citysanjose.png" alt="City of San Jose Logo" fill className="object-contain" sizes="(max-width: 768px) 96px, 150px" />
          </div>
          <div className="relative h-20 md:h-40 lg:h-48 min-w-[160px] w-56 md:w-80">
            <Image src="/assets/past-sponsors/creditcliq.png" alt="CreditCLIQ Logo" fill className="object-contain" sizes="(max-width: 768px) 48px, 150px" />
          </div>
          <div className="relative h-20 md:h-40 lg:h-48 min-w-[160px] w-56 md:w-80">
            <Image src="/assets/past-sponsors/growme-Logo.png" alt="GrowMe Logo" fill className="object-contain" sizes="(max-width: 768px) 48px, 150px" />
          </div>
          <div className="relative h-48 md:h-40 lg:h-48 min-w-[160px] w-56 md:w-80">
            <Image src="/assets/past-sponsors/monster.png" alt="Monster Logo" fill className="object-contain" sizes="(max-width: 768px) 128px, 192px" />
          </div>
          <div className="relative h-20 md:h-40 lg:h-48 min-w-[160px] w-56 md:w-80">
            <Image src="/assets/past-sponsors/jetson.png" alt="Jetson Logo" fill className="object-contain" sizes="(max-width: 768px) 96px, 128px" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
