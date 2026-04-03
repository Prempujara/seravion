"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold text-base">Seravion</p>
            <p className="text-gray-500 text-[10px] -mt-0.5">Technologies</p>
          </div>
        </div>

        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex items-center font-light text-sm gap-8 text-gray-300">
          <Link href="#" className="hover:text-white transition-colors duration-200">
            About Us
          </Link>
          <Link href="#" className="hover:text-white transition-colors duration-200 flex items-center gap-1">
            Work
            <span className="text-blue-400 text-xs">+</span>
          </Link>
          <Link href="#" className="hover:text-white transition-colors duration-200 flex items-center gap-1">
            Industries
            <span className="text-blue-400 text-xs">+</span>
          </Link>
          <Link href="#" className="hover:text-white transition-colors duration-200 flex items-center gap-1">
            Services
            <span className="text-blue-400 text-xs">+</span>
          </Link>
          <Link href="#" className="hover:text-white transition-colors duration-200">
            Blog
          </Link>
          <Link href="#" className="hover:text-white transition-colors duration-200">
            FAQs
          </Link>
        </nav>

        {/* Contact Button */}
        <button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white text-sm px-5 py-2 rounded-lg transition-colors duration-200 font-medium">
          Contact Us
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0a0a0f] px-6 py-4 flex flex-col gap-4">
          {["About Us", "Work", "Industries", "Services", "Blog", "FAQs"].map((item) => (
            <Link key={item} href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              {item}
            </Link>
          ))}
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-5 py-2 rounded-lg transition-colors duration-200 font-medium w-full mt-2">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
