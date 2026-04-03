const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Team Members" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12+", label: "Years Experience" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              About Us
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              We are a team of{" "}
              <span className="text-blue-600">passionate innovators</span>
            </h2>
            <p className="mt-6 text-gray-500 text-base md:text-lg leading-relaxed font-normal">
              At Seravion Technologies, we believe in the power of technology to
              transform businesses. Our team of experts combines creativity with
              technical excellence to deliver solutions that exceed expectations.
            </p>
            <p className="mt-4 text-gray-500 text-base md:text-lg leading-relaxed font-normal">
              Founded with a vision to bridge the gap between innovation and
              execution, we have grown into a trusted partner for companies
              worldwide, helping them navigate the digital landscape with
              confidence.
            </p>

            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/25">
              Learn More About Us
            </button>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-blue-50 hover:border-blue-100 border border-gray-100 transition-all duration-300"
              >
                <p className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-2 text-gray-500 text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
