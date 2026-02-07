import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useAnimations';

const EXPERTISE = [
  {
    title: 'Cloud Platforms',
    items: ['AWS', 'Azure', 'GCP'],
    color: 'from-accentPurple to-accentBlue'
  },
  {
    title: 'Container Orchestration',
    items: ['Kubernetes', 'Docker', 'ECS'],
    color: 'from-accentCyan to-accentPurple'
  },
  {
    title: 'Infrastructure as Code',
    items: ['Terraform', 'CloudFormation', 'Ansible'],
    color: 'from-accentBlue to-accentCyan'
  },
  {
    title: 'CI/CD & Automation',
    items: ['GitHub Actions', 'GitLab CI', 'Jenkins'],
    color: 'from-accentPurple to-accentCyan'
  }
];

const Skills = () => {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div ref={ref} className="space-y-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Expertise</p>
            <h2 className="mt-4 text-5xl font-black">
              Tools of <span className="text-accentPurple">the trade</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {EXPERTISE.map((category) => (
              <div
                key={category.title}
                className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-panel/80 to-transparent p-8 transition hover:border-slate-700 hover:shadow-glow"
              >
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full bg-gradient-to-r ${category.color} bg-clip-text px-4 py-2 text-sm font-medium text-transparent`}
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

export default Skills;
