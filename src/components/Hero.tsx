import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col space-y-10 pt-[10rem]">
      <div className="flex flex-col space-y-3 items-center justify-center">
        <p className="text-[88px] text-white font-semibold text-center leading-[7rem]">
          <span className="text-green">Win your dream job </span>
          <br />
          with PostJob
        </p>

        <p className="text-base text-gray w-[474px] text-center">
          Submit better job app — 10x faster. AI cover letter generator, resume
          keyword checker, outreach message writer, and more. Powered by GPT
        </p>
      </div>
    </div>
  );
};

export default Hero;
