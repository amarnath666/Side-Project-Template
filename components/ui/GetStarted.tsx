import React from "react";
import AvatarList from "./AvatarList";
import Counter from "./Counter";
import PrimaryButton from "./PrimaryButton";


export default function GetStarted() {
  return (
    <div className="max-w-[1366px] w-full mx-auto px-4 md:px-6 lg:px-15">
      <div className="bg-[#D2E5FF] py-8 md:py-12 lg:py-[80px] flex flex-col lg:flex-row items-center justify-between px-4 md:px-12 lg:px-[80px] rounded-[30px]">
        {/* Text Content */}
        <div className="flex flex-col lg:flex-1 lg:pr-8 text-center lg:text-left items-center lg:items-start">
          <h1 className="text-2xl md:text-[48px] font-bold text-gray-900 sm:mb-4 leading-[100%] tracking-[0em]">
            Trusted by 500+ Users
          </h1>

          <p className="text-lg mt-4 mb-8 max-w-md leading-[120%] tracking-[0em] text-gray-800">
            Join a thriving community that's already discovering something new —
            connect, explore, and grow with us.
          </p>
          <div className="mb-8">
            <AvatarList />
            </div>
  <PrimaryButton variant="primary" name="Join now" onClick={() => window.open("https://github.com/amarnath666/Landing-SAAS", "_blank")}
 />
       
        </div>

        {/* Counter */}
        <div className="mt-12 lg:mt-0 flex flex-col justify-between items-center w-full lg:w-auto">
         <Counter targetValue={555} />
        
          
        </div>
      </div>
    </div>
  );
}
