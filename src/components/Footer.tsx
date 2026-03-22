export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-1 mb-1">
            <span className="text-lg font-extrabold tracking-tight text-[var(--accent)]">
              Owl
            </span>
            <span className="text-lg font-extrabold tracking-tight text-[var(--text-primary)]">
              Dispatch
            </span>
          </div>
          <p className="text-[var(--text-secondary)] text-xs">
            Virginia, USA
          </p>
        </div>

        <div className="flex gap-6 text-[var(--text-secondary)] text-sm">
          <a href="#how-it-works" className="hover:text-[var(--text-primary)] transition-colors">
            How It Works
          </a>
          <a href="#features" className="hover:text-[var(--text-primary)] transition-colors">
            Features
          </a>
          <a href="#pricing" className="hover:text-[var(--text-primary)] transition-colors">
            Pricing
          </a>
          <a href="tel:+15406450805" className="hover:text-[var(--text-primary)] transition-colors">
            (540) 645-0805
          </a>
        </div>

        <p className="text-[var(--text-secondary)] text-xs">
          &copy; {new Date().getFullYear()} Owl Dispatch. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
