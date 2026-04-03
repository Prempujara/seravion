"use client";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 border-b border-gray-200 bg-transparent">
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
        <nav className="hidden md:flex items-center font-extralight text-sm gap-10 text-black">
          <Link href="#" className="hover:text-grey transition">
            About Us
          </Link>
          <Link href="#" className="hover:text-grey transition">
            Work+
          </Link>
          <Link href="#" className="hover:text-grey transition">
            Industries+
          </Link>
          <Link href="#" className="hover:text-grey transition">
            Services+
          </Link>
          <Link href="#" className="hover:text-grey transition">
            Blog
          </Link>
          <Link href="#" className="hover:text-grey transition">
            FAQs
          </Link>
        </nav>

        {/* Contact Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-6 py-2 rounded transition">
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Navbar;
