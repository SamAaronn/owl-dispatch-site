"use client";

import { useState } from "react";
import { OwlLogo } from "./Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <OwlLogo className="w-7 h-7 text-[var(--accent)]" />
          <span className="text-xl font-bold text-[var(--accent)]">
            Owl Dispatch
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm"
          >
            How It Works
          </a>
          <a
            href="#features"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="bg-[var(--accent)] text-[var(--bg-primary)] px-5 py-2 rounded-lg font-semibold text-sm hover:bg-[var(--accent-hover)] transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[var(--text-secondary)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg-primary)] px-6 py-4 flex flex-col gap-4">
          <a href="#how-it-works" onClick={() => setOpen(false)} className="text-[var(--text-secondary)]">How It Works</a>
          <a href="#features" onClick={() => setOpen(false)} className="text-[var(--text-secondary)]">Features</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="text-[var(--text-secondary)]">Pricing</a>
          <a href="#faq" onClick={() => setOpen(false)} className="text-[var(--text-secondary)]">FAQ</a>
          <a href="#contact" onClick={() => setOpen(false)} className="bg-[var(--accent)] text-[var(--bg-primary)] px-5 py-2 rounded-lg font-semibold text-sm text-center">Contact Us</a>
        </div>
      )}
    </nav>
  );
}
