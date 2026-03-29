import React from "react";
import Image from "next/image";

const SponsorsSection: React.FC = () => {
  return (
    <section id="sponsors" className="relative">
      <div className="container mx-auto px-6 justify-items-center flex flex-col">
        <h2 className="font-bold text-5xl text-[#01404B] mb-16">Sponsors</h2>
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
                style={{ objectPosition: "center" }}
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
  );
};

export default SponsorsSection;
