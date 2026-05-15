"use client";

import React from "react";

const Blogs = () => {
  return (
    <section className="relative h-screen w-full bg-[#0a121e] text-white overflow-hidden px-8 md:px-16 lg:px-24 flex flex-col justify-center">
      
      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16 gap-10">
        
        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-4 h-[7px] rounded-full bg-[#1E90FF]" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-gray-400 font-semibold">
              Blogs
            </span>
          </div>

          <h2 className="text-[42px] md:text-[56px] font-semibold leading-none tracking-[-0.03em]">
            Latest Blog
          </h2>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col md:flex-row md:items-center gap-10 max-w-[640px]">
          <p className="text-gray-400 text-[18px] leading-[1.6] max-w-[420px]">
            Seravion is a people-first design studio that cares as much
            about your business and product as you do.
          </p>

          <button className="border border-white/20 px-10 py-4 rounded-[10px] text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap">
            View All
          </button>
        </div>
      </div>

      {/* BLOG CARDS */}
      <div className="flex items-start gap-10 w-[1500px]">
        
        {/* BLOG 1 */}
        <div className="w-[500px] flex-shrink-0 overflow-hidden group cursor-pointer">
          <img
            src="/blog_1.png"
            alt="Blog 1"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>

        {/* BLOG 2 */}
        <div className="w-[360px] flex-shrink-0 overflow-hidden group cursor-pointer">
          <img
            src="/blog_2.png"
            alt="Blog 2"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>

        {/* BLOG 3 */}
        <div className="w-[360px] flex-shrink-0 overflow-hidden group cursor-pointer">
          <img
            src="/blog_3.png"
            alt="Blog 3"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>

        {/* BLOG 4 PARTIAL */}
        <div className="w-[260px] flex-shrink-0 overflow-hidden opacity-95 group cursor-pointer">
          <img
            src="/blog_4.png"
            alt="Blog 4"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </section>
  );
};

export default Blogs;