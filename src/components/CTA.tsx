export default function CTA() {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      {/* Color accent */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#1a3a5c]/20 blur-[100px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold text-[var(--accent)] uppercase tracking-widest mb-3">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Interested?
        </h2>
        <p className="text-[var(--text-secondary)] mb-10 max-w-lg mx-auto">
          We&apos;re currently onboarding founding customers.
          Drop us a line and we&apos;ll tell you more.
        </p>

        <div className="glass-card rounded-2xl p-8 max-w-md mx-auto">
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
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent)] focus:outline-none transition-colors"
            />
            <input
              type="text"
              name="company"
              placeholder="Company name"
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent)] focus:outline-none transition-colors"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              required
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent)] focus:outline-none transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent)] focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-[var(--accent)] text-[var(--bg-primary)] py-3.5 rounded-lg font-semibold text-lg hover:bg-[var(--accent-hover)] transition-all duration-200 shadow-[0_0_20px_rgba(212,168,67,0.2)] hover:translate-y-[-1px]"
            >
              Get in Touch
            </button>
          </form>
          <p className="mt-4 text-[var(--text-tertiary)] text-xs">
            We&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
          <a
            href="tel:+15406450805"
            className="flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            (540) 645-0805
          </a>
          <span className="hidden sm:inline text-[var(--text-tertiary)]">|</span>
          <span className="text-[var(--text-secondary)]">Virginia, USA</span>
        </div>
      </div>
    </section>
  );
}
