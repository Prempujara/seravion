"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Landing = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const deviceRef = useRef(null);
  const videoWrapperRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.ticker.lagSmoothing(0);
    gsap.config({ force3D: true });

    const device = deviceRef.current;
    const videoWrapper = videoWrapperRef.current;

    // 🔥 calculate perfect fullscreen scale based on VIDEO (not device)
    const rect = videoWrapper.getBoundingClientRect();
    const scaleX = window.innerWidth / rect.width;
    const scaleY = window.innerHeight / rect.height;
    const finalScale = Math.max(scaleX, scaleY); // 🔥 cover entire screen

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
        end: "+=2600",
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
        fastScrollEnd: true,
        invalidateOnRefresh: true,
      },
      defaults: {
        ease: "none",
      },
    });

    // TEXT OUT
    tl.to(textRef.current, {
      opacity: 0,
      y: -80,
      duration: 0.6,
    });

    // 🔥 SCALE DEVICE (based on video size)
    tl.to(
      device,
      {
        scale: finalScale,
        y: -window.innerHeight * 0.25,
        duration: 2.2,
      },
      0
    );

    // 🔥 HIDE IPAD FRAME (smooth)
    tl.to(
      device.querySelector("img"),
      {
        opacity: 0,
        duration: 0.6,
      },
      1.4
    );

    tl.to({}, { duration: 0.5 });
    tl.to({}, { duration: 1.5 });

    let rafId;
    const raf = () => {
      ScrollTrigger.update();
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-[320vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* TEXT */}
        <div
          ref={textRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-30 px-6 -translate-y-16 md:-translate-y-28"
        >
          <h1 className="font-semibold text-3xl md:text-[64px] leading-[120%] text-[#232323] max-w-4xl">
            Engineering the future of <br />
            digital experience
          </h1>

          <button className="mt-6 bg-blue-500 text-white px-5 py-2 rounded-lg">
            Explore Works
          </button>
        </div>

        {/* DEVICE */}
        <div className="absolute inset-x-0 bottom-[-40px] flex justify-center z-20 pointer-events-none">
          <div
            ref={deviceRef}
            className="relative w-full max-w-4xl h-[260px] md:h-[380px]"
          >
            {/* VIDEO */}
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
                preload="auto"
                className="w-full h-full object-cover"
              />
            </div>

            {/* IMAGE */}
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