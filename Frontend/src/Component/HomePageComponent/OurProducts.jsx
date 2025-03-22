import React from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";

function OurProducts() {
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
  ];

  return (
    <div className="flex flex-col items-center justify-start py-8 md:py-10 lg:py-12 px-4 font-poppins bg-gray-50">
      <header className="text-center mb-8 md:mb-10 lg:mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
          Our Products
        </h1>
      </header>

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

      <div className="mt-6 md:mt-8">
        <button className="h-10 md:h-12 w-[200px] md:w-[245px] border-2 border-[#B88E2F] text-[#B88E2F] font-semibold text-sm md:text-base hover:bg-[#B88E2F] hover:text-white transition-all duration-300 rounded-md">
          Show More
        </button>
      </div>
    </div>
  );
}

export default OurProducts;
