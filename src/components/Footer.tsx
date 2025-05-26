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

        <div className="h-[44px] w-max px-6 rounded-[12px] bg-transparent hover:bg-dark hover:text-green transition-all ease-in-out cursor-pointer border border-dark text-dark flex items-center justify-center text-base font-semibold">
          Try for free
        </div>
      </div>
    </div>
  );
};

export default Footer;
