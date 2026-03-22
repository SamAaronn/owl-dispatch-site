"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What happens if the AI can't handle a call?",
    a: "The system immediately escalates to a human on your emergency contact list. It also logs the call so you can review exactly what happened. In practice, this is rare — the AI handles standard dispatch calls with high accuracy.",
  },
  {
    q: "Do I need to change my phone number?",
    a: "No. We set up call forwarding from your existing number during your after-hours window. Callers dial the same number they always have. During the day, calls go to your team as usual.",
  },
  {
    q: "How do my drivers get notified?",
    a: "Via SMS with full job details — location, vehicle description, requesting agency, and any special instructions. Drivers confirm by replying. If they don't respond within your set window, the system moves to the next driver on your list.",
  },
  {
    q: "Is this compliant with local rotation requirements?",
    a: "Yes. We configure the AI to understand your county's specific rotation rules and law enforcement dispatch protocols. Every call is recorded and transcribed for your compliance records.",
  },
  {
    q: "Can I see transcripts of calls?",
    a: "Absolutely. Every call gets a full transcript and audio recording. You get a morning summary report, plus real-time access to a dashboard with all call history.",
  },
  {
    q: "What if I want to handle calls during the day too?",
    a: "We're focused on the night shift right now — that's where the pain is sharpest. Day-shift coverage is on the roadmap. But honestly, most companies we talk to are fine handling daytime calls themselves.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[var(--border)] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-[var(--bg-card)] transition-colors"
              >
                <span className="font-medium">{faq.q}</span>
                <span className="text-[var(--accent)] text-xl shrink-0">
                  {openIdx === i ? "−" : "+"}
                </span>
              </button>
              {openIdx === i && (
                <div className="px-6 pb-4 text-[var(--text-secondary)] text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
