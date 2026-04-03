const industries = [
  {
    title: "Healthcare",
    description:
      "Digital health solutions, telemedicine platforms, and patient management systems that improve care delivery.",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    title: "Finance",
    description:
      "Secure fintech applications, trading platforms, and banking solutions built for the modern financial landscape.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "E-Commerce",
    description:
      "Scalable online marketplaces, inventory systems, and customer engagement platforms that drive revenue.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Education",
    description:
      "Learning management systems, EdTech platforms, and interactive educational tools for the digital age.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Real Estate",
    description:
      "Property management platforms, virtual tour solutions, and smart building technologies.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Logistics",
    description:
      "Supply chain optimization, fleet management, and warehouse automation solutions for efficient operations.",
    gradient: "from-cyan-500 to-blue-600",
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Industries
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Industries we <span className="text-blue-600">serve</span>
          </h2>
          <p className="mt-5 text-gray-500 text-base md:text-lg leading-relaxed font-normal">
            We bring deep domain expertise across multiple industries, delivering
            tailored solutions that address unique challenges.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-500 overflow-hidden"
            >
              {/* Gradient accent */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Icon placeholder */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.gradient} mb-6 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
              >
                <div className="w-5 h-5 bg-white/30 rounded-md" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {industry.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-normal">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
