import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoIosCloseCircle } from "react-icons/io";
import { BsBagX } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState("/Asgaard_sofa_3(1).png");
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("L");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000.0,
      quantity: 1,
      image: "/Asgaard_sofa_3(1).png",
    },
    {
      id: 2,
      name: "Casaliving Wood",
      price: 270000.0,
      quantity: 1,
      image: "/casaliving_wood.png",
    },
  ]);

  // Product data
  const product = {
    name: "Asgaard sofa",
    price: 250000.0,
    rating: 5,
    reviewsCount: 5,
    description:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    colors: ["purple", "black", "brown"],
    sizes: ["L", "XL", "XS", "S"],
    sku: "SS001",
    category: "Sofas",
    tags: ["Sofa", "Chair", "Home", "Shop"],
    additionalImages: ["/Grifo.png", "/Lolito.png"],
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
    "/Asgaard_sofa_3(1).png",
    "/Mask group (3).png",
    "/Mask group.png",
    "/Outdoor sofa set 2.png",
  ];

  // Related products data
  const relatedProducts = [
    {
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rs. 2,500.00",
      image: "/syltherine.png",
    },
    {
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rs. 2,500.00",
      image: "/leviosa.png",
    },
    {
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rs. 7,000.00",
      image: "/lolito.png",
    },
    {
      name: "Respira",
      description: "Outdoor table and chair",
      price: "Rs. 500.00",
      image: "/respira.png",
    },
  ];

  // Handle quantity change
  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  // Handle adding to cart
  const handleAddToCart = () => {
    const newItem = {
      id: Date.now(),
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: selectedImage,
    };
    setCartItems((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  };

  // Handle removing an item from the cart
  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Format price as Rs. XXX,XXX.XX
  const formatPrice = (price) => {
    return `Rs. ${price.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  // Calculate subtotal
  const calculateSubtotal = () => {
    const total = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    return formatPrice(total);
  };

  return (
    <div className="w-full font-poppins bg-[#f7f7f7] bg-opacity-50 min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="py-4 px-4 sm:px-6 lg:px-25 bg-[#F9F1E7] h-[100px] w-full flex items-center">
        <nav className="text-base sm:text-base text-[#9F9F9F] flex items-center gap-1 sm:gap-1.5">
          <a href="/" className="hover:underline">
            Home
          </a>
          <span className="mx-1 sm:mx-2">
            <MdKeyboardArrowRight className="h-5 w-5 text-black" />
          </span>
          <a href="/shop" className="hover:underline">
            Shop
          </a>
          <span className="mx-1 sm:mx-2">
            <MdKeyboardArrowRight className="h-5 w-5 text-black" />
          </span>
          <span className="border-l-2 px-5 h-auto text-black">
            {product.name}
          </span>
        </nav>
      </div>

      {/* Main Product Section */}
      <div className="max-w-[1200px] mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-20">
        {/* Left Side: Image Gallery */}
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-4">
          {/* Thumbnails (Vertical on the left) */}
          <div className="flex sm:flex-col gap-3 sm:w-1/5 justify-center sm:justify-start">
            {thumbnails.map((thumb, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(thumb)}
                className={`w-16 h-16 sm:w-20 sm:h-20 bg-[#F9F1E7] rounded-lg overflow-hidden border-2 ${
                  selectedImage === thumb
                    ? "border-[#B88E2F]"
                    : "border-transparent"
                }`}
              >
                <img
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-contain"
                  style={{ imageRendering: "auto" }}
                />
              </button>
            ))}
          </div>
          {/* Main Image */}
          <div className="w-full sm:w-4/5 h-[300px] sm:h-[400px] lg:h-[500px] bg-[#F9F1E7] rounded-lg overflow-hidden">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-contain"
              style={{ imageRendering: "auto" }}
            />
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          {/* Product Name */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-black">
            {product.name}
          </h1>

          {/* Price */}
          <p className="text-xl sm:text-2xl font-medium text-[#9F9F9F]">
            {formatPrice(product.price)}
          </p>

          {/* Rating and Reviews */}
          <div className="flex items-center gap-2">
            {[...Array(product.rating)].map((_, i) => (
              <FaStar key={i} className="text-[#FFC107] w-4 h-4" />
            ))}
            <span className="text-[14px] text-[#9F9F9F] ml-2 flex items-center gap-2">
              <span>{product.reviewsCount} Customer Reviews</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-[#9F9F9F] leading-auto h-20 w-auto">
            {product.description}
          </p>

          {/* Size Selection */}
          <div className="flex flex-col gap-4 mt-2">
            <span className="text-base font-medium text-black">Size</span>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium ${
                    selectedSize === size
                      ? "bg-[#B88E2F] text-white"
                      : "bg-[#F9F1E7] text-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="flex flex-col gap-4 mt-2">
            <span className="text-base font-medium text-black">Color</span>
            <span className="space-x-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </span>
          </div>

          {/* Quantity and Action Buttons */}
          <div className="flex items-center gap-2 mt-4">
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-300 rounded-md h-16 w-[123px]">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="w-12 h-12 flex items-center justify-center text-2xl font-medium text-black"
              >
                -
              </button>
              <span className="w-12 h-12 flex items-center justify-center text-base font-medium text-black">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="w-12 h-12 flex items-center justify-center text-2xl font-medium text-black"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="bg-white border border-black text-black font-medium text-xs md:text-base py-3 px-1 md:px-8 rounded-md hover:bg-gray-100 transition-colors h-16 flex-1"
            >
              Add To Cart
            </button>

            {/* Compare Button */}
            <button className="bg-white border border-black text-black font-medium py-3 px-4 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-2 h-16 w-[110px]">
              <GoPlus className="w-5 h-5" /> Compare
            </button>
          </div>

          {/* Additional Info */}
          <div className="border-t border-gray-300 pt-4 mt-6 space-y-2 text-base">
            {/* SKU */}
            <div className="flex items-center">
              <span className="font-medium text-black w-22">SKU</span>
              <span className="text-black flex items-center gap-3">
                <span>:</span>
                <span>{product.sku}</span>
              </span>
            </div>
            {/* Category */}
            <div className="flex items-center">
              <span className="font-medium text-black w-22">Category</span>
              <span className="text-black flex items-center gap-3">
                <span>:</span>
                <span>{product.category}</span>
              </span>
            </div>
            {/* Tags */}
            <div className="flex items-center">
              <span className="font-medium text-black w-22">Tags</span>
              <span className="text-black flex items-center gap-3">
                <span>:</span>
                <span>{product.tags.join(", ")}</span>
              </span>
            </div>
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
                ? "text-[#3A3A3A] font-semibold"
                : "text-[#9F9F9F]"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("additional")}
            className={`py-3 px-4 text-base sm:text-lg font-medium ${
              activeTab === "additional"
                ? "text-[#3A3A3A] font-semibold"
                : "text-[#9F9F9F]"
            }`}
          >
            Additional Information
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`py-3 px-4 text-base sm:text-lg font-medium ${
              activeTab === "reviews"
                ? "text-[#3A3A3A] font-semibold"
                : "text-[#9F9F9F]"
            }`}
          >
            Reviews [{product.reviewsCount}]
          </button>
        </div>

        {/* Tab Content */}
        <div className="py-8">
          {activeTab === "description" && (
            <div>
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
                className="w-full h-full object-contain"
                style={{ imageRendering: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Related Products Section */}
      <div className="max-w-[1200px] mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((relatedProduct, index) => (
            <div
              key={index}
              className="relative bg-[#F4F5F7] rounded-lg overflow-hidden"
            >
              <img
                src={relatedProduct.image}
                alt={relatedProduct.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium">{relatedProduct.name}</h3>
                <p className="text-sm text-[#898989]">
                  {relatedProduct.description}
                </p>
                <p className="text-base font-medium mt-2">
                  {relatedProduct.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="bg-white border border-[#B88E2F] text-[#B88E2F] font-medium py-2 px-6 rounded-md hover:bg-[#B88E2F] hover:text-white transition-colors">
            Show More
          </button>
        </div>
      </div>

      {/* Cart Slider */}
      <div
        className={`fixed top-0 right-0 h-auto w-[417px] bg-white shadow-lg transform transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="p-4">
          {/* Header */}
          <div className="flex justify-between items-center pb-4 border-b border-[#D9D9D9]">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <button onClick={() => setIsCartOpen(false)}>
              <BsBagX className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Scrollable Cart Items with Custom Scrollbar */}
          <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
            {cartItems.length === 0 ? (
              <p className="text-gray-600 py-4 text-center">
                Your cart is empty.
              </p>
            ) : (
              <div className="space-y-4 py-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-5">
                    <div className="bg-[#F9F1E7] rounded-xl h-[100px] w-[100px] p-2 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-auto h-auto object-contain rounded-md"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="text-base">{item.name}</p>
                      <p className="text-sm flex items-center gap-3">
                        <span>{item.quantity}</span>{" "}
                        <LiaTimesSolid className="text-base" />
                        <span className="text-[#B88E2F]">
                          {formatPrice(item.price)}
                        </span>
                      </p>
                    </div>
                    <button onClick={() => handleRemoveFromCart(item.id)}>
                      <IoIosCloseCircle className="w-6 h-6 text-gray-600" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer (Subtotal and Buttons) */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-300 pt-4 mt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-base font-medium">Subtotal</span>
                <span className="text-base font-medium">
                  {calculateSubtotal()}
                </span>
              </div>
              <div className="flex flex-row items-center justify-between gap-2">
                <button className="bg-white border border-black text-black font-medium py-2 px-4 rounded-3xl hover:bg-gray-100 transition-colors">
                  Cart
                </button>
                <button className="bg-white border border-black text-black font-medium py-2 px-4 rounded-3xl hover:bg-gray-100 transition-colors">
                  Checkout
                </button>
                <button className="bg-white border border-black text-black font-medium py-2 px-4 rounded-3xl hover:bg-gray-100 transition-colors">
                  Comparison
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay for Cart Slider */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-[#000000] bg-opacity-50 opacity-20 z-40"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default ProductDetail;
