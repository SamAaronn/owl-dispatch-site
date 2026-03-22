"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

export default function PhoneShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Phone screen transitions
  const callOpacity = useTransform(scrollYProgress, [0, 0.15, 0.4, 0.5], [1, 1, 1, 0]);
  const smsOpacity = useTransform(scrollYProgress, [0.4, 0.55, 0.85, 1], [0, 1, 1, 1]);

  // Subtle phone tilt driven by scroll
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [2, 0, -2]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 3]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.95, 1, 1, 0.95]);

  // Text labels fade in/out with scroll
  const label1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.35, 0.45], [0, 1, 1, 0]);
  const label2Opacity = useTransform(scrollYProgress, [0.45, 0.55, 0.8, 0.9], [0, 1, 1, 0]);

  // Static values for mobile (show SMS screen)
  const staticZero = useMotionValue(0);
  const staticOne = useMotionValue(1);

  return (
    <>
      {/* Mobile: static version, no scroll hijacking */}
      <section className="lg:hidden py-16 px-6">
        <div className="max-w-sm mx-auto">
          <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-wide mb-2 text-center">
            2:14 AM
          </p>
          <h3 className="text-xl font-bold mb-6 text-center">
            Call answered. Driver notified.
          </h3>
          <div className="flex justify-center">
            <div className="scale-[0.85] origin-top">
              <PhoneMockup callOpacity={staticZero} smsOpacity={staticOne} />
            </div>
          </div>
        </div>
      </section>

      {/* Desktop: full scroll-linked animation */}
      <section ref={sectionRef} className="relative h-[180vh] hidden lg:block">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[#0a0f1a] to-[var(--bg-primary)] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[var(--accent)]/5 blur-[120px] pointer-events-none" />

          <div className="relative flex items-center justify-center gap-20 px-6 max-w-6xl mx-auto">
            <div className="relative w-[300px] text-right">
              <motion.div
                style={{ opacity: label1Opacity }}
                className="absolute inset-0 flex flex-col justify-center text-right"
              >
                <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-wide mb-2">
                  2:14 AM
                </p>
                <h3 className="text-3xl font-bold mb-3">Call answered</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Law enforcement calls your dispatch line. Owl Dispatch answers instantly.
                </p>
              </motion.div>

              <motion.div
                style={{ opacity: label2Opacity }}
                className="absolute inset-0 flex flex-col justify-center text-right"
              >
                <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-wide mb-2">
                  2:15 AM
                </p>
                <h3 className="text-3xl font-bold mb-3">Driver notified</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Your on-call driver gets the details via SMS. Confirms with one tap. Done.
                </p>
              </motion.div>
            </div>

            <motion.div
              style={{ rotateX, rotateY, scale, perspective: 1000 }}
            >
              <PhoneMockup callOpacity={callOpacity} smsOpacity={smsOpacity} />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
