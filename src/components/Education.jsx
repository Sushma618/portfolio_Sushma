import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useAnimations';

const EDUCATION = [
  {
    program: 'B.Tech — Computer Science and Engineering',
    school: 'Koneru Lakshmaiah Education Foundation',
    location: 'Guntur, India',
    period: '2022 — 2026',
    score: 'CGPA 9.7/10'
  },
  {
    program: 'Board of Intermediate',
    school: 'Narayana Junior College',
    location: 'Nellore, India',
    period: '2020 — 2022',
    score: '960/1000'
  },
  {
    program: 'Board of Secondary Education',
    school: 'Ajantha EM High School',
    location: 'Nellore, India',
    period: '2019 — 2020',
    score: 'CGPA 10/10'
  }
];

const Education = () => {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section id="education" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div ref={ref} className="space-y-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Education</p>
            <h2 className="mt-4 text-5xl font-black">
              Foundations of <span className="text-accentPurple">engineering</span>
            </h2>
          </div>

          <div className="space-y-6">
            {EDUCATION.map((item) => (
              <div
                key={item.program}
                className="rounded-2xl border border-slate-800 bg-gradient-to-br from-panel/70 to-panel/20 p-8"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.period}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{item.program}</h3>
                    <p className="mt-2 text-sm text-slate-400">{item.school}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.location}</p>
                  </div>
                  <span className="text-sm font-semibold text-accentCyan">{item.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
