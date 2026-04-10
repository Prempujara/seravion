"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Landing = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 400;
      const current = window.scrollY;
      const raw = Math.min(current / maxScroll, 1);

      // Smooth easing
      const eased = 1 - Math.pow(1 - raw, 3);

      setProgress(eased);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Threshold
  const isFullscreen = progress > 0.9;

  return (
    <section className="relative h-[200vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* TEXT */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-start pt-20 text-center z-30 px-6"
          style={{
            opacity: isFullscreen ? 0 : 1 - progress,
            transform: `translateY(${-60 * progress}px)`,
            transition: "all 0.4s ease-out",
          }}
        >
          <h1 className="font-semibold text-3xl md:text-[64px] leading-[120%] text-black max-w-4xl">
            Engineering the future of <br />
            digital experience
          </h1>

          <button className="mt-6 bg-blue-500 text-white px-5 py-2 rounded-lg">
            Explore Works
          </button>
        </div>

        {/* DEVICE */}
        <div
          className="absolute inset-0 flex items-end justify-center z-20 pointer-events-none"
          style={{
            opacity: isFullscreen ? 0 : 1,
            transition: "opacity 0.4s ease-out",
          }}
        >
          <div className="relative w-full max-w-5xl h-[400px] md:h-[500px]">
            <Image
              src="/placeholder.png"
              alt="Device"
              fill
              className="object-cover"
              priority
            />

            {/* VIDEO (EXPANDING) */}
            <div
              className="absolute top-1/2 left-1/2 overflow-hidden"
              style={{
                width: "70%",
                height: "70%",
                transform: `
                  translate(-50%, -30%)
                  translateY(${-350 * progress}px)
                  scale(${1 + progress * 2.2})
                `,
                borderRadius: `${20 - 20 * progress}px`,
                willChange: "transform",
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
        </div>

        {/* FULLSCREEN VIDEO */}
        <div
          className="absolute inset-0 z-10"
          style={{
            opacity: progress,
            transition: "opacity 0.4s ease-out",
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