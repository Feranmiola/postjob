import React from "react";
import PostJobIcon from "../Icons/PostJobIcon";

const Topbar = () => {
  return (
    <div className="bg-[#161815] w-screen px-10 h-[128px] py-5 flex flex-row items-center justify-between ">
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
    </div>
  );
};

export default Topbar;
