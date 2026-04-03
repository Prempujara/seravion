"use client";

import Image from "next/image";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center px-6 pt-32 pb-16 overflow-hidden">
        {/* Background gradient glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        {/* Badge */}
        <div className="relative inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <span className="text-gray-300 text-sm font-light">Pioneering Digital Excellence</span>
        </div>

        {/* Heading */}
        <h1 className="relative font-semibold text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-white max-w-4xl mb-6">
          Engineering the future of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            digital experience
          </span>
        </h1>

        {/* Subtext */}
        <p className="relative text-gray-400 text-base md:text-lg max-w-2xl mb-10 font-light leading-relaxed">
          We craft cutting-edge digital solutions that transform businesses and elevate user experiences
          to new heights.
        </p>

        {/* CTA Buttons */}
        <div className="relative flex flex-wrap items-center justify-center gap-4 mb-16">
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-8 py-3 rounded-lg transition-all duration-200 font-medium shadow-lg shadow-blue-500/25">
            Explore Works
          </button>
          <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm px-8 py-3 rounded-lg transition-all duration-200 font-medium">
            Get in Touch
          </button>
        </div>

        {/* Stats Row */}
        <div className="relative flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
          {[
            { number: "200+", label: "Projects Delivered" },
            { number: "50+", label: "Team Members" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "8+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-semibold text-white">{stat.number}</p>
              <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Device Mockup */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Glow behind device */}
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />

          {/* Browser/Laptop Frame */}
          <div className="relative rounded-2xl border border-white/10 bg-[#111116] shadow-2xl shadow-black/50 overflow-hidden">
            {/* Browser Top Bar */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-[#16161c]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              {/* URL Bar */}
              <div className="flex-1 flex items-center bg-[#0a0a0f] rounded-md px-3 py-1 border border-white/5">
                <span className="text-gray-500 text-xs">🔒</span>
                <span className="text-gray-400 text-xs ml-2">seravion.com/showcase</span>
              </div>
              {/* Action icons */}
              <div className="flex gap-2 text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h16v16H4z" />
                </svg>
              </div>
            </div>

            {/* Video Screen Area */}
            <div className="relative aspect-video bg-[#0a0a0f] overflow-hidden">
              <video
                src="/hero-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
            </div>
          </div>

          {/* Bottom reflection */}
          <div className="relative h-16 mx-8 bg-gradient-to-b from-[#111116]/60 to-transparent rounded-b-3xl blur-sm" />
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 px-6 border-t border-white/5">
        <p className="text-center text-gray-600 text-sm mb-8 uppercase tracking-widest">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
          {["Google", "Microsoft", "Amazon", "Meta", "Apple", "Stripe"].map((brand) => (
            <span key={brand} className="text-gray-400 font-semibold text-lg tracking-wide">
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-blue-400 text-sm">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
            What we <span className="text-blue-400">do best</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto font-light">
            From concept to launch, we provide comprehensive digital solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "🎨",
              title: "UI/UX Design",
              description: "Beautiful, intuitive interfaces that delight users and drive engagement.",
              color: "from-purple-500/10 to-blue-500/10",
              border: "border-purple-500/20",
            },
            {
              icon: "⚡",
              title: "Web Development",
              description: "Fast, scalable web applications built with modern technologies.",
              color: "from-blue-500/10 to-cyan-500/10",
              border: "border-blue-500/20",
            },
            {
              icon: "📱",
              title: "Mobile Apps",
              description: "Native and cross-platform apps that work seamlessly on any device.",
              color: "from-cyan-500/10 to-green-500/10",
              border: "border-cyan-500/20",
            },
            {
              icon: "🚀",
              title: "Digital Strategy",
              description: "Data-driven strategies to accelerate your digital transformation.",
              color: "from-orange-500/10 to-red-500/10",
              border: "border-orange-500/20",
            },
            {
              icon: "🔐",
              title: "Cloud & Security",
              description: "Robust cloud infrastructure with enterprise-grade security protocols.",
              color: "from-red-500/10 to-pink-500/10",
              border: "border-red-500/20",
            },
            {
              icon: "📊",
              title: "Analytics & AI",
              description: "Intelligent analytics and AI-powered tools for smarter decisions.",
              color: "from-pink-500/10 to-purple-500/10",
              border: "border-pink-500/20",
            },
          ].map((service) => (
            <div
              key={service.title}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${service.color} border ${service.border} hover:border-white/20 transition-all duration-300 group cursor-pointer`}
            >
              <span className="text-3xl mb-4 block">{service.icon}</span>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">{service.description}</p>
              <div className="mt-4 flex items-center gap-1 text-blue-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-blue-400 text-sm">Our Work</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-white">
              Featured <span className="text-blue-400">projects</span>
            </h2>
          </div>
          <button className="mt-6 md:mt-0 text-gray-400 hover:text-white text-sm border border-white/10 hover:border-white/30 px-5 py-2 rounded-lg transition-all duration-200">
            View all work →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "FinTech Dashboard",
              category: "UI/UX Design · Web App",
              bg: "bg-gradient-to-br from-blue-900/40 to-purple-900/40",
              height: "h-64 md:h-80",
            },
            {
              title: "E-Commerce Platform",
              category: "Web Development · Strategy",
              bg: "bg-gradient-to-br from-cyan-900/40 to-blue-900/40",
              height: "h-64 md:h-80",
            },
            {
              title: "Healthcare Mobile App",
              category: "Mobile App · UI/UX",
              bg: "bg-gradient-to-br from-purple-900/40 to-pink-900/40",
              height: "h-64",
            },
            {
              title: "AI Analytics Platform",
              category: "Analytics · AI · Web",
              bg: "bg-gradient-to-br from-green-900/40 to-cyan-900/40",
              height: "h-64",
            },
          ].map((project) => (
            <div
              key={project.title}
              className={`relative ${project.height} ${project.bg} rounded-2xl border border-white/10 hover:border-white/20 overflow-hidden group cursor-pointer transition-all duration-300`}
            >
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }}
              />

              {/* Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-blue-500/20 blur-3xl" />

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-blue-400 text-xs font-light mb-1 block">{project.category}</span>
                <h3 className="text-white font-semibold text-xl">{project.title}</h3>
              </div>

              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-blue-400 text-sm">Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-white">
              What clients <span className="text-blue-400">say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Seravion transformed our digital presence completely. The results exceeded our expectations.",
                name: "Sarah Johnson",
                role: "CEO, TechVentures",
                avatar: "SJ",
              },
              {
                quote: "Exceptional team with deep technical expertise. They delivered on time and on budget.",
                name: "Michael Chen",
                role: "CTO, DataFlow Inc",
                avatar: "MC",
              },
              {
                quote: "Working with Seravion was a game-changer. Our user engagement increased by 300%.",
                name: "Emily Rodriguez",
                role: "Product Lead, ScaleUp",
                avatar: "ER",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{testimonial.name}</p>
                    <p className="text-gray-600 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Background glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[300px] bg-blue-500/10 rounded-full blur-[80px]" />
          </div>

          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6">
              Ready to build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                extraordinary?
              </span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg mb-10 font-light max-w-xl mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge technology and design.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-8 py-3.5 rounded-lg transition-all duration-200 font-medium shadow-lg shadow-blue-500/25">
                Start a Project
              </button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm px-8 py-3.5 rounded-lg transition-all duration-200 font-medium">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-white font-semibold">Seravion Technologies</span>
              </div>
              <p className="text-gray-600 text-sm max-w-xs font-light">
                Engineering the future of digital experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-8">
              {[
                { title: "Company", links: ["About", "Team", "Careers", "Blog"] },
                { title: "Services", links: ["Design", "Development", "Strategy", "Analytics"] },
                { title: "Connect", links: ["Twitter", "LinkedIn", "GitHub", "Contact"] },
              ].map((col) => (
                <div key={col.title}>
                  <p className="text-white text-sm font-medium mb-3">{col.title}</p>
                  <ul className="flex flex-col gap-2">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors font-light">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-700 text-xs">
              © 2025 Seravion Technologies. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-700 hover:text-gray-500 text-xs transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-700 hover:text-gray-500 text-xs transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
