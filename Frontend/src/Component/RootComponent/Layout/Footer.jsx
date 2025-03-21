import React, { useState, useEffect } from "react";
import {
  FaHeadset,
  FaShieldAlt,
  FaShippingFast,
  FaTrophy,
} from "react-icons/fa";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (section) => {
    if (isMobile) {
      setOpenSection(openSection === section ? null : section);
    }
  };

  return (
    <div>
      {/* Feature Section */}
      <div className="bg-[#f9f5f0] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10 px-4 sm:px-10 md:px-20 my-5 w-full">
        {[
          {
            icon: <FaTrophy className="text-4xl text-gray-800" />,
            title: "High Quality",
            desc: "Crafted from top materials",
          },
          {
            icon: <FaShieldAlt className="text-4xl text-gray-800" />,
            title: "Warranty Protection",
            desc: "Over 2 years",
          },
          {
            icon: <FaShippingFast className="text-4xl text-gray-800" />,
            title: "Free Shipping",
            desc: "Order over 150 $",
          },
          {
            icon: <FaHeadset className="text-4xl text-gray-800" />,
            title: "24 / 7 Support",
            desc: "Dedicated support",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 text-left justify-center"
          >
            {item.icon}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Footer */}
      <footer className="bg-white text-black font-sans w-full">
        <div className="max-w-7xl mx-auto px-6 py-8 md:px-12 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Company Info */}
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900">Funiro.</h2>
              <p className="text-sm text-gray-600">
                400 University Drive Suite 200 Coral
                <br />
                Gables, FL 33134 USA
              </p>
            </div>

            {/* Links Sections */}
            {[
              {
                title: "Links",
                items: ["Home", "Shop", "About", "Contact"],
                section: "links",
              },
              {
                title: "Help",
                items: ["Payment Options", "Returns", "Privacy Policies"],
                section: "help",
              },
            ].map(({ title, items, section }) => (
              <div key={section}>
                <button
                  className="w-full text-lg font-semibold text-gray-900 flex justify-between items-center md:block"
                  onClick={() => toggleSection(section)}
                >
                  {title}
                  <span className="md:hidden text-xl text-gray-700">
                    {openSection === section ? "−" : "+"}
                  </span>
                </button>
                <ul
                  className={`mt-4 space-y-3 text-sm ${
                    openSection === section || !isMobile ? "block" : "hidden"
                  }`}
                >
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter Section */}
            <div>
              <button
                className="w-full text-lg font-semibold text-gray-900 flex justify-between items-center md:block"
                onClick={() => toggleSection("newsletter")}
              >
                Newsletter
                <span className="md:hidden text-xl text-gray-700">
                  {openSection === "newsletter" ? "−" : "+"}
                </span>
              </button>
              <div
                className={`mt-4 ${
                  openSection === "newsletter" || !isMobile ? "block" : "hidden"
                }`}
              >
                <form className="space-y-4">
                  <input
                    type="email"
                    className="w-full border-b border-gray-400 py-2 text-sm text-gray-600 outline-none bg-transparent"
                    placeholder="Enter Your Email Address"
                  />
                  <button
                    type="submit"
                    className="text-sm font-semibold text-gray-900 hover:text-gray-700"
                  >
                    SUBSCRIBE
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Funiro. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
