import { OwlLogo } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <OwlLogo className="w-6 h-6 text-[var(--accent)]" />
          <span className="text-lg font-bold text-[var(--accent)]">
            Owl Dispatch
          </span>
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
          <a href="#contact" className="hover:text-[var(--text-primary)] transition-colors">
            Contact
          </a>
        </div>

        <p className="text-[var(--text-secondary)] text-xs">
          &copy; {new Date().getFullYear()} Owl Dispatch. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
