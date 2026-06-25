"use client";

const AboutContent = () => {
  return (
    <section className="bg-white py-28 lg:py-36">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-24">

        {/* Top Row */}
        <div className="grid grid-cols-12 gap-10">

          {/* Label */}

          <div className="col-span-2 pt-4">
            <div className="flex items-center gap-3">

              <div className="w-8 h-[2px] bg-[#2F80ED]" />

              <span className="uppercase text-[10px] tracking-[0.35em] text-[#8C8C8C] font-medium whitespace-nowrap">
                About Studio
              </span>

            </div>
          </div>

          {/* Heading */}

          <div className="col-span-10">

            <h2 className="
            text-[44px]
            lg:text-[66px]
            leading-[1.08]
            tracking-[-0.04em]
            font-semibold
            text-[#171717]
            max-w-[980px]">

              Crafting digital products with a
              unique vision of making user
              experience better.

            </h2>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-[#ECECEC] my-16" />

        {/* Bottom Row */}

        <div className="grid grid-cols-12 gap-10">

          {/* Bullet List */}

          <div className="col-start-3 col-span-3">

            <ul className="space-y-5">

              <li className="flex gap-4 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-black" />
                <span className="text-[34px] leading-none font-medium">
                  Art Direction
                </span>
              </li>

              <li className="flex gap-4 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-black" />
                <span className="text-[34px] leading-none font-medium">
                  Capability
                </span>
              </li>

              <li className="flex gap-4 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-black" />
                <span className="text-[34px] leading-none font-medium">
                  Sustainability
                </span>
              </li>

            </ul>

          </div>

          {/* Paragraphs */}

          <div className="col-span-5">

            <div className="space-y-10 max-w-[560px]">

              <p className="text-[18px] leading-[1.9] text-[#5E5E5E]">

                Seravion is the first and only creative agency for your
                real exploration. It's one private place to save everything
                you can realize about digital beautifully design.

              </p>

              <p className="text-[18px] leading-[1.9] text-[#5E5E5E]">

                As a global creative agency, we understand the importance
                of staying ahead of the game. That's why we partner with
                some of the world's best talent to bring fresh ideas.

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutContent;