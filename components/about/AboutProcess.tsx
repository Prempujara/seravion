"use client";

const processData = [
  {
    title: (
      <>
        Problem
        <br />
        discovery
      </>
    ),
    items: [
      "Usability Studies",
      "User Interviews",
      "Stakeholder Interviews",
      "Competitive Research",
      "Insights Report",
      "User Journey",
    ],
  },
  {
    title: (
      <>
        Design
        <br />
        system ready
      </>
    ),
    items: [
      "Thinking Workshops",
      "Sitemaps",
      "Concepts",
      "Designs",
      "Prototypes",
      "Usability Studies",
    ],
  },
  {
    title: (
      <>
        Design
        <br />
        implementation
      </>
    ),
    items: [
      "Design",
      "User Flows",
      "Various User Types",
      "Animations",
      "Interactions",
    ],
  },
];

export default function AboutProcess() {
  return (
    
    <section className="py-28 bg-white">
      <div className="max-w-[1320px] mx-auto px-8">
<div className="col-span-2 flex items-start pt-3">
  <div className="flex items-center gap-3">
    <div className="w-7 h-[2px] bg-[#2F80ED]" />

    <span
      className="
        text-[11px]
        uppercase
        tracking-[0.35em]
        font-medium
        text-[#8C8C8C]
        whitespace-nowrap
      "
    >
      Approach
    </span>
  </div>
</div>
        <h2 className="text-6xl font-semibold mb-16">
          Method of making better result
        </h2>

        <div className="grid md:grid-cols-3 gap-14">

          {processData.map((step, index) => (
            <div key={index}>

              <h3 className="text-3xl font-semibold mb-8">
                {step.title}
              </h3>

              <ul className="space-y-4">
                {step.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[#666]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                    {item}
                  </li>
                ))}
              </ul>

              {index !== 2 && (
                <div className="hidden lg:block mt-10 text-3xl">
                  →
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}