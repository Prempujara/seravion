"use client";

import React from "react";

const Testimonials = () => {
  return (
    <section className="relative h-screen w-full bg-[#0a121e] text-white flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-[7px] rounded-full bg-[#1E90FF]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight">
            What Our Client Say's
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:max-w-xl">
          {/* TEXT FIELD WITH CONTROLLED LINE BREAKS */}
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
            <span className="block">Seravion is a people-first design studio that cares as much</span>
            <span className="block">about your business and product as you do.</span>
          </p>
          
          <button className="px-8 py-3 border border-white/20 rounded-none text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap">
            View All
          </button>
        </div>
      </div>

      {/* MAIN TESTIMONIAL CONTENT */}
      <div className="flex flex-row items-end w-full max-w-[1400px]">
        
        {/* THE MAIN RECTANGLE IMAGE */}
        <div className="relative pl-10 w-full max-w-[900px]">
          <div className="relative overflow-hidden rounded-none shadow-2xl">
            <img 
              src="/main_testimonial.png" 
              alt="Testimonial Rectangle" 
              className="w-full h-auto object-cover block border border-white/5"
            />
          </div>
        </div>

        {/* THUMBNAILS LIST */}
        <div className="flex flex-row gap-4 ml-12 pb-2">
          {["/testimonial_2.png", "/testimonial_3.png", "/testimonial_4.png"].map((img, i) => (
            <div 
              key={i} 
              className="w-24 md:w-32 lg:w-40 aspect-square overflow-hidden rounded-none grayscale hover:grayscale-0 cursor-pointer transition-all duration-500 border border-white/10"
            >
              <img 
                src={img} 
                alt="Client Thumbnail" 
                className="w-full h-full object-cover" 
              />
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Testimonials;