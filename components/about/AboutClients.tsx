"use client";

export default function AboutClients() {
  return (
    <section className="bg-white py-24">

      {/* Heading */}

      <div className="max-w-[900px] mx-auto text-center">

        <h2 className="text-[#2E2E2E] text-[44px] md:text-[54px] leading-[1.1] font-medium">
          Help to brands growing up and show their
          <br />
          success stories to the world
        </h2>

        {/* Badge */}

        <div className="mt-8 flex justify-center">

        </div>

      </div>

      {/* Logo Strip */}

      <div className="w-full overflow-hidden py-12">

        <img
          src="/logostripabout.png"
          alt="Client Logos"
          className="w-full object-contain"
        />

      </div>

    </section>
  );
}