const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "We build high-performance, scalable web applications using cutting-edge technologies that deliver exceptional user experiences.",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    number: "02",
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications designed for performance, usability, and seamless integration with your ecosystem.",
    tags: ["iOS", "Android", "React Native", "Flutter"],
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Human-centered design that transforms complex problems into intuitive, beautiful interfaces that users love to interact with.",
    tags: ["Research", "Wireframing", "Prototyping", "Testing"],
  },
  {
    number: "04",
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and DevOps solutions that ensure your applications are reliable, secure, and performant.",
    tags: ["AWS", "Azure", "GCP", "Kubernetes"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Our Services
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Solutions that drive{" "}
            <span className="text-blue-400">real results</span>
          </h2>
          <p className="mt-5 text-gray-400 text-base md:text-lg leading-relaxed font-normal">
            From concept to deployment, we provide end-to-end digital services
            tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-10 hover:border-blue-500/30 transition-all duration-500"
            >
              {/* Number */}
              <span className="text-blue-500/30 text-6xl md:text-7xl font-extrabold absolute top-6 right-8 select-none group-hover:text-blue-500/50 transition-colors duration-500">
                {service.number}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-gray-400 bg-gray-800 px-3 py-1.5 rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
