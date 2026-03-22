export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Someone calls your line after hours.",
      desc: "AI picks up. No hold music, no voicemail.",
    },
    {
      num: "2",
      title: "AI gets the details.",
      desc: "Location, vehicle, requesting agency, special instructions.",
    },
    {
      num: "3",
      title: "Your driver gets a text.",
      desc: "Full job details via SMS. If they don't respond, we call the next person on your list. You get a recording of everything.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 relative overflow-hidden">
      <div className="relative max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          How it works
        </h2>

        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-5 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center text-sm font-bold">
                {step.num}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
