"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-primary)]/90 backdrop-blur-xl border-b border-[var(--border)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-1.5">
          <span className="text-xl font-bold tracking-tight text-[var(--accent)]">
            Owl
          </span>
          <span className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
            Dispatch
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium"
          >
            How it works
          </a>
          <a
            href="#features"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="btn-press bg-[var(--accent)] text-[var(--bg-primary)] px-5 py-2 rounded-lg font-semibold text-sm hover:bg-[var(--accent-hover)] transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[var(--bg-primary)]/95 backdrop-blur-xl px-6 overflow-hidden transition-all duration-200 ease-in-out ${
          open ? "max-h-80 py-4 border-t border-[var(--border)]" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col gap-4">
          <a href="#how-it-works" onClick={() => setOpen(false)} className="text-[var(--text-secondary)] font-medium">How it works</a>
          <a href="#features" onClick={() => setOpen(false)} className="text-[var(--text-secondary)] font-medium">Features</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="text-[var(--text-secondary)] font-medium">Pricing</a>
          <a href="#faq" onClick={() => setOpen(false)} className="text-[var(--text-secondary)] font-medium">FAQ</a>
          <a href="#contact" onClick={() => setOpen(false)} className="bg-[var(--accent)] text-[var(--bg-primary)] px-5 py-2.5 rounded-lg font-semibold text-sm text-center">Get in touch</a>
        </div>
      </div>
    </nav>
  );
}
