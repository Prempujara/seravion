"use client";

import React from "react";

const ContactUs = () => {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-[#071019] text-white">
      
      {/* GRID OVERLAY */}
      <div
        className="absolute inset-0 z-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "106px 106px",
        }}
      />

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-10">
        <img
          src="/contact_background.png"
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 z-20 bg-black/10" />

      {/* CONTENT */}
      <div className="relative z-30 h-full flex flex-col justify-end">
        
        {/* HERO TEXT */}
        <div className="px-[118px] pb-[42px]">
          <h1 className="text-[62px] leading-[0.98] tracking-[-0.06em] font-semibold max-w-[620px]">
            Have an idea?
            <br />
            TELL US
          </h1>
        </div>

        {/* BOTTOM PANELS */}
        <div className="flex w-full h-[185px]">
          
          {/* LEFT PANEL */}
          <div className="relative w-1/2 overflow-hidden">
            
            {/* BLUE + BLACK GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#244ea6] via-[#2d6cff] to-[#1a1a1a]" />

            {/* BLUR LIGHT */}
            <div className="absolute left-[280px] top-0 h-full w-[240px] bg-[#76a8ff] blur-[110px] opacity-60" />

            <div className="relative z-10 h-full px-[115px] py-[28px] flex flex-col justify-between">
              
              {/* TOP LABEL */}
              <p className="text-[15px] text-white font-normal tracking-[-0.01em]">
                Test It Yourself
              </p>

              {/* BOTTOM AREA */}
              <div className="flex items-end justify-between">
                
                {/* INPUT */}
                <div className="w-[280px] h-[52px] bg-white/14 backdrop-blur-sm border border-white/5 flex items-center px-6">
                  <span className="text-white/75 text-[15px] font-normal">
                    Mobile Number
                  </span>
                </div>

                {/* BUTTON */}
                <button className="text-[32px] leading-none font-light underline underline-offset-[10px]">
                  Get a Call
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="w-1/2 bg-[#9CEC84] text-black">
            <div className="h-full px-[46px] py-[28px] flex flex-col">
              
              {/* TOP LABEL */}
              <p className="text-[15px] font-normal">
                See It in Action
              </p>

              {/* CENTER BUTTON */}
              <div className="flex-1 flex items-center justify-center">
                <button className="text-[32px] leading-none font-normal underline underline-offset-[10px]">
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;