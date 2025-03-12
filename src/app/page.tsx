import RightArrow from "./components/RightArrow";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="relative bg-gradient-to-b from-[#FFE98F] to-[#FFDE59] text-[#01404B] h-screen">
        {/* SVG Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/design.svg" 
            alt="San Jose Skyline" 
            fill 
            style={{objectFit: "cover", objectPosition: "center"}}
            priority
          />
        </div>
        
        {/* Navigation */}
        <nav className="relative z-10 flex justify-between items-center p-6">
          <div>
            {/* TO-DO: Add logo 
            did we add the logo image yet lol 
            */ }
            <Image src="logo.svg" alt="SJHacks Logo" width={50} height={50} />
          </div>
          <div className="flex gap-8 items-center">
            <Link href="/" className="text-[#01404B] font-medium">Home</Link>
            <Link href="#about" className="text-[#01404B] font-medium">About Us</Link>
            <Link href="#sponsor" className="border-2 border-[#01404B] px-4 py-2 rounded-md text-[#01404B] font-medium">Sponsor Us</Link>
          </div>
        </nav>

        <div className="relative z-10 flex items-center justify-center flex-col pt-24">
          <h2 className="font-semibold text-xs">April 8th - 9th, 2025</h2>
          <h1 className="font-extrabold text-4xl">&lt;SJHacks/&gt;</h1>
          <button className="font-medium text-xs bg-[#01404B] bg-opacity-90 py-1 px-5 rounded-md text-[#FFE375] flex items-center gap-x-2">
            Register <RightArrow />
          </button>
        </div>
      </div>

      {/* About Us Section */}
      <section id="about" className="bg-[#7FECFE] py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start gap-16">
            <div className="md:w-1/3">
              <h2 className="font-bold text-5xl text-[#01404B]">About Us</h2>
            </div>
            <div className="md:w-2/3">
              <p className="text-xl text-[#01404B] leading-relaxed">
                SJHacks is a 24-hour, in-person hackathon in San Jose designed to bring together changemakers from all backgrounds. Whether you're a coder, designer, or just passionate about solving problems, this event offers a space for you to collaborate, innovate, and create solutions that make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="bg-[#7FECFE] py-24">
        <div className="container mx-auto px-6">
          <h2 className="font-bold text-5xl text-[#01404B] mb-16">Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Track cards would go here */}
            {/* This is a placeholder for actual track content */}
          </div>
        </div>
      </section>

      {/* Sponsors Section 
      
      TO-DO:
      - Add sponsor logos
      - plus make it link to sponsor website?
      */}
      <section id="sponsors" className="bg-[#7FECFE] py-24 relative">
        <div className="container mx-auto px-6">
          <h2 className="font-bold text-5xl text-[#01404B] mb-16">Sponsors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            <div className="bg-white p-6 rounded-md flex items-center justify-center">
              <span className="text-center">fetch.ai</span>
            </div>
            <div className="bg-white p-6 rounded-md flex items-center justify-center">
              <span className="text-center">NVIDIA</span>
            </div>
            <div className="bg-white p-6 rounded-md flex items-center justify-center">
              <span className="text-center">hume ai</span>
            </div>
            <div className="bg-white p-6 rounded-md flex items-center justify-center">
              {/* Placeholder for sponsor */}
            </div>
            <div className="bg-white p-6 rounded-md flex items-center justify-center">
              {/* Placeholder for sponsor */}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-md flex items-center justify-center">
              {/* Placeholder for sponsor */}
            </div>
            <div className="bg-white p-6 rounded-md flex items-center justify-center">
              {/* Placeholder for sponsor */}
            </div>
            <div className="bg-white p-6 rounded-md flex items-center justify-center">
              {/* Placeholder for sponsor */}
            </div>
            <div className="bg-white p-6 rounded-md flex items-center justify-center">
              {/* Placeholder for sponsor */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer 
      
      TO-DO:
      - Add footer SVG of the building 
      */}
      <footer className="bg-[#01404B] text-white py-12 text-center">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-6 mb-6">
            <Link href="https://instagram.com" aria-label="Instagram">
              <span className="text-white">Instagram</span>
            </Link>
            <Link href="mailto:contact@sjhacks.org" aria-label="Email">
              <span className="text-white">Email</span>
            </Link>
          </div>
          <p className="text-sm">Made with love, by the SJHacks Team</p>
        </div>
      </footer>
    </div>
  );
}
