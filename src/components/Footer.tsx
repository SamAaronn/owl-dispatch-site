export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
          {/* Brand + description */}
          <div className="max-w-sm">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-lg font-bold tracking-tight text-[var(--accent)]">
                Owl
              </span>
              <span className="text-lg font-bold tracking-tight text-[var(--text-primary)]">
                Dispatch
              </span>
            </div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              AI-powered overnight dispatch for towing companies. We answer your after-hours calls so you never miss a rotation.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-[var(--text-secondary)] text-sm">
            <a href="#how-it-works" className="hover:text-[var(--text-primary)] transition-colors">
              How it works
            </a>
            <a href="#features" className="hover:text-[var(--text-primary)] transition-colors">
              Features
            </a>
            <a href="#pricing" className="hover:text-[var(--text-primary)] transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-[var(--text-primary)] transition-colors">
              FAQ
            </a>
          </div>

          {/* Contact */}
          <div className="text-right">
            <a href="tel:+15406450805" className="text-[var(--accent)] font-semibold tabular-nums hover:text-[var(--accent-hover)] transition-colors">
              (540) 645-0805
            </a>
            <p className="text-[var(--text-tertiary)] text-xs mt-1">
              Launching in Virginia
            </p>
          </div>
        </div>

        <div className="h-px bg-[var(--border)] mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-tertiary)] text-xs">
            &copy; {new Date().getFullYear()} Owl Dispatch. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[var(--text-tertiary)] text-xs">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            Virginia, USA
          </div>
        </div>
      </div>
    </footer>
  );
}
