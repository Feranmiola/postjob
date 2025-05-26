import React from "react";

const SpendLessTime = () => {
  return (
    <div className="flex flex-col items-center space-y-10">
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
    </div>
  );
};

export default SpendLessTime;
