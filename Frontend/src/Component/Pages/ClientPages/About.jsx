import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      {/* About Content */}
      <main className="container mx-auto py-12 px-4 md:px-6">
        {/* Our Story Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-[#9f9f9f] mb-4">
                Furniro is born out of a passion for beautiful, functional
                furniture that transforms houses into homes. Founded in 2012 by
                a team of design enthusiasts, we've grown from a small workshop
                to a global brand while maintaining our commitment to quality
                craftsmanship and sustainable practices.
              </p>
              <p className="text-[#9f9f9f] mb-4">
                Our journey began with a simple idea: to create furniture that
                combines timeless design with modern functionality. We believe
                that furniture should not only look good but also stand the test
                of time, both in terms of durability and style.
              </p>
              <p className="text-[#9f9f9f]">
                Today, we work with skilled artisans and designers from around
                the world to bring you a curated collection of furniture that
                reflects our dedication to quality, sustainability, and
                beautiful design.
              </p>
            </div>
            <div className="relative h-[400px]">
              <img
                src="/workshop.png"
                alt="Furniro workshop"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20 bg-[#faf3ea] py-16 px-6 rounded-lg">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Mission & Vision</h2>
            <div className="flex justify-center mb-6">
              <FaQuoteLeft size={40} className="text-[#b88e2f]" />
            </div>
            <p className="text-xl italic mb-6">
              "To create beautiful, functional furniture that brings joy to
              everyday living while respecting our planet and the people who
              craft our pieces."
            </p>
            <p className="text-[#9f9f9f]">
              We envision a world where every home is furnished with pieces that
              tell a story, created with care for both people and the
              environment. Our goal is to be at the forefront of sustainable
              furniture design, setting new standards for quality,
              craftsmanship, and environmental responsibility.
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-[#d9d9d9] rounded-lg hover:border-[#b88e2f] transition-colors">
              <div className="w-16 h-16 bg-[#f9f1e7] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b88e2f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Craftsmanship</h3>
              <p className="text-[#9f9f9f]">
                We believe in creating furniture that lasts. Every piece is
                crafted with attention to detail and a commitment to excellence.
              </p>
            </div>

            <div className="text-center p-6 border border-[#d9d9d9] rounded-lg hover:border-[#b88e2f] transition-colors">
              <div className="w-16 h-16 bg-[#f9f1e7] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b88e2f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-[#9f9f9f]">
                We're committed to responsible sourcing and production methods
                that minimize our environmental impact and protect our planet
                for future generations.
              </p>
            </div>

            <div className="text-center p-6 border border-[#d9d9d9] rounded-lg hover:border-[#b88e2f] transition-colors">
              <div className="w-16 h-16 bg-[#f9f1e7] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b88e2f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-[#9f9f9f]">
                We design with you in mind, creating furniture that enhances
                your life and meets your needs. Your satisfaction is our
                priority.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative h-[300px] mb-4 overflow-hidden rounded-lg">
                <img
                  src="/jessica_brown.png"
                  alt="Jessica Brown"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold">Jessica Brown</h3>
              <p className="text-[#b88e2f]">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative h-[300px] mb-4 overflow-hidden rounded-lg">
                <img
                  src="/Michael_Chen.png"
                  alt="Michael Chen"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold">Michael Chen</h3>
              <p className="text-[#b88e2f]">Head of Design</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative h-[300px] mb-4 overflow-hidden rounded-lg">
                <img
                  src="/Sarah_Johnson.png"
                  alt="Sarah Johnson"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="text-[#b88e2f]">Lead Craftsperson</p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="relative h-[300px] mb-4 overflow-hidden rounded-lg">
                <img
                  src="/David_Rodriguez.png"
                  alt="David Rodriguez"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold">David Rodriguez</h3>
              <p className="text-[#b88e2f]">Sustainability Director</p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-20">
          <div className="bg-[#faf3ea] py-16 px-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-[#b88e2f] mb-2">
                  12+
                </div>
                <p className="text-lg">Years of Experience</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#b88e2f] mb-2">
                  20k+
                </div>
                <p className="text-lg">Happy Customers</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#b88e2f] mb-2">
                  15+
                </div>
                <p className="text-lg">Design Awards</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#b88e2f] mb-2">
                  100%
                </div>
                <p className="text-lg">Quality Products</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-[#9f9f9f] mb-8">
              We're always looking for talented individuals who share our
              passion for beautiful furniture and sustainable practices. Whether
              you're a designer, craftsperson, or simply passionate about what
              we do, we'd love to hear from you.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/contact"
                className="bg-[#b88e2f] hover:bg-[#a17a29] text-white px-6 py-3 rounded transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/shop"
                className="border border-[#b88e2f] text-[#b88e2f] hover:bg-[#f9f1e7] px-6 py-3 rounded transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
