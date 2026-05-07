// ==========================
// FILE: components/services/services.tsx
// UPDATE — CENTER CONTENT IN PANELS (NO FUNCTIONALITY CHANGE)
// ==========================
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const data = [
  {
    number: "01",
    title: "200+",
    desc1: "Enterprise Products",
    desc2: "Launched",
  },
  {
    number: "02",
    title: "15+",
    desc1: "Countries served globally",
  },
  {
    number: "03",
    title: "98%",
    desc1: "Client Retention Rate",
  },
  {
    number: "04",
    title: "8+",
    desc1: "Years Deep - Tech Excellence",
  },
];

const Services = () => {
  const panelsRef = useRef<HTMLDivElement[]>([]);
  const contentsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    panelsRef.current.forEach((panel, index) => {
      const content = contentsRef.current[index];

      const tl = gsap.timeline({ paused: true });

      tl.to(panel, {
        flex: 3,
        duration: 0.6,
        ease: "power3.out",
      })
        .to(
          panelsRef.current.filter((p) => p !== panel),
          {
            flex: 0.6,
            duration: 0.6,
            ease: "power3.out",
          },
          0
        )
        .to(
          content,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power3.out",
          },
          0.2
        );

      const enter = () => tl.play();
      const leave = () => tl.reverse();

      panel.addEventListener("mouseenter", enter);
      panel.addEventListener("mouseleave", leave);

      return () => {
        panel.removeEventListener("mouseenter", enter);
        panel.removeEventListener("mouseleave", leave);
      };
    });
  }, []);

  return (
    <section className="w-full h-screen flex overflow-hidden">
      {/* LEFT TEXT */}
      <div className="w-[32%] bg-[#efefef] flex items-center px-16">
        <h1 className="text-[64px] leading-[1.1] font-semibold text-black tracking-tight">
          Proven <br />
          Results. <br />
          <span className="text-[#2f7df6]">Powerful</span> <br />
          <span className="text-[#2f7df6]">Impact.</span>
        </h1>
      </div>

      {/* PANELS */}
      <div className="flex-1 flex">
        {data.map((item, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) panelsRef.current[i] = el;
            }}
            className={`flex-[1] relative cursor-pointer flex items-center justify-center text-center p-8 text-white
              ${
                i === 0
                  ? "bg-[#2f7df6]"
                  : i === 1
                  ? "bg-[#1c3faa]"
                  : i === 2
                  ? "bg-[#102a83]"
                  : "bg-[#061a5c]"
              }
            `}
          >
            {/* NUMBER */}
            <span className="absolute top-6 left-6 text-sm opacity-70">
              {item.number}
            </span>

            {/* CENTERED CONTENT */}
            <div
              ref={(el) => {
                if (el) contentsRef.current[i] = el;
              }}
              className="opacity-0 translate-y-6 flex flex-col items-center"
            >
              <h2 className="text-4xl font-semibold mb-3">{item.title}</h2>
              <p className="text-sm opacity-80">{item.desc1}</p>
              {item.desc2 && (
                <p className="text-sm opacity-80">{item.desc2}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;