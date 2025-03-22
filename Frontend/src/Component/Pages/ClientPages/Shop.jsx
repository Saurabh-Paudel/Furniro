import React, { useState } from "react";
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
      id: 5,
      name: "Grifo",
      description: "Night Lamp",
      price: "Rp 1.500.000",
      oldPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/Grifo.png",
    },
    {
      id: 6,
      name: "Muggo",
      description: "Small mug",
      price: "Rp 1.500.000",
      discount: "-30%",
      badge: "new",
      image: "/Muggo.png",
    },
    {
      id: 7,
      name: "Pingky",
      description: "Cute bed set",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/Pingky.png",
    },
    {
      id: 8,
      name: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 500.000",
      badge: "New",
      image: "/Potty.png",
    },
    {
      id: 9,
      name: "Vase",
      description: "Decorative vase",
      price: "Rp 800.000",
      badge: "New",
      image: "/Vase.png",
    },
  ];

  // State for pagination and products per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducts = products.length; // Total number of products (9)
  const maxProductsPerPage = Math.min(16, totalProducts); // Cap at 16 or total products
  const [productsPerPage, setProductsPerPage] = useState(maxProductsPerPage); // Dynamic products per page, default to max

  // Calculate total pages based on dynamic productsPerPage
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  // Calculate the products to display on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle "Next" button
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle "Previous" button
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle dropdown change for products per page
  const handleProductsPerPageChange = (e) => {
    const value = parseInt(e.target.value);
    setProductsPerPage(value);
    setCurrentPage(1); // Reset to first page when changing products per page
  };

  return (
    <div className="w-full font-poppins">
      {/* Header Section with Background Image */}
      <div className="relative h-[200px] sm:h-[250px] md:h-[315px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url('/Shop_Banner.png')`,
          }}
        ></div>
        {/* Content on top of the background */}
        <div className="relative text-center z-10 space-y-2 sm:space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black">
            Shop
          </h1>
          <nav className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600 flex items-center justify-center gap-1 sm:gap-1.5">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span className="mx-1 sm:mx-2">
              <MdKeyboardArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <span>Shop</span>
          </nav>
        </div>
      </div>

      {/* Filter and Sort Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-3 px-4 md:px-6 lg:px-25 bg-[#F5F5F5] gap-3 md:gap-4 lg:gap-0">
        {/* Left Side: Filter and View Options */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-4 lg:gap-6">
          <button className="flex items-center space-x-1 lg:space-x-3 text-black">
            <BsSliders className="w-4 h-4 lg:w-6 lg:h-6" />
            <span className="text-sm lg:text-xl">Filter</span>
          </button>
          <button className="text-black">
            <PiCirclesFourFill className="w-5 h-5 lg:w-7 lg:h-7" />
          </button>
          <button className="text-black">
            <BsViewList className="w-5 h-5 lg:w-7 lg:h-7" />
          </button>
          <span className="text-black text-xs lg:text-base border-l pl-2 lg:pl-[34px]">
            Showing {indexOfFirstProduct + 1}–
            {Math.min(indexOfLastProduct, totalProducts)} of {totalProducts}{" "}
            results
          </span>
        </div>

        {/* Right Side: Sort Options */}
        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2 md:gap-4 lg:gap-5">
          <div className="space-x-1 md:space-x-2 lg:space-x-4">
            <label
              htmlFor="showing"
              className="text-black text-xs lg:text-base"
            >
              Showing
            </label>
            <select
              id="showing"
              className="px-1 lg:px-3 py-1 text-black bg-white focus:outline-none focus:ring-2 focus:ring-[#b68e4c] h-8 lg:h-[55px] w-[50px] lg:w-[80px] text-xs lg:text-base appearance-none"
              value={productsPerPage}
              onChange={handleProductsPerPageChange}
            >
              {Array.from(
                { length: totalProducts },
                (_, index) => index + 1
              ).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div className="space-x-1 md:space-x-2 lg:space-x-4">
            <label htmlFor="sort" className="text-black text-xs lg:text-base">
              Sort by
            </label>
            <select
              id="sort"
              className="px-1 lg:px-3 py-1 text-black bg-white focus:outline-none focus:ring-2 focus:ring-[#b68e4c] h-8 lg:h-[55px] w-[120px] lg:w-[188px] text-xs lg:text-base appearance-none"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="relative bg-white w-full max-w-[285px] h-[380px] sm:h-[400px] md:h-[420px] lg:h-[446px] mx-auto shadow-md rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-lg"
            >
              {/* Product Image and Badge */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[220px] sm:h-[250px] md:h-[280px] lg:h-[301px] object-cover rounded-t-xl"
                />
                {(product.discount || product.badge) && (
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex flex-row items-end gap-1 sm:gap-2">
                    {product.discount && (
                      <span className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-[#E97171] text-white text-xs sm:text-sm md:text-base font-bold rounded-full">
                        {product.discount}
                      </span>
                    )}
                    {product.badge && (
                      <span className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-[#2EC1AC] text-white text-xs sm:text-sm md:text-base font-bold rounded-full">
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
                    className="h-9 sm:h-10 md:h-12 w-[160px] sm:w-[180px] md:w-[202px] bg-white text-[#B88E2F] font-semibold py-2 px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 hover:bg-[#B88E2F] hover:text-white rounded-md shadow-md text-sm sm:text-base"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    Add to cart
                  </button>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2 sm:gap-4 md:gap-5 text-white font-semibold mt-3 sm:mt-4 md:mt-6">
                    <span
                      className="flex items-center gap-1 hover:cursor-pointer hover:text-[#B88E2F] transition-colors text-xs sm:text-sm md:text-base"
                      aria-label="Share product"
                    >
                      <IoShareSocialSharp className="text-xs sm:text-sm md:text-base" />{" "}
                      Share
                    </span>
                    <span
                      className="flex items-center gap-1 hover:cursor-pointer hover:text-[#B88E2F] transition-colors text-xs sm:text-sm md:text-base"
                      aria-label="Compare product"
                    >
                      <GoArrowSwitch className="text-xs sm:text-sm md:text-base" />{" "}
                      Compare
                    </span>
                    <span
                      className="flex items-center gap-1 hover:cursor-pointer hover:text-[#B88E2F] transition-colors text-xs sm:text-sm md:text-base"
                      aria-label="Like product"
                    >
                      <FaRegHeart className="text-xs sm:text-sm md:text-base" />{" "}
                      Like
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-3 sm:p-4 h-[160px] sm:h-[150px] md:h-[140px] lg:h-[145px] w-full py-2 sm:py-3 md:py-4">
                <h3 className="text-lg sm:text-xl md:text-2xl text-[#3A3A3A] leading-[120%] font-semibold">
                  {product.name}
                </h3>
                <p className="text-[#898989] text-xs sm:text-sm md:text-base font-medium leading-[150%]">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-1 sm:mt-2">
                  <span className="text-base sm:text-lg md:text-xl text-[#3A3A3A] leading-[150%] font-semibold">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-[#B0B0B0] text-xs sm:text-sm md:text-base line-through leading-[150%]">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 py-4 sm:py-6">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`h-9 sm:h-10 px-3 sm:px-4 flex items-center justify-center rounded-md text-sm sm:text-base font-medium transition-colors ${
              currentPage === 1
                ? "bg-[#F5F5F5] text-gray-400 cursor-not-allowed"
                : "bg-[#F5F5F5] text-black hover:bg-gray-200"
            }`}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`h-9 sm:h-10 w-9 sm:w-10 flex items-center justify-center rounded-md text-sm sm:text-base font-medium transition-colors ${
                currentPage === index + 1
                  ? "bg-[#B88E2F] text-white"
                  : "bg-[#F5F5F5] text-black hover:bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`h-9 sm:h-10 px-3 sm:px-4 flex items-center justify-center rounded-md text-sm sm:text-base font-medium transition-colors ${
              currentPage === totalPages
                ? "bg-[#F5F5F5] text-gray-400 cursor-not-allowed"
                : "bg-[#F5F5F5] text-black hover:bg-gray-200"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
