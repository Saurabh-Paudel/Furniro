import React from "react";
import { BsSliders, BsViewList } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiCirclesFourFill } from "react-icons/pi";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/Syltherine.png",
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discount: "-30%",
      badge: "new",
      image: "/Leviosa.png",
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/Lolito.png",
    },
    {
      id: 4,
      name: "Respira",
      description: "Outdoor table and stool",
      price: "Rp 500.000",
      badge: "New",
      image: "/Respira.png",
    },
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/Syltherine.png",
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discount: "-30%",
      badge: "new",
      image: "/Leviosa.png",
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/Lolito.png",
    },
    {
      id: 4,
      name: "Respira",
      description: "Outdoor table and stool",
      price: "Rp 500.000",
      badge: "New",
      image: "/Respira.png",
    },
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/Syltherine.png",
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discount: "-30%",
      badge: "new",
      image: "/Leviosa.png",
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/Lolito.png",
    },
    {
      id: 4,
      name: "Respira",
      description: "Outdoor table and stool",
      price: "Rp 500.000",
      badge: "New",
      image: "/Respira.png",
    },
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/Syltherine.png",
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discount: "-30%",
      badge: "new",
      image: "/Leviosa.png",
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/Lolito.png",
    },
    {
      id: 4,
      name: "Respira",
      description: "Outdoor table and stool",
      price: "Rp 500.000",
      badge: "New",
      image: "/Respira.png",
    },
  ];
  return (
    <div className="w-full font-poppins">
      {/* Header Section with Background Image */}
      <div className="relative h-[315px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url('/Shop_Banner.png')`,
          }}
        ></div>
        {/* Content on top of the background */}
        <div className="relative text-center z-10 space-y-3">
          <h1 className="text-5xl font-medium text-black">Shop</h1>
          <nav className="mt-2 text-base text-gray-600 flex items-center gap-1.5">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span className="mx-2">
              <MdKeyboardArrowRight className="h-5 w-5" />
            </span>
            <span>Shop</span>
          </nav>
        </div>
      </div>

      {/* Filter and Sort Section */}
      <div className="flex justify-between items-center py-4 px-25 bg-[#F5F5F5]">
        {/* Left Side: Filter and View Options */}
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-3 text-black ">
            <BsSliders className="w-6 h-6" />
            <span className="text-xl">Filter</span>
          </button>
          <button className="text-black ">
            <PiCirclesFourFill className="w-7 h-7" />
          </button>
          <button className="text-black ">
            <BsViewList className="w-7 h-7" />
          </button>
          <span className="text-black text-base h-6 w-[200] border-l pl-[34px]">
            Showing 1–16 of 32 results
          </span>
        </div>

        {/* Right Side: Sort Options */}
        <div className="flex items-center gap-5">
          <div className="space-x-4">
            <label htmlFor="showing" className="text-black">
              Showing
            </label>
            <input
              type="text"
              name=""
              id=""
              className="h-[55px] w-[55px] bg-white text-black text-center focus:outline-none focus:ring-2 focus:ring-[#b68e4c]"
              defaultValue="16"
            />
          </div>
          <div className="space-x-4">
            <label htmlFor="sort" className="text-black">
              Short by
            </label>
            <select
              id="sort"
              className="px-3 py-1 text-black bg-white focus:outline-none focus:ring-2 focus:ring-[#b68e4c] h-[55px] w-[188px]"
            >
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Shopping Card */}
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-6 p-4 md:p-6 lg:p-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white w-full max-w-[285px] h-[400px] md:h-[420px] lg:h-[446px] mx-auto shadow-md rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-lg"
            >
              {/* Product Image and Badge */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[250px] md:h-[280px] lg:h-[301px] object-cover rounded-t-xl"
                />
                {(product.discount || product.badge) && (
                  <div className="absolute top-3 right-3 flex flex-row items-end gap-2">
                    {product.discount && (
                      <span className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 bg-[#E97171] text-white text-sm md:text-base font-bold rounded-full">
                        {product.discount}
                      </span>
                    )}
                    {product.badge && (
                      <span className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 bg-[#2EC1AC] text-white text-sm md:text-base font-bold rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Product Actions (visible on hover) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-[#3f3f3f] bg-opacity-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"></div>
                {/* Action Button and Links */}
                <div className="flex flex-col items-center justify-center z-10">
                  <button
                    className="h-10 md:h-12 w-[180px] md:w-[202px] bg-white text-[#B88E2F] font-semibold py-2 px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 hover:bg-[#B88E2F] hover:text-white rounded-md shadow-md"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    Add to cart
                  </button>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4 md:gap-5 text-white font-semibold mt-4 md:mt-6">
                    <span
                      className="flex items-center gap-1 hover:cursor-pointer hover:text-[#B88E2F] transition-colors"
                      aria-label="Share product"
                    >
                      <IoShareSocialSharp className="text-sm md:text-base" />{" "}
                      Share
                    </span>
                    <span
                      className="flex items-center gap-1 hover:cursor-pointer hover:text-[#B88E2F] transition-colors"
                      aria-label="Compare product"
                    >
                      <GoArrowSwitch className="text-sm md:text-base" /> Compare
                    </span>
                    <span
                      className="flex items-center gap-1 hover:cursor-pointer hover:text-[#B88E2F] transition-colors"
                      aria-label="Like product"
                    >
                      <FaRegHeart className="text-sm md:text-base" /> Like
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4 h-[150px] md:h-[140px] lg:h-[145px] w-full py-3 md:py-4">
                <h3 className="text-xl md:text-2xl text-[#3A3A3A] leading-[120%] font-semibold">
                  {product.name}
                </h3>
                <p className="text-[#898989] text-sm md:text-base font-medium leading-[150%]">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-1 md:mt-2">
                  <span className="text-lg md:text-xl text-[#3A3A3A] leading-[150%] font-semibold">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-[#B0B0B0] text-sm md:text-base line-through leading-[150%]">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
