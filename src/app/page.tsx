import RightArrow from "../components/RightArrow";
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
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex justify-between items-center p-6">
          <div>
            <Image
              src="/assets/logo.svg"
              alt="SJHacks Logo"
              width={50}
              height={50}
            />
          </div>
          <div className="flex gap-8 items-center">
            <Link href="/" className="text-[#01404B] font-medium">
              Home
            </Link>
            <Link href="#about" className="text-[#01404B] font-medium">
              About Us
            </Link>
            <Link
              href="#sponsor"
              className="border-2 border-[#01404B] px-4 py-2 rounded-md text-[#01404B] font-medium hover:bg-[#01404B] hover:text-[#ffe88a]"
            >
              Sponsor Us
            </Link>
          </div>
        </nav>

        <div className="relative z-10 flex items-center justify-center flex-col pt-12 space-y-3">
          <h2 className="font-semibold text-2xl">April 8th - 9th, 2025</h2>
          <h1 className="font-extrabold text-6xl">&lt;SJHacks/&gt;</h1>
          <button className="group font-medium text-2xl bg-[#01404B] bg-opacity-90 py-2 px-10 rounded-md text-[#FFE375] flex items-center gap-x-2">
            Register
            <RightArrow className="transition-transform transform group-hover:translate-x-2" />
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#31F5FF] to-[#B0FBFF]">
        {/* About Us Section */}
        <section id="about" className="pt-56 pb-36">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-start gap-16">
              <div className="md:w-1/3">
                <h2 className="font-bold text-5xl text-[#01404B]">About Us</h2>
              </div>
              <div className="md:w-2/3">
                <p className="text-xl text-[#01404B] leading-relaxed">
                  SJHacks is a 24-hour, in-person hackathon in San Jose designed
                  to bring together changemakers from all backgrounds. Whether
                  you're a coder, designer, or just passionate about solving
                  problems, this event offers a space for you to collaborate,
                  innovate, and create solutions that make a difference.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Tracks Section */}
        <section id="tracks" className="py-36">
          <div className="container mx-auto px-6">
            <h2 className="font-bold text-5xl text-[#01404B] mb-16">Tracks</h2>
            <p className="text-xl text-[#01404B] leading-relaxed text-center">
              Coming Soon!
            </p>
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
        <section id="sponsors" className="py-36 relative">
          <div className="container mx-auto px-6">
            <h2 className="font-bold text-5xl text-[#01404B] mb-16">
              Sponsors
            </h2>
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
        {/* Footer */}
        <footer className="text-white text-center">
          <Image
            src="/assets/skyline.svg"
            alt="Skyline Sillhouette"
            width={100}
            height={100}
            className="w-full"
          />
          <div className="bg-[#0097B2] mx-auto pt-36 pb-12 -mt-1">
            <div className="flex justify-center gap-6 mb-2">
              <Link href="https://instagram.com" aria-label="Instagram">
                <Image
                  src="/assets/instagram.svg"
                  alt="Instagram"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="mailto:contact@sjhacks.org" aria-label="Email">
                <Image
                  src="/assets/email.svg"
                  alt="Email"
                  width={42}
                  height={42}
                />
              </Link>
            </div>
            <p className="text-base">Made with love, by the SJHacks Team</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
