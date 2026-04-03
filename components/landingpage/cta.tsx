const CTA = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-gray-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
          Get Started
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
          Ready to build something{" "}
          <span className="text-blue-400">amazing?</span>
        </h2>
        <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
          Let&apos;s discuss your project and explore how we can help you achieve
          your digital goals. Our team is ready to turn your vision into reality.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-10 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40">
            Start a Project
          </button>
          <button className="text-gray-300 hover:text-white text-sm font-medium px-10 py-4 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-200">
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
