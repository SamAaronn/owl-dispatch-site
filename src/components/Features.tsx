import {
  MoonIcon,
  DevicePhoneMobileIcon,
  ClipboardDocumentListIcon,
  ArrowPathIcon,
  BuildingLibraryIcon,
  ChartBarIcon,
} from "./Icons";

const features = [
  {
    icon: MoonIcon,
    title: "Night Shift Coverage",
    desc: "Active from close-of-business to morning. Your day operations stay exactly how they are.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Instant SMS Dispatch",
    desc: "Driver gets a text with full job details the moment the AI finishes the call. No delays.",
  },
  {
    icon: ClipboardDocumentListIcon,
    title: "Full Call Logging",
    desc: "Every call recorded, transcribed, and logged. Complete audit trail for compliance.",
  },
  {
    icon: ArrowPathIcon,
    title: "Smart Escalation",
    desc: "If the primary driver doesn't confirm within minutes, the system escalates to your backup list.",
  },
  {
    icon: BuildingLibraryIcon,
    title: "Compliance-Aware",
    desc: "Understands county rotation requirements and law enforcement dispatch protocols.",
  },
  {
    icon: ChartBarIcon,
    title: "Morning Summary",
    desc: "Wake up to a clean report of every call handled overnight. No surprises.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-[var(--bg-secondary)] bg-dots">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-semibold text-[var(--accent)] uppercase tracking-widest mb-3 text-center">
          Capabilities
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Built for Towing Companies
        </h2>
        <p className="text-[var(--text-secondary)] text-center mb-16 max-w-xl mx-auto">
          Not a generic call bot. Purpose-built for the towing industry.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass-card rounded-xl p-6 border-t-2 border-t-[var(--accent)]/30 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] mb-4">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
