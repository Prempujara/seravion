"use client";

import { motion } from "framer-motion";

const industries = [
  {
    title: "Healthcare",
    description: "Digital health platforms, telemedicine, and patient management systems.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Finance",
    description: "Fintech solutions, banking apps, and secure payment platforms.",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    title: "E-Commerce",
    description: "Online stores, marketplace platforms, and retail technology.",
    gradient: "from-orange-500 to-yellow-400",
  },
  {
    title: "Education",
    description: "E-learning platforms, LMS solutions, and educational tools.",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Real Estate",
    description: "Property management, listing platforms, and virtual tours.",
    gradient: "from-rose-500 to-red-400",
  },
  {
    title: "Logistics",
    description: "Supply chain management, fleet tracking, and delivery solutions.",
    gradient: "from-indigo-500 to-blue-400",
  },
];

const Industries = () => {
  return (
    <section className="py-24 bg-gray-50">
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
            Industries
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-black leading-tight mb-4">
            Industries we serve
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto font-light">
            We bring deep domain expertise across multiple industries, delivering
            solutions tailored to each sector&apos;s unique challenges.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${industry.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              />
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-blue-500 transition-colors">
                {industry.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {industry.description}
              </p>
              <div className="mt-4 text-blue-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Explore →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
