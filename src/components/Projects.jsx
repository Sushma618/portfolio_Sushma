import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useAnimations';

const PROJECTS = [
  {
    title: 'Online Assignment Submission and Grading System',
    tech: ['JSP', 'Hibernate', 'Spring Boot', 'MySQL'],
    points: [
      'Built Spring Boot backend with role-based access and optimized queries.',
      'Developed REST APIs for multi-user submissions, grading, and data management.'
    ]
  },
  {
    title: 'Cloud-Native E-Commerce Backend (Microservices)',
    tech: ['Java', 'Spring Boot', 'Docker', 'Kubernetes', 'AWS'],
    points: [
      'Designed cart, orders, and inventory services deployed on AWS EKS for auto-scaling.',
      'Implemented API Gateway routing and centralized logging with resilient service communication.'
    ]
  }
];

const Projects = () => {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div ref={ref} className="space-y-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Projects</p>
            <h2 className="mt-4 text-5xl font-black">
              Systems shipped <span className="text-accentPurple">end-to-end</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-slate-800 bg-gradient-to-br from-panel/70 to-panel/20 p-8"
              >
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700/50 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-400">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-accentCyan">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
