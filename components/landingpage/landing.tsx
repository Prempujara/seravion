"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Landing = () => {
  const [showBgVideo, setShowBgVideo] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);

      if (currentScroll > 80) {
        setShowBgVideo(true);
      } else {
        setShowBgVideo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[150vh] bg-white">
      
      {/* Sticky */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* TEXT */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-start pt-20 text-center z-30 px-6 transition-all duration-500"
          style={{
            opacity: showBgVideo ? 0 : 1,
            transform: showBgVideo ? "translateY(-40px)" : "translateY(0)",
          }}
        >
          <h1 className="font-semibold text-3xl md:text-[64px] leading-[120%] text-black max-w-4xl">
            Engineering the future of <br />
            digital experience
          </h1>

          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white text-sm px-5 py-2 rounded-lg transition">
            Explore Works
          </button>
        </div>

        {/* FULLSCREEN VIDEO (ANIMATED) */}
        <div
          className="absolute inset-0 z-10 transition-all duration-300"
          style={{
            opacity: showBgVideo ? 1 : 0,
            transform: showBgVideo
              ? `translateY(${Math.max(-scrollY * 0.25, -150)}px)
                 translateX(${Math.min(scrollY * 0.15, 120)}px)`
              : "translateY(0px) translateX(0px)",
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

        {/* DEVICE + EMBEDDED VIDEO */}
        <div
          className="absolute inset-0 flex items-end justify-center z-20 transition-all duration-500"
          style={{
            opacity: showBgVideo ? 0 : 1,
          }}
        >
          <div className="relative w-full max-w-5xl h-[400px] md:h-[500px]">

            {/* Device Image */}
            <Image
              src="/placeholder.png"
              alt="Device"
              fill
              className="object-cover"
              priority
            />

            {/* Video inside device */}
            <div
              className="absolute top-1/2 left-1/2 
                         w-[69%] h-[70%] 
                         -translate-x-[51%] -translate-y-[28%] 
                         overflow-hidden rounded-[20px]"
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
        </div>

      </div>
    </section>
  );
};

export default Landing;