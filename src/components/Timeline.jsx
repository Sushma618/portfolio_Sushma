import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useAnimations';

const TIMELINE = [
  {
    year: '2024 — Now',
    title: 'DevOps Engineering Intern',
    detail: 'Scaled deployments to minutes and instrumented 200+ services with unified telemetry.'
  },
  {
    year: '2023 — 2024',
    title: 'Infrastructure Architect',
    detail: 'Designed multi-region Kubernetes, disaster recovery playbooks, and reliability budgets.'
  },
  {
    year: '2022 — 2023',
    title: 'Full Stack Engineer',
    detail: 'Built secure submission platform and automated grading workflows.'
  }
];

const Timeline = () => {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section id="timeline" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div ref={ref} className="space-y-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Timeline</p>
            <h2 className="mt-4 text-5xl font-black">
              A career of <span className="text-accentCyan">compounding impact</span>
            </h2>
          </div>

          <div className="space-y-6">
            {TIMELINE.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-gradient-to-br from-panel/60 to-panel/20 p-8 md:flex-row md:items-start md:justify-between"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.year}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">{item.detail}</p>
                </div>
                <span className="text-3xl font-black text-accentPurple/40">◆</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
