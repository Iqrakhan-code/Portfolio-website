import React, { useState } from "react";

const faqs = [
  {
    question: "Are you open to freelance or remote work?",
    answer:
      "Yes, I'm open to both freelance and remote opportunities. Feel free to reach out through the contact form or connect with me on LinkedIn.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in frontend development using HTML, CSS, JavaScript, React, and Tailwind CSS. I'm also familiar with tools like Git, GitHub, and Figma.",
  },
  {
    question: "How can I view your projects?",
    answer:
      "You can explore my projects in the 'Projects' section of this portfolio. Each project includes a live demo and a link to the GitHub repository.",
  },
  {
    question: "Do you have experience with backend development?",
    answer:
      "While my primary focus is on frontend development, I have basic knowledge of backend technologies and have worked with mock backends like JSON Server.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can use the contact form provided on this website or reach out to me via LinkedIn, GitHub, or Fiverr.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 md:px-20 py-10 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-purple-700 mb-6">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-md shadow-sm transition duration-300"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left px-4 py-3 font-semibold text-purple-600 hover:bg-purple-50 flex justify-between items-center"
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
