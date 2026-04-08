import React from "react";
import Placeholder from "../Placeholder";

const TracksSection: React.FC = () => {
  return (
    <section id="tracks" className="">
      <div className="container mx-auto px-6 pt-36 flex justify-center flex-col">
        <h2 className="font-bold text-5xl text-[#01404B] mb-16">Tracks</h2>

        {/* <div className="flex w-full mt-20">
          <Placeholder />
        </div>

        <p className="text-xl text-[#01404B] leading-relaxed text-center mt-20">
          {"Coming Soon!"}
        </p> */}
        <>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Track 1: 3D/CGI",
                question: "How can we accelerate and simplify the 3D/CGI pipeline?",
                description:
                  "3D creation tools like Blender, Autodesk Maya, and AutoCAD are incredibly powerful, but can often be complex, time-consuming, and intimidating for new users. This track challenges you to design add-ons, plugins, or tools that streamline the workflow and reduce friction in the 3D pipeline.",
              },
              {
                title: "Track 2: Digital Content Creation",
                question: "How can we empower digital artists to realize their creative vision fully?",
                description:
                  "Digital artists use tools like Adobe Creative Cloud, GIMP, and DaVinci Resolve to create stunning graphics, illustrations, or social media content, but many workflows remain manual, fragmented, or constrained by technical complexity. This track focuses on enhancing the creative experience and enabling artists to work more fluidly and expressively. Enhance creativity, not replace it, by reducing friction between imagination and execution.",
              },
              {
                title: "Track 3: Game Development",
                question: "What parts of the game development pipeline can we accelerate or improve?",
                description:
                  "Game development is a multidisciplinary process involving design, art, programming, physics, and storytelling. Engines like Unreal Engine 5, Unity, and Godot provide powerful capabilities, but development can still be slow and complex. This track invites you to build tools that streamline or enhance any part of the game dev pipeline. Help developers build, test, and iterate on games faster and more efficiently!",
              },
              {
                title: "Track 4: DIY Software",
                question: "How can we build accessible, secure software that empowers independent creatives?",
                description:
                  "Independent creators often rely on powerful tools, but many come with trade-offs, such as high costs, limited transparency, cloud dependency, or weak data protection. In today’s digital landscape, creative work is vulnerable to theft, leaks, unauthorized access, and platform lock-in. This track challenges you to build original software that enables creativity while also protecting it.",
              },
            ].map((track) => (
              <article
                key={track.title}
                className="rounded-2xl border border-[#01404B]/15 bg-white p-8 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold text-[#01404B]">{track.title}</h3>
                <p className="mt-4 text-lg font-medium text-[#01606F]">{track.question}</p>
                <p className="mt-4 leading-relaxed text-[#01404B]/80">{track.description}</p>
              </article>
            ))}
          </div>
        </>
      </div>
    </section>
  );
};

export default TracksSection;
