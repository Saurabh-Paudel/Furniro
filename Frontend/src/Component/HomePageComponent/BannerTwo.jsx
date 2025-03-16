import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

function BannerTwo() {
  const [activeIndex, setActiveIndex] = useState(0);

  const rooms = [
    { src: "/Rectangle24 (1).png", type: "01 — Bed Room", name: "Inner Peace" },
    { src: "/Rectangle24 (2).png", type: "02 — Dining Area", name: "Harmony" },
    { src: "/Rectangle24 (3).png", type: "03 — Living Room", name: "Serenity" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % rooms.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#FCF8F3] py-12 md:py-12 lg:py-16 relative min-h-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row max-w-[1536px] mx-auto px-4 lg:px-0">
        <div className="flex items-center justify-center w-full lg:w-auto mb-6 lg:mb-0">
          <div className="text-center lg:text-left ml-0 lg:ml-[100px] px-4 lg:px-0">
            <h1 className="text-xl md:text-2xl lg:text-[40px] leading-[120%] font-bold text-gray-900 mb-3 md:mb-4">
              50+ Beautiful rooms inspiration
            </h1>
            <p className="text-sm md:text-base lg:text-base text-[#616161] leading-[150%] mb-4 md:mb-6 w-full md:w-[368px] lg:w-[368px] mx-auto lg:mx-0">
              Our designer already made a lot of beautiful prototype of rooms
              that inspire you
            </p>
            <button className="bg-[#b68e4c] text-white h-10 md:h-12 lg:h-12 w-44 md:w-44 lg:w-44 px-4 md:px-6 lg:px-6 py-2 md:py-3 lg:py-3 font-semibold hover:bg-[#a57c3a] transition duration-300 transform hover:scale-105 rounded-md shadow-md">
              Explore More
            </button>
          </div>
        </div>

        <div className="relative flex items-center lg:items-start justify-center space-x-2 md:space-x-4 lg:space-x-4 w-full lg:w-auto">
          {rooms.map((room, index) => {
            const isFirst = index === 0;
            const isSecond = index === 1;
            const isThird = index === 2;
            const displayIndex = (activeIndex + index) % rooms.length;

            return (
              <div
                key={displayIndex}
                className={`relative ${
                  isFirst
                    ? "w-full md:w-[300px] lg:w-[400px] h-[250px] md:h-[400px] lg:h-[580px]"
                    : isSecond
                    ? "hidden md:block lg:block w-[300px] md:w-[300px] lg:w-[372px] h-[250px] md:h-[400px] lg:h-[486px]"
                    : isThird
                    ? "hidden lg:block w-[124px] h-[486px]"
                    : ""
                } overflow-hidden`}
              >
                <img
                  src={rooms[displayIndex].src}
                  alt={`${rooms[displayIndex].type} Image`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute h-[80px] md:h-[110px] lg:h-[130px] w-[150px] md:w-[180px] lg:w-[217px] bottom-3 md:bottom-5 lg:bottom-6 left-3 md:left-5 lg:left-6 p-2 md:p-3 lg:p-4 flex opacity-70">
                  <div className="bg-white h-[70px] md:h-[90px] lg:h-[114px] w-[130px] md:w-[160px] lg:w-[217px] p-3 md:p-6 lg:p-8">
                    <p className="text-gray-500 text-xs md:text-sm lg:text-sm">
                      {rooms[displayIndex].type}
                    </p>
                    <h3 className="text-base md:text-lg lg:text-xl font-bold">
                      {rooms[displayIndex].name}
                    </h3>
                  </div>
                  {isFirst && (
                    <button className="absolute bottom-0 md:bottom-2 lg:bottom-0 right-[-28px] md:right-[-36px] lg:right-[-40px] bg-[#b68e4c] text-white w-10 md:w-12 lg:w-14 h-10 md:h-12 lg:h-14 flex items-center justify-center">
                      <FaArrowRight />
                    </button>
                  )}
                  {isSecond && (
                    <button
                      onClick={() =>
                        setActiveIndex((activeIndex + 1) % rooms.length)
                      }
                      className="absolute top-1/2 -right-3 md:-right-4 lg:-right-6 transform -translate-y-1/2 bg-white shadow-md w-10 h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 flex items-center justify-center rounded-full hover:bg-gray-200 transition duration-300"
                    >
                      <MdKeyboardArrowRight className="h-5 w-5 md:h-6 md:w-6 lg:h-6 lg:w-6 text-[#b68e4c]" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-4 lg:bottom-26 left-1/2 transform -translate-x-1/2 lg:left-auto lg:-right-5 xl:right-[20%] 2xl:right-[24%] flex space-x-2">
          {rooms.map((_, index) => (
            <span
              key={index}
              className={`h-6 md:h-6 lg:h-[27px] w-6 md:w-6 lg:w-[27px] border border-[#b68e4c] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                activeIndex === index ? "bg-[#FCF8F3]" : "border-none"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <button
                className={`w-2 md:w-2 lg:w-3 h-2 md:h-2 lg:h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-[#b68e4c]" : "bg-[#D8D8D8]"
                }`}
              ></button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BannerTwo;
