"use client";

import React from "react";

const Testimonials = () => {
  return (
    <section className="relative h-screen w-full bg-[#0a0a0a] text-white flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-blue-600" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight">
            What Our Client Say's
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:max-w-xl">
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Seravion is a people-first design studio that cares as much about your business and product as you do.
          </p>
          <button className="px-8 py-3 border border-white/20 rounded-lg text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap">
            View All
          </button>
        </div>
      </div>

      {/* MAIN TESTIMONIAL CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1.5fr_1fr] gap-0 items-stretch h-[50vh]">
        
        {/* LEFT: MAIN IMAGE */}
        <div className="relative overflow-hidden rounded-l-xl">
          <img 
            src="/main_testimonial.png" 
            alt="Client" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* MIDDLE: QUOTE BOX */}
        <div className="bg-[#161d26] p-8 md:p-12 flex flex-col justify-between relative">
          <div>
            {/* SVG Quote Icon */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6 opacity-80">
              <path d="M10 25H15L12.5 15H7.5L10 25ZM25 25H30L27.5 15H22.5L25 25Z" fill="white" />
              <path d="M11.6667 26.6667H18.3333L15 13.3333H8.33333L11.6667 26.6667ZM28.3333 26.6667H35L31.6667 13.3333H25L28.3333 26.6667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            
            <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-gray-200">
              Working with Seravion was a game changer for our business. Their team truly understands our vision and brings it to life with creativity and precision. We felt valued every step of the way!
            </p>
          </div>

          <div className="mt-8">
            <h4 className="font-bold text-lg">Ravi Yadav</h4>
            <p className="text-gray-500 text-sm uppercase tracking-wider">Company Name</p>
          </div>
        </div>

        {/* RIGHT: THUMBNAILS LIST */}
        <div className="flex flex-row md:flex-row gap-4 ml-8 items-end justify-start">
          {["/thumb1.png", "/thumb2.png", "/thumb3.png"].map((img, i) => (
            <div key={i} className="w-24 md:w-32 lg:w-40 aspect-square overflow-hidden rounded-lg grayscale hover:grayscale-0 cursor-pointer transition-all duration-500">
              <img src={img} alt="Client Thumbnail" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;