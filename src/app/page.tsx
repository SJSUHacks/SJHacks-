import Navbar from "@/components/Navbar";
// import RightArrow from "../components/RightArrow";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import RegisterButton from '@/components/sections/RegisterButton';
import Placeholder from "@/components/Placeholder";


export default function Home() {
 

  return (
    <div id="home" >
       {/* Navigation */}
        <div className="sticky top-0 bg-gradient-to-b from-[#FFF3B8] to-[#FFE88D] z-50 ">
            <Navbar />
        </div>
      
      <div className="relative bg-gradient-to-b from-[#FFF3B8] to-[#FFE88D] text-[#01404B] h-screen">
        {/* SVG Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/design.svg"
            alt="San Jose Skyline"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

  
    
        <div className="relative flex items-center justify-center flex-col pt-12 space-y-3">
          <h2 className="font-semibold text-2xl">April 26th - 27th, 2025</h2>
           
          <h1 className="font-extrabold text-7xl animate-bounce-sm">&lt;SJHacks/&gt;</h1>
          <h2 className=" text-xl md:text-2xl text-center">BBC 032 @ San José State University + Zoom</h2>
          <RegisterButton />
          
        </div>
      </div>
      
      <div className="bg-gradient-to-b from-[#31F5FF] to-[#B0FBFF] flex flex-col gap-20">
      
        {/* About Us Section */}
        <section id="about" className="pt-36">
       
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-start gap-16">
              <div className="md:w-1/3">
                <h2 className="font-bold text-5xl text-[#01404B]">About Us</h2>
                
              </div>
              <div className="md:w-2/3">
                <p className="text-xl text-[#01404B] leading-relaxed">  
                  SJHacks is a 24-hour hybrid hackathon at San José State University, designed
                  to bring together changemakers from all backgrounds. Whether
                  you are a coder, designer, or just passionate about solving
                  problems, this event offers a space for you to collaborate,
                  innovate, and create solutions that make a difference.
                </p>
             
              </div>

            </div>
              
           
            

          </div>
          
          
        </section>

        {/* Tracks Section */}
        <section id="tracks" className="">
          <div className="container mx-auto px-6 flex justify-center flex-col">
            <h2 className="font-bold text-5xl text-[#01404B] mb-16">Tracks</h2>
            
            <div className="flex w-full mt-20">
              <Placeholder/>
            </div>
            
         
            
            <p className="text-xl text-[#01404B] leading-relaxed text-center mt-20">
                 
               {"We're working on it!"}
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

        <section id="sponsors" className="relative">
          <div className="container mx-auto px-6  flex flex-col">
            <h2 className="font-bold text-5xl text-[#01404B] mb-16">
              Sponsors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-16 justify-items-center">
              {/* <div className="bg-white p-8 rounded-2xl shadow-md flex items-center justify-center min-h-[120px]">
                <a 
                  href="https://fetch.ai/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:opacity-80 transition-opacity w-full h-full flex items-center justify-center"
                >
                  <Image 
                    src="/assets/sponsors/fetchai.png" 
                    alt="fetch.ai logo" 
                    width={300}
                    height={100}
                    className="object-cover scale-150"
                    style={{ objectPosition: 'center' }}
                  />
                </a>
              </div> */}

              <div className="bg-white p-8 rounded-2xl shadow-md flex items-center justify-center min-h-[120px]">
                <a 
                  href="https://www.sprint.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:opacity-80 transition-opacity w-full h-full flex items-center justify-center"
                >
                  <Image 
                    src="/assets/sponsors/sprintlogo.png" 
                    alt="Sprint logo" 
                    width={300} 
                    height={100}
                    className="object-contain"
                  />
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md flex items-center justify-center min-h-[120px]">
                <a 
                  href="https://www.sanjoseca.gov/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:opacity-80 transition-opacity w-full h-full flex items-center justify-center"
                >
                  <Image 
                    src="/assets/sponsors/citysanjose.png" 
                    alt="City of San Jose logo" 
                    width={300} 
                    height={100} 
                    className="object-contain"
                  />
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md flex items-center justify-center min-h-[120px]">
                <a 
                  href="https://www.monsterenergy.com/en-us/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:opacity-80 transition-opacity w-full h-full flex items-center justify-center"
                >
                  <Image 
                    src="/assets/sponsors/monster.png" 
                    alt="Monster Energy logo" 
                    width={300}
                    height={100}
                    className="object-cover scale-150"
                    style={{ objectPosition: 'center' }}
                  />
                </a>
              </div>

           {/* Remaining sponsor card */}

           {/** 
            *  <div className="bg-white p-8 rounded-2xl shadow-md flex items-center justify-center min-h-[120px]">
            *  
            * </div>
           */}   
           
            </div>

          {/* Next row of sponsor cards */}

          {/*   
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-md flex items-center justify-center min-h-[120px]">
               
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md flex items-center justify-center min-h-[120px]">
               
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md flex items-center justify-center min-h-[120px]">
               
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md flex items-center justify-center min-h-[120px]">
              
              </div>
            </div>  */}

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
              <Link href="https://www.instagram.com/sjhacks._/" aria-label="Instagram">
                <FaInstagram size={42} />
              </Link>
              <Link href="mailto:contact@sjhacks.org" aria-label="Email">
                <MdOutlineEmail size={42} />
              </Link>
            </div>
            <p className="text-base">Made with love, by the SJHacks Team</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
