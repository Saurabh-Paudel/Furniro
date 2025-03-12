import React, { useState, useEffect } from "react";

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

  const linkItems = ["Home", "Shop", "About", "Contact"];
  const helpItems = ["Payment Options", "Returns", "Privacy Policies"];

  return (
    <footer className="bg-white text-black font-sans">
      <div className="max-w-7xl mx-auto px-6 py-8 md:px-12 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
              Funiro.
            </h2>
            <p className="text-sm text-gray-600 leading-6">
              400 University Drive Suite 200 Coral
              <br />
              Gables, FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div>
            <button
              className="w-full text-lg font-semibold text-gray-900 flex justify-between items-center text-left md:block"
              onClick={() => toggleSection("links")}
              aria-expanded={isMobile ? openSection === "links" : true}
              aria-controls="links-section"
            >
              Links
              <span className="md:hidden text-xl text-gray-700 transition-transform duration-200">
                {openSection === "links" ? "−" : "+"}
              </span>
            </button>
            <ul
              id="links-section"
              className={`mt-4 space-y-3 text-sm transition-all duration-200 ease-in-out ${
                openSection === "links" || !isMobile ? "block" : "hidden"
              }`}
            >
              {linkItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-150"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <button
              className="w-full text-lg font-semibold text-gray-900 flex justify-between items-center text-left md:block"
              onClick={() => toggleSection("help")}
              aria-expanded={isMobile ? openSection === "help" : true}
              aria-controls="help-section"
            >
              Help
              <span className="md:hidden text-xl text-gray-700 transition-transform duration-200">
                {openSection === "help" ? "−" : "+"}
              </span>
            </button>
            <ul
              id="help-section"
              className={`mt-4 space-y-3 text-sm transition-all duration-200 ease-in-out ${
                openSection === "help" || !isMobile ? "block" : "hidden"
              }`}
            >
              {helpItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-150"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <button
              className="w-full text-lg font-semibold text-gray-900 flex justify-between items-center text-left md:block"
              onClick={() => toggleSection("newsletter")}
              aria-expanded={isMobile ? openSection === "newsletter" : true}
              aria-controls="newsletter-section"
            >
              Newsletter
              <span className="md:hidden text-xl text-gray-700 transition-transform duration-200">
                {openSection === "newsletter" ? "−" : "+"}
              </span>
            </button>
            <div
              id="newsletter-section"
              className={`mt-4 transition-all duration-200 ease-in-out ${
                openSection === "newsletter" || !isMobile ? "block" : "hidden"
              }`}
            >
              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    className="w-full border-b border-gray-400 py-2 px-2 text-sm text-gray-600 focus:border-gray-900 outline-none bg-transparent"
                    placeholder="Enter Your Email Address"
                    aria-label="Email address"
                  />
                </div>
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
  );
};

export default Footer;
