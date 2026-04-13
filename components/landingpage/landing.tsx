"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Landing = () => {
  const containerRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const textRef = useRef(null);
  const deviceRef = useRef(null);
  const fullscreenVideoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // INITIAL POSITION (controlled by GSAP)
    gsap.set(videoWrapperRef.current, {
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -30,
      width: "70%",
      height: "70%",
      borderRadius: "20px",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1500",
        scrub: 1,
        pin: true,
      },
    });

    // TEXT FADE
    tl.to(textRef.current, {
      opacity: 0,
      y: -80,
      ease: "power2.out",
    });

    // VIDEO EXPAND
    tl.to(
      videoWrapperRef.current,
      {
        width: "100vw",
        height: "100vh",
        yPercent: -50,
        borderRadius: 0,
        ease: "power3.out",
      },
      0
    );

    // DEVICE FADE OUT
    tl.to(
      deviceRef.current,
      {
        opacity: 0,
        ease: "power2.out",
      },
      0.3
    );

    // FULLSCREEN VIDEO FADE IN
    tl.to(
      fullscreenVideoRef.current,
      {
        opacity: 1,
        ease: "power2.out",
      },
      0.5
    );
  }, []);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* TEXT */}
        <div
          ref={textRef}
          className="absolute inset-0 flex flex-col items-center justify-start pt-20 text-center z-30 px-6"
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
          ref={deviceRef}
          className="absolute inset-0 flex items-end justify-center z-20 pointer-events-none"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-75 md:h-[380px]">
            <Image
              src="/tab.png"
              alt="Device"
              fill
              className="object-cover"
              priority
            />

            {/* ✅ VIDEO WRAPPER (Adjusted width ↓ and height ↑) */}
            <div
              ref={videoWrapperRef}
              className="absolute overflow-hidden rounded-[16px]"
              style={{
                top: "50%",
                left: "49.5%",
                width: "62%",   // reduced width
                height: "85%",  // increased height
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
          ref={fullscreenVideoRef}
          className="absolute inset-0 z-10 opacity-0"
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