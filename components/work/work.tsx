const projects = [
  {
    tag: "Web App",
    title: "FinanceFlow Dashboard",
    desc: "A real-time financial analytics platform with AI-powered insights and beautiful data visualization.",
    gradient: "from-blue-400 to-blue-600",
    accent: "bg-blue-100 text-blue-700",
  },
  {
    tag: "Mobile App",
    title: "HealthTrack Pro",
    desc: "A comprehensive health and wellness application connecting patients with healthcare providers seamlessly.",
    gradient: "from-emerald-400 to-teal-600",
    accent: "bg-emerald-100 text-emerald-700",
  },
  {
    tag: "E-Commerce",
    title: "LuxeShop Platform",
    desc: "A premium e-commerce experience delivering luxury retail with personalized recommendations and AR try-on.",
    gradient: "from-violet-400 to-purple-600",
    accent: "bg-violet-100 text-violet-700",
  },
  {
    tag: "SaaS",
    title: "TeamSync Workspace",
    desc: "Collaborative workspace tool streamlining remote team productivity with smart automation.",
    gradient: "from-amber-400 to-orange-500",
    accent: "bg-amber-100 text-amber-700",
  },
];

const Work = () => {
  return (
    <section id="work" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-500 text-xs font-medium px-4 py-1.5 rounded-full mb-4">
              Our Work
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-black tracking-tight leading-tight">
              Projects we&apos;re proud of
            </h2>
          </div>
          <button className="self-start md:self-auto text-sm font-medium text-blue-600 border border-blue-200 hover:bg-blue-50 transition-colors px-6 py-2.5 rounded-xl whitespace-nowrap">
            View All Projects →
          </button>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Thumbnail */}
              <div className={`bg-gradient-to-br ${project.gradient} h-52 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent_70%)]" />
                <div className="w-24 h-16 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <div className="w-16 h-2 bg-white/60 rounded-full" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${project.accent}`}>
                  {project.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-black group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 font-light leading-relaxed">{project.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0">
                  Case Study →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
