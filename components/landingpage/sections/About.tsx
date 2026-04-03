"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "8+", label: "Years Experience" },
  { value: "30+", label: "Team Members" },
];

const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">
              About Us
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-black leading-tight mb-6">
              We craft digital
              <br />
              products that matter
            </h2>
            <p className="text-gray-500 text-base leading-relaxed font-light mb-6">
              Seravion Technologies is a forward-thinking digital agency
              specializing in creating exceptional digital experiences. We
              combine strategy, design, and technology to build products that
              drive real business results.
            </p>
            <p className="text-gray-500 text-base leading-relaxed font-light mb-8">
              Our team of experts works closely with clients to understand their
              unique challenges and deliver tailored solutions that exceed
              expectations. From startups to enterprises, we help businesses
              transform their digital presence.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-8 py-3 rounded-lg transition font-medium">
              Learn More About Us
            </button>
          </motion.div>

          {/* Right - Image placeholder + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Image area */}
            <div className="relative w-full h-72 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mb-8 overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnYtMmgtNHY2aDR2LTJ6bTAtOGgtMnYyaDJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-20 h-20 border-2 border-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">▶</span>
                  </div>
                  <p className="text-sm font-light opacity-80">Watch Our Story</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  className="text-center p-4 bg-gray-50 rounded-xl"
                >
                  <p className="text-3xl font-bold text-blue-500">{stat.value}</p>
                  <p className="text-gray-500 text-sm mt-1 font-light">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
