import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col space-y-10 pt-[10rem]">
      <div className="flex flex-col space-y-5 items-center justify-center">
        <p className="text-[88px] text-white font-semibold text-center leading-[7rem]">
          <span className="text-green">Win your dream job </span>
          <br />
          with PostJob
        </p>

        <p className="text-base text-gray w-[474px] text-center">
          Submit better job app — 10x faster. AI cover letter generator, resume
          keyword checker, outreach message writer, and more. Powered by GPT
        </p>

        <div className="flex flex-row w-[567px] h-[60px] p-2 rounded-[16px] border border-gray items-center ">
          <input
            className="w-full flex flex-1 pl-3 placeholder:text-gray text-[18px] text-white outline-none focus:outline-none bg-transparent"
            placeholder="Enter Email"
          />
          <div className="h-[44px] w-[175px] px-6 rounded-[12px] bg-green hover:bg-transparent hover:text-white transition-all ease-in-out cursor-pointer border border-green text-black flex items-center justify-center text-base font-semibold">
            Start for free
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
