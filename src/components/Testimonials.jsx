import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useAnimations';

const TESTIMONIALS = [
  {
    quote:
      'Sushma brings calm to chaos. Our deployment reliability jumped and the team shipped with confidence.',
    name: 'Engineering Manager',
    company: 'Fintech Platform'
  },
  {
    quote:
      'She translates product urgency into stable systems. The observability stack alone saved weeks of debugging.',
    name: 'Staff Engineer',
    company: 'Commerce Startup'
  },
  {
    quote:
      'Elegant infrastructure, thoughtful automation, and a relentless focus on impact.',
    name: 'CTO',
    company: 'SaaS Scale-up'
  }
];

const Testimonials = () => {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section id="testimonials" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div ref={ref} className="space-y-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Testimonials</p>
            <h2 className="mt-4 text-5xl font-black">
              Trust built <span className="text-accentPurple">over time</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <figure
                key={item.name}
                className="rounded-2xl border border-slate-800 bg-gradient-to-br from-panel/70 to-panel/20 p-8"
              >
                <blockquote className="text-sm leading-relaxed text-slate-300">“{item.quote}”</blockquote>
                <figcaption className="mt-6 text-sm font-semibold text-white">
                  {item.name}
                  <span className="block text-xs font-normal text-slate-400">{item.company}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
