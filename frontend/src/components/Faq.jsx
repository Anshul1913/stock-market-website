import React, { useState } from 'react';
import { ChevronDown } from "lucide-react";
const faqs = [
  { q: 'What level do I need to start?', a: 'Beginner to advanced tracks available.' },
  { q: 'Do you offer certificates?', a: 'Yes, upon course completion.' },
  { q: 'Can I access lifetime?', a: 'All plans include lifetime access.' },
  { q: 'Is there a money-back guarantee?', a: '30-day full refund policy.' }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 bg-gray-800">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-heading text-3xl text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }, idx) => (
            <AccordionItem key={idx} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex justify-between items-center">
        <h3 className="font-medium">{question}</h3>
        <ChevronDown className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </div>
      {open && <p className="mt-2 text-gray-200">{answer}</p>}
    </div>
  );
}
