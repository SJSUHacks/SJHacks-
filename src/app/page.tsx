import Navbar from "@/components/Navbar";
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
        {/* <TracksSection /> */}
        <SponsorsSection />
        {/* <FaqSection /> */}
        <Footer />
      </div>
    </div>
  );
}
