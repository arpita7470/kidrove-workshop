import { useState } from "react";
import { faqs } from "../data/workshop";

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-ink/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-circuit rounded-sm"
        aria-expanded={isOpen}
      >
        <span className="font-display font-semibold text-ink">{faq.question}</span>
        <svg
          className={`w-5 h-5 text-circuit shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-slate text-sm leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-ink text-center">
          Frequently asked questions
        </h2>
        <p className="text-slate text-center mt-3">
          Still curious? Here's what other parents usually ask.
        </p>

        <div className="mt-10 bg-white rounded-2xl px-6 shadow-sm border border-ink/5">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
