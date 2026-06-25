"use client";

const members = [
  {
    image: "/member1.png",
    name: "Ana Dina Belić",
    role: "Graphic Designer",
  },
  {
    image: "/member2.png",
    name: "Giuseppe Carbonara",
    role: "Brand Strategist",
  },
  {
    image: "/member3.png",
    name: "Vedran Starčić",
    role: "Jr. Designer",
  },
  {
    image: "/member4.png",
    name: "Izquierdo Bayà",
    role: "Creative Writer",
  },
  {
    image: "/member5.png",
    name: "Jared Silverman",
    role: "Graphic Designer",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white py-28">

      <div className="max-w-[1440px] mx-auto px-8 lg:px-20">

        {/* Heading */}

        <div className="grid grid-cols-12 mb-20">

          <div className="col-span-2 pt-4">

            <div className="flex items-center gap-3">

              <div className="w-7 h-[2px] bg-[#2F80ED]" />

              <span className="uppercase tracking-[0.35em] text-[11px] text-[#8C8C8C]">
                Team
              </span>

            </div>

          </div>

          <div className="col-span-10">

            <h2 className="text-[66px] leading-[1.05] tracking-[-0.05em] font-medium text-[#222] max-w-[760px]">

              Meet the talented squad,
              behind the creativity

            </h2>

          </div>

        </div>

        {/* Team collage */}

        <img
          src="/team.png"
          alt="Team"
          className="w-full mb-16"
        />

        {/* Team List */}

        <div>

          {members.map((member) => (

            <div
              key={member.name}
              className="flex items-center justify-between py-8 border-t border-[#ECECEC]"
            >

              <div className="flex items-center gap-5">

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <h3 className="text-[28px] font-medium text-[#222]">
                  {member.name}
                </h3>

              </div>

              <p className="text-[#777] text-[18px]">
                {member.role}
              </p>

              <button className="text-[28px] transition hover:translate-x-1 hover:-translate-y-1">
                ↗
              </button>

            </div>

          ))}

          <div className="border-b border-[#ECECEC]" />

        </div>

      </div>

    </section>
  );
}