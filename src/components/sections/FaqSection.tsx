import React from "react";
import Placeholder from "../Placeholder";

const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="relative">
      <div className="container mx-auto px-6 pt-36">
        <div className="flex flex-col items-start gap-16">
          <div>
        <h2 className="font-bold text-5xl text-[#01404B]">FAQ</h2>
          </div>

          <div className="flex flex-col justify-center gap-5 text-xl text-black">
        <div className="flex flex-col">
          <div className="font-semibold">
            Q: Will this hackathon be open to other students?
          </div>
          <div>
            A: This event is open to all currently enrolled students
            attending an accredited university or community college who are
            +18. Priority registration will be given to SJSU students
            during the initial registration period.
          </div>
        </div>

        <div className="flex flex-col">
          <div className="font-semibold">Q: Is this an overnight hackathon?</div>
          <div>
            A: Yes! This hackathon will be overnight at Guildhouse. Please
            be sure to prepare hotel or commute arrangements, or a sleep
            bag if you choose to sleep at the location.
          </div>
        </div>

        <div className="flex flex-col">
          <div className="font-semibold">
            Q: How many team members are permitted?
          </div>
          <div>
            A: You may be in a maximum team of 4. You may also have the
            option to work on your own.
          </div>
        </div>

        <div className="flex flex-col">
          <div className="font-semibold">
            Q: Am I allowed to bring guests to the hackathon?
          </div>
          <div>
            A: Only competitors at the event with a valid badge (given at
            the event) will be allowed entry to the event. Guests are
            prohibited from participating.
          </div>
        </div>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto flex flex-col justify-items-center px-6">
        <h2 className="mb-16 font-bold text-5xl text-[#01404B]">FAQ</h2>
        <div className="mt-20 flex w-full">
          <Placeholder />
        </div>
        <p className="mt-20 text-center text-xl leading-relaxed text-[#01404B]">
          Coming Soon!
        </p>
      </div> */}
    </section>
  );
};

export default FaqSection;
