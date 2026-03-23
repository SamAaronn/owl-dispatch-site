"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

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
    <section id="faq" className="py-28 px-6 bg-[var(--bg-secondary)] relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-[0.2em] mb-4">
              FAQ
            </p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Common questions
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div
                className="border border-[var(--border)] rounded-xl overflow-hidden transition-all duration-300 hover:border-[var(--border-hover)] bg-[var(--bg-card)]/30"
              >
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  aria-expanded={openIdx === i}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 transition-colors"
                >
                  <span className="font-medium text-[15px]">{faq.q}</span>
                  <div className={`w-6 h-6 rounded-full border border-[var(--border-hover)] flex items-center justify-center shrink-0 transition-all duration-200 ${openIdx === i ? "bg-[var(--accent)]/10 border-[var(--accent)]/30" : ""}`}>
                    <svg
                      className="w-3 h-3 text-[var(--accent)] transition-transform duration-200"
                      style={{ transform: openIdx === i ? "rotate(180deg)" : "rotate(0deg)" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </button>
                <div
                  className="grid transition-all duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)]"
                  style={{
                    gridTemplateRows: openIdx === i ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 text-[var(--text-secondary)] text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
