const TrustedBy = () => {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Meta",
    "Apple",
    "Netflix",
  ];

  return (
    <section className="py-16 px-6 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-10">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16">
          {companies.map((company) => (
            <div
              key={company}
              className="text-gray-300 hover:text-gray-500 transition-colors duration-300 text-2xl md:text-3xl font-bold tracking-tight cursor-default"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
