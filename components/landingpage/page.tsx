"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TrustedBy from "./sections/TrustedBy";
import Services from "./sections/Services";
import About from "./sections/About";
import Works from "./sections/Works";
import Industries from "./sections/Industries";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

const Landing = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-between items-center text-center px-6 bg-white">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="pt-32 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            Now accepting new projects for 2026
          </div>

          <h1 className="font-semibold text-4xl md:text-[72px] leading-[1.1] text-black max-w-4xl">
            Engineering the future of{" "}
            <span className="text-blue-500">digital experience</span>
          </h1>

          <p className="mt-6 text-gray-500 text-base md:text-lg max-w-2xl font-light leading-relaxed">
            We design and develop exceptional digital products that help
            businesses grow, innovate, and lead in their industries.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-8 py-3 rounded-lg transition font-medium">
              Explore Works
            </button>
            <button className="border border-gray-200 hover:border-gray-300 text-black text-sm px-8 py-3 rounded-lg transition font-medium">
              Our Services
            </button>
          </div>
        </motion.div>

        {/* Device + Video */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative w-full h-[400px] md:h-[550px] mt-16"
        >
          <Image
            src="/placeholder.png"
            alt="Device"
            fill
            className="object-cover"
            priority
          />

          <div
            className="absolute top-1/2 left-1/2 
                        w-[64%] h-[70%] 
                        -translate-x-[51%] -translate-y-[28%] 
                        overflow-hidden rounded-[20px] z-10"
          >
            <video
              src="/hero-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* All Sections */}
      <TrustedBy />
      <Services />
      <About />
      <Works />
      <Industries />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
};

export default Landing;
