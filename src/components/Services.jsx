import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useAnimations';

const SERVICES = [
  {
    title: 'Cloud Architecture',
    summary: 'Design resilient, multi-region systems with graceful degradation and measurable SLAs.',
    focus: ['AWS', 'Azure', 'GCP', 'Cost Optimization']
  },
  {
    title: 'Platform Engineering',
    summary: 'Build golden paths, internal tooling, and self-service workflows that unblock teams.',
    focus: ['Kubernetes', 'Backstage', 'Helm', 'SRE Practices']
  },
  {
    title: 'Delivery Automation',
    summary: 'Ship faster with guardrails: automated testing, release orchestration, and rollback safety.',
    focus: ['CI/CD', 'GitOps', 'Policy as Code', 'Observability']
  }
];

const Services = () => {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div ref={ref} className="space-y-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Services</p>
            <h2 className="mt-4 text-5xl font-black">
              What I <span className="text-accentPurple">deliver</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-panel/70 to-panel/20 p-8 transition hover:border-accentCyan/50 hover:shadow-glow"
              >
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{service.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700/50 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
