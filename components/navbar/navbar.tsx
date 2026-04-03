"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Seravion Logo" width={32} height={32} />
          <div className="leading-tight">
            <p className="text-black font-semibold text-lg">Seravion</p>
            <p className="text-gray-500 text-xs">Technologies</p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center font-normal text-sm gap-10 text-gray-600">
          <Link href="#" className="hover:text-black transition">
            About Us
          </Link>
          <Link href="#" className="hover:text-black transition">
            Work
          </Link>
          <Link href="#" className="hover:text-black transition">
            Industries
          </Link>
          <Link href="#" className="hover:text-black transition">
            Services
          </Link>
          <Link href="#" className="hover:text-black transition">
            Blog
          </Link>
          <Link href="#" className="hover:text-black transition">
            FAQs
          </Link>
        </nav>

        {/* Contact Button */}
        <button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white text-sm px-6 py-2.5 rounded-lg transition font-medium">
          Contact Us
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-black transition-all ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-black transition-all ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-black transition-all ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-8 py-6">
          <nav className="flex flex-col gap-4 text-sm text-gray-600">
            <Link href="#" className="hover:text-black transition py-1">
              About Us
            </Link>
            <Link href="#" className="hover:text-black transition py-1">
              Work
            </Link>
            <Link href="#" className="hover:text-black transition py-1">
              Industries
            </Link>
            <Link href="#" className="hover:text-black transition py-1">
              Services
            </Link>
            <Link href="#" className="hover:text-black transition py-1">
              Blog
            </Link>
            <Link href="#" className="hover:text-black transition py-1">
              FAQs
            </Link>
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-6 py-2.5 rounded-lg transition font-medium mt-2 w-full">
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
