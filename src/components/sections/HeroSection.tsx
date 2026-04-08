"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import RegisterButton from "../RegisterButton";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateScroll = () => {
      frame = 0;
      setScrollY(window.scrollY);
    };

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateScroll);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const progress = clamp(scrollY / 900, 0, 1);
  const curveY = -34 * progress;
  const skylineY = -58 * progress;
  const midY = -84 * progress;
  const foregroundY = -118 * progress;
  const heroCopyY = -26 * progress;
  const planeX = 120 * progress;
  const planeY = -34 * progress;
  const cloudAX = 28 * progress;
  const cloudAY = -22 * progress;
  const cloudBX = -22 * progress;
  const cloudBY = -16 * progress;
  const cloudCX = 36 * progress;
  const cloudCY = -28 * progress;

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#F6E99C] to-[#F4DD67]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.36),_rgba(255,255,255,0)_60%)]" />

      <div
        className="pointer-events-none absolute left-[5%] top-[9%] z-10 h-[7rem] w-[10.5rem] transition-transform duration-150 ease-out md:h-[8rem] md:w-[12rem]"
        style={{ transform: `translate3d(${cloudAX}px, ${cloudAY}px, 0)` }}
        aria-hidden="true"
      >
        <Image
          src="/assets/cloud-small.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div
        className="pointer-events-none absolute right-[6%] top-[10%] z-10 h-[11.5rem] w-[30rem] transition-transform duration-150 ease-out md:h-[13rem] md:w-[34rem]"
        style={{ transform: `translate3d(${cloudCX}px, ${cloudCY}px, 0)` }}
        aria-hidden="true"
      >
        <Image
          src="/assets/cloud-large.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div
        className="pointer-events-none absolute left-[5%] top-[5%] z-20 hidden w-[34rem] transition-transform duration-150 ease-out md:block md:w-[85rem]"
        style={{ transform: `translate3d(${planeX}px, ${planeY}px, 0)` }}
        aria-hidden="true"
      >
        <Image
          src="/assets/plane.svg"
          alt=""
          width={704}
          height={188}
          priority
          className="h-auto w-full object-contain"
        />
      </div>

      <div
        className="relative z-20 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-start px-4 pb-40 pt-24 text-center text-[#01404B] transition-transform duration-150 ease-out md:pt-28"
        style={{
          transform: `translate3d(0, ${heroCopyY}px, 0)`,
        }}
      >
        <h2 className="relative z-20 mb-[-1rem] text-2xl font-semibold md:mb-[-1rem] md:text-[1.8rem]">
          April 25th - 26th, 2026
        </h2>
        <h1 className="relative z-10 mb-[-0.5rem] text-[3.2rem] font-extrabold tracking-tight sm:text-[5rem] md:mb-[-1rem] md:text-[6rem]">
          &lt;SJHacks/&gt;
        </h1>
        <div
          className="pointer-events-none absolute left-[14%] top-[20%] z-20 h-[9rem] w-[21rem] transition-transform duration-150 ease-out md:h-[10rem] md:w-[24rem]"
          style={{ transform: `translate3d(${cloudBX}px, ${cloudBY}px, 0)` }}
          aria-hidden="true"
        >
          <Image
            src="/assets/cloud-medium.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <p className="relative z-30 text-2xl font-semibold text-[#01404B]/85 md:text-[1.8rem]">
          Guildhouse @ San Jose, CA
        </p>
        <div className="relative z-30 mt-8 animate-bounce-sm">
          <RegisterButton />
        </div>
      </div>

      <div>
        <div
          className="absolute bottom-[-2%] left-0 z-0 w-full transition-transform duration-150 ease-out"
          style={{
            transform: `translate3d(0, ${curveY}px, 0)`,
          }}
        >
          <img src="/assets/curve.svg" alt="" className="block h-auto w-full" />
        </div>

        <div
          className="absolute bottom-0 left-0 z-0 w-full transition-transform duration-150 ease-out"
          style={{
            transform: `translate3d(0, ${skylineY}px, 0)`,
          }}
        >
          <img
            src="/assets/skyline.svg"
            alt=""
            className="block h-auto w-full"
          />
        </div>

        <div
          className="absolute bottom-[-0.5rem] left-1/2 z-0 w-[125vw] opacity-95 transition-transform duration-150 ease-out"
          style={{
            transform: `translate3d(-50%, ${midY}px, 0)`,
          }}
        >
          <img
            src="/assets/midlayer.svg"
            alt=""
            className="block h-auto w-full max-w-none"
          />
        </div>

        <div
          className="absolute bottom-0 left-[-4%] z-[3] h-[72%] w-[122%] overflow-hidden sm:w-[116%] md:h-[94%] md:w-[118%]"
        >
          <Image
            src="/assets/towerhall.svg"
            alt=""
            fill
            priority
            className="object-cover object-left-bottom transition-transform duration-150 ease-out"
            style={{
              transform: `translate3d(0, ${foregroundY}px, 0)`,
            }}
          />
        </div>

        <div
          className="absolute bottom-0 right-[2%] z-[3] hidden h-[72%] w-[54%] min-w-[230px] overflow-hidden md:block md:h-[108%] md:w-[46%]"
        >
          <Image
            src="/assets/statue.svg"
            alt=""
            fill
            priority
            className="object-cover object-right-bottom transition-transform duration-150 ease-out"
            style={{
              transform: `translate3d(0, ${foregroundY}px, 0)`,
            }}
          />
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 top-[calc(100%-0.2rem)] z-[2] h-[10rem] bg-[#31F5FF]  md:h-32"
        style={{
          transform: `translate3d(0, ${foregroundY}px, 0)`,
        }}
      />
    </section>
  );
};

export default HeroSection;
