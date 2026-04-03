"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "We build high-performance, scalable web applications using cutting-edge technologies that drive business growth.",
    color: "bg-blue-500",
  },
  {
    number: "02",
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications designed for seamless user experiences across all devices.",
    color: "bg-purple-500",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Human-centered design that transforms complex problems into intuitive, beautiful digital interfaces.",
    color: "bg-emerald-500",
  },
  {
    number: "04",
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and DevOps solutions that ensure reliability, security, and performance.",
    color: "bg-orange-500",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Services = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">
              What We Do
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-black leading-tight">
              Services we offer
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-base max-w-md mt-4 md:mt-0 font-light"
          >
            We deliver end-to-end digital solutions that help businesses
            innovate, scale, and succeed in the modern landscape.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div
                className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center text-white text-sm font-bold mb-6`}
              >
                {service.number}
              </div>
              <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-blue-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {service.description}
              </p>
              <div className="mt-6 flex items-center text-blue-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
