import FadeIn from "./FadeIn";

export default function Problem() {
  return (
    <section className="py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a2040]/30 to-transparent pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        <FadeIn>
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              2 AM. Your phone rings.
            </h2>
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed text-left">
              <p>
                Sheriff&apos;s department needs a tow off the highway. Your on-call driver is asleep.
                The call goes to voicemail. They move to the next company on the rotation list.
              </p>
              <p>
                A rotation tow averages $250&ndash;400. Miss two calls a week
                and that&apos;s $2,000&ndash;3,000 a month walking out the door.
              </p>
              <p className="text-[var(--text-primary)] font-medium">
                That&apos;s the gap we fill.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent mt-16" />
    </section>
  );
}
