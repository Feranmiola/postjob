import React from "react";

const Submit = () => {
  return (
    <div className="w-full h-[1021px] p-10 flex items-center justify-center">
      <div className="flex items-center justify-end flex-col space-y-3 w-full h-full bg-[#6DE754] rounded-[12px]">
        <div className="flex flex-col space-y-3">
          <p className="font-semibold text-center text-black text-[48px] leading-[4rem]">
            Submit better job <br /> applications
          </p>
          <p className="text-black leading-none font-semibold text-[152px]">
            10x faster
          </p>
          <p className="text-center text-black text-base">
            AI cover letter generator, resume keyword checker, outreach
            <br /> message writer, and more. Powered by GPT
          </p>
        </div>

        <img
          src="https://res.cloudinary.com/debiu7z1b/image/upload/v1748360798/Frame_2_yv0v70.webp"
          className="w-auto h-[534px]"
        />
      </div>
    </div>
  );
};

export default Submit;
