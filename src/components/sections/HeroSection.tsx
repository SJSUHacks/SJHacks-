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
  const curveY = -16 * progress;
  const skylineY = -30 * progress;
  const midY = -44 * progress;
  const towerY = -68 * progress;
  const statueY = -86 * progress;
  const heroCopyY = -16 * progress;
  const planeX = 72 * progress;
  const planeY = -20 * progress;
  const cloudDriftA = -14 * progress;
  const cloudDriftB = -20 * progress;
  const cloudDriftC = -12 * progress;

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#F6E99C] to-[#F4DD67]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.36),_rgba(255,255,255,0)_60%)]" />

      <div
        className="pointer-events-none absolute left-[2%] top-[5%] z-10 h-28 w-64 transition-transform duration-150 ease-out md:h-36 md:w-80"
        style={{ transform: `translate3d(0, ${cloudDriftA}px, 0)` }}
        aria-hidden="true"
      >
        <Image
          src="/assets/clouds.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div
        className="pointer-events-none absolute left-[8%] top-[17%] z-10 h-40 w-[34rem] transition-transform duration-150 ease-out md:h-48 md:w-[44rem]"
        style={{ transform: `translate3d(0, ${cloudDriftB}px, 0)` }}
        aria-hidden="true"
      >
        <Image
          src="/assets/clouds.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div
        className="pointer-events-none absolute right-[2%] top-[8%] z-10 h-40 w-[34rem] transition-transform duration-150 ease-out md:h-52 md:w-[48rem]"
        style={{ transform: `translate3d(0, ${cloudDriftC}px, 0)` }}
        aria-hidden="true"
      >
        <Image
          src="/assets/clouds.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div
        className="pointer-events-none absolute left-[22%] top-[41%] z-20 h-14 w-60 transition-transform duration-150 ease-out md:h-16 md:w-72"
        style={{ transform: `translate3d(${planeX}px, ${planeY}px, 0)` }}
        aria-hidden="true"
      >
        <Image
          src="/assets/plane.svg"
          alt=""
          fill
          priority
          className="object-contain"
        />
      </div>

      <div
        className="relative z-20 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 pb-44 pt-24 text-center text-[#01404B] transition-transform duration-150 ease-out md:pt-24"
        style={{
          transform: `translate3d(0, ${heroCopyY}px, 0)`,
        }}
      >
        <h2 className="text-4xl font-bold md:text-6xl">
          April 8th - 9th, 2025
        </h2>
        <h1 className="mt-2 text-[4.8rem] font-extrabold tracking-tight sm:text-[6rem] md:text-[8.8rem]">
          &lt;SJHacks/&gt;
        </h1>
        <div className="mt-5">
          <RegisterButton />
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[76vh] min-h-[500px] w-full md:h-[82vh]"
        aria-hidden="true"
      >
        <div
          className="absolute bottom-[8%] left-0 h-[70%] w-full transition-transform duration-150 ease-out"
          style={{
            transform: `translate3d(0, ${curveY}px, 0)`,
          }}
        >
          <Image
            src="/assets/curve.svg"
            alt=""
            fill
            priority
            className="object-fill object-bottom"
          />
        </div>

        <div
          className="absolute bottom-[0] left-0 h-[48%] w-full transition-transform duration-150 ease-out"
          style={{
            transform: `translate3d(0, ${skylineY}px, 0)`,
          }}
        >
          <Image
            src="/assets/skyline.svg"
            alt=""
            fill
            priority
            className="object-fill object-bottom"
          />
        </div>

        <div
          className="absolute bottom-[0] left-0 h-[27%] w-full opacity-95 transition-transform duration-150 ease-out"
          style={{
            transform: `translate3d(0, ${midY}px, 0)`,
          }}
        >
          <Image
            src="/assets/midlayer.svg"
            alt=""
            fill
            priority
            className="object-fill object-bottom"
          />
        </div>

        <div
          className="absolute bottom-[-2%] left-[-2%] h-[58%] w-[96%] transition-transform duration-150 ease-out sm:w-[84%] md:h-[65%] md:w-[78%]"
          style={{
            transform: `translate3d(0, ${towerY}px, 0)`,
          }}
        >
          <Image
            src="/assets/towerhall.svg"
            alt=""
            fill
            priority
            className="object-contain object-bottom object-left"
          />
        </div>

        <div
          className="absolute bottom-[-2%] right-[-1%] h-[50%] w-[36%] min-w-[200px] transition-transform duration-150 ease-out md:h-[62%] md:w-[28%]"
          style={{
            transform: `translate3d(0, ${statueY}px, 0)`,
          }}
        >
          <Image
            src="/assets/statue.svg"
            alt=""
            fill
            priority
            className="object-contain object-bottom object-right"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
