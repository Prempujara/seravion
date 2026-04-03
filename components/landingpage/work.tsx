const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A full-featured e-commerce platform with real-time inventory management, AI-powered recommendations, and seamless checkout experience.",
    color: "from-blue-600 to-blue-800",
    bgAccent: "bg-blue-500/10",
  },
  {
    title: "FinTech Dashboard",
    category: "UI/UX Design",
    description:
      "An intuitive financial analytics dashboard providing real-time insights, portfolio tracking, and predictive market analysis.",
    color: "from-violet-600 to-purple-800",
    bgAccent: "bg-violet-500/10",
  },
  {
    title: "Health & Wellness App",
    category: "Mobile Development",
    description:
      "A comprehensive health tracking application with personalized workout plans, nutrition guidance, and telemedicine integration.",
    color: "from-emerald-600 to-teal-800",
    bgAccent: "bg-emerald-500/10",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-24 md:py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Our Work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Featured <span className="text-blue-600">projects</span>
          </h2>
          <p className="mt-5 text-gray-500 text-base md:text-lg leading-relaxed font-normal">
            Explore some of our recent work that showcases our expertise and
            commitment to excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500"
            >
              {/* Project Image Placeholder */}
              <div
                className={`relative h-52 md:h-60 bg-gradient-to-br ${project.color} flex items-center justify-center`}
              >
                <div className="w-3/4 h-3/4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-lg bg-white/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <span
                  className={`inline-block text-xs font-semibold uppercase tracking-wider ${project.bgAccent} text-gray-700 px-3 py-1 rounded-full mb-4`}
                >
                  {project.category}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold px-8 py-3.5 rounded-lg border border-blue-200 hover:border-blue-300 bg-white hover:bg-blue-50 transition-all duration-200">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
