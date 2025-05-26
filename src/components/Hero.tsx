import React from "react";
import DocumentIcon from "./Icons/DocumentIcon";
import NetworkIcon from "./Icons/NetworkIcon";
import ScannerIcon from "./Icons/ScannerIcon";

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

      <div className="flex flex-row items-center space-x-5">
        <div className="w-[361px] h-[204px] rounded-[12px] bg-[#1E201D] p-5 flex flex-col justify-between">
          <DocumentIcon />
          <p className="text-white text-base font-semibold">
            AI Cover Letter Generator
          </p>
          <p className="text-base text-gray">
            The AI Cover Letter Generator is a tool that uses artificial
            intelligence algorithms to create personalized cover letters for job
            applicants.
          </p>
        </div>
        <div className="w-[361px] h-[204px] rounded-[12px] bg-[#1E201D] p-5 flex flex-col justify-between">
          <NetworkIcon />
          <p className="text-white text-base font-semibold">
            Smart Personalization
          </p>
          <p className="text-base text-gray">
            Smart Personalization refers to the use of data and technology to
            deliver tailored experiences and content to individual customers or
            users.
          </p>
        </div>
        <div className="w-[361px] h-[204px] rounded-[12px] bg-[#1E201D] p-5 flex flex-col justify-between">
          <ScannerIcon />
          <p className="text-white text-base font-semibold">Resume Scanner</p>
          <p className="text-base text-gray">
            A resume scanner is a software application that uses optical
            character recognition (OCR) technology to extract and analyze data
            from resumes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
