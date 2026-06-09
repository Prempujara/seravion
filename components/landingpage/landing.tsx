// ==========================
// FILE: components/landingpage/landing.tsx
// FINAL FIX — KEEP STICKY, REMOVE GSAP PIN (NO FUNCTIONALITY CHANGE)
// ==========================
"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Landing = () => {
  const containerRef = useRef(null);
  const initialTextRef = useRef(null);
  const finalTextRef = useRef(null);
  const deviceRef = useRef(null);
  const videoWrapperRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const device = deviceRef.current;
      const videoWrapper = videoWrapperRef.current;
      const finalText = finalTextRef.current;

      const getScale = () => {
        const rect = videoWrapper.getBoundingClientRect();
        const scaleX = window.innerWidth / rect.width;
        const scaleY = window.innerHeight / rect.height;
        return Math.max(scaleX, scaleY);
      };

      let finalScale = getScale();

      ScrollTrigger.addEventListener("refreshInit", () => {
        finalScale = getScale();
      });

      gsap.set(finalText, {
        y: 140,
        opacity: 0,
      });

      gsap.set(device, {
        scale: 0.85,
        y: 0,
        transformOrigin: "center center",
        willChange: "transform, opacity",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 1.6,
          pin: false,
          anticipatePin: 1,
          fastScrollEnd: true,
        },
        defaults: {
          ease: "none",
        },
      });

      tl.to(initialTextRef.current, {
        opacity: 0,
        y: -80,
        duration: 0.6,
      });

      tl.to(
        device,
        {
          scale: finalScale,
          y: -window.innerHeight * 0.25,
          duration: 2.2,
        },
        0
      );

      tl.to(
        device.querySelector("img"),
        {
          opacity: 0,
          duration: 0.6,
        },
        1.4
      );

      tl.to(
        finalText,
        {
          opacity: 1,
          y: 0,
          duration: 2.4,
          ease: "power4.out",
        },
        2
      );

      tl.to({}, { duration: 0.5 });
      tl.to({}, { duration: 1.5 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[260vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* INITIAL TEXT */}
        <div
          ref={initialTextRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-30 px-6 -translate-y-16 md:-translate-y-28"
        >
          <h1 className="font-semibold text-3xl md:text-[55px] leading-[120%] text-[#394247] max-w-4xl">
            The Digital Engineering Partner Built for What's Coming Next
          </h1>

          <button className="mt-6 bg-blue-500 text-white px-5 py-2 rounded-lg">
            Explore Works
          </button>
        </div>

        {/* FINAL TEXT */}
        <div
          ref={finalTextRef}
          className="absolute inset-0 flex flex-col justify-between z-30 px-6 md:px-16 will-change-transform"
        >
          <div className="pt-24 md:pt-28">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-3 h-2 bg-blue-500 rounded-full"></span>

              <p className="text-xs tracking-widest text-white">
                ABOUT US
              </p>
            </div>

            <h1 className="mt-4 font-extrabold text-xl md:text-[34px] leading-[120%] text-white max-w-md">
              Transforming Ambitious <br />
              Ideas into Intelligent <br />
              Digital Products
            </h1>
          </div>

          <div className="pb-12">
            <p className="text-sm text-gray-300 max-w-sm mb-3 leading-relaxed">
              Seravion Technologies is your end-to-end
              <br />
              technology partner. We architect, build and
              <br />
              scale digital products the redefine industries
            </p>

            <button className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-lg border border-white/20 text-sm hover:bg-white hover:border-white hover:text-black transition-all duration-300">
              Know More
            </button>
          </div>
        </div>

        {/* DEVICE */}
        <div className="absolute inset-x-0 bottom-[-40px] flex justify-center z-20 pointer-events-none">
          <div
            ref={deviceRef}
            className="relative w-full max-w-4xl h-[260px] md:h-[380px]"
          >
            <div
              ref={videoWrapperRef}
              className="absolute overflow-hidden rounded-[12px] shadow-inner z-0"
              style={{
                top: "2%",
                left: "18%",
                width: "63%",
                height: "90%",
              }}
            >
              <video
                src="/hero-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>

            <Image
              src="/tab.png"
              alt="Device"
              fill
              className="object-cover z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;