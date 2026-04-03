import Image from "next/image";

const Landing = () => {
  return (
    <section className="flex-1 flex flex-col justify-between items-center text-center px-6">
      
      {/* Heading */}
      <div className="pt-32 flex flex-col items-center">
        <h1 className="font-semibold text-4xl md:text-[72px] leading-[120%] text-black max-w-4xl">
          Engineering the future of <br />
          digital experience
        </h1>

        <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white text-sm px-6 py-2 rounded-lg transition">
          Explore Works
        </button>
      </div>

      {/* Device + Video */}
      <div className="relative w-full h-[400px] md:h-[550px]">

  {/* Full device image */}
  <Image
    src="/placeholder.png"
    alt="Device"
    fill
    className="object-cover"
    priority
  />

  {/* Screen area ONLY */}
  <div className="absolute top-1/2 left-1/2 
                  w-[64%] h-[70%] 
                  -translate-x-[51%] -translate-y-[28%] 
                  overflow-hidden rounded-[20px] z-10">

    {/* Video */}
    <video
      src="/hero-video.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    />
  </div>

  {/* SCREEN FRAME (cropped image of just device screen border) */}

</div>
    </section>
  );
};

export default Landing;