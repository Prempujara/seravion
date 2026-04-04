"use client";

const services = [
  {
    title: "Product Design",
    desc: "Crafting intuitive and visually stunning user experiences.",
  },
  {
    title: "Web Development",
    desc: "Building fast, scalable, and modern web applications.",
  },
  {
    title: "Mobile Apps",
    desc: "Creating seamless cross-platform mobile experiences.",
  },
  {
    title: "Branding",
    desc: "Designing identities that leave a lasting impression.",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-40">
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16">

        {/* LEFT SIDE */}
        <div className="md:w-1/2">
          <span className="text-sm text-gray-400 uppercase tracking-wide">
            Services
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-black leading-tight">
            What we do to help you grow
          </h2>

          <p className="mt-6 text-gray-500 max-w-md">
            We combine design, technology, and strategy to create impactful
            digital solutions tailored for your business.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">

          {services.map((service, i) => (
            <div
              key={i}
              className="
                group border border-gray-100 rounded-2xl p-6
                transition-all duration-500 ease-out
                hover:shadow-xl hover:-translate-y-2
              "
            >
              
              <h3 className="text-lg font-semibold text-black group-hover:text-blue-600 transition">
                {service.title}
              </h3>

              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                {service.desc}
              </p>

              <div className="mt-4 text-sm text-blue-600 opacity-0 group-hover:opacity-100 transition">
                Learn more →
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;