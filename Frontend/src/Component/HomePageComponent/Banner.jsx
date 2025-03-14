import React from "react";

function Banner() {
  return (
    <div className="relative bg-[url('/Banner_Img.png')] bg-cover bg-center h-auto lg:h-[716px] w-full flex items-center justify-center lg:justify-end px-6 py-6">
      {/* Overlay for Text and Button */}
      <div
        className="bg-[#FFF3E3] flex items-center justify-center font-poppins 
                      w-[90%] max-w-[643px] h-auto py-6 px-4 md:px-8 "
      >
        <div className="max-w-[550px] w-full text-center md:text-left mt-1">
          <span className="text-sm md:text-base font-semibold text-gray-600 tracking-wider">
            New Arrival
          </span>
          <p className="text-[52px] md:text-[52px] font-bold leading-tight md:leading-[65px] text-[#B88E2F] mt-2 mb-4">
            Discover Our New Collection
          </p>
          <p className="text-sm md:text-[18px] font-medium leading-6 text-[#333333]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="mt-6 md:mt-10 bg-[#B88E2F] text-white font-bold text-sm md:text-base px-6 md:w-[222px] py-3 md:h-[74px]  hover:bg-yellow-700 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
