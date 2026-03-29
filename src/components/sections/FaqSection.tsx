import React from "react";

const FaqSection: React.FC = () => {
  return (
    <section id="FAQ" className="">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start gap-16">
          <div className="">
            <h2 className="font-bold text-5xl text-[#01404B]">FAQ</h2>
          </div>
          <div className="flex flex-col gap-5 justify-center text-black text-xl">
            <div className="flex flex-col">
              <div className="font-semibold">
                Q: Is it mandatory to be present at the Zoom kickoff?
              </div>
              <div className="">
                A: There must be at least one member per team to be present at
                the Zoom for its duration.
              </div>
            </div>

            <div className="flex flex-col">
              <div className="font-semibold">
                Q: Can I invite someone off-campus to the hackathon?
              </div>
              <div className="">
                A: Unfortunately, this hackathon is exclusive to SJSU students
                only.
              </div>
            </div>

            <div className="flex flex-col">
              <div className="font-semibold">Q: When are submissions due?</div>
              <div className="">
                A: Submissions are due Sunday April 27th @ 10:00 AM. A Devpost
                link will be provided.
              </div>
            </div>

            <div className="flex flex-col">
              <div className="font-semibold">
                Q: I registered for the hackathon, but I don&apos;t have a team
                yet. Can I still participate?
              </div>
              <div className="">
                A: Absolutely! Even if you don&apos;t have a team, The Discord
                can be used for team formation and networking.
              </div>
            </div>

            <div className="flex flex-col">
              <div className="font-semibold">
                Q: When will the tracks be announced?
              </div>
              <div className="">
                A: Tracks will be revealed during the Zoom kickoff.
              </div>
            </div>

            <div className="flex flex-col">
              <div className="font-semibold">
                Q: Will everyone present their projects?
              </div>
              <div className="">
                A: Once submitted, the top teams will be selected and announced
                to move to the final judging round.
              </div>
            </div>

            <div className="flex flex-col">
              <div className="font-semibold">
                Q: I didn&apos;t make the top bracket. Can I watch the finals
                in-person?
              </div>
              <div className="">
                A: Due to capacity, we are unable to permit audience members to
                watch in-person. However, we&apos;ll be live streaming the event
                for everyone to watch!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
