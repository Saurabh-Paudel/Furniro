import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart
      ? JSON.parse(savedCart)
      : [
          {
            id: 1,
            name: "Asgaard sofa",
            price: 250000.0,
            quantity: 1,
            image: "/Asgaard_sofa_3(1).png",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, parseInt(newQuantity) || 1) }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const formatPrice = (price) => {
    return `Rs. ${price.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const calculateItemSubtotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateItemSubtotal(item),
      0
    );
  };

  return (
    <div className="w-full font-poppins bg-white min-h-screen">
      {/* Breadcrumb Section */}
      <div className="relative h-[150px] sm:h-[200px] md:h-[250px] lg:h-[315px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url('/Shop_Banner.png')`,
          }}
        ></div>
        <div className="relative text-center z-10 space-y-2 sm:space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-black">
            Cart
          </h1>
          <nav className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base flex items-center justify-center gap-1 sm:gap-1.5">
            <Link to="/" className="text-black">
              Home
            </Link>
            <span className="mx-1 sm:mx-2 text-gray-600">
              <MdKeyboardArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <span className="text-gray-600">Cart</span>
          </nav>
        </div>
      </div>

      {/* Cart Content */}
      <section className="py-16 bg-[#ffffff]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-[#f9f1e7] rounded-t-lg">
                <div className="grid grid-cols-4 py-4 px-6 font-medium text-[#000000]">
                  <div>Product</div>
                  <div>Price</div>
                  <div>Quantity</div>
                  <div>Subtotal</div>
                </div>
              </div>

              <div className="border border-[#d9d9d9] border-t-0 p-6 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-[#d9d9d9] pb-4 grid grid-cols-4 items-center"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-[#f9f1e7] rounded-lg flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </div>
                      <span className="text-[#9f9f9f]">{item.name}</span>
                    </div>
                    <div className="text-[#9f9f9f]">
                      {formatPrice(item.price)}
                    </div>
                    <div>
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) =>
                          updateQuantity(item.id, e.target.value)
                        }
                        className="w-16 h-10 border border-[#d9d9d9] text-center"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-black">
                        {formatPrice(calculateItemSubtotal(item))}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove item"
                      >
                        <FaTrash className="w-5 h-5 text-[#b88e2f]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Totals */}
            <div className="lg:col-span-1">
              <div className="bg-[#f9f1e7] p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-[#000000] mb-6">
                  Cart Totals
                </h2>

                <div className="flex justify-between mb-4">
                  <span className="text-[#000000]">Subtotal</span>
                  <span className="text-[#9f9f9f]">
                    {formatPrice(calculateCartTotal())}
                  </span>
                </div>

                <div className="flex justify-between mb-8">
                  <span className="text-[#000000] font-medium">Total</span>
                  <span className="text-[#b88e2f] font-medium">
                    {formatPrice(calculateCartTotal())}
                  </span>
                </div>

                <button className="w-full bg-white hover:bg-[#b88e2f] text-black hover:text-white border border-black rounded-lg py-4 font-medium transition-colors">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
