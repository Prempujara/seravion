"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Work = () => {
  const pinRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".work-card");

      cards.forEach((card, i) => {
        gsap.set(card, {
          zIndex: i,
<<<<<<< HEAD
          y:
            i === 0
              ? 0
              : i === 1
              ? window.innerHeight * 0.85
              : window.innerHeight * 1.2,
=======
          y: i === 0 ? 0 : i === 1 ? window.innerHeight * 0.85 : window.innerHeight * 1.2,
>>>>>>> 825039b51157e34744ef3742dd2baeeee7a9f614
          scale: 1,
          opacity: 1,
          transformOrigin: "top center",
          force3D: true,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: `+=${cards.length * 100}%`,
          scrub: 0.5,
          pin: true,
          anticipatePin: 1.5,
          invalidateOnRefresh: true,
        },
      });

<<<<<<< HEAD
      tl.to(
        cards[0],
        {
=======
      tl.to(cards[0], {
        y: -40,
        scale: 0.95,
        opacity: 0.5,
        duration: 1,
        ease: "none"
      }, 0);

      tl.to(cards[1], {
        y: 0,
        duration: 1,
        ease: "none"
      }, 0);

      tl.to(cards[2], {
        y: window.innerHeight * 0.85,
        duration: 1,
        ease: "none"
      }, 0);

      if (cards.length > 2) {
        tl.to(cards[1], {
>>>>>>> 825039b51157e34744ef3742dd2baeeee7a9f614
          y: -40,
          scale: 0.95,
          opacity: 0.5,
          duration: 1,
<<<<<<< HEAD
          ease: "none",
        },
        0
      );

      tl.to(
        cards[1],
        {
          y: 0,
          duration: 1,
          ease: "none",
        },
        0
      );

      tl.to(
        cards[2],
        {
          y: window.innerHeight * 0.85,
          duration: 1,
          ease: "none",
        },
        0
      );

      if (cards.length > 2) {
        tl.to(
          cards[1],
          {
            y: -40,
            scale: 0.95,
            opacity: 0.5,
            duration: 1,
            ease: "none",
          },
          1
        );

        tl.to(
          cards[0],
          {
            y: -80,
            scale: 0.9,
            opacity: 0.2,
            duration: 1,
            ease: "none",
          },
          1
        );

        tl.to(
          cards[2],
          {
            y: 0,
            duration: 1,
            ease: "none",
          },
          1
        );
      }
=======
          ease: "none"
        }, 1);

        tl.to(cards[0], {
          y: -80,
          scale: 0.9,
          opacity: 0.2,
          duration: 1,
          ease: "none"
        }, 1);

        tl.to(cards[2], {
          y: 0,
          duration: 1,
          ease: "none"
        }, 1);
      }

>>>>>>> 825039b51157e34744ef3742dd2baeeee7a9f614
    }, pinRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#f5f5f5] overflow-hidden">
      <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
<<<<<<< HEAD
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">

          {/* LEFT SIDE */}
          <div className="mb-8 md:mb-0 md:w-[55%]">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-1.5 bg-blue-500 rounded-full"></span>

=======
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-1.5 bg-blue-500 rounded-full"></span>
>>>>>>> 825039b51157e34744ef3742dd2baeeee7a9f614
              <p className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-bold">
                Our Works
              </p>
            </div>
<<<<<<< HEAD

=======
>>>>>>> 825039b51157e34744ef3742dd2baeeee7a9f614
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tighter whitespace-nowrap">
              Unseen Possibilities.
            </h2>
          </div>

<<<<<<< HEAD
          {/* RIGHT SIDE */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
            <p className="text-gray-500 text-[15px] leading-relaxed">
              Seravion is a people-first technology company focused on
              building innovative digital
              solutions that care about your business growth and product
              success as much as you do
            </p>

=======
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
            <p className="text-gray-500 text-[14px] leading-relaxed">
              Seravion is a people-first design studio that cares as much <br className="hidden md:block" /> 
              about your business and product as you do.
            </p>
>>>>>>> 825039b51157e34744ef3742dd2baeeee7a9f614
            <button className="border border-blue-500 text-blue-500 font-bold px-8 py-2.5 rounded-lg text-sm hover:bg-blue-500 hover:text-white transition-all duration-300">
              View All Projects
            </button>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <div
        ref={pinRef}
        className="relative h-screen w-full flex items-center justify-center bg-[#f5f5f5] px-6"
      >
        <div
          className="work-card absolute w-full max-w-7xl h-[70vh] bg-[#0a0a0a] shadow-2xl transition-none"
          style={{ willChange: "transform" }}
        >
          <img
            src="/card-1.png"
            alt="Card 1"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="work-card absolute w-full max-w-7xl h-[70vh] bg-[#0a0a0a] shadow-2xl transition-none"
          style={{ willChange: "transform" }}
        >
          <img
            src="/card-2.png"
            alt="Card 2"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="work-card absolute w-full max-w-7xl h-[70vh] bg-[#0a0a0a] shadow-2xl transition-none"
          style={{ willChange: "transform" }}
        >
          <img
            src="/card-3.png"
            alt="Card 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
=======
      <div ref={pinRef} className="relative h-screen w-full flex items-center justify-center bg-[#f5f5f5] px-6">
        <div className="work-card absolute w-full max-w-7xl h-[70vh] bg-[#0a0a0a] shadow-2xl transition-none" style={{ willChange: "transform" }}>
          <img src="/card-1.png" alt="Card 1" className="w-full h-full object-cover" />
        </div>
        <div className="work-card absolute w-full max-w-7xl h-[70vh] bg-[#0a0a0a] shadow-2xl transition-none" style={{ willChange: "transform" }}>
          <img src="/card-2.png" alt="Card 2" className="w-full h-full object-cover" />
        </div>
        <div className="work-card absolute w-full max-w-7xl h-[70vh] bg-[#0a0a0a] shadow-2xl transition-none" style={{ willChange: "transform" }}>
          <img src="/card-3.png" alt="Card 3" className="w-full h-full object-cover" />
        </div>
      </div>
      
      {/* GAP REMOVED: Deleted the empty div from here */}
>>>>>>> 825039b51157e34744ef3742dd2baeeee7a9f614
    </section>
  );
};

export default Work;