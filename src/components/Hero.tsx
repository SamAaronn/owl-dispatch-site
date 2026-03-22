export default function Hero() {
  return (
    <section className="relative pt-32 pb-28 px-6 overflow-hidden">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--accent)]/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium">
          AI-Powered Night Shift Dispatch
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
          Never Miss an
          <br />
          <span className="text-[var(--accent)]">After-Hours Call</span>
          <br />
          Again
        </h1>

        <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
          AI that works the night shift so your people don&apos;t have to.
          Answers calls, collects job details, dispatches your drivers via
          SMS &mdash; all while you sleep.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-[var(--accent)] text-[var(--bg-primary)] px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-[var(--accent-hover)] transition-colors shadow-[0_0_30px_rgba(212,168,67,0.25)]"
          >
            Schedule a Demo
          </a>
          <a
            href="#how-it-works"
            className="border border-[var(--border)] text-[var(--text-primary)] px-8 py-3.5 rounded-lg font-semibold text-lg hover:border-[var(--accent)]/50 transition-colors"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
