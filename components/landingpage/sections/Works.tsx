"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "FinanceHub Dashboard",
    category: "Web Application",
    description: "A comprehensive financial analytics platform with real-time data visualization.",
    gradient: "from-blue-600 to-indigo-700",
    size: "large",
  },
  {
    title: "HealthFirst App",
    category: "Mobile Application",
    description: "Telemedicine platform connecting patients with healthcare providers.",
    gradient: "from-emerald-500 to-teal-600",
    size: "small",
  },
  {
    title: "ShopEase Platform",
    category: "E-Commerce",
    description: "Modern e-commerce solution with AI-powered recommendations.",
    gradient: "from-purple-500 to-pink-600",
    size: "small",
  },
  {
    title: "EduLearn LMS",
    category: "Education Platform",
    description: "Interactive learning management system for universities and enterprises.",
    gradient: "from-orange-500 to-red-500",
    size: "large",
  },
];

const Works = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">
              Our Work
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-black leading-tight">
              Featured projects
            </h2>
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 md:mt-0 text-blue-500 text-sm font-medium hover:text-blue-600 transition"
          >
            View All Projects →
          </motion.button>
        </div>

        {/* Projects Grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`group relative bg-gradient-to-br ${project.gradient} rounded-2xl overflow-hidden cursor-pointer ${
                project.size === "large" ? "h-80" : "h-64"
              }`}
            >
              {/* Overlay pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-8 right-8 w-32 h-32 border border-white/30 rounded-full" />
                <div className="absolute bottom-8 left-8 w-20 h-20 border border-white/20 rounded-full" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <p className="text-white/60 text-xs font-medium tracking-widest uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="text-white text-2xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm font-light max-w-sm">
                  {project.description}
                </p>
                <div className="mt-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                  View Case Study
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
