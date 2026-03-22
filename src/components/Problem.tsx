import { PhoneIcon, UserSleepIcon, CurrencyDollarIcon } from "./Icons";

export default function Problem() {
  const problems = [
    {
      icon: PhoneIcon,
      title: "Calls Come In at 2 AM",
      desc: "Sheriff's departments and law enforcement don't wait until morning. Rotation calls happen overnight.",
    },
    {
      icon: UserSleepIcon,
      title: "Your Drivers Are Sleeping",
      desc: "Missed calls mean missed revenue and dropped rotation spots. Every unanswered call is money walking away.",
    },
    {
      icon: CurrencyDollarIcon,
      title: "Call Centers Are Expensive",
      desc: "$1,200+/month for a human answering service that still gets details wrong and can't dispatch your drivers.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            The Night Shift Problem
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((p) => (
              <div key={p.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] mb-4">
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2 text-lg">{p.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
