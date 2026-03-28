"use client";

import ScrollReveal from "./ScrollReveal";

export default function SocialProof() {
  return (
    <section className="py-14 px-6 relative overflow-hidden border-y border-[var(--border)]">
      <div className="relative max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Stat 1 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/[0.08] border border-[var(--accent)]/[0.15] flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">Launching in Virginia</p>
                <p className="text-xs text-[var(--text-tertiary)]">Onboarding first partners</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-[var(--border)]" />

            {/* Stat 2 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/[0.08] border border-[var(--accent)]/[0.15] flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">24/7 overnight coverage</p>
                <p className="text-xs text-[var(--text-tertiary)]">Close-of-business to morning</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-[var(--border)]" />

            {/* Stat 3 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/[0.08] border border-[var(--accent)]/[0.15] flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">Full compliance</p>
                <p className="text-xs text-[var(--text-tertiary)]">Recordings, transcripts, audit trails</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
