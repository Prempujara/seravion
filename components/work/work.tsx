"use client";

import { useState, useEffect, useCallback } from "react";

const sliders = [
  {
    id: 1,
    label: "01 — Web Applications",
    heading: "Crafting Digital Experiences That Convert",
    subheading: "Web Development",
    projects: [
      {
        tag: "Web App",
        title: "FinanceFlow Dashboard",
        desc: "A real-time financial analytics platform with AI-powered insights and beautiful data visualization.",
        gradient: "from-blue-500 via-blue-600 to-indigo-700",
        year: "2024",
        client: "FinanceFlow Inc.",
      },
      {
        tag: "SaaS",
        title: "TeamSync Workspace",
        desc: "Collaborative workspace tool streamlining remote team productivity with smart automation.",
        gradient: "from-violet-500 via-purple-600 to-indigo-700",
        year: "2024",
        client: "TeamSync Ltd.",
      },
      {
        tag: "Dashboard",
        title: "Analytics Hub",
        desc: "A centralized analytics platform that unifies data from multiple sources into actionable insights.",
        gradient: "from-cyan-500 via-teal-600 to-blue-700",
        year: "2023",
        client: "DataBridge Corp.",
      },
    ],
  },
  {
    id: 2,
    label: "02 — Mobile Applications",
    heading: "Mobile-First Solutions for Modern Users",
    subheading: "Mobile Development",
    projects: [
      {
        tag: "iOS & Android",
        title: "HealthTrack Pro",
        desc: "A comprehensive health and wellness application connecting patients with healthcare providers seamlessly.",
        gradient: "from-emerald-500 via-teal-600 to-cyan-700",
        year: "2024",
        client: "MedTech Solutions",
      },
      {
        tag: "Mobile App",
        title: "FoodieMap",
        desc: "Restaurant discovery app with AR-powered menus and social dining experiences across 50+ cities.",
        gradient: "from-orange-500 via-red-500 to-rose-600",
        year: "2024",
        client: "Foodie Labs",
      },
      {
        tag: "Fintech",
        title: "PaySwift Wallet",
        desc: "Secure mobile payment solution with biometric authentication and instant cross-border transfers.",
        gradient: "from-amber-500 via-orange-500 to-red-600",
        year: "2023",
        client: "Swift Payments",
      },
    ],
  },
  {
    id: 3,
    label: "03 — E-Commerce & Brand",
    heading: "Premium Digital Commerce Experiences",
    subheading: "E-Commerce & Branding",
    projects: [
      {
        tag: "E-Commerce",
        title: "LuxeShop Platform",
        desc: "A premium e-commerce experience delivering luxury retail with personalized recommendations and AR try-on.",
        gradient: "from-violet-500 via-fuchsia-600 to-pink-600",
        year: "2024",
        client: "LuxeRetail Group",
      },
      {
        tag: "Brand Identity",
        title: "Aura Cosmetics",
        desc: "Complete brand identity and digital presence for a luxury cosmetics brand entering global markets.",
        gradient: "from-pink-500 via-rose-500 to-red-500",
        year: "2023",
        client: "Aura Beauty",
      },
      {
        tag: "Marketplace",
        title: "CraftHub Market",
        desc: "A curated marketplace for independent artisans with AI-powered product discovery and creator analytics.",
        gradient: "from-green-500 via-emerald-500 to-teal-600",
        year: "2023",
        client: "CraftHub Inc.",
      },
    ],
  },
];

