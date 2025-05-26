import React from "react";
import InstagramIcon from "./Icons/InstagramIcon";
import Facebook from "./Icons/Facebook";
import LinkedinIcon from "./Icons/LinkedinIcon";
import TelegramIcon from "./Icons/TelegramIcon";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-green justify-center w-full h-[713px] space-y-12">
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

      <div className="w-[1126px] flex flex-row justify-between">
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

        <div className="flex flex-col space-y-3">
          <p className="text-xl font-semibold text-black">Features</p>
          <div className="flex flex-col space-y-2">
            <p className="text-black cursor-pointer w-max hover:font-semibold transition-all ease-in-out text-base">
              AI Cover Letter Creator
            </p>
            <p className="text-black cursor-pointer w-max hover:font-semibold transition-all ease-in-out text-base">
              Resume Keywords Optimizer
            </p>
            <p className="text-black cursor-pointer w-max hover:font-semibold transition-all ease-in-out text-base">
              ATS Resume Checker
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <p className="text-xl font-semibold text-black">Resources</p>
          <div className="flex flex-col space-y-2 w-[294px]">
            <p className="text-black cursor-pointer w-full hover:font-semibold transition-all ease-in-out text-base">
              4 AI Tools for Applying a Job
            </p>
            <p className="text-black cursor-pointer w-full hover:font-semibold transition-all ease-in-out text-base">
              How to optimize Resume keywords
            </p>
            <p className="text-black cursor-pointer w-full hover:font-semibold transition-all ease-in-out text-base">
              Why you should use Chat GPT for create Resume
            </p>
            <p className="text-black cursor-pointer w-full hover:font-semibold transition-all ease-in-out text-base">
              What should you include in a Cover Letter
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <p className="text-xl font-semibold text-black">Support</p>
          <p className="text-black cursor-pointer w-full hover:font-semibold transition-all ease-in-out text-base">
            support@gmail.com
          </p>
          <div className="flex flex-row items-center space-x-5">
            <div className="cursor-pointer hover:scale-125 hover:rotate-12 transition-all ease-in-out">
              <InstagramIcon />
            </div>
            <div className="cursor-pointer hover:scale-125 hover:rotate-12 transition-all ease-in-out">
              <Facebook />
            </div>
            <div className="cursor-pointer hover:scale-125 hover:rotate-12 transition-all ease-in-out">
              <LinkedinIcon />
            </div>
            <div className="cursor-pointer hover:scale-125 hover:rotate-12 transition-all ease-in-out">
              <TelegramIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1192px] border-t-dark border-t pt-5 flex items-center justify-center">
        <p className="text-[#1F392C] text-[16px]">
          © Copywriting | All Rights Reserved |{" "}
          <span className="cursor-pointer hover:font-semibold">
            Terms of Use
          </span>{" "}
          |<span className="cursor-pointer hover:font-semibold">Privacy</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
