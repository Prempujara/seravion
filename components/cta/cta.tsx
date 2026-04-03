const CTA = () => {
  return (
    <section id="about" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl bg-blue-600 overflow-hidden px-8 md:px-16 py-16 md:py-20 flex flex-col items-center text-center">
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 20%, white 0%, transparent 40%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-medium px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Ready to Start?
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight max-w-2xl mx-auto">
              Let&apos;s build something great together
            </h2>
            <p className="mt-5 text-blue-100 text-base font-light max-w-xl mx-auto leading-relaxed">
              Have a project in mind? Whether it&apos;s a startup product or enterprise transformation, we&apos;re here to make it happen.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold text-sm px-8 py-3.5 rounded-xl transition-all shadow-lg">
                Start a Project
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-medium text-sm px-8 py-3.5 rounded-xl border border-white/30 transition-all backdrop-blur-sm">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
