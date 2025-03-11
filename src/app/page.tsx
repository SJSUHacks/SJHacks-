import RightArrow from "./components/RightArrow";
export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#FFE98F] to-[#FFDE59] text-[#01404B]">
        <div className="flex items-center justify-center flex-col">
          <h2 className="font-semibold text-xs">April _th to _th, 2025</h2>
          <h1 className="font-extrabold text-4xl">&lt;SJHacks/&gt;</h1>
          <button className="font-medium text-xs bg-[#01404B] bg-opacity-90 py-1 px-5 rounded-md text-[#FFE375] flex items-center gap-x-2">
            Register <RightArrow />
          </button>
        </div>
      </div>
    </div>
  );
}
