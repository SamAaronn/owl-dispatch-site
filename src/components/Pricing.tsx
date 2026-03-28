"use client";

import ScrollReveal from "./ScrollReveal";
import SpotlightCard from "./SpotlightCard";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[var(--accent)]/[0.04] blur-[180px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-[0.2em] mb-4">
              Pricing
            </p>
            <h2 className="text-3xl md:text-5xl font-bold">
              One plan.{" "}
              <span className="text-[var(--text-secondary)]">Everything included.</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="max-w-lg mx-auto">
            <SpotlightCard>
              <div className="p-10 md:p-14">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl md:text-7xl font-extrabold tabular-nums bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">$1,000</span>
                  <span className="text-[var(--text-secondary)] text-lg font-light">/month</span>
                </div>
                <div className="text-[var(--text-tertiary)] text-sm mb-10 tabular-nums">
                  + $500 one-time setup
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-hover)] to-transparent mb-8" />

                <ul className="space-y-4 mb-10">
                  {[
                    "Unlimited overnight calls answered",
                    "SMS dispatch to your driver roster",
                    "Auto-escalation to backup drivers",
                    "Full call recordings & transcripts",
                    "Morning summary reports",
                    "Dedicated support line",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-[var(--accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-[var(--accent)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <span className="text-[var(--text-secondary)]">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="btn-press block w-full bg-[var(--accent)] text-[var(--bg-primary)] py-4 rounded-xl font-semibold text-lg text-center hover:bg-[var(--accent-hover)] transition-all shadow-[0_0_40px_rgba(212,168,67,0.2)] hover:shadow-[0_0_60px_rgba(212,168,67,0.3)]"
                >
                  Get in touch
                </a>
              </div>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
