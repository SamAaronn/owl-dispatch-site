import FadeIn, { StaggerContainer, StaggerItem } from "./FadeIn";

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
    <section id="how-it-works" className="py-28 px-6 relative overflow-hidden">
      {/* Color wash — deep blue/teal to break up the darkness */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a2d]/60 via-transparent to-[#1a2a3d]/40 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#1a3a5c]/15 blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-sm font-semibold text-[var(--accent)] uppercase tracking-widest mb-3 text-center">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            How It Works
          </h2>
          <p className="text-[var(--text-secondary)] text-center mb-16 max-w-xl mx-auto">
            Three steps. Zero missed calls.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px border-t border-dashed border-[var(--accent)]/20" />

          {steps.map((step) => (
            <StaggerItem key={step.num}>
              <div className="relative text-center md:text-left">
                <div className="text-7xl font-extrabold text-[var(--accent)]/25 mb-2">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
