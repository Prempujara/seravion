const testimonials = [
  {
    quote:
      "Seravion transformed our digital presence completely. Their team delivered a solution that exceeded our expectations in both design and functionality.",
    name: "Sarah Johnson",
    role: "CTO, TechVentures Inc.",
    initials: "SJ",
  },
  {
    quote:
      "Working with Seravion was a game-changer for our business. They understood our vision and turned it into a reality with remarkable precision.",
    name: "Michael Chen",
    role: "Founder, DataFlow Systems",
    initials: "MC",
  },
  {
    quote:
      "The team at Seravion brings a rare combination of technical expertise and creative thinking. They are our go-to partner for all digital initiatives.",
    name: "Emily Rodriguez",
    role: "VP of Product, CloudScale",
    initials: "ER",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            What our <span className="text-blue-600">clients say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-500"
            >
              {/* Quote mark */}
              <div className="text-blue-200 text-5xl font-serif leading-none mb-4 select-none">
                &ldquo;
              </div>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 font-normal">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-sm font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-xs font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
