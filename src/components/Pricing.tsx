export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -top-40 left-1/4 w-[400px] h-[400px] rounded-full bg-[var(--accent)]/3 blur-[100px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold text-[var(--accent)] uppercase tracking-widest mb-3">
          Investment
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Simple Pricing
        </h2>
        <p className="text-[var(--text-secondary)] mb-12 max-w-xl mx-auto">
          Less than what you&apos;re paying your call center. Works every night.
          Never calls in sick.
        </p>

        <div className="glass-card border-[var(--accent)]/20 rounded-2xl p-8 md:p-12 max-w-md mx-auto">
          <div className="text-sm text-[var(--accent)] font-semibold uppercase tracking-wider mb-4">
            Night Shift Plan
          </div>
          <div className="text-sm text-[var(--text-secondary)] mb-1 line-through">
            $1,200+/mo for a human call center
          </div>
          <div className="flex items-baseline justify-center gap-1 mb-1">
            <span className="text-5xl font-extrabold">$1,000</span>
            <span className="text-[var(--text-secondary)]">/month</span>
          </div>
          <div className="text-sm text-[var(--accent)] font-medium mb-2">
            Save $2,400+/year vs. a human answering service
          </div>
          <div className="text-[var(--text-secondary)] text-sm mb-8">
            + $300 one-time setup &amp; configuration
          </div>

          <ul className="text-left space-y-3 mb-10">
            {[
              "Unlimited overnight calls answered",
              "SMS dispatch to your driver roster",
              "Smart escalation chain",
              "Full call recordings & transcripts",
              "Morning summary reports",
              "Dedicated support line",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <svg
                  className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="block w-full bg-[var(--accent)] text-[var(--bg-primary)] py-3.5 rounded-lg font-semibold text-lg hover:bg-[var(--accent-hover)] transition-colors shadow-[0_0_20px_rgba(212,168,67,0.2)]"
          >
            Schedule a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
