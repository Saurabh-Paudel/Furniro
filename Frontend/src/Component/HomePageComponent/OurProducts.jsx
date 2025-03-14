import React from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";

function OurProducts() {
  // Define product data with unique IDs
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
    <div className="flex flex-col items-center justify-start py-10 px-4 font-poppins">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Products
        </h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white h-[446px] w-[285px] shadow-lg rounded-lg overflow-hidden group"
          >
            {/* Product Image and Badge */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-[285px] h-[301px] object-cover"
              />
              {(product.discount || product.badge) && (
                <div className="absolute top-4 right-4 flex flex-row items-end gap-2">
                  {product.discount && (
                    <span className="flex items-center justify-center h-12 w-12 bg-[#E97171] text-white text-base font-bold rounded-full">
                      {product.discount}
                    </span>
                  )}
                  {product.badge && (
                    <span className="flex items-center justify-center h-12 w-12 bg-[#2EC1AC] text-white text-base font-bold rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Product Actions (visible only on hover) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-[#3f3f3f3f] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              {/* Action Button and Links */}
              <div className="flex flex-col items-center justify-center z-10">
                <button
                  className="h-12 w-[202px] bg-white text-[#B88E2F] font-semibold py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity hover:cursor-pointer"
                  aria-label={`Add ${product.name} to cart`}
                >
                  Add to cart
                </button>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-5 text-white font-semibold mt-6">
                  <span
                    className="flex items-center gap-1 hover:cursor-pointer"
                    aria-label="Share product"
                  >
                    <IoShareSocialSharp /> Share
                  </span>
                  <span
                    className="flex items-center gap-1 hover:cursor-pointer"
                    aria-label="Compare product"
                  >
                    <GoArrowSwitch /> Compare
                  </span>
                  <span
                    className="flex items-center gap-1 hover:cursor-pointer"
                    aria-label="Like product"
                  >
                    <FaRegHeart /> Like
                  </span>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-4 h-[145px] w-[285px] py-4">
              <h3 className="text-2xl text-[#3A3A3A] leading-[120%] font-semibold">
                {product.name}
              </h3>
              <p className="text-[#898989] text-base font-medium leading-[150%]">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xl text-[#3A3A3A] leading-[150%] font-semibold">
                  {product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-[#B0B0B0] text-base line-through leading-[150%]">
                    {product.oldPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button className="h-12 w-[245px] border-1 border-[#B88E2F] text-[#B88E2F] font-semibold text-base">
          Show More
        </button>
      </div>
    </div>
  );
}

export default OurProducts;
