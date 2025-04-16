import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function Contact() {
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
            Contact
          </h1>
          <nav className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base flex items-center justify-center gap-1 sm:gap-1.5">
            <Link to="/" className="text-black">
              Home
            </Link>
            <span className="mx-1 sm:mx-2 text-gray-600">
              <MdKeyboardArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <span className="text-gray-600">Contact</span>
          </nav>
        </div>
      </div>
      {/* Contact Content */}
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch With Us</h2>
          <p className="text-[#9f9f9f] max-w-2xl mx-auto">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-auto md:px-[50px] lg:px-[190px]">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Address</h3>
                <p className="text-[#9f9f9f]">236 5th SE Avenue, New York</p>
                <p className="text-[#9f9f9f]">NY10000, United States</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Phone</h3>
                <p className="text-[#9f9f9f]">Mobile: +(84) 546-6789</p>
                <p className="text-[#9f9f9f]">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Working Time</h3>
                <p className="text-[#9f9f9f]">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-[#9f9f9f]">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Abc"
                  className="w-full px-3 py-2 border border-[#d9d9d9] rounded focus:outline-none focus:ring-1 focus:ring-[#b88e2f]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Abc@def.com"
                  className="w-full px-3 py-2 border border-[#d9d9d9] rounded focus:outline-none focus:ring-1 focus:ring-[#b88e2f]"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="This is an optional"
                  className="w-full px-3 py-2 border border-[#d9d9d9] rounded focus:outline-none focus:ring-1 focus:ring-[#b88e2f]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Hi! I'd like to ask about"
                  className="w-full px-3 py-2 border border-[#d9d9d9] rounded focus:outline-none focus:ring-1 focus:ring-[#b88e2f]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#b88e2f] hover:bg-[#a17a29] text-white py-3 px-4 rounded transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
