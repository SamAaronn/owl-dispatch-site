"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

  return (
    <section ref={sectionRef} className="relative h-[180vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[#0a0f1a] to-[var(--bg-primary)] pointer-events-none" />

        {/* Ambient glow behind phone */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[var(--accent)]/5 blur-[120px] pointer-events-none" />

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-20 px-6 max-w-6xl mx-auto">
          {/* Context labels — stacked above phone on mobile, left side on desktop */}
          <div className="relative lg:w-[300px] text-center lg:text-right h-[80px] lg:h-auto w-full max-w-[300px]">
            <motion.div
              style={{ opacity: label1Opacity }}
              className="absolute inset-0 flex flex-col justify-center text-center lg:text-right"
            >
              <p className="text-sm font-semibold text-[var(--accent)] uppercase tracking-widest mb-1 lg:mb-2">
                2:14 AM
              </p>
              <h3 className="text-xl lg:text-3xl font-bold mb-1 lg:mb-3">
                The Call Comes In
              </h3>
              <p className="text-[var(--text-secondary)] text-xs lg:text-sm leading-relaxed hidden sm:block">
                Law enforcement calls your dispatch line. Owl Dispatch answers instantly.
              </p>
            </motion.div>

            <motion.div
              style={{ opacity: label2Opacity }}
              className="absolute inset-0 flex flex-col justify-center text-center lg:text-right"
            >
              <p className="text-sm font-semibold text-[var(--accent)] uppercase tracking-widest mb-1 lg:mb-2">
                2:15 AM
              </p>
              <h3 className="text-xl lg:text-3xl font-bold mb-1 lg:mb-3">
                Driver Dispatched
              </h3>
              <p className="text-[var(--text-secondary)] text-xs lg:text-sm leading-relaxed hidden sm:block">
                Your on-call driver gets the details via SMS. Confirms with one tap. Done.
              </p>
            </motion.div>
          </div>

          {/* Phone with tilt effect — scale down on small screens */}
          <motion.div
            className="scale-[0.85] sm:scale-100 origin-top"
            style={{
              rotateX,
              rotateY,
              scale,
              perspective: 1000,
            }}
          >
            <PhoneMockup callOpacity={callOpacity} smsOpacity={smsOpacity} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
