import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const ProductDetail = () => {
  // State for selected image in the gallery
  const [selectedImage, setSelectedImage] = useState("/Asgaard_sofa_3(1).png");

  // State for selected color
  const [selectedColor, setSelectedColor] = useState("black");

  // State for active tab
  const [activeTab, setActiveTab] = useState("description");

  // Product data
  const product = {
    name: "Asgaard sofa",
    price: "Rp 250,000",
    rating: 5,
    description:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    colors: ["black", "brown", "gray", "purple"],
    size: "L",
    category: "Sofas",
    tags: ["Sofa", "Chair", "Home", "Shop"],
    additionalImages: ["/Asgaard_sofa.png"],
    additionalInfo: [
      { label: "Weight", value: "7 pounds" },
      { label: "Dimensions", value: "12 x 12 x 12 inches" },
      { label: "Material", value: "Leather, Wood" },
    ],
    reviews: [
      {
        user: "John Doe",
        rating: 5,
        comment: "Amazing sofa, very comfortable!",
      },
      {
        user: "Jane Smith",
        rating: 4,
        comment: "Great design, but a bit pricey.",
      },
    ],
  };

  // Image gallery thumbnails
  const thumbnails = [
    "/Mask group (3).png",
    "/Mask group.png",
    "/Outdoor sofa set 2.png",
    "/Stuart sofa 1.png",
  ];

  return (
    <div className="w-full font-poppins">
      {/* Breadcrumb Navigation */}
      <div className="py-4 px-4 sm:px-6 lg:px-25 bg-[#F9F1E7]">
        <nav className="text-sm sm:text-base text-gray-600 flex items-center gap-1 sm:gap-1.5">
          <a href="/" className="hover:underline">
            Home
          </a>
          <span className="mx-1 sm:mx-2">
            <MdKeyboardArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </span>
          <a href="/shop" className="hover:underline">
            Shop
          </a>
          <span className="mx-1 sm:mx-2">
            <MdKeyboardArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </span>
          <span>{product.name}</span>
        </nav>
      </div>

      {/* Main Product Section */}
      <div className="max-w-[1200px] mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-6">
        {/* Left Side: Image Gallery */}
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-4">
          {/* Thumbnails (Vertical on the left) */}
          <div className="flex sm:flex-col gap-3 sm:w-1/5 justify-center sm:justify-start">
            {thumbnails.map((thumb, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(thumb)}
                className={`w-20 h-20 sm:w-24 sm:h-24 bg-[#F9F1E7] rounded-lg overflow-hidden border-2 ${
                  selectedImage === thumb
                    ? "border-[#B88E2F]"
                    : "border-transparent"
                }`}
              >
                <img
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-contain"
                  style={{ imageRendering: "auto" }} // Ensure high-quality rendering
                />
              </button>
            ))}
          </div>
          {/* Main Image */}
          <div className="w-full sm:w-4/5 h-[400px] sm:h-[500px] lg:h-[600px] bg-[#F9F1E7] rounded-lg overflow-hidden">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-contain"
              style={{ imageRendering: "auto" }} // Ensure high-quality rendering
            />
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#3A3A3A]">
            {product.name}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-medium text-[#9F9F9F]">
            {product.price}
          </p>
          <div className="flex items-center gap-2">
            {[...Array(product.rating)].map((_, i) => (
              <FaStar key={i} className="text-[#FFC107] w-5 h-5" />
            ))}
            <span className="text-sm text-[#9F9F9F] ml-2">
              ({product.rating} stars)
            </span>
          </div>
          <p className="text-sm sm:text-base text-[#9F9F9F] leading-relaxed">
            {product.description}
          </p>

          {/* Color Selection */}
          <div className="flex items-center gap-3">
            <span className="text-sm sm:text-base font-medium text-[#3A3A3A]">
              Color:
            </span>
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 rounded-full border-2 ${
                  selectedColor === color
                    ? "border-[#B88E2F]"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="bg-[#B88E2F] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#a07d2a] transition-colors">
              Add to Cart
            </button>
            <button className="border border-[#B88E2F] text-[#B88E2F] font-semibold py-3 px-8 rounded-md hover:bg-[#B88E2F] hover:text-white transition-colors flex items-center gap-2">
              <GoArrowSwitch className="w-5 h-5" /> Compare
            </button>
          </div>

          {/* Additional Info */}
          <div className="border-t border-gray-300 pt-4 mt-4 space-y-2">
            <p className="text-sm sm:text-base text-[#3A3A3A]">
              <span className="font-medium">Size:</span> {product.size}
            </p>
            <p className="text-sm sm:text-base text-[#3A3A3A]">
              <span className="font-medium">Category:</span> {product.category}
            </p>
            <p className="text-sm sm:text-base text-[#3A3A3A]">
              <span className="font-medium">Tags:</span>{" "}
              {product.tags.join(", ")}
            </p>
            <p className="text-sm sm:text-base text-[#3A3A3A] flex items-center gap-3">
              <span className="font-medium">Share:</span>
              <FaFacebookF className="w-5 h-5 text-[#3A3A3A] cursor-pointer hover:text-[#B88E2F]" />
              <FaTwitter className="w-5 h-5 text-[#3A3A3A] cursor-pointer hover:text-[#B88E2F]" />
              <FaInstagram className="w-5 h-5 text-[#3A3A3A] cursor-pointer hover:text-[#B88E2F]" />
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-[1200px] mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="flex justify-center gap-6 sm:gap-8 border-b border-gray-300">
          <button
            onClick={() => setActiveTab("description")}
            className={`py-3 px-4 text-base sm:text-lg font-medium ${
              activeTab === "description"
                ? "text-[#B88E2F] border-b-2 border-[#B88E2F]"
                : "text-[#3A3A3A]"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("additional")}
            className={`py-3 px-4 text-base sm:text-lg font-medium ${
              activeTab === "additional"
                ? "text-[#B88E2F] border-b-2 border-[#B88E2F]"
                : "text-[#3A3A3A]"
            }`}
          >
            Additional Information
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`py-3 px-4 text-base sm:text-lg font-medium ${
              activeTab === "reviews"
                ? "text-[#B88E2F] border-b-2 border-[#B88E2F]"
                : "text-[#3A3A3A]"
            }`}
          >
            Reviews ({product.reviews.length})
          </button>
        </div>

        {/* Tab Content */}
        <div className="py-8">
          {activeTab === "description" && (
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3A3A3A] mb-4">
                Description
              </h2>
              <p className="text-sm sm:text-base text-[#9F9F9F] leading-relaxed">
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road. Weighing in under 7 pounds, the Kilburn is a lightweight
                piece of vintage styled engineering. Setting the bar as one of
                the loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>
          )}
          {activeTab === "additional" && (
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3A3A3A] mb-4">
                Additional Information
              </h2>
              <ul className="text-sm sm:text-base text-[#9F9F9F] leading-relaxed space-y-2">
                {product.additionalInfo.map((info, index) => (
                  <li key={index}>
                    <span className="font-medium text-[#3A3A3A]">
                      {info.label}:
                    </span>{" "}
                    {info.value}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === "reviews" && (
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3A3A3A] mb-4">
                Reviews
              </h2>
              {product.reviews.length > 0 ? (
                <ul className="space-y-4">
                  {product.reviews.map((review, index) => (
                    <li key={index} className="border-b border-gray-200 pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-[#3A3A3A]">
                          {review.user}
                        </span>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <FaStar
                              key={i}
                              className="text-[#FFC107] w-4 h-4"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-[#9F9F9F]">
                        {review.comment}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm sm:text-base text-[#9F9F9F]">
                  No reviews yet. Be the first to review this product!
                </p>
              )}
            </div>
          )}
        </div>

        {/* Additional Images */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          {product.additionalImages.map((img, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 h-[200px] sm:h-[300px] bg-[#F9F1E7] rounded-lg overflow-hidden"
            >
              <img
                src={img}
                alt={`Additional ${index + 1}`}
                className="w-auto h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
