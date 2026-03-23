"use client";

import ScrollReveal from "./ScrollReveal";

export default function Problem() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: dramatic stat */}
          <ScrollReveal>
            <div>
              <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[var(--accent)]" />
                The problem
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[0.95] mb-6">
                2 AM.
                <br />
                <span className="text-[var(--text-secondary)]">Your phone rings.</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Right: story */}
          <ScrollReveal delay={0.15}>
            <div className="space-y-6">
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Sheriff&apos;s department needs a tow off the highway. Your on-call driver is asleep.
                The call goes to voicemail. They move to the next company on the rotation list.
              </p>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                A rotation tow with storage averages $250&ndash;400. Miss two calls a week
                and that&apos;s{" "}
                <span className="text-[var(--text-primary)] font-semibold">$2,000&ndash;3,000 a month</span>{" "}
                walking out the door.
              </p>
              <div className="pt-4">
                <p className="text-2xl font-bold text-[var(--accent)]">
                  That&apos;s the gap we fill.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
