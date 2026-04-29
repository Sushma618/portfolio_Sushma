import { useRef } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useAnimations';

const EXPERTISE = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'C'],
    color: 'from-accentPurple to-accentBlue'
  },
  {
    title: 'Web Development',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Spring', 'Spring Boot', 'Hibernate'],
    color: 'from-accentCyan to-accentPurple'
  },
  {
    title: 'Database Systems',
    items: ['MySQL', 'Oracle', 'PostgreSQL'],
    color: 'from-accentBlue to-accentCyan'
  },
  {
    title: 'DevOps Tools',
    items: ['Git', 'GitHub', 'Jenkins', 'CircleCI', 'Docker', 'Kubernetes', 'Helm', 'Ansible', 'Terraform'],
    color: 'from-accentPurple to-accentCyan'
  },
  {
    title: 'Cloud (AWS)',
    items: ['EC2', 'S3', 'EKS', 'RDS', 'VPC', 'IAM', 'Lambda', 'CloudFront', 'CloudWatch', 'ALB/ELB', 'Route 53'],
    color: 'from-accentCyan to-accentBlue'
  },
  {
    title: 'Relevant Coursework',
    items: ['OOPS', 'Operating Systems', 'DSA', 'DBMS', 'Computer Networks', 'System Design'],
    color: 'from-accentBlue to-accentPurple'
  }
];

const Skills = () => {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  useScrollReveal(ref);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div ref={ref} className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FaLightbulb className="text-3xl text-accentCyan" />
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Expertise</p>
            </div>
            <h2 className="mt-4 text-5xl font-black">
              Tools of <span className="text-accentPurple">the trade</span>
            </h2>
          </div>

          {/* Horizontal Scrollable Skills */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-4 scroll-smooth custom-scrollbar-skills"
            >
              {EXPERTISE.map((category) => (
                <div
                  key={category.title}
                  className="group flex-shrink-0 w-80 rounded-2xl border border-slate-800 bg-gradient-to-br from-panel/80 to-transparent p-8 transition hover:border-slate-700 hover:shadow-glow"
                >
                  <h3 className={`text-lg font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className={`rounded-full bg-gradient-to-r ${category.color} bg-clip-text px-4 py-2 text-sm font-medium text-transparent border border-slate-700/50 transition group-hover:border-slate-500`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Buttons */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/3 -translate-y-1/2 z-10 bg-gradient-to-r from-slate-950/80 to-transparent px-3 py-2 rounded-r-lg border border-l-0 border-slate-800 hover:border-slate-700 transition hidden md:inline-flex items-center justify-center"
              aria-label="Scroll left"
            >
              <span className="text-xl text-accentPurple">‹</span>
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/3 -translate-y-1/2 z-10 bg-gradient-to-l from-slate-950/80 to-transparent px-3 py-2 rounded-l-lg border border-r-0 border-slate-800 hover:border-slate-700 transition hidden md:inline-flex items-center justify-center"
              aria-label="Scroll right"
            >
              <span className="text-xl text-accentCyan">›</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar-skills::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar-skills::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar-skills::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, rgba(168, 85, 247, 0.4), rgba(6, 182, 212, 0.4));
          border-radius: 10px;
        }
        .custom-scrollbar-skills::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(90deg, rgba(168, 85, 247, 0.8), rgba(6, 182, 212, 0.8));
        }
      `}</style>
    </section>
  );
};

export default Skills;
