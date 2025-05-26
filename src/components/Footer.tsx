import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-green justify-center w-full h-[713px] space-y-5">
      <div className="flex flex-col items-center space-y-2">
        <p className="text-dark text-[64px] font-semibold">What's next</p>
        <p className="text-base text-black  w-[458px] text-center">
          Submit better job app — 10x faster. AI cover letter generator, resume
          keyword checker, outreach message writer, and more. Powered by GPT
        </p>

        <div className="h-[44px] px-6 rounded-[12px] bg-transparent hover:bg-dark hover:text-green transition-all ease-in-out cursor-pointer w-max border border-dark text-dark flex items-center justify-center text-base font-semibold">
          Try for free
        </div>
      </div>

      <div className="w-[1126px] flex flex-col justify-between">
        <div className="flex flex-col space-y-3">
          <p className="text-xl font-semibold text-black">Platform</p>
          <div className="flex flex-col space-y-2">
            <p className="text-black cursor-pointer w-max hover:font-semibold transition-all ease-in-out text-base">
              Plans and Prices
            </p>
            <p className="text-black cursor-pointer w-max hover:font-semibold transition-all ease-in-out text-base">
              AI Create Letters
            </p>
            <p className="text-black cursor-pointer w-max hover:font-semibold transition-all ease-in-out text-base">
              AI Resume Checker
            </p>
            <p className="text-black cursor-pointer w-max hover:font-semibold transition-all ease-in-out text-base">
              Resume Templates
            </p>
            <p className="text-black cursor-pointer w-max hover:font-semibold transition-all ease-in-out text-base">
              Sell Templates
            </p>
            <p className="text-black cursor-pointer w-max hover:font-semibold transition-all ease-in-out text-base">
              Blog
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
