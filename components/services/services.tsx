// ==========================
// FILE: components/services/services.tsx
// ==========================
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const data = [
  {
    number: "01",
    title: "20+",
    desc1: "Projects delivered",
  },
  {
    number: "02",
    title: "5+",
    desc1: "Countries served",
  },
  {
    number: "03",
    title: "15+",
    desc1: "Years of Excellence",
  },
  {
    number: "04",
    title: "98%",
    desc1: "Client Retention",
    desc2: "Launched",
  },
];
const Services = () => {
  const panelsRef = useRef<HTMLDivElement[]>([]);
  const contentsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const panels = panelsRef.current;
    const contents = contentsRef.current;

    const handleEnter = (activeIndex: number) => {
      panels.forEach((panel, index) => {
        gsap.killTweensOf(panel);
        gsap.killTweensOf(contents[index]);

        gsap.to(panel, {
          flex: index === activeIndex ? 3 : 0.6,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.to(contents[index], {
          opacity: index === activeIndex ? 1 : 0,
          y: index === activeIndex ? 0 : 24,
          duration: 0.4,
          ease: "power3.out",
        });
      });
    };

    const handleLeave = () => {
      panels.forEach((panel, index) => {
        gsap.killTweensOf(panel);
        gsap.killTweensOf(contents[index]);

        gsap.to(panel, {
          flex: 1,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.to(contents[index], {
          opacity: 0,
          y: 24,
          duration: 0.3,
          ease: "power3.out",
        });
      });
    };

    panels.forEach((panel, index) => {
      const enter = () => handleEnter(index);
      const leave = () => handleLeave();

      panel.addEventListener("mouseenter", enter);
      panel.addEventListener("mouseleave", leave);

      (panel as any).__enter = enter;
      (panel as any).__leave = leave;
    });

    return () => {
      panels.forEach((panel) => {
        panel.removeEventListener(
          "mouseenter",
          (panel as any).__enter
        );
        panel.removeEventListener(
          "mouseleave",
          (panel as any).__leave
        );
      });
    };
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
              <h2 className="text-4xl font-semibold mb-3">
                {item.title}
              </h2>

              <p className="text-sm opacity-80">{item.desc1}</p>

              {item.desc2 && (
                <p className="text-sm opacity-80">
                  {item.desc2}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;