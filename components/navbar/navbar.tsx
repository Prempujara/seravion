"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // adjust this value based on when video becomes dominant
      setDarkMode(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md
        bg-white/10
        border-b border-white/10
        shadow-[0_8px_32px_rgba(0,0,0,0.08)]
        transition-all duration-300
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <div className="leading-tight">
            <p className={`font-semibold text-base tracking-tight transition-colors duration-300 ${
              darkMode ? "text-white" : "text-black"
            }`}>
              Seravion
            </p>
            <p className={`text-[10px] uppercase tracking-widest transition-colors duration-300 ${
              darkMode ? "text-gray-300" : "text-gray-500"
            }`}>
              Technologies
            </p>
          </div>
        </Link>

        {/* Nav Links */}
        <nav className={`hidden md:flex items-center text-sm gap-8 font-light transition-colors duration-300 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}>
          <Link href="#" className="hover:opacity-70">About Us</Link>
          <Link href="#" className="hover:opacity-70">Work+</Link>
          <Link href="#" className="hover:opacity-70">Industries+</Link>
          <Link href="#" className="hover:opacity-70">Services+</Link>
          <Link href="#" className="hover:opacity-70">Blog</Link>
          <Link href="#" className="hover:opacity-70">FAQs</Link>
        </nav>

        {/* Button */}
        <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-lg transition">
          Contact Us
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-6 h-0.5 transition-all ${
            darkMode ? "bg-white" : "bg-black"
          } ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 transition-all ${
            darkMode ? "bg-white" : "bg-black"
          } ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 transition-all ${
            darkMode ? "bg-white" : "bg-black"
          } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-md bg-white/20 border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm">
          <Link href="#">About Us</Link>
          <Link href="#">Work+</Link>
          <Link href="#">Industries+</Link>
          <Link href="#">Services+</Link>
          <Link href="#">Blog</Link>
          <Link href="#">FAQs</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;