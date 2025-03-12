import React, { useState } from "react";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-4 md:px-8 lg:px-16 xl:px-[100px] py-4 md:py-5 lg:py-6 xl:py-[30px font-poppins bg-white shadow-md md:shadow-lg lg:shadow-xl sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0 transform transition-all duration-300 hover:translate-x-1 md:hover:translate-x-1 lg:hover:translate-x-2">
          <img
            src="/Logo.png"
            alt="Logo"
            className="h-8 md:h-9 lg:h-10 xl:h-12 w-auto"
          />
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-xl p-2 transform transition-all duration-300 hover:scale-105 hover:rotate-90"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="flex items-center gap-6 md:gap-8 lg:gap-10 xl:gap-[75px] text-sm md:text-sm lg:text-base xl:text-lg font-medium">
            {["Home", "Shop", "About", "Contact"].map((item) => (
              <li
                key={item}
                className="relative group cursor-pointer transition-all duration-300 hover:translate-x-1 md:hover:translate-x-1 lg:hover:translate-x-2"
              >
                <span className="transition-all duration-300 group-hover:text-indigo-600">
                  {item}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4 md:gap-6 lg:gap-8 xl:gap-[45px]">
          {[
            FaRegUser,
            HiMagnifyingGlass,
            FaRegHeart,
            MdOutlineShoppingCart,
          ].map((Icon) => (
            <Icon
              key={Icon.name}
              className="h-5 md:h-5 lg:h-6 xl:h-[24px] w-5 md:w-5 lg:w-6 xl:w-[24px] transform transition-all duration-300 hover:text-indigo-600 hover:scale-105 md:hover:scale-110 lg:hover:scale-125 hover:translate-x-1 md:hover:translate-x-1 lg:hover:translate-x-2"
            />
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-whiteabsolute left-0 right-0`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-base font-medium">
          {["Home", "Shop", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer transition-all duration-300 hover:text-indigo-600 hover:translate-x-2"
            >
              {item}
            </li>
          ))}
          <div className="flex items-center gap-6 mt-4">
            {[
              FaRegUser,
              HiMagnifyingGlass,
              FaRegHeart,
              MdOutlineShoppingCart,
            ].map((Icon) => (
              <Icon
                key={Icon.name}
                className="h-[20px] w-[20px] transform transition-all duration-300 hover:text-indigo-600 hover:scale-110 hover:translate-x-2"
              />
            ))}
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
