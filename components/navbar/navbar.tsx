"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Seravion Logo" width={36} height={36} />
          <div className="leading-tight">
            <p className="text-black font-semibold text-lg tracking-tight">
              Seravion
            </p>
            <p className="text-gray-400 text-[11px] font-medium tracking-wider uppercase">
              Technologies
            </p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center font-normal text-sm gap-8 text-gray-600">
          <Link
            href="#about"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            href="#work"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Work
          </Link>
          <Link
            href="#industries"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Industries
          </Link>
          <Link
            href="#services"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            href="#blog"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Blog
          </Link>
          <Link
            href="#faq"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            FAQs
          </Link>
        </nav>

        {/* Contact Button */}
        <div className="flex items-center gap-4">
          <button className="hidden lg:block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors duration-200">
            Contact Us
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-4">
          {["About Us", "Work", "Industries", "Services", "Blog", "FAQs"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                className="block text-gray-700 text-base font-medium hover:text-blue-600 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </Link>
            )
          )}
          <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors duration-200">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
