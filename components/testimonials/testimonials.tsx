const testimonials = [
  {
    quote:
      "Seravion transformed our entire digital presence. The team delivered beyond our expectations — on time, on budget, and with incredible attention to detail.",
    name: "Sarah Mitchell",
    role: "CEO, FinanceFlow Inc.",
    initials: "SM",
    color: "bg-blue-600",
  },
  {
    quote:
      "Working with Seravion was a game changer. Their expertise in UX design and development helped us launch our product 3x faster than we anticipated.",
    name: "James Okafor",
    role: "CTO, HealthTrack",
    initials: "JO",
    color: "bg-emerald-600",
  },
  {
    quote:
      "The Seravion team brought creativity and technical excellence together. Our e-commerce conversion rate increased by 40% after the redesign.",
    name: "Priya Sharma",
    role: "Head of Digital, LuxeShop",
    initials: "PS",
    color: "bg-violet-600",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-500 text-xs font-medium px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-black tracking-tight">
            Trusted by industry leaders
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto font-light text-base">
            What our clients say about partnering with Seravion Technologies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-6"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed font-light flex-1">&ldquo;{t.quote}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-semibold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-black font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
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
