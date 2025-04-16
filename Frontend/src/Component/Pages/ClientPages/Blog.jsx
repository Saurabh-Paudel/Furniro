import React from "react";
import { FiCalendar, FiSearch, FiUser } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function Blog() {
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
            Blog
          </h1>
          <nav className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base flex items-center justify-center gap-1 sm:gap-1.5">
            <Link to="/" className="text-black">
              Home
            </Link>
            <span className="mx-1 sm:mx-2 text-gray-600">
              <MdKeyboardArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <span className="text-gray-600">Blog</span>
          </nav>
        </div>
      </div>
      {/* Blog Content */}
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-2 space-y-12">
            {/* Blog Post 1 */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src="/Blog1.png"
                  alt="Going all-in with millennial design"
                  width={700}
                  height={400}
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="flex items-center gap-6 text-sm text-[#9f9f9f]">
                <div className="flex items-center gap-1">
                  <FiUser size={14} />
                  <span>Admin</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiCalendar size={14} />
                  <span>14 Oct 2022</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#b88e2f]">Wood</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold">
                Going all-in with millennial design
              </h2>
              <p className="text-[#9f9f9f]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
              <Link
                href="/blog/going-all-in-with-millennial-design"
                className="inline-block text-[#b88e2f] font-medium"
              >
                Read more
              </Link>
            </div>

            {/* Blog Post 2 */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src="/Blog2.png"
                  alt="Exploring new ways of decorating"
                  width={700}
                  height={400}
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="flex items-center gap-6 text-sm text-[#9f9f9f]">
                <div className="flex items-center gap-1">
                  <FiUser size={14} />
                  <span>Admin</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiCalendar size={14} />
                  <span>14 Oct 2022</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#b88e2f]">Handmade</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold">
                Exploring new ways of decorating
              </h2>
              <p className="text-[#9f9f9f]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
              <Link
                href="/blog/exploring-new-ways-of-decorating"
                className="inline-block text-[#b88e2f] font-medium"
              >
                Read more
              </Link>
            </div>

            {/* Blog Post 3 */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src="/Blog3.png"
                  alt="Handmade pieces that took time to make"
                  width={700}
                  height={400}
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="flex items-center gap-6 text-sm text-[#9f9f9f]">
                <div className="flex items-center gap-1">
                  <FiUser size={14} />
                  <span>Admin</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiCalendar size={14} />
                  <span>14 Oct 2022</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#b88e2f]">Wood</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold">
                Handmade pieces that took time to make
              </h2>
              <p className="text-[#9f9f9f]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
              <Link
                href="/blog/handmade-pieces-that-took-time-to-make"
                className="inline-block text-[#b88e2f] font-medium"
              >
                Read more
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 border border-[#d9d9d9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#b88e2f]"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <FiSearch size={18} className="text-[#9f9f9f]" />
              </button>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[#9f9f9f]">Crafts</span>
                  <span className="text-[#9f9f9f]">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#9f9f9f]">Design</span>
                  <span className="text-[#9f9f9f]">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#9f9f9f]">Handmade</span>
                  <span className="text-[#9f9f9f]">7</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#9f9f9f]">Interior</span>
                  <span className="text-[#9f9f9f]">1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#9f9f9f]">Wood</span>
                  <span className="text-[#9f9f9f]">6</span>
                </div>
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <img
                    src="/Recent1.png"
                    alt="Going all-in with millennial design"
                    width={80}
                    height={60}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-sm">
                      Going all-in with millennial design
                    </h4>
                    <p className="text-xs text-[#9f9f9f] mt-1">14 Oct 2022</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <img
                    src="/Recent2.png"
                    alt="Exploring new ways of decorating"
                    width={80}
                    height={60}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-sm">
                      Exploring new ways of decorating
                    </h4>
                    <p className="text-xs text-[#9f9f9f] mt-1">14 Oct 2022</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <img
                    src="/Recent3.png"
                    alt="Handmade pieces that took time to make"
                    width={80}
                    height={60}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-sm">
                      Handmade pieces that took time to make
                    </h4>
                    <p className="text-xs text-[#9f9f9f] mt-1">14 Oct 2022</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <img
                    src="/Recent4.png"
                    alt="Modern home in Milan"
                    width={80}
                    height={60}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-sm">
                      Modern home in Milan
                    </h4>
                    <p className="text-xs text-[#9f9f9f] mt-1">14 Oct 2022</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <img
                    src="/Recent5.png"
                    alt="Colorful office designs"
                    width={80}
                    height={60}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-sm">
                      Colorful office designs
                    </h4>
                    <p className="text-xs text-[#9f9f9f] mt-1">14 Oct 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <dir>
          {/* Pagination */}
          <div className="flex justify-center pt-8">
            <div className="flex items-center gap-2">
              <Link
                href="#"
                className="flex items-center justify-center w-8 h-8 bg-[#b88e2f] text-white rounded"
              >
                1
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-8 h-8 bg-white border border-[#d9d9d9] text-[#9f9f9f] rounded hover:bg-gray-100"
              >
                2
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-8 h-8 bg-white border border-[#d9d9d9] text-[#9f9f9f] rounded hover:bg-gray-100"
              >
                3
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center px-3 h-8 bg-white border border-[#d9d9d9] text-[#9f9f9f] rounded hover:bg-gray-100"
              >
                Next
              </Link>
            </div>
          </div>
        </dir>
      </main>
    </div>
  );
}

export default Blog;
