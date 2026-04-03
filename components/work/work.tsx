"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    tag: "Web App",
    title: "FinanceFlow Dashboard",
    desc: "A real-time financial analytics platform with AI-powered insights and beautiful data visualization.",
    gradient: "from-blue-400 to-blue-600",
    accent: "bg-blue-100 text-blue-700",
  },
  {
    tag: "Mobile App",
    title: "HealthTrack Pro",
    desc: "A comprehensive health and wellness application connecting patients with healthcare providers seamlessly.",
    gradient: "from-emerald-400 to-teal-600",
    accent: "bg-emerald-100 text-emerald-700",
  },
  {
    tag: "E-Commerce",
    title: "LuxeShop Platform",
    desc: "A premium e-commerce experience delivering luxury retail with personalized recommendations and AR try-on.",
    gradient: "from-violet-400 to-purple-600",
    accent: "bg-violet-100 text-violet-700",
  },
  {
    tag: "SaaS",
    title: "TeamSync Workspace",
    desc: "Collaborative workspace tool streamlining remote team productivity with smart automation.",
    gradient: "from-amber-400 to-orange-500",
    accent: "bg-amber-100 text-amber-700",
  },
];

const Work = () => {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[active];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-semibold">Projects we're proud of</h2>
        </div>

        {/* Slider */}
        <div className="relative h-[400px] overflow-hidden">

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute w-full"
            >
              <div className="rounded-2xl overflow-hidden border shadow-lg">

                {/* Gradient */}
                <div className={`h-56 bg-gradient-to-br ${project.gradient}`} />

                {/* Content */}
                <div className="p-6">
                  <span className={`text-xs px-3 py-1 rounded ${project.accent}`}>
                    {project.tag}
                  </span>

                  <h3 className="mt-3 text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    {project.desc}
                  </p>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Controls */}
        <div className="flex justify-between mt-6">
          <button onClick={prev}>← Prev</button>
          <button onClick={next}>Next →</button>
        </div>

      </div>
    </section>
  );
};

export default Work;