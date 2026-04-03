import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center text-center px-6 pt-32 pb-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-blue-700 text-xs font-medium">
            Trusted by 200+ companies worldwide
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-bold text-4xl md:text-6xl lg:text-[72px] leading-[1.1] tracking-tight text-gray-900 max-w-4xl">
          Engineering the future of{" "}
          <span className="text-blue-600">digital experience</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed font-normal">
          We craft innovative digital solutions that transform businesses and
          create meaningful connections between brands and their audiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40">
            Explore Works
          </button>
          <button className="text-gray-700 hover:text-blue-600 text-sm font-medium px-8 py-3.5 rounded-lg border border-gray-200 hover:border-blue-200 transition-all duration-200 bg-white">
            Learn More
          </button>
        </div>
      </div>

      {/* Device Mockup */}
      <div className="relative w-full max-w-5xl mt-16 z-10">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
          {/* Full device image */}
          <Image
            src="/placeholder.png"
            alt="Device Mockup"
            fill
            className="object-contain"
            priority
          />

          {/* Screen area with video */}
          <div
            className="absolute top-1/2 left-1/2 
                        w-[64%] h-[70%] 
                        -translate-x-[51%] -translate-y-[28%] 
                        overflow-hidden rounded-[12px] md:rounded-[20px] z-10"
          >
            <video
              src="/hero-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
