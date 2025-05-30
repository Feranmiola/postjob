import React from "react";
import Option1 from "./Icons/Option1";
import Option2 from "./Icons/Option2";
import Option3 from "./Icons/Option3";

const Options = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="h-[1080px] w-full bg-green flex flex-col items-center justify-center">
        <div className="flex flex-row items-center space-x-5">
          <div className="flex flex-col space-y-3 w-[456px]">
            <p className="font-semibold leading-tight text-[48px] text-black">
              Free AI cover letter generator powered by GPT
            </p>
            <p className="text-black text-base">
              A free AI cover letter generator powered by GPT is a tool that
              uses artificial intelligence and natural language processing to
              help job seekers create customized and effective cover letters.
            </p>
            <div className="h-[44px] px-6 rounded-[12px] bg-transparent hover:bg-dark hover:text-green transition-all ease-in-out cursor-pointer w-max border border-dark text-dark flex items-center justify-center text-base font-semibold">
              Try For free Now
            </div>
          </div>
          <Option1 />
        </div>

        <div className="flex flex-row items-center space-x-5">
          <Option2 />

          <div className="flex flex-col space-y-3 w-[456px]">
            <p className="font-semibold leading-tight text-[48px] text-black">
              Optimize the keywords in your resume
            </p>
            <p className="text-black text-base">
              By optimizing keywords in your resume, you can increase your
              chances of getting noticed by recruiters and landing interviews
              for the jobs you want.
            </p>
            <div className="h-[44px] px-6 rounded-[12px] bg-transparent hover:bg-dark hover:text-green transition-all ease-in-out cursor-pointer w-max border border-dark text-dark flex items-center justify-center text-base font-semibold">
              Optimize your Resume
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[517px] items-center justify-center flex ">
        <div className="flex flex-row items-center w-full justify-center space-x-5">
          <div className="flex flex-col space-y-3 w-[456px]">
            <p className="font-semibold leading-tight text-[48px] text-white">
              Optimize the keywords in your resume
            </p>
            <p className="text-[#909090] text-base">
              By optimizing keywords in your resume, you can increase your
              chances of getting noticed by recruiters and landing interviews
              for the jobs you want.
            </p>
            <div className="h-[44px] px-6 w-max rounded-[12px] bg-transparent hover:bg-green hover:text-black transition-all ease-in-out cursor-pointer border border-green text-white flex items-center justify-center text-base font-semibold">
              Create an account
            </div>
          </div>
          <Option3 />
        </div>
      </div>
    </div>
  );
};

export default Options;
