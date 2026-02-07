import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useAnimations';

const About = () => {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div ref={ref} className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Story</p>
            <h2 className="mt-4 text-5xl font-black leading-tight">
              Building confidence <span className="text-accentPurple">through infrastructure</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-slate-300">
            <p>
              I'm a DevOps Engineer obsessed with reliability. When systems fail at scale, it's not
              a bug—it's a failure of imagination. My job is to imagine every failure before it
              happens.
            </p>

            <p>
              From containerizing monoliths to orchestrating Kubernetes clusters across cloud
              providers, I've learned that DevOps is about removing friction. It's about making
              developers faster, deployments safer, and operations invisible.
            </p>

            <p>
              I believe in code that speaks softly but carries the weight of production. Every
              pipeline, every alert, every automation—intentional. Nothing accidental.
            </p>
          </div>

          <div className="grid gap-4 pt-8 md:grid-cols-3">
            {[
              { label: 'Years Experience', value: '2+' },
              { label: 'Systems Deployed', value: '50+' },
              { label: 'Uptime Goal', value: '99.9%' }
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-800 bg-panel/40 p-6">
                <p className="text-xs uppercase tracking-widest text-slate-400">{stat.label}</p>
                <p className="mt-3 text-3xl font-bold text-accentCyan">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
