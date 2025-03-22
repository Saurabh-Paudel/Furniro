import React, { useState } from "react";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate login state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Simulate logout
    // In a real app, this would also clear auth tokens, redirect, etc.
  };

  // Define menu items with names and links
  const menuItems = [
    { menuname: "Home", link: "/" },
    { menuname: "Shop", link: "/shop" },
    { menuname: "About", link: "/about" },
    { menuname: "Contact", link: "/contact" },
  ];

  return (
    <nav className="px-4 md:px-8 lg:px-16 xl:px-[100px] py-4 md:py-5 lg:py-6 xl:py-[30px] font-poppins bg-white shadow-md md:shadow-lg lg:shadow-xl sticky top-0 z-50">
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
            {menuItems.map((item) => (
              <li
                key={item.menuname}
                className="relative group cursor-pointer transition-all duration-300 hover:translate-x-1 md:hover:translate-x-1 lg:hover:translate-x-2"
              >
                <Link to={item.link}>
                  <span className="transition-all duration-300 group-hover:text-[#b68e4c]">
                    {item.menuname}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#b68e4c] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4 md:gap-6 lg:gap-8 xl:gap-[45px]">
          {isLoggedIn ? (
            <div className="relative group">
              <FaRegUser className="h-5 md:h-5 lg:h-6 xl:h-[24px] w-5 md:w-5 lg:w-6 xl:w-[24px] transform transition-all duration-300 hover:text-indigo-600 hover:scale-105 md:hover:scale-110 lg:hover:scale-125 hover:translate-x-1 md:hover:translate-x-1 lg:hover:translate-x-2" />
              <div className="absolute top-8 right-0 hidden group-hover:block bg-white shadow-lg rounded-lg p-2">
                <button
                  onClick={handleLogout}
                  className="text-sm text-gray-700 hover:text-[#b68e4c] transition-colors duration-300"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <FaRegUser className="h-5 md:h-5 lg:h-6 xl:h-[24px] w-5 md:w-5 lg:w-6 xl:w-[24px] transform transition-all duration-300 hover:text-[#b68e4c] hover:scale-105 md:hover:scale-110 lg:hover:scale-125 hover:translate-x-1 md:hover:translate-x-1 lg:hover:translate-x-2" />
            </Link>
          )}
          <HiMagnifyingGlass className="h-5 md:h-5 lg:h-6 xl:h-[24px] w-5 md:w-5 lg:w-6 xl:w-[24px] transform transition-all duration-300 hover:text-[#b68e4c] hover:scale-105 md:hover:scale-110 lg:hover:scale-125 hover:translate-x-1 md:hover:translate-x-1 lg:hover:translate-x-2" />
          <FaRegHeart className="h-5 md:h-5 lg:h-6 xl:h-[24px] w-5 md:w-5 lg:w-6 xl:w-[24px] transform transition-all duration-300 hover:text-[#b68e4c] hover:scale-105 md:hover:scale-110 lg:hover:scale-125 hover:translate-x-1 md:hover:translate-x-1 lg:hover:translate-x-2" />
          <MdOutlineShoppingCart className="h-5 md:h-5 lg:h-6 xl:h-[24px] w-5 md:w-5 lg:w-6 xl:w-[24px] transform transition-all duration-300 hover:text-[#b68e4c] hover:scale-105 md:hover:scale-110 lg:hover:scale-125 hover:translate-x-1 md:hover:translate-x-1 lg:hover:translate-x-2" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-white absolute left-0 right-0`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-base font-medium">
          {menuItems.map((item) => (
            <li
              key={item.menuname}
              className="cursor-pointer transition-all duration-300 hover:text-[#b68e4c] hover:translate-x-2"
            >
              <Link to={item.link}>{item.menuname}</Link>
            </li>
          ))}
          <div className="flex items-center gap-6 mt-4">
            {isLoggedIn ? (
              <div className="relative group">
                <FaRegUser className="h-[20px] w-[20px] transform transition-all duration-300 hover:text-[#b68e4c] hover:scale-110 hover:translate-x-2" />
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-white shadow-lg rounded-lg p-2">
                  <button
                    onClick={handleLogout}
                    className="text-sm text-gray-700 hover:text-[#b68e4c] transition-colors duration-300"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <FaRegUser className="h-[20px] w-[20px] transform transition-all duration-300 hover:text-[#b68e4c] hover:scale-110 hover:translate-x-2" />
              </Link>
            )}
            <HiMagnifyingGlass className="h-[20px] w-[20px] transform transition-all duration-300 hover:text-[#b68e4c] hover:scale-110 hover:translate-x-2" />
            <FaRegHeart className="h-[20px] w-[20px] transform transition-all duration-300 hover:text-[#b68e4c] hover:scale-110 hover:translate-x-2" />
            <MdOutlineShoppingCart className="h-[20px] w-[20px] transform transition-all duration-300 hover:text-[#b68e4c] hover:scale-110 hover:translate-x-2" />
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
