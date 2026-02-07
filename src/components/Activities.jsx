import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useAnimations';

const ACTIVITIES = [
  {
    title: 'CODE4CHANGE Hackathon 2025 — 1st Place',
    period: 'May 2024',
    detail:
      'Built an AI-powered fintech assistant with live portfolio tracking, risk analysis, and advisor booking in 27 hours.'
  },
  {
    title: 'Volunteer, SRUDS NGO',
    period: 'Aug 2022 — Present',
    detail: 'Contributed to community education and awareness programs, building leadership skills.'
  }
];

const Activities = () => {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section id="activities" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div ref={ref} className="space-y-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Achievements & Activities</p>
            <h2 className="mt-4 text-5xl font-black">
              Highlights beyond <span className="text-accentCyan">the role</span>
            </h2>
          </div>

          <div className="space-y-6">
            {ACTIVITIES.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-gradient-to-br from-panel/70 to-panel/20 p-8"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.period}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-4 text-sm text-slate-400">{item.detail}</p>
                  </div>
                  <span className="text-3xl font-black text-accentPurple/40">◆</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
