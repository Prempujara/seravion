"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const ServicesSection = () => {
  const panelsRef = useRef<HTMLDivElement[]>([]);
  const contentsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    panelsRef.current.forEach((panel, index) => {
      const content = contentsRef.current[index];

      const tl = gsap.timeline({ paused: true });

      // 🔥 PANEL EXPAND
      tl.to(panel, {
        flex: 3,
        duration: 0.6,
        ease: "power3.out",
      })
        .to(
          panelsRef.current.filter((p) => p !== panel),
          {
            flex: 0.7,
            duration: 0.6,
            ease: "power3.out",
          },
          0
        )
        // 🔥 CONTENT FADE + SLIDE (this was missing)
        .to(
          content,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          0.2
        );

      panel.addEventListener("mouseenter", () => tl.play());
      panel.addEventListener("mouseleave", () => tl.reverse());
    });
  }, []);

  return (
    <section className="w-full h-screen flex overflow-hidden">
      {/* LEFT TEXT */}
      <div className="w-[30%] bg-[#f3f3f3] flex items-center px-12">
        <h1 className="text-[42px] font-semibold leading-tight text-black">
          Proven <br />
          Results. <br />
          <span className="text-blue-500">Powerful</span> <br />
          <span className="text-blue-500">Impact.</span>
        </h1>
      </div>

      {/* SLIDERS */}
      <div className="flex-1 flex">
        {["01", "02", "03", "04"].map((num, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) panelsRef.current[i] = el;
            }}
            className={`flex-[1] relative cursor-pointer flex items-start justify-start p-6 text-white
              ${
                i === 0
                  ? "bg-blue-500"
                  : i === 1
                  ? "bg-blue-800"
                  : i === 2
                  ? "bg-blue-900"
                  : "bg-[#020c2b]"
              }
            `}
          >
            {/* NUMBER */}
            <span className="text-sm opacity-80">{num}</span>

            {/* 🔥 HOVER CONTENT (FIXED) */}
            <div
              ref={(el) => {
                if (el) contentsRef.current[i] = el;
              }}
              className="absolute bottom-10 left-6 opacity-0 translate-y-6"
            >
              <h2 className="text-3xl font-semibold mb-2">2,000+</h2>
              <p className="text-sm opacity-80">Projects Launched</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;