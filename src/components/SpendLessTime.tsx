import React from "react";
import ScannerIcon from "./Icons/ScannerIcon";
import DocumentIcon from "./Icons/DocumentIcon";
import NetworkIcon from "./Icons/NetworkIcon";

const SpendLessTime = () => {
  return (
    <div className="flex flex-col items-center space-y-10 py-10">
      <div className="flex flex-col items-center space-y-3">
        <p className="text-[48px] text-white font-semibold text-center leading-[4rem]">
          Spend less time <br />
          looking for work
        </p>

        <p className="text-base text-gray w-[358px] text-center">
          We'll help you through the hardest part of your job search.
        </p>

        <div className="h-[44px] w-[212px] rounded-[12px] bg-transparent hover:bg-green hover:text-black transition-all ease-in-out cursor-pointer border border-green text-white flex items-center justify-center text-base font-semibold">
          Create an account
        </div>
      </div>

      <div className="flex flex-col space-y-5 items-center">
        <div className="flex flex-row items-center space-x-5">
          <div className="w-[361px] h-[204px] rounded-[12px] bg-[#1E201D] p-5 flex flex-col justify-between">
            <DocumentIcon />
            <p className="text-white text-base font-semibold">
              AI Cover Letter Generator
            </p>
            <p className="text-base text-gray">
              The AI Cover Letter Generator is a tool that uses artificial
              intelligence algorithms to create personalized cover letters for
              job applicants.
            </p>
          </div>
          <div className="w-[361px] h-[204px] rounded-[12px] bg-[#1E201D] p-5 flex flex-col justify-between">
            <NetworkIcon />
            <p className="text-white text-base font-semibold">
              Smart Personalization
            </p>
            <p className="text-base text-gray">
              Smart Personalization refers to the use of data and technology to
              deliver tailored experiences and content to individual customers
              or users.
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
        <div className="flex flex-row items-center space-x-5">
          <div className="w-[361px] h-[204px] rounded-[12px] bg-[#1E201D] p-5 flex flex-col justify-between">
            <DocumentIcon />
            <p className="text-white text-base font-semibold">
              AI Cover Letter Generator
            </p>
            <p className="text-base text-gray">
              The AI Cover Letter Generator is a tool that uses artificial
              intelligence algorithms to create personalized cover letters for
              job applicants.
            </p>
          </div>
          <div className="w-[361px] h-[204px] rounded-[12px] bg-[#1E201D] p-5 flex flex-col justify-between">
            <NetworkIcon />
            <p className="text-white text-base font-semibold">
              Smart Personalization
            </p>
            <p className="text-base text-gray">
              Smart Personalization refers to the use of data and technology to
              deliver tailored experiences and content to individual customers
              or users.
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
    </div>
  );
};

export default SpendLessTime;
