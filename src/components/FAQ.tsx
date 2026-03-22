"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What happens if the AI can't handle a call?",
    a: "It calls your emergency contact immediately. Hasn't happened yet, but the fallback is always a real person.",
  },
  {
    q: "Do I need to change my phone number?",
    a: "No. We set up call forwarding from your existing number during your after-hours window. Callers dial the same number they always have.",
  },
  {
    q: "How do my drivers get notified?",
    a: "Text message with the full job details — location, vehicle, requesting agency, special instructions. They reply to confirm. If they don't respond, we move to the next driver on your list.",
  },
  {
    q: "Is this compliant with rotation requirements?",
    a: "Yes. We configure the system for your county's specific rotation rules — call order, response windows, documentation requirements. Every call is recorded and transcribed so you have a complete audit trail for compliance reviews.",
  },
  {
    q: "Can I listen back to calls?",
    a: "Every call. Full audio and transcript.",
  },
  {
    q: "What about daytime calls?",
    a: "We're focused on nights right now — that's where the pain is. Most companies we talk to handle daytime fine on their own.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-6 bg-[var(--bg-secondary)]">
      <div className="h-px bg-[var(--border)] mb-16 max-w-3xl mx-auto" />

      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          FAQ
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[var(--border)] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-[var(--bg-card)] transition-colors"
              >
                <span className="font-medium">{faq.q}</span>
                <svg
                  className="w-5 h-5 text-[var(--accent)] shrink-0 transition-transform duration-200"
                  style={{ transform: openIdx === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div
                className="grid transition-all duration-200 ease-in-out"
                style={{
                  gridTemplateRows: openIdx === i ? "1fr" : "0fr",
                }}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-4 text-[var(--text-secondary)] text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