const WorkSlider = ({
  slider,
  isActive,
  delayMs,
}: {
  slider: (typeof sliders)[0];
  isActive: boolean;
  delayMs: number;
}) => {
  const [activeProject, setActiveProject] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [slideDir, setSlideDir] = useState<"left" | "right">("right");

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === activeProject) return;
      setSlideDir(index > activeProject ? "right" : "left");
      setAnimating(true);
      setTimeout(() => {
        setActiveProject(index);
        setAnimating(false);
      }, 350);
    },
    [animating, activeProject]
  );

  const prev = () => goTo((activeProject - 1 + slider.projects.length) % slider.projects.length);
  const next = () => goTo((activeProject + 1) % slider.projects.length);

  const project = slider.projects[activeProject];

  return (
    <div
      className={`
        relative rounded-2xl overflow-hidden bg-gray-950 border border-gray-800
        transition-all duration-700 ease-out
        ${isActive ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"}
      `}
      style={{
        transitionDelay: isActive ? `${delayMs}ms` : "0ms",
      }}
    >
      {/* Background gradient card */}
      <div
        className={`
          relative h-56 sm:h-64 bg-gradient-to-br ${project.gradient}
          transition-all duration-350 ease-in-out overflow-hidden
          ${animating ? (slideDir === "right" ? "-translate-x-full opacity-0" : "translate-x-full opacity-0") : "translate-x-0 opacity-100"}
        `}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Mock UI elements */}
        <div className="absolute top-6 left-6 right-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-white/40" />
            <div className="w-3 h-3 rounded-full bg-white/40" />
            <div className="w-3 h-3 rounded-full bg-white/40" />
            <div className="flex-1 h-5 rounded-md bg-white/20 ml-2" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-16 rounded-lg bg-white/20 backdrop-blur-sm border border-white/20" />
            <div className="h-16 rounded-lg bg-white/15 backdrop-blur-sm border border-white/15" />
            <div className="h-16 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10" />
          </div>
        </div>

        {/* Tag */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30">
            {project.tag}
          </span>
        </div>

        {/* Year */}
        <div className="absolute bottom-4 right-4">
          <span className="text-white/60 text-xs font-light">{project.year}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div
          className={`
            transition-all duration-350 ease-in-out
            ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}
          `}
        >
          <p className="text-gray-500 text-xs font-medium mb-1 tracking-wider uppercase">
            {project.client}
          </p>
          <h3 className="text-white text-base font-semibold leading-snug mb-2">
            {project.title}
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{project.desc}</p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-1.5">
            {slider.projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeProject ? "w-6 bg-white" : "w-1.5 bg-gray-700 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-7 h-7 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-all duration-200 hover:scale-110"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M7.5 2L3.5 6L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-7 h-7 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-all duration-200 hover:scale-110"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4.5 2L8.5 6L4.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("work");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="bg-gray-950 py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.06),transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div
          className={`
            flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6
            transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gray-400 text-xs font-medium px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Our Work
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
              Projects we&apos;re
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                proud of
              </span>
            </h2>
            <p className="mt-4 text-gray-400 text-sm font-light max-w-md leading-relaxed">
              A curated selection of work spanning web apps, mobile experiences, and digital commerce solutions.
            </p>
          </div>
          <button className="self-start md:self-auto text-sm font-medium text-white border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-200 px-6 py-2.5 rounded-xl whitespace-nowrap">
            View All Projects →
          </button>
        </div>

        {/* Slider labels */}
        <div
          className={`
            hidden md:flex gap-8 mb-8 border-b border-gray-800 pb-4
            transition-all duration-700 ease-out delay-100
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          {sliders.map((s) => (
            <div key={s.id} className="flex flex-col gap-1">
              <span className="text-gray-500 text-xs font-mono tracking-widest">{s.label}</span>
              <span className="text-gray-300 text-xs font-medium">{s.subheading}</span>
            </div>
          ))}
        </div>

        {/* 3 Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {sliders.map((slider, i) => (
            <WorkSlider
              key={slider.id}
              slider={slider}
              isActive={visible}
              delayMs={200 + i * 150}
            />
          ))}
        </div>

        {/* Bottom heading */}
        <div
          className={`
            mt-16 text-center
            transition-all duration-700 ease-out delay-500
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <p className="text-gray-600 text-xs font-medium tracking-widest uppercase mb-3">What we build</p>
          <h3 className="text-2xl md:text-3xl font-semibold text-white">
            {sliders[0].heading.split(" ").slice(0, 3).join(" ")},{" "}
            <span className="text-gray-500">{sliders[1].heading.split(" ").slice(0, 3).join(" ")},</span>{" "}
            <span className="text-gray-700">{sliders[2].heading.split(" ").slice(0, 3).join(" ")}</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Work;
