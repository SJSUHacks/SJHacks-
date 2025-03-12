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
      <div>
        <Image
          src="/assets/logo.svg"
          alt="SJHacks Logo"
          width={50}
          height={50}
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center">
        <Link href="/" className="text-[#01404B] font-medium text-2xl">
          Home
        </Link>
        <Link href="#about" className="text-[#01404B] font-medium text-2xl">
          About Us
        </Link>
        <Link
          href="#sponsor"
          className="border-2 border-[#01404B] px-4 py-2 rounded-md text-[#01404B] font-medium text-2xl hover:bg-[#01404B] hover:text-[#ffe88a]"
        >
          Sponsor Us
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden text-[#01404B] focus:outline-none z-20 fixed top-7 right-7"
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
        className={`fixed inset-0 w-screen h-screen bg-[#026374] flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible z-10" : "opacity-0 invisible"
        }`}
      >
        <Link
          href="/"
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
        <Link
          href="#sponsor"
          className="border-2 border-white px-4 py-2 rounded-md text-white font-medium text-2xl"
          onClick={() => setIsOpen(false)}
        >
          Sponsor Us
        </Link>
      </div>
    </nav>
  );
}
