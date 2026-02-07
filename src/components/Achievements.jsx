import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useAnimations';

const ACHIEVEMENTS = [
  {
    title: 'CODE4CHANGE Hackathon',
    subtitle: '1st Place',
    description: 'Built a cloud-native disaster response platform in 24 hours.'
  },
  {
    title: 'AWS Cloud Practitioner',
    subtitle: 'Certified',
    description: 'Validated knowledge of AWS cloud services and architecture.'
  },
  {
    title: 'Global DevOps Challenge',
    subtitle: 'Top 10%',
    description: 'Ranked in top 10% out of 5000+ participants worldwide.'
  }
];

const Achievements = () => {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section id="achievements" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div ref={ref} className="space-y-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Recognition</p>
            <h2 className="mt-4 text-5xl font-black">
              Moments that <span className="text-accentCyan">matter</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {ACHIEVEMENTS.map((achievement) => (
              <div
                key={achievement.title}
                className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-panel/60 to-panel/20 p-8 transition hover:border-accentPurple/50 hover:shadow-glow"
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accentPurple/20 to-accentCyan/20 transition group-hover:from-accentPurple/40 group-hover:to-accentCyan/40" />
                  <h3 className="text-lg font-semibold">{achievement.title}</h3>
                  <p className="text-sm font-medium text-accentCyan">{achievement.subtitle}</p>
                  <p className="text-sm text-slate-400">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
