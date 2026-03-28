"use client";

import { motion, useMotionValue } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  const staticZero = useMotionValue(0);
  const staticOne = useMotionValue(1);

  return (
    <section className="relative min-h-screen px-6 overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] right-[-5%] w-[900px] h-[900px] rounded-full bg-[var(--accent)]/[0.035] blur-[180px]" />
        <div className="absolute bottom-[-20%] left-[-15%] w-[600px] h-[600px] rounded-full bg-indigo-900/[0.08] blur-[150px]" />
      </div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          {/* Left: Copy */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-[0.25em] mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-[var(--accent)]" />
                Serving Virginia
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[0.92]"
            >
              We answer
              <br />
              your <span className="bg-gradient-to-r from-[var(--accent)] via-[#e8c561] to-[var(--accent-dim)] bg-clip-text text-transparent">after-hours</span>
              <br />
              <span className="bg-gradient-to-r from-[var(--accent)] via-[#e8c561] to-[var(--accent-dim)] bg-clip-text text-transparent">calls.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg text-[var(--text-secondary)] max-w-md mb-10 leading-relaxed"
            >
              AI that picks up your dispatch line overnight, gets the job
              details, and texts your driver. You sleep through it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#how-it-works"
                className="btn-press bg-[var(--accent)] text-[var(--bg-primary)] px-8 py-4 rounded-xl font-semibold text-base hover:bg-[var(--accent-hover)] transition-all shadow-[0_0_40px_rgba(212,168,67,0.2)] hover:shadow-[0_0_60px_rgba(212,168,67,0.3)]"
              >
                See how it works
              </a>
              <a
                href="tel:+15406450805"
                className="btn-press flex items-center justify-center gap-2 border border-[var(--border-hover)] text-[var(--text-primary)] px-8 py-4 rounded-xl font-medium text-base hover:border-[var(--accent)]/40 hover:bg-white/[0.03] transition-all"
              >
                <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                (540) 645-0805
              </a>
            </motion.div>
          </div>

          {/* Right: Phone */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotateY: -10 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative shrink-0"
            style={{ perspective: 1000 }}
          >
            <div className="absolute -inset-20 bg-[var(--accent)]/[0.04] blur-[100px] rounded-full pointer-events-none" />
            <div className="relative scale-100 md:scale-110 lg:scale-[1.15]">
              <PhoneMockup callOpacity={staticZero} smsOpacity={staticOne} />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
    </section>
  );
}
