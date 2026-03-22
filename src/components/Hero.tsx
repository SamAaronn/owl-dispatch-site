"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-28 px-6 overflow-hidden">
      {/* Aurora gradient — color without losing the night vibe */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#1a3a5c]/40 blur-[120px]" />
        <div className="absolute top-10 right-1/4 w-[400px] h-[400px] rounded-full bg-[#2d1b4e]/30 blur-[120px]" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--accent)]/8 blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium"
        >
          AI-Powered Night Shift Dispatch
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight"
        >
          Never Miss an
          <br />
          <span className="text-[var(--accent)]">After-Hours Call</span>
          <br />
          Again
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          AI that works the night shift so your people don&apos;t have to.
          Answers calls, collects job details, dispatches your drivers via
          SMS &mdash; all while you sleep.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:+15406450805"
            className="bg-[var(--accent)] text-[var(--bg-primary)] px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-[var(--accent-hover)] transition-all duration-200 shadow-[0_0_30px_rgba(212,168,67,0.25)] hover:translate-y-[-1px]"
          >
            Call (540) 645-0805
          </a>
          <a
            href="#how-it-works"
            className="border border-[var(--border)] text-[var(--text-primary)] px-8 py-3.5 rounded-lg font-semibold text-lg hover:border-[var(--accent)]/50 transition-colors"
          >
            See How It Works
          </a>
        </motion.div>
      </div>
    </section>
  );
}
