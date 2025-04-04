"use client";
import { JSX, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="relative z-10 flex justify-between items-center p-6">
      {/* Logo */}
      <div className="flex max-w-[30%] flex-row gap-3 items-center">
        <Image
          src="/assets/logo.svg"
          alt="SJhacks Logo"
          className="object-contain w-[35%] md:w-[10%]"
          width={50}
          height={50}
        />
         <Image
          src="/assets/ACM-logo.png"
          alt="ACM Logo"
          className="object-contain w-[50%] md:w-[20%]"
          width={80}
          height={80}
        />
         <Image
          src="/assets/IDEASlogoblack.png"
          alt="IDEAS Logo"
          className="object-contain  md:w-[50%]"
          width={100}
          height={100}
        />
         <Image
          src="/assets/SVCE_LogoBLACK.png"
          alt="SVCE Logo"
          className="object-contain "
          width={200}
          height={100}
        />
      
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center">
        <Link href="#home" className="text-[#01404B] font-medium text-xl">
          Home
        </Link>
        <Link href="#about" className="text-[#01404B] font-medium text-xl">
          About Us
        </Link>
        <a
          href="mailto:organizer@sjhacks.com"
          target="_blank"
          className="border-2 border-[#01404B] px-4 py-2 rounded-md text-[#01404B] font-medium text-xl transition-colors ease-in-out duration-300 hover:bg-[#01404B] hover:text-[#ffe88a]"
        >
          Sponsor Us
        </a>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden text-[#01404B] focus:outline-none z-20 sticky top-7 right-7"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle Navigation Menu"
      >
        {isOpen ? (
          <IoClose size={36} className="text-white" />
        ) : (
          <RxHamburgerMenu size={32} />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 w-screen h-screen bg-[#026374] flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible z-10" : "ease-in-out opacity-0 invisible z-0"
        }`}
      >
        <Link
          href="#home"
          className="text-white font-medium text-2xl"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          href="#about"
          className="text-white font-medium text-2xl"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
        <a
          href="mailto:organizer@sjhacks.com"
          target="_blank"
          className="border-2 border-white px-4 py-2 rounded-md text-white font-medium text-2xl"
          onClick={() => setIsOpen(false)}
        >
          Sponsor Us
        </a>
      </div>
    </nav>
  );
}
