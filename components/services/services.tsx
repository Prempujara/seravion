const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "UI/UX Design",
    desc: "Crafting seamless user experiences and stunning interfaces that delight users and drive engagement.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Web Development",
    desc: "Building robust, scalable web applications using modern technologies and best practices.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: "Mobile Development",
    desc: "Native and cross-platform mobile apps that deliver outstanding performance across all devices.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Brand Strategy",
    desc: "Developing compelling brand identities and strategies that resonate with your target audience.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    title: "Cloud Solutions",
    desc: "Architecting and deploying scalable cloud infrastructure that grows with your business needs.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Cybersecurity",
    desc: "Protecting your digital assets with comprehensive security audits and risk management solutions.",
    color: "bg-slate-50 text-slate-600",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-500 text-xs font-medium px-4 py-1.5 rounded-full mb-4">
            What We Do
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-black tracking-tight">
            Services built for scale
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto font-light text-base leading-relaxed">
            From concept to deployment, we provide end-to-end digital solutions tailored to your business goals.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50 transition-all group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${svc.color}`}>
                {svc.icon}
              </div>
              <h3 className="font-semibold text-black text-lg mb-2 group-hover:text-blue-600 transition-colors">
                {svc.title}
              </h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">{svc.desc}</p>
              <div className="mt-5 flex items-center gap-1 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
