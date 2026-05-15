"use client";

import React from "react";
import {
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FiX } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#030b14] text-white overflow-hidden">
      
      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5" />

      {/* MAIN CONTENT */}
      <div className="px-[112px] pt-[54px] pb-[42px]">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-[1.5fr_0.7fr_0.7fr_0.7fr] gap-[90px]">
          
          {/* LOGO + DESC */}
          <div>
            <img
              src="/footer_logo.png"
              alt="Seravion"
              className="w-[175px] mb-6"
            />

            <p className="max-w-[290px] text-[16px] leading-[1.45] text-white/45 font-normal">
              Seravion improves access, generates
              savings, and increases efficiency for both
              your practice and your patients.
            </p>
          </div>

          {/* NAVIGATE */}
          <div>
            <p className="text-white/35 text-[15px] mb-6">Navigate</p>

            <div className="flex flex-col gap-4 text-[18px]">
              <a href="#">About Us</a>
              <a href="#">Works</a>
              <a href="#">Industries</a>
              <a href="#">Services</a>
              <a href="#">Blogs</a>
              <a href="#">FAQs</a>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <p className="text-white/35 text-[15px] mb-6">Services</p>

            <div className="flex flex-col gap-4 text-[18px]">
              <a href="#">About Us</a>
              <a href="#">Works</a>
              <a href="#">Industries</a>
              <a href="#">Services</a>
              <a href="#">Blogs</a>
              <a href="#">FAQs</a>
            </div>
          </div>

          {/* FOLLOW */}
          <div>
            <p className="text-white/35 text-[15px] mb-6">Follow</p>

            <div className="flex flex-col gap-4 text-[18px]">
              <a href="#">Facebook</a>
              <a href="#">Linkedin</a>
              <a href="#">YouTube</a>
            </div>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="grid grid-cols-3 mt-[90px]">
          
          {/* CALL */}
          <div>
            <p className="text-white/35 text-[15px] mb-10">Call Us</p>

            <a
              href="#"
              className="text-[30px] leading-none underline underline-offset-[8px] font-light tracking-[-0.04em]"
            >
              (205) 908–3709
            </a>
          </div>

          {/* EMAIL */}
          <div>
            <p className="text-white/35 text-[15px] mb-10">Contact Us</p>

            <a
              href="#"
              className="text-[30px] leading-none underline underline-offset-[8px] font-light tracking-[-0.04em]"
            >
              info@transform9.com
            </a>
          </div>

          {/* LOCATION */}
          <div className="pl-[40px]">
            <p className="text-white/35 text-[15px] mb-10">Location</p>

            <a
              href="#"
              className="text-[30px] leading-none underline underline-offset-[8px] font-light tracking-[-0.04em]"
            >
              Bengaluru, India
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/5 px-[112px] h-[72px] flex items-center justify-between">
        
        {/* COPYRIGHT */}
        <p className="text-white/35 text-[15px]">
          © 2026 Seravion. All Rights Reserved.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-3">
          
          <div className="w-[38px] h-[38px] border border-white/10 flex items-center justify-center">
            <FaYoutube className="text-[15px]" />
          </div>

          <div className="w-[38px] h-[38px] border border-white/10 flex items-center justify-center">
            <FaLinkedinIn className="text-[15px]" />
          </div>

          <div className="w-[38px] h-[38px] border border-white/10 flex items-center justify-center">
            <FiX className="text-[15px]" />
          </div>

          <div className="w-[38px] h-[38px] border border-white/10 flex items-center justify-center">
            <FaInstagram className="text-[15px]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;