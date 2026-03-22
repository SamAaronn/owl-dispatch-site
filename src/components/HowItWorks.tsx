export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Call Comes In",
      desc: "A law enforcement agency or customer calls your dispatch line after hours. Our AI answers instantly — no hold music, no voicemail.",
    },
    {
      num: "02",
      title: "AI Collects Details",
      desc: "The AI has a natural conversation, gathering location, vehicle info, requesting agency, and any special instructions. Just like a human dispatcher would.",
    },
    {
      num: "03",
      title: "Driver Gets Dispatched",
      desc: "Your on-call driver gets an SMS with all the job details. If they don't respond, the system escalates to your backup. You get a full log and recording.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          How It Works
        </h2>
        <p className="text-[var(--text-secondary)] text-center mb-16 max-w-xl mx-auto">
          Three steps. Zero missed calls.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <div className="text-6xl font-extrabold text-[var(--accent)]/15 mb-2">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
