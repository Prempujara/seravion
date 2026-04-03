"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Seravion transformed our digital presence completely. Their team delivered a world-class platform that exceeded all our expectations.",
    name: "Sarah Johnson",
    role: "CEO, TechVentures",
    initials: "SJ",
  },
  {
    quote:
      "Working with Seravion was an incredible experience. They understood our vision and brought it to life with precision and creativity.",
    name: "Michael Chen",
    role: "CTO, FinanceHub",
    initials: "MC",
  },
  {
    quote:
      "The team at Seravion is exceptional. They delivered our project on time, on budget, and the quality was outstanding.",
    name: "Emily Rodriguez",
    role: "VP Product, HealthFirst",
    initials: "ER",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-black leading-tight">
            What our clients say
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              onClick={() => setActive(i)}
              className={`p-8 rounded-2xl cursor-pointer transition-all duration-300 ${
                active === i
                  ? "bg-blue-500 text-white shadow-xl shadow-blue-500/20"
                  : "bg-gray-50 text-black hover:shadow-lg"
              }`}
            >
              {/* Quote marks */}
              <div
                className={`text-4xl font-bold mb-4 ${
                  active === i ? "text-white/40" : "text-blue-200"
                }`}
              >
                &ldquo;
              </div>
              <p
                className={`text-base leading-relaxed mb-8 font-light ${
                  active === i ? "text-white/90" : "text-gray-600"
                }`}
              >
                {t.quote}
              </p>
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ${
                    active === i
                      ? "bg-white/20 text-white"
                      : "bg-blue-100 text-blue-500"
                  }`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p
                    className={`text-xs ${
                      active === i ? "text-white/70" : "text-gray-400"
                    }`}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
