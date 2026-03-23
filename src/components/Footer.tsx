export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5">
            <span className="text-lg font-bold tracking-tight text-[var(--accent)]">
              Owl
            </span>
            <span className="text-lg font-bold tracking-tight text-[var(--text-primary)]">
              Dispatch
            </span>
          </div>
          <span className="text-[var(--text-tertiary)] text-xs">
            Virginia, USA
          </span>
        </div>

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
          <a href="tel:+15406450805" className="hover:text-[var(--text-primary)] transition-colors tabular-nums">
            (540) 645-0805
          </a>
        </div>

        <p className="text-[var(--text-tertiary)] text-xs">
          &copy; {new Date().getFullYear()} Owl Dispatch
        </p>
      </div>
    </footer>
  );
}
