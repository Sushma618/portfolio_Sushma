import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useAnimations';

const WORK = [
  {
    title: 'Loyalty Juggernaut',
    role: 'DevOps Engineering Intern',
    period: '2024 — Present',
    impact:
      'Orchestrated cloud infrastructure migrations, reducing deployment time from 4 hours to 15 minutes. Implemented comprehensive observability stack with Prometheus + Grafana across 200+ microservices.',
    tech: ['Kubernetes', 'AWS', 'Terraform', 'GitHub Actions']
  },
  {
    title: 'Cloud-Native E-Commerce Platform',
    role: 'Infrastructure Architect',
    period: '2023 — 2024',
    impact:
      'Designed and deployed a multi-region Kubernetes setup handling 10M+ daily requests with 99.95% uptime SLA. Built automated disaster recovery workflows.',
    tech: ['Kubernetes', 'Terraform', 'PostgreSQL', 'Redis']
  },
  {
    title: 'Online Assignment Submission System',
    role: 'Full Stack Developer',
    period: '2023',
    impact:
      'Built secure submission portal with Flask backend and React frontend, automated grading pipelines using AWS Lambda, served 500+ users.',
    tech: ['React', 'Flask', 'AWS Lambda', 'PostgreSQL']
  }
];

const Experience = () => {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div ref={ref} className="space-y-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Portfolio</p>
            <h2 className="mt-4 text-5xl font-black">
              Work that <span className="text-accentCyan">moved things</span>
            </h2>
          </div>

          {WORK.map((project, index) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-panel/60 to-panel/20 p-8 transition hover:border-slate-700 md:p-10"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{project.role}</p>
                  <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{project.period}</p>
                </div>
                <span className="text-right text-3xl font-black text-accentPurple/40">
                  0{index + 1}
                </span>
              </div>

              <p className="mt-6 leading-relaxed text-slate-300">{project.impact}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700/50 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
