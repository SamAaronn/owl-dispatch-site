export default function Hero() {
  return (
    <section className="relative pt-32 pb-28 px-6 overflow-hidden">
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-sm text-[var(--accent)] mb-6 tracking-wide">
          Serving Virginia
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
          We answer your
          <br />
          <span className="text-[var(--accent)]">after-hours calls.</span>
        </h1>

        <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
          AI that picks up your dispatch line overnight, gets the job details,
          and texts your driver. You sleep through it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#how-it-works"
            className="bg-[var(--accent)] text-[var(--bg-primary)] px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-[var(--accent-hover)] transition-colors"
          >
            See How It Works
          </a>
          <a
            href="#contact"
            className="border border-[var(--border)] text-[var(--text-primary)] px-8 py-3.5 rounded-lg font-semibold text-lg hover:border-[var(--accent)]/50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
