"use client";

export default function AboutStats() {
  return (
    <section className="bg-[#0F36D8] py-28">
      <div className="max-w-[1440px] mx-auto px-8">

        {/* Heading */}

        <div className="flex items-center gap-3 mb-12">
          <div className="w-7 h-[2px] bg-[#63A5FF]" />

          <p className="uppercase tracking-[0.35em] text-[11px] text-[#BFD6FF]">
            Approach
          </p>
        </div>

        <h2 className="text-white text-6xl font-medium max-w-3xl mb-16">
          We deliver creative ideas to a crowded world.
        </h2>

        {/* Cards */}

        <div className="grid grid-cols-3 gap-8">

          <div className="bg-[#1740DD] p-10">
            <p className="text-[#BFD6FF] mb-6">
              35+ Google reviews
            </p>

            <h3 className="text-white text-6xl font-semibold">
              4.9
            </h3>
          </div>

          <div className="bg-[#1740DD] p-10">
            <p className="text-[#BFD6FF] mb-6">
              Clients world-wide
            </p>

            <h3 className="text-white text-6xl font-semibold">
              170+
            </h3>
          </div>

          <div className="bg-[#1740DD] p-10">
            <p className="text-[#BFD6FF] mb-6">
              Completed projects
            </p>

            <h3 className="text-white text-6xl font-semibold">
              1.7k
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
}