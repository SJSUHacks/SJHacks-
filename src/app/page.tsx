import Navbar from "@/components/Navbar";
// import RightArrow from "../components/RightArrow";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
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
          <h2 className=" text-xl md:text-2xl text-center">Student Union Meeting Room 4B @ San José State University + Zoom</h2>
         
          
        </div>
      </div>
      
      <div className="bg-gradient-to-b from-[#31F5FF] to-[#B0FBFF] flex flex-col gap-20">
      
        {/* About Us Section */}
        <section id="about" className="pt-36">
       
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-start gap-16">
              <div className="">
                <h2 className="font-bold text-5xl text-[#01404B]">About Us</h2>
                
              </div>
              <div className="flex">
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

        <section id="FAQ" className="">
       
       <div className="container mx-auto px-6">
         <div className="flex flex-col items-start gap-16">
           <div className="">
             <h2 className="font-bold text-5xl text-[#01404B]">FAQ</h2>
             
           </div>
           <div className="flex flex-col gap-5 justify-center text-black text-xl">

            <div className="flex flex-col">
              <div className="font-semibold">Q: Is it mandatory to be present at the Zoom kickoff?</div>
              <div className="">A: There must be at least one member per team to be present at the Zoom for its duration.</div>
            </div>

            <div className="flex flex-col">
              <div className="font-semibold">Q: Can I invite someone off-campus to the hackathon?</div>
              <div className="">A: Unfortunately, this hackathon is exclusive to SJSU students only.</div>
            </div>

            <div className="flex flex-col">
              <div className="font-semibold">Q: When are submissions due?</div>
              <div className="">A: Submissions are due Sunday April 27th @ 10:00 AM. A Devpost link will be provided.</div>
            </div>

            <div className="flex flex-col">
              <div className="font-semibold">Q: I registered for the hackathon, but I don&apos;t have a team yet. Can I still participate?</div>
              <div className="">A: Absolutely! Even if you don&apos;t have a team, The Discord can be used for team formation and networking.</div>
            </div>

            <div className="flex flex-col">
              <div className="font-semibold">Q: When will the tracks be announced?</div>
              <div className="">A: Tracks will be revealed during the Zoom kickoff.</div>
            </div>

            <div className="flex flex-col">
              <div className="font-semibold">Q: Will everyone present their projects?</div>
              <div className="">A: Once submitted, the top teams will be selected and announced to move to the final judging round.</div>
            </div>

            <div className="flex flex-col">
              <div className="font-semibold">Q: I didn&apos;t make the top bracket. Can I watch the finals in-person?</div>
              <div className="">A: Due to capacity, we are unable to permit audience members to watch in-person. However, we&apos;ll be live streaming the event for everyone to watch!</div>
            </div>
            
           </div>
            </div>
       </div>
     </section>

{/*        
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
            
            </div>
          </div>
          */}
       {/* </section> */}
     
     {/* Sponsors Section 
      
      TO-DO:
      - Add sponsor logos
      - plus make it link to sponsor website?
      */}

        <section id="sponsors" className="relative">
          <div className="container mx-auto px-6 justify-items-center flex flex-col">
            <h2 className="font-bold text-5xl text-[#01404B] mb-16">
              Sponsors
            </h2>
            <div className="flex flex-row justify-center gap-8 mb-16">
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
              </div>  */}

              {/* <div className="bg-white p-8 rounded-2xl shadow-md flex items-center justify-center min-h-[120px]">
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
              </div> */}

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
        <Placeholder/>
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
