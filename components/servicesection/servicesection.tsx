"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ServiceSection = () => {
  const scrollWrapperRef = useRef<HTMLDivElement | null>(null);

  const serviceImages = [
    "service-1.png",
    "service-2.png",
    "service-3.png",
    "service-4.png",
    "service-5.png",
  ];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".service-card");

      gsap.set(cards.slice(1), { yPercent: 100, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollWrapperRef.current,
          start: "top top",
          end: "+=500%", 
          pin: true,
          scrub: 1,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      cards.forEach((card, index) => {
        if (index === cards.length - 1) {
          tl.to({}, { duration: 1 }); 
          return;
        }

        const nextCard = cards[index + 1];
        const headerVisibleHeight = (index + 1) * 80; 

        tl.to(nextCard, {
          yPercent: 0,
          y: headerVisibleHeight, 
          ease: "none",
        }, `step-${index}`);
      });

    }, scrollWrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={scrollWrapperRef} className="relative w-full overflow-hidden bg-white">
      <section className="flex flex-col md:flex-row w-full h-screen overflow-hidden">
        
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-12 md:px-24 bg-white z-50">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-3 h-1.5 bg-blue-500 rounded-full"></span>
            <p className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-bold">
              Our Services
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tighter leading-tight mb-8">
            End-to-End<br /> Digital Engineering <br /> Tailored for your Ambition
          </h2>
          <p className="text-gray-500 text-[14px] leading-relaxed max-w-xs">
            we design and build interfaces for the future.
          </p>
        </div>

        <div className="w-full md:w-1/2 h-full relative bg-white overflow-hidden flex items-end"> 
          {/* Removed pl-6/pl-10 so container hits center, kept h-[90%] for your header room */}
          <div className="relative w-full h-[90%] pr-0 overflow-hidden"> 
            {serviceImages.map((src, index) => (
              <div
                key={index}
                className="service-card absolute inset-0 w-full h-full"
                style={{ zIndex: index + 1 }}
              >
                <div className="w-full h-full bg-white shadow-[-15px_0_30px_rgba(0,0,0,0.04)] overflow-hidden">
                  <img
                    src={src}
                    alt={`Service ${index + 1}`}
                    className="w-full h-full object-contain object-right-top scale-90 origin-top-right" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceSection;