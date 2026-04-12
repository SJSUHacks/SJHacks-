"use client";
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

         <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 items-center justify-center w-full py-8">
            <div className="relative h-10 sm:h-14 md:h-20 w-auto flex-shrink-0">
              <Image
                src="/assets/current-sponsors/redbull-logo-png-transparent.png"
                alt="Red Bull Logo"
                width={120}
                height={80}
                className="h-full w-auto object-contain"
                sizes="(max-width: 640px) 40px, (max-width: 768px) 56px, 80px"
              />
            </div>
            <div className="relative h-10 sm:h-14 md:h-20 w-auto flex-shrink-0">
              <Image
                src="/assets/current-sponsors/f3credit.png"
                alt="F3 Credit Logo"
                width={120}
                height={80}
                className="h-full w-auto object-contain"
                sizes="(max-width: 640px) 40px, (max-width: 768px) 56px, 80px"
              />
            </div>
            <div className="relative h-14 sm:h-20 md:h-28 w-auto flex-shrink-0">
              <Image
                src="/assets/current-sponsors/poke.png"
                alt="Poke Logo"
                width={140}
                height={140}
                className="h-full w-auto object-contain"
                sizes="(max-width: 640px) 56px, (max-width: 768px) 80px, 112px"
              />
            </div>
            <div className="relative h-8 sm:h-12 md:h-20 w-auto flex-shrink-0">
              <Image
                src="/assets/current-sponsors/WITH-CYBER.png"
                alt="WITH CYBER Logo"
                width={100}
                height={80}
                className="h-full w-auto object-contain"
                sizes="(max-width: 640px) 32px, (max-width: 768px) 48px, 80px"
              />
            </div>
            <div className="relative h-10 sm:h-14 md:h-20 w-auto flex-shrink-0">
              <Image
                src="/assets/current-sponsors/TEASPOON_LOGO.png"
                alt="Teaspoon Logo"
                width={120}
                height={80}
                className="h-full w-auto object-contain"
                sizes="(max-width: 640px) 40px, (max-width: 768px) 56px, 80px"
              />
            </div>
           <div className="relative h-7 sm:h-10 md:h-14 w-auto flex-shrink-0">
              <Image
                src="/assets/current-sponsors/COLL_COB_Reversed.png"
                alt="SJSU College Logo"
                width={320}
                height={80}
                className="h-full w-auto object-contain"
                sizes="(max-width: 640px) 150px, (max-width: 768px) 220px, 320px"
                quality={100}
              />
            </div>
          </div>

            <div className="">
            <h2 className="font-semibold text-3xl text-[#01404B] pt-24 pb-8">Past Sponsors</h2>
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 items-center justify-center w-full py-8">
            <div className="relative h-14 sm:h-18 md:h-24 w-auto flex-shrink-0">
              <Image
                src="/assets/past-sponsors/citysanjose.png"
                alt="City of San Jose Logo"
                width={120}
                height={96}
                className="h-full w-auto object-contain"
                sizes="(max-width: 640px) 56px, (max-width: 768px) 72px, 96px"
              />
            </div>
            <div className="relative h-10 sm:h-14 md:h-20 w-auto flex-shrink-0">
              <Image
                src="/assets/past-sponsors/creditcliq.png"
                alt="CreditCLIQ Logo"
                width={120}
                height={80}
                className="h-full w-auto object-contain"
                sizes="(max-width: 640px) 40px, (max-width: 768px) 56px, 80px"
              />
            </div>
            <div className="relative h-10 sm:h-14 md:h-20 w-auto flex-shrink-0">
              <Image
                src="/assets/past-sponsors/growme-Logo.png"
                alt="GrowMe Logo"
                width={120}
                height={80}
                className="h-full w-auto object-contain"
                sizes="(max-width: 640px) 40px, (max-width: 768px) 56px, 80px"
              />
            </div>
            <div className="relative h-20 sm:h-28 md:h-36 w-auto flex-shrink-0">
              <Image
                src="/assets/past-sponsors/monster.png"
                alt="Monster Logo"
                width={160}
                height={160}
                className="h-full w-auto object-contain"
                sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 144px"
              />
            </div>
            <div className="relative h-14 sm:h-20 md:h-28 w-auto flex-shrink-0">
              <Image
                src="/assets/past-sponsors/jetson.png"
                alt="Jetson Logo"
                width={120}
                height={120}
                className="h-full w-auto object-contain"
                sizes="(max-width: 640px) 56px, (max-width: 768px) 80px, 112px"
              />
            </div>
          </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
