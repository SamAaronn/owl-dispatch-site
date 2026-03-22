export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 relative overflow-hidden">
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Pricing
        </h2>

        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 md:p-12 max-w-md mx-auto">
          <div className="text-sm text-[var(--text-secondary)] font-medium mb-6">
            10 PM &ndash; 7 AM coverage
          </div>
          <div className="flex items-baseline justify-center gap-1 mb-2">
            <span className="text-5xl font-extrabold">$1,000</span>
            <span className="text-[var(--text-secondary)]">/month</span>
          </div>
          <div className="text-[var(--text-secondary)] text-sm mb-8">
            + $300 one-time setup
          </div>

          <ul className="text-left space-y-3 mb-10">
            {[
              "Unlimited overnight calls answered",
              "SMS dispatch to your driver roster",
              "Auto-escalation to backup drivers",
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
            className="block w-full bg-[var(--accent)] text-[var(--bg-primary)] py-3.5 rounded-lg font-semibold text-lg hover:bg-[var(--accent-hover)] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
