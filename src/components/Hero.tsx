"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-28 px-6 overflow-hidden">
      {/* Single subtle radial gradient — not the AI aurora blob trio */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[#1a2a4a]/25 blur-[150px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-sm text-[var(--accent)] mb-6 tracking-wide"
        >
          Now onboarding in Virginia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight"
        >
          We answer your
          <br />
          <span className="text-[var(--accent)]">after-hours calls.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          AI that picks up your dispatch line overnight, gets the job details,
          and texts your driver. You sleep through it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#how-it-works"
            className="bg-[var(--accent)] text-[var(--bg-primary)] px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-[var(--accent-hover)] transition-colors"
          >
            See How It Works
          </a>
          <a
            href="#contact"
            className="border border-[var(--border)] text-[var(--text-primary)] px-8 py-3.5 rounded-lg font-semibold text-lg hover:border-[var(--accent)]/50 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
