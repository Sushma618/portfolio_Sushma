import { useRef, useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useAnimations';
import { FaJava, FaPython, FaJs, FaReact, FaDocker, FaGit, FaAws, FaDatabase, FaCode } from 'react-icons/fa';
import { SiSpringboot, SiKubernetes, SiPostgresql, SiMysql, SiTerraform, SiJenkins, SiHibernate, SiTailwindcss } from 'react-icons/si';

const TECH_ICONS = [
  { name: 'JavaScript', icon: FaJs, altIcon: FaCode, color: '#F7DF1E' },
  { name: 'Python', icon: FaPython, altIcon: FaCode, color: '#3776AB' },
  { name: 'Java', icon: FaJava, altIcon: FaCode, color: '#FF9800' },
  { name: 'React', icon: FaReact, altIcon: FaCode, color: '#61DAFB' },
  { name: 'Spring Boot', icon: SiSpringboot, altIcon: FaCode, color: '#6DB33F' },
  { name: 'Docker', icon: FaDocker, altIcon: FaCode, color: '#2496ED' },
  { name: 'Kubernetes', icon: SiKubernetes, altIcon: FaCode, color: '#326CE5' },
  { name: 'AWS', icon: FaAws, altIcon: FaCode, color: '#FF9900' },
  { name: 'Git', icon: FaGit, altIcon: FaCode, color: '#F1502F' },
  { name: 'PostgreSQL', icon: SiPostgresql, altIcon: FaDatabase, color: '#336791' },
  { name: 'MySQL', icon: SiMysql, altIcon: FaDatabase, color: '#00758F' },
  { name: 'Terraform', icon: SiTerraform, altIcon: FaCode, color: '#7B42BC' },
  { name: 'Jenkins', icon: SiJenkins, altIcon: FaCode, color: '#D33C27' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, altIcon: FaCode, color: '#06B6D4' },
];

const TechStack = () => {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  useScrollReveal(ref);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // tick toggles icons to create a changing-icon effect; staggered by index
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="tech-stack" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div ref={ref} className="space-y-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Tech Stack</p>
            <h2 className="mt-4 text-5xl font-black">
              <span className="text-accentPurple">MY</span> TECH STACK <span className="text-accentCyan">&lt;/&gt;</span>
            </h2>
          </div>

          {/* Scrollable Tech Icons */}
          <div className="relative">
            {/* Mobile / touch-friendly scroll */}
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto pb-4 scroll-smooth custom-scrollbar md:hidden"
            >
              {TECH_ICONS.map((tech, idx) => {
                const IconPrimary = tech.icon;
                const IconAlt = tech.altIcon || tech.icon;
                const UseIcon = (tick + idx) % 2 === 0 ? IconAlt : IconPrimary;
                return (
                  <div
                    key={tech.name}
                    className="group flex flex-col items-center justify-center gap-4 flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-110"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-accentPurple to-accentCyan opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-all duration-300" />
                      <div className="relative size-24 flex items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/60 group-hover:border-accentCyan/50 transition-all duration-300 shadow-lg group-hover:shadow-glow">
                        <UseIcon className="size-12" style={{ color: tech.color }} />
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-slate-300 group-hover:text-white text-center whitespace-nowrap">
                      {tech.name}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Desktop continuous marquee */}
            <div className="hidden md:block overflow-hidden marquee">
              <div className="marquee-track">
                {[...TECH_ICONS, ...TECH_ICONS].map((tech, idx) => {
                  const IconPrimary = tech.icon;
                  const IconAlt = tech.altIcon || tech.icon;
                  const UseIcon = (tick + idx) % 2 === 0 ? IconAlt : IconPrimary;
                  // use unique key across duplicated items
                  const key = `${tech.name}-${idx}`;
                  return (
                    <div
                      key={key}
                      className="group tech-item flex flex-col items-center justify-center gap-4 flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-110"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-accentPurple to-accentCyan opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-all duration-300" />
                        <div className="relative size-24 flex items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/60 group-hover:border-accentCyan/50 transition-all duration-300 shadow-lg group-hover:shadow-glow">
                          <UseIcon className="size-12" style={{ color: tech.color }} />
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-slate-300 group-hover:text-white text-center whitespace-nowrap">
                        {tech.name}
                      </p>
                    </div>
                  );
                })}
              </div>
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
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, rgba(168, 85, 247, 0.4), rgba(6, 182, 212, 0.4));
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(90deg, rgba(168, 85, 247, 0.8), rgba(6, 182, 212, 0.8));
        }
        /* Marquee / continuous scroll */
        .marquee { position: relative; }
        .marquee-track { display: flex; gap: 2rem; align-items: center; width: max-content; }
        .marquee-track .tech-item { display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .marquee:hover .marquee-track { animation-play-state: paused; }
        .marquee-track { animation: scroll-left 30s linear infinite; }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default TechStack;

