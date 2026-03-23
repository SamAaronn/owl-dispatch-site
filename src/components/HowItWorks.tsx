"use client";

import ScrollReveal from "./ScrollReveal";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 relative overflow-hidden bg-[var(--bg-secondary)]">
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-[0.25em] mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-[var(--accent)]" />
            How it works
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-20 max-w-lg">
            Three steps to never missing a call again.
          </h2>
        </ScrollReveal>

        {/* Step 1 — Left aligned */}
        <ScrollReveal>
          <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-12 lg:gap-16 mb-20">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl font-extrabold text-[var(--accent)]/[0.12]">01</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Someone calls your line after hours
              </h3>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                AI picks up instantly. No hold music, no voicemail. The caller doesn&apos;t know
                the difference — it sounds like a real dispatcher.
              </p>
            </div>
            <div className="hidden lg:block bg-gradient-to-b from-transparent via-[var(--accent)]/20 to-transparent" />
            <div className="flex items-center justify-center">
              <div className="w-full max-w-[280px] aspect-square rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center">
                <svg className="w-20 h-20 text-[var(--accent)]/30" fill="none" viewBox="0 0 24 24" strokeWidth={0.75} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Step 2 — Right aligned (reversed) */}
        <ScrollReveal>
          <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-12 lg:gap-16 mb-20">
            <div className="flex items-center justify-center order-2 lg:order-1">
              <div className="w-full max-w-[280px] aspect-square rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center">
                <svg className="w-20 h-20 text-[var(--accent)]/30" fill="none" viewBox="0 0 24 24" strokeWidth={0.75} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              </div>
            </div>
            <div className="hidden lg:block bg-gradient-to-b from-transparent via-[var(--accent)]/20 to-transparent order-2" />
            <div className="flex flex-col justify-center order-1 lg:order-3">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl font-extrabold text-[var(--accent)]/[0.12]">02</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                AI gets the details
              </h3>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                Location, vehicle description, requesting agency, special instructions.
                Everything your driver needs to roll — captured in under two minutes.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Step 3 — Left aligned */}
        <ScrollReveal>
          <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-12 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl font-extrabold text-[var(--accent)]/[0.12]">03</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Your driver gets a text
              </h3>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                Full job details via SMS. If they don&apos;t respond, we call the next
                person on your list. You get a recording of every call.
              </p>
            </div>
            <div className="hidden lg:block bg-gradient-to-b from-transparent via-[var(--accent)]/20 to-transparent" />
            <div className="flex items-center justify-center">
              <div className="w-full max-w-[280px] aspect-square rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center">
                <svg className="w-20 h-20 text-[var(--accent)]/30" fill="none" viewBox="0 0 24 24" strokeWidth={0.75} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
