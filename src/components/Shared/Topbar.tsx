import React from "react";
import PostJobIcon from "../Icons/PostJobIcon";

const Topbar = () => {
  return (
    <div className="bg-[#161815] bg-opacity-75 w-screen px-10 h-[128px] py-5 flex flex-row items-center justify-between ">
      <div className="flex flex-row  items-center space-x-3">
        <PostJobIcon />

        <div className="flex flex-row items-center space-x-4">
          <p className="text-base text-[#909090] cursor-pointer hover:text-white transition-all ease-in-out font-semibold">
            AI Cover Letter Generator
          </p>
          <p className="text-base text-[#909090] cursor-pointer hover:text-white transition-all ease-in-out font-semibold">
            Resume Template
          </p>
          <p className="text-base text-[#909090] cursor-pointer hover:text-white transition-all ease-in-out font-semibold">
            Pricing
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center space-x-5">
        <div className="h-[44px] w-max px-6 rounded-[12px] bg-transparent hover:bg-green hover:text-black transition-all ease-in-out cursor-pointer border border-green text-white flex items-center justify-center text-base font-semibold">
          Sign In
        </div>

        <div className="h-[44px] w-max px-6 rounded-[12px] bg-green hover:bg-transparent hover:text-white transition-all ease-in-out cursor-pointer border border-green text-black flex items-center justify-center text-base font-semibold">
          Get Started
        </div>
      </div>
    </div>
  );
};

export default Topbar;
