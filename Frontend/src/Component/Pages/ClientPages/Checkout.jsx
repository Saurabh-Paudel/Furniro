import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div>
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
            Checkout
          </h1>
          <nav className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base flex items-center justify-center gap-1 sm:gap-1.5">
            <Link to="/" className="text-black">
              Home
            </Link>
            <span className="mx-1 sm:mx-2 text-gray-600">
              <MdKeyboardArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <span className="text-gray-600">Checkout</span>
          </nav>
        </div>
      </div>

      {/* Checkout Content */}
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Billing Details */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Billing details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-2"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full px-3 py-2 border border-[#d9d9d9] rounded focus:outline-none focus:ring-1 focus:ring-[#b88e2f]"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium mb-2"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full px-3 py-2 border border-[#d9d9d9] rounded focus:outline-none focus:ring-1 focus:ring-[#b88e2f]"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium mb-2"
              >
                Company Name (Optional)
              </label>
              <input
                id="companyName"
                type="text"
                className="w-full px-3 py-2 border border-[#d9d9d9] rounded focus:outline-none focus:ring-1 focus:ring-[#b88e2f]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="country"
                className="block text-sm font-medium mb-2"
              >
                Country / Region
              </label>
              <div className="relative">
                <select
                  id="country"
                  className="w-full px-3 py-2 border border-[#d9d9d9] rounded appearance-none focus:outline-none focus:ring-1 focus:ring-[#b88e2f]"
                  defaultValue="sri-lanka"
                >
                  <option value="sri-lanka">Sri Lanka</option>
                  <option value="india">India</option>
                  <option value="usa">United States</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium mb-2"
              >
                Street address
              </label>
              <input
                id="streetAddress"
                type="text"
                className="w-full px-3 py-2 border border-[#d9d9d9] rounded focus:outline-none focus:ring-1 focus:ring-[#b88e2f]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="townCity"
                className="block text-sm font-medium mb-2"
              >
                Town / City
              </label>
              <input
                id="townCity"
                type="text"
                className="w-full px-3 py-2 border border-[#d9d9d9] rounded focus:outline-none focus:ring-1 focus:ring-[#b88e2f]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="province"
                className="block text-sm font-medium mb-2"
              >
                Province
              </label>
              <div className="relative">
                <select
                  id="province"
                  className="w-full px-3 py-2 border border-[#d9d9d9] rounded appearance-none focus:outline-none focus:ring-1 focus:ring-[#b88e2f]"
                  defaultValue="western"
                >
                  <option value="western">Western Province</option>
                  <option value="central">Central Province</option>
                  <option value="southern">Southern Province</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium mb-2"
              >
                ZIP code
              </label>
              <input
                id="zipCode"
                type="text"
                className="w-full px-3 py-2 border border-[#d9d9d9] rounded focus:outline-none focus:ring-1 focus:ring-[#b88e2f]"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full px-3 py-2 border border-[#d9d9d9] rounded focus:outline-none focus:ring-1 focus:ring-[#b88e2f]"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 border border-[#d9d9d9] rounded focus:outline-none focus:ring-1 focus:ring-[#b88e2f]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="additionalInfo"
                className="block text-sm font-medium mb-2"
              >
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                placeholder="Additional Information"
                className="w-full px-3 py-2 border border-[#d9d9d9] rounded h-24 focus:outline-none focus:ring-1 focus:ring-[#b88e2f]"
              ></textarea>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Product</h2>
            <div className="border-b border-[#d9d9d9] pb-4 mb-4">
              <div className="flex justify-between mb-2">
                <span>Asgaard sofa × 1</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-[#b88e2f]">Rs. 250,000.00</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-start gap-2 mb-4">
                <div className="mt-1">
                  <input
                    type="radio"
                    id="direct-bank"
                    name="payment"
                    value="direct-bank"
                    className="h-4 w-4 text-[#b88e2f] border-[#d9d9d9] focus:ring-[#b88e2f]"
                    defaultChecked
                  />
                </div>
                <div>
                  <label htmlFor="direct-bank" className="font-medium">
                    Direct Bank Transfer
                  </label>
                  <p className="text-sm text-[#9f9f9f] mt-1">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <input
                  type="radio"
                  id="direct-bank-alt"
                  name="payment"
                  value="direct-bank-alt"
                  className="h-4 w-4 text-[#b88e2f] border-[#d9d9d9] focus:ring-[#b88e2f]"
                />
                <label htmlFor="direct-bank-alt">Direct Bank Transfer</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="cash-delivery"
                  name="payment"
                  value="cash-delivery"
                  className="h-4 w-4 text-[#b88e2f] border-[#d9d9d9] focus:ring-[#b88e2f]"
                />
                <label htmlFor="cash-delivery">Cash On Delivery</label>
              </div>
            </div>

            <div className="mb-6 text-sm text-[#9f9f9f]">
              <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <Link href="/privacy-policy" className="text-[#b88e2f]">
                  privacy policy
                </Link>
                .
              </p>
            </div>

            <button className="w-full bg-[#b88e2f] hover:bg-[#a17a29] text-white py-3 px-4 rounded transition-colors">
              Place order
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Checkout;
