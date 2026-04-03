"use client";

import { motion } from "framer-motion";

const logos = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Apple",
  "Netflix",
  "Spotify",
  "Slack",
];

const marqueeStyle: React.CSSProperties = {
  display: "flex",
  gap: "5rem",
  animation: "marquee 20s linear infinite",
  whiteSpace: "nowrap" as const,
};

const TrustedBy = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `
      }} />

      <div className="max-w-7xl mx-auto px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-400 text-sm tracking-widest uppercase mb-10"
        >
          Trusted by leading companies worldwide
        </motion.p>

        <div className="relative overflow-hidden">
          <div style={marqueeStyle} className="items-center">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 text-gray-300 text-2xl font-bold tracking-wide select-none hover:text-gray-400 transition-colors"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
