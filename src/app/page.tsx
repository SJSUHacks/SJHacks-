import Navbar from "@/components/Navbar";
// import RightArrow from "../components/RightArrow";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Placeholder from "@/components/Placeholder";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FaqSection from "@/components/sections/FaqSection";
import TracksSection from "@/components/sections/TracksSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="home">
      <Navbar />
      <HeroSection />
      <div className="bg-gradient-to-b from-[#31F5FF] to-[#B0FBFF] flex flex-col gap-20">
        <AboutSection />
        <FaqSection />
        <TracksSection />
        <SponsorsSection />
        <Footer />
      </div>
    </div>
  );
}
