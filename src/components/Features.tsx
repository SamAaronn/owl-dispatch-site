export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-[var(--bg-secondary)] relative overflow-hidden">
      <div className="relative max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          What you get
        </h2>

        <div className="space-y-6 text-left">
          <div className="flex gap-4 items-start">
            <svg className="w-5 h-5 text-[var(--accent)] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <div>
              <span className="font-semibold">Night shift coverage.</span>
              <span className="text-[var(--text-secondary)]"> Active from close-of-business to morning. Your daytime operations stay exactly how they are.</span>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <svg className="w-5 h-5 text-[var(--accent)] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <div>
              <span className="font-semibold">SMS dispatch.</span>
              <span className="text-[var(--text-secondary)]"> Your driver gets a text with the full job details the moment the AI finishes the call.</span>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <svg className="w-5 h-5 text-[var(--accent)] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <div>
              <span className="font-semibold">Escalation.</span>
              <span className="text-[var(--text-secondary)]"> If your first driver doesn&apos;t respond, we call the next one. You set the order.</span>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <svg className="w-5 h-5 text-[var(--accent)] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <div>
              <span className="font-semibold">Every call recorded and transcribed.</span>
              <span className="text-[var(--text-secondary)]"> Full audit trail. Listen back to anything.</span>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <svg className="w-5 h-5 text-[var(--accent)] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <div>
              <span className="font-semibold">Morning report.</span>
              <span className="text-[var(--text-secondary)]"> Wake up to a summary of everything that happened overnight.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
