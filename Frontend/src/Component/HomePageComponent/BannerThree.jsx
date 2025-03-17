import React from "react";

function BannerThree() {
  return (
    <div className="hidden lg:flex flex-col items-center py-16 bg-white font-poppins">
      {/* Heading */}
      <header className="text-center ">
        <h1 className="text-xl font-semibold text-[#616161] leading-[150%]">
          Share your setup with <br />
          <span className="font-bold text-[#3A3A3A] text-[40px] leading-[120%]">
            #FurniroFurniture
          </span>
        </h1>
      </header>
      <div className="w-full">
        <img
          src="/Images.png"
          alt="Banner placeholder"
          className="h-auto w-full object-cover"
        />
      </div>
    </div>
  );
}

export default BannerThree;
