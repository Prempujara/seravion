"use client";

import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 md:p-20 text-center overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-6">
              Ready to build something
              <br />
              extraordinary?
            </h2>
            <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto mb-10 font-light">
              Let&apos;s collaborate to create digital experiences that drive growth
              and make a lasting impact. Get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 text-sm px-8 py-3.5 rounded-lg transition font-semibold">
                Start a Project
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 text-sm px-8 py-3.5 rounded-lg transition font-medium">
                Schedule a Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
