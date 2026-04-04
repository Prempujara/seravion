"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    tag: "Web App",
    title: "FinanceFlow Dashboard",
    desc: "AI-powered financial analytics platform with real-time insights.",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    tag: "Mobile App",
    title: "HealthTrack Pro",
    desc: "Smart health tracking connecting patients with doctors seamlessly.",
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    tag: "E-Commerce",
    title: "LuxeShop Platform",
    desc: "Luxury e-commerce experience with AR try-on and personalization.",
    gradient: "from-violet-400 to-purple-600",
  },
  {
    tag: "SaaS",
    title: "TeamSync Workspace",
    desc: "Collaborative workspace boosting remote productivity.",
    gradient: "from-amber-400 to-orange-500",
  },
];

const Work = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-white py-40 flex items-center">
      
      <div className="max-w-7xl mx-auto w-full flex px-6 gap-12">

        {/* LEFT SIDE TEXT */}
        <div className="w-1/2 flex flex-col justify-center">
          
          <span className="text-sm text-gray-400 uppercase tracking-wide">
            Our Work
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-black leading-tight">
            Crafted digital experiences that drive impact
          </h2>

          <p className="mt-6 text-gray-500 max-w-md">
            We build products that blend design, technology, and strategy 
            to create meaningful digital experiences.
          </p>

          <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg w-fit transition">
            Explore Projects
          </button>

        </div>

        {/* RIGHT SIDE STACK */}
        <div className="w-1/2 flex justify-center items-center">
          
          <div className="relative h-[650px] w-full max-w-xl">

            {projects.map((project, index) => {
              const offset = index - active;

              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActive(index)}
                  className="absolute w-full h-[340px] cursor-pointer"
                  animate={{
                    y: offset * 100,
                    scale: offset === 0 ? 1 : 0.88,
                    opacity: offset === 0 ? 1 : 0.35,
                    zIndex: 10 - Math.abs(offset),
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  
                  <div
                    className={`
                      w-full h-full rounded-3xl overflow-hidden
                      bg-gradient-to-br ${project.gradient}
                      shadow-2xl p-8 flex flex-col justify-between
                      text-white
                    `}
                  >
                    
                    <div>
                      <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                        {project.tag}
                      </span>

                      <h3 className="mt-5 text-2xl font-semibold">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-sm text-white/80 max-w-xs">
                        {project.desc}
                      </p>
                    </div>

                    <div className="text-sm font-medium">
                      View Case Study →
                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Work;