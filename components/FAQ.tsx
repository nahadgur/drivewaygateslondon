'use client';

import { useState } from 'react';

type FAQItem = { question: string; answer: string };

export function FAQ({ faqs, title = 'Frequently Asked Questions' }: { faqs: FAQItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section>
      <h2
        className="font-syne font-extrabold uppercase tracking-tight text-brand-900 mb-8"
        style={{ fontSize: 'clamp(22px, 2.8vw, 36px)', letterSpacing: '-.02em', lineHeight: 1.04 }}
      >
        {title}
      </h2>
      <div>
        {faqs.map((faq, i) => (
          <div key={i} className="faq-item">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between gap-5 py-5 text-left bg-transparent border-none cursor-pointer"
            >
              <span className="font-syne font-bold text-sm tracking-[.02em] text-brand-900 leading-snug">
                {faq.question}
              </span>
              <span
                className={`flex-shrink-0 w-6 h-6 border-2 flex items-center justify-center transition-all duration-200 ${
                  openIndex === i
                    ? 'bg-brand-900 border-brand-900 rotate-45'
                    : 'border-brand-400'
                }`}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="0" width="2" height="10" fill={openIndex === i ? '#ffffff' : '#9A7D56'} />
                  <rect x="0" y="4" width="10" height="2" fill={openIndex === i ? '#ffffff' : '#9A7D56'} />
                </svg>
              </span>
            </button>
            {openIndex === i && (
              <div className="pb-5 text-sm text-brand-600 leading-relaxed max-w-2xl">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
