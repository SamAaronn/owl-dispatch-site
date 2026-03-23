"use client";

import ScrollReveal from "./ScrollReveal";
import SpotlightCard from "./SpotlightCard";

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-[0.25em] mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-[var(--accent)]" />
            Features
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 max-w-lg">
            Built for towing companies that run overnight.
          </h2>
        </ScrollReveal>

        {/* Bento grid — mixed sizes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large card — spans 2 cols */}
          <ScrollReveal className="lg:col-span-2" delay={0}>
            <SpotlightCard className="h-full">
              <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
                <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/[0.08] border border-[var(--accent)]/[0.1] flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Night shift coverage</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Active from close-of-business to morning. Your daytime operations stay exactly how they are.
                    We only touch the calls that would otherwise go to voicemail.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Tall card */}
          <ScrollReveal delay={0.1}>
            <SpotlightCard className="h-full">
              <div className="p-8 md:p-10">
                <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/[0.08] border border-[var(--accent)]/[0.1] flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">SMS dispatch</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  Your driver gets a text with the full job details the moment the AI finishes the call.
                </p>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Regular card */}
          <ScrollReveal delay={0.15}>
            <SpotlightCard className="h-full">
              <div className="p-8 md:p-10">
                <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/[0.08] border border-[var(--accent)]/[0.1] flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Auto-escalation</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  If your first driver doesn&apos;t respond, we call the next one. You set the order.
                </p>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Large card — spans 2 cols */}
          <ScrollReveal className="lg:col-span-2" delay={0.2}>
            <SpotlightCard className="h-full">
              <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
                <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/[0.08] border border-[var(--accent)]/[0.1] flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Full recordings & transcripts</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Every call recorded and transcribed. Complete audit trail for compliance reviews.
                    Configured for your county&apos;s specific rotation rules.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Two smaller cards */}
          <ScrollReveal delay={0.1}>
            <SpotlightCard className="h-full">
              <div className="p-8">
                <div className="w-11 h-11 rounded-xl bg-[var(--accent)]/[0.08] border border-[var(--accent)]/[0.1] flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Morning reports</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Wake up to a summary of everything that happened overnight.
                </p>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <SpotlightCard className="h-full">
              <div className="p-8">
                <div className="w-11 h-11 rounded-xl bg-[var(--accent)]/[0.08] border border-[var(--accent)]/[0.1] flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Rotation compliant</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Documentation for every call. Built for county requirements.
                </p>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <SpotlightCard className="h-full">
              <div className="p-8">
                <div className="w-11 h-11 rounded-xl bg-[var(--accent)]/[0.08] border border-[var(--accent)]/[0.1] flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Dedicated support</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Real people when you need them. Not a chatbot.
                </p>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
