// LoginSignup.jsx
import React, { useState, useRef, useEffect } from "react";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("customer");
  const [focusedField, setFocusedField] = useState(null);

  // Refs for input fields to detect focus
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Handle focus and blur events
  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  // Add event listeners to input fields
  useEffect(() => {
    const inputs = [fullNameRef.current, emailRef.current, passwordRef.current];
    inputs.forEach((input) => {
      if (input) {
        input.addEventListener("focus", () => handleFocus(input.name));
        input.addEventListener("blur", handleBlur);
      }
    });

    return () => {
      inputs.forEach((input) => {
        if (input) {
          input.removeEventListener("focus", () => handleFocus(input.name));
          input.removeEventListener("blur", handleBlur);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-amber-100 via-amber-50 to-orange-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-200 rounded-full opacity-30 transform -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full opacity-30 transform translate-x-48 translate-y-48"></div>

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all duration-300 hover:shadow-3xl z-10 border border-amber-200">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center">
            <div className="flex-shrink-0 transform transition-all duration-300 hover:translate-x-1 md:hover:translate-x-1 lg:hover:translate-x-2">
              <img
                src="/Logo.png"
                alt="FurnitureHaven Logo"
                className="h-8 md:h-9 lg:h-10 xl:h-12 w-auto"
              />
            </div>
          </div>
          <p className="text-gray-600 mt-2 font-medium tracking-wide">
            Crafting Comfort for Your Home
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-6 border border-amber-300 rounded-lg overflow-hidden">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-4 py-2 w-1/2 font-medium transition-all duration-300 ${
              isLogin
                ? "bg-amber-600 text-white shadow-inner"
                : "bg-amber-50 text-amber-800 hover:bg-amber-100"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-4 py-2 w-1/2 font-medium transition-all duration-300 ${
              !isLogin
                ? "bg-amber-600 text-white shadow-inner"
                : "bg-amber-50 text-amber-800 hover:bg-amber-100"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {!isLogin && (
            <>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    ref={fullNameRef}
                    className="w-full pl-10 pr-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 hover:border-amber-400 transform hover:-translate-y-0.5 bg-amber-50 text-gray-800 placeholder-gray-400"
                    placeholder="John Doe"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className={`transition-colors duration-300 ${
                          focusedField === "fullName"
                            ? "fill-amber-600"
                            : "fill-amber-400"
                        }`}
                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Role Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Register as
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="role"
                      value="customer"
                      checked={role === "customer"}
                      onChange={(e) => setRole(e.target.value)}
                      className="h-4 w-4 text-amber-600 focus:ring-amber-500 transition-all duration-300 group-hover:scale-110"
                    />
                    <span className="ml-2 text-sm text-gray-600 group-hover:text-amber-600 transition-colors duration-300">
                      Customer
                    </span>
                  </label>
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="role"
                      value="vendor"
                      checked={role === "vendor"}
                      onChange={(e) => setRole(e.target.value)}
                      className="h-4 w-4 text-amber-600 focus:ring-amber-500 transition-all duration-300 group-hover:scale-110"
                    />
                    <span className="ml-2 text-sm text-gray-600 group-hover:text-amber-600 transition-colors duration-300">
                      Vendor
                    </span>
                  </label>
                </div>
              </div>
            </>
          )}

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                ref={emailRef}
                className="w-full pl-10 pr-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 hover:border-amber-400 transform hover:-translate-y-0.5 bg-amber-50 text-gray-800 placeholder-gray-400"
                placeholder="you@example.com"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={`transition-colors duration-300 ${
                      focusedField === "email"
                        ? "fill-amber-600"
                        : "fill-amber-400"
                    }`}
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                ref={passwordRef}
                className="w-full pl-10 pr-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 hover:border-amber-400 transform hover:-translate-y-0.5 bg-amber-50 text-gray-800 placeholder-gray-400"
                placeholder="••••••••"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={`transition-colors duration-300 ${
                      focusedField === "password"
                        ? "fill-amber-600"
                        : "fill-amber-400"
                    }`}
                    d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {isLogin && (
            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-amber-600 transition-all duration-300 group-hover:scale-110"
                />
                <span className="ml-2 text-sm text-gray-600 group-hover:text-amber-600 transition-colors duration-300">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="text-sm text-amber-600 hover:underline hover:text-amber-700 transition-colors duration-300"
              >
                Forgot Password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-600 to-orange-500 text-white py-2 rounded-lg hover:from-amber-700 hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Social Login */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-amber-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500 font-medium">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="group flex items-center justify-center py-2 border border-amber-300 rounded-lg bg-amber-50 hover:bg-amber-100 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md">
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                  className="group-hover:fill-amber-600 transition-colors duration-300"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1.01.68-2.3 1.08-3.71 1.08-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C4.01 20.52 7.62 23 12 23z"
                  fill="#34A853"
                  className="group-hover:fill-amber-600 transition-colors duration-300"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                  className="group-hover:fill-amber-600 transition-colors duration-300"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.62 1 4.01 3.48 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                  className="group-hover:fill-amber-600 transition-colors duration-300"
                />
              </svg>
              <span className="text-gray-700 font-medium">Google</span>
            </button>
            <button className="group flex items-center justify-center py-2 border border-amber-300 rounded-lg bg-amber-50 hover:bg-amber-100 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md">
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#1877F2"
                  className="group-hover:fill-amber-600 transition-colors duration-300"
                  d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                />
                <path
                  fill="#fff"
                  d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                />
              </svg>
              <span className="text-gray-700 font-medium">Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
