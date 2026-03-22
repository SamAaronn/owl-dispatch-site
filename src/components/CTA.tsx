export default function CTA() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stop Losing Overnight Calls
        </h2>
        <p className="text-[var(--text-secondary)] mb-10 max-w-lg mx-auto">
          Tell us about your operation and we&apos;ll show you exactly how
          Owl Dispatch fits into your workflow.
        </p>

        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 max-w-md mx-auto">
          <form
            action="https://formspree.io/f/placeholder"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/60 focus:border-[var(--accent)] focus:outline-none transition-colors"
            />
            <input
              type="text"
              name="company"
              placeholder="Company name"
              required
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/60 focus:border-[var(--accent)] focus:outline-none transition-colors"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              required
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/60 focus:border-[var(--accent)] focus:outline-none transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/60 focus:border-[var(--accent)] focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-[var(--accent)] text-[var(--bg-primary)] py-3.5 rounded-lg font-semibold text-lg hover:bg-[var(--accent-hover)] transition-colors"
            >
              Request a Demo
            </button>
          </form>
          <p className="mt-4 text-[var(--text-secondary)] text-xs">
            We&apos;ll reach out within 24 hours to walk you through a live demo.
          </p>
        </div>
      </div>
    </section>
  );
}
