"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What services does Seravion Technologies offer?",
    answer:
      "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, cloud solutions, DevOps, and digital strategy consulting. Our team works with cutting-edge technologies to deliver scalable, high-performance solutions.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A typical web application takes 8-16 weeks, while mobile apps may take 12-20 weeks. We provide detailed timelines during our discovery phase and keep you updated throughout the development process.",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow an agile methodology with iterative development cycles. Our process includes discovery & planning, design, development, testing, deployment, and ongoing support. We maintain transparent communication with regular updates and demos.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we offer comprehensive post-launch support and maintenance packages. This includes bug fixes, performance monitoring, security updates, and feature enhancements to ensure your application continues to perform optimally.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "Quality is embedded in every stage of our process. We employ code reviews, automated testing, CI/CD pipelines, performance benchmarking, and security audits. Our QA team conducts thorough testing before every release.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            FAQs
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Frequently asked{" "}
            <span className="text-blue-600">questions</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:border-gray-200"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="text-gray-900 font-semibold text-sm md:text-base pr-4">
                  {faq.question}
                </span>
                <span
                  className={`text-blue-600 text-xl font-light flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="px-6 text-gray-500 text-sm leading-relaxed font-normal">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
