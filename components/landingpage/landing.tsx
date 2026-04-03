"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Landing = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // control animation range
      const maxScroll = 500;

      const value = Math.min(scrollY / maxScroll, 1);
      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[200vh] bg-white">
      
      {/* Sticky Section */}
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center text-center px-6 z-20">
          
          <div className="pt-32">
            <h1 className="font-semibold text-4xl md:text-[72px] leading-[120%] text-black max-w-4xl">
              Engineering the future of <br />
              digital experience
            </h1>

            <button className="mt-8 bg-blue-500 text-white px-6 py-2 rounded-lg">
              Explore Works
            </button>
          </div>
        </div>

        {/* Device Image */}
        <Image
          src="/placeholder.png"
          alt="Device"
          fill
          className="object-cover z-10"
        />

        {/* VIDEO (TRANSFORMING ELEMENT) */}
        <div
          className="absolute z-20 overflow-hidden transition-all duration-300"
          style={{
            top: `${50 - progress * 50}%`,
            left: `${50 - progress * 50}%`,
            width: `${64 + progress * 36}%`,
            height: `${70 + progress * 30}%`,
            transform: `translate(-50%, -50%)`,
            borderRadius: `${20 - progress * 20}px`,
          }}
        >
          <video
            src="/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Landing;