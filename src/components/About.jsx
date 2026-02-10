import { useRef, useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useAnimations';

const About = () => {
  const ref = useRef(null);
  useScrollReveal(ref);
  const skillsRef = useRef(null);
  const [skillsInView, setSkillsInView] = useState(false);
  const [skillProgress, setSkillProgress] = useState([0, 0, 0, 0]);
  const [animationKey, setAnimationKey] = useState(0);
  
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    certifications: 0,
    awards: 0
  });

  useEffect(() => {
    const targets = { experience: 10, projects: 2, clients: 3, certifications: 4, awards: 20 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => {
        const newCounters = {};
        let allComplete = true;

        Object.keys(targets).forEach(key => {
          if (prev[key] < targets[key]) {
            newCounters[key] = Math.min(prev[key] + Math.ceil(targets[key] / steps), targets[key]);
            allComplete = false;
          } else {
            newCounters[key] = targets[key];
          }
        });

        if (allComplete) clearInterval(timer);
        return newCounters;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Animate skill progress bars when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsInView(true);
            setSkillProgress([0, 0, 0, 0]); // Reset to 0
            setAnimationKey(prev => prev + 1); // Force re-render
            
            const targets = [85, 82, 80, 80];
            const duration = 1500;
            const steps = 60;
            const interval = duration / steps;

            let currentStep = 0;
            const timer = setInterval(() => {
              currentStep++;
              setSkillProgress(targets.map(target => 
                Math.min((currentStep / steps) * target, target)
              ));
              
              if (currentStep >= steps) clearInterval(timer);
            }, interval);

            return () => clearInterval(timer);
          } else {
            // Reset when out of view
            setSkillsInView(false);
            setSkillProgress([0, 0, 0, 0]);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="relative py-16 bg-gradient-to-b from-ink via-slate-950 to-ink overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accentPurple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accentCyan/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        
        {/* ==================== SECTION 1: ABOUT ME HERO ==================== */}
        <div ref={ref} className="mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* LEFT: Profile Photo with Heading */}
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl md:text-5xl font-black">
                <span className="text-white">ABOUT</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentPurple to-accentCyan">ME</span>{' '}
                <span>👩‍🎓</span>
              </h2>
              <div className="flex justify-start">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-accentPurple to-accentCyan rounded-3xl blur-xl opacity-50"></div>
                  <div className="relative backdrop-blur-xl bg-slate-900/40 border border-accentPurple/30 rounded-3xl p-2 overflow-hidden">
                    <img
                      src="/passportsize_sushma.jpeg"
                      alt="Thokala Sai Sushma"
                      className="w-full h-full rounded-2xl object-cover aspect-[5/6]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accentPurple/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Content */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                <div>
                  My Name Is{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentPurple via-accentCyan to-accentPurple">
                    Sai Sushma T
                  </span>
                </div>
                <div className="text-xl md:text-2xl">
                  I Am A{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentPurple via-accentCyan to-accentPurple">
                    DevOps Engineer
                  </span>
                </div>
              </h3>

              {/* Achievement Highlights */}
              <div className="space-y-4">
                {[
                  'DevOps Engineer Intern At Loyalty Juggernaut India Private Limited, Hyderabad (2025)',
                  'Code4Change Hackathon Winner - 1st Place, KL University ',
                  'Coding Achievements: CodeChef Diamond Badge (100-Day Streak), LeetCode 111-Day Streak, GeeksforGeeks 510+ Score',
                  'GradeMate - Led A Team To Build Assignment System Using JSP, Hibernate, Spring Boot, MySQL & REST APIs',
                  'Developed Cloud-Native E-Commerce Backend Using Microservices, Docker, Kubernetes & AWS (ECS, Lambda, S3, DynamoDB)'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-accentPurple to-accentCyan group-hover:scale-150 transition duration-300"></div>
                    <p className="text-slate-300 text-lg leading-relaxed group-hover:text-white transition">{item}</p>
                  </div>
                ))}
              </div>

              {/* Personal Info Grid */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                {[
                  { emoji: '📍', label: 'Location', value: 'Hyderabad, India' },
                  { emoji: '📧', label: 'Email', value: 'saisushma618@gmail.com', link: 'mailto:saisushma618@gmail.com' },
                  { emoji: '📱', label: 'Phone', value: '7995689429', link: 'tel:7995689429' },
                  { emoji: '🌐', label: 'Languages', value: 'English, Telugu' },
                  { emoji: '💼', label: 'LinkedIn', value: 'Connect', link: 'https://www.linkedin.com/in/thokala-sai-sushma-411242255/' },
                  { emoji: '🧑‍💻', label: 'GitHub', value: 'View Profile', link: 'https://github.com/Sushma618' }
                ].map((info, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{info.emoji}</span>
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-wide font-semibold">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-accentCyan transition font-medium">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-200 font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ==================== SECTION 2: EXPERIENCE ==================== */}
        <div className="mb-32">
          <h2 className="text-5xl md:text-6xl font-black mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-accentPurple">MY</span>{' '}
            <span className="text-white">EXPERIENCE</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Loyalty Juggernaut */}
            <div className="group backdrop-blur-xl bg-slate-900/40 border border-accentPurple/30 rounded-3xl p-8 hover:border-accentPurple hover:shadow-2xl hover:shadow-accentPurple/20 transform hover:-translate-y-2 transition duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img src="/lji.jpeg" alt="Loyalty Juggernaut" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-accentCyan transition">Loyalty Juggernaut</h3>
                  <p className="text-slate-400">DevOps Engineer Intern</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
              </p>
              <div className="flex gap-3">
                <span className="px-3 py-1 rounded-full bg-accentPurple/20 border border-accentPurple text-accentPurple text-sm">📍 Hyderabad, TG</span>
                <span className="px-3 py-1 rounded-full bg-accentCyan/20 border border-accentCyan text-accentCyan text-sm">⏱June 2025 - Present</span>
              </div>
            </div>

            {/* SRUDS NGO */}
            <div className="group backdrop-blur-xl bg-slate-900/40 border border-accentCyan/30 rounded-3xl p-8 hover:border-accentCyan hover:shadow-2xl hover:shadow-accentCyan/20 transform hover:-translate-y-2 transition duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img src="/sruds.jpeg" alt="SRUDS NGO" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-accentPurple transition">SRUDS NGO</h3>
                  <p className="text-slate-400">Volunteer</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
              </p>
              <div className="flex gap-3">
                <span className="px-3 py-1 rounded-full bg-accentCyan/20 border border-accentCyan text-accentCyan text-sm">📍 Nellore, AP</span>
                <span className="px-3 py-1 rounded-full bg-accentPurple/20 border border-accentPurple text-accentPurple text-sm">⏱ Aug 2022 - Present</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== SECTION 3: EDUCATION ==================== */}
        <div className="mb-32">
          <h2 className="text-5xl md:text-6xl font-black mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentPurple to-accentCyan">MY</span>{' '}
            <span className="text-white">EDUCATION</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* KL University */}
            <div className="backdrop-blur-xl bg-slate-900/40 border border-accentPurple/30 rounded-3xl p-8 hover:border-accentPurple hover:shadow-2xl hover:shadow-accentPurple/20 transform hover:-translate-y-2 transition duration-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img src="/kl.jpeg" alt="KL University" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">KL University</h3>
                  <p className="text-accentCyan font-semibold">9.7 CGPA</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                B.Tech - Computer Science and Engineering
                <br />Specialization: Software Modeling and DevOps
              </p>
              <div className="flex gap-3">
                <span className="px-3 py-1 rounded-full bg-accentPurple/20 border border-accentPurple text-accentPurple text-sm">📍 Guntur, India</span>
                <span className="px-3 py-1 rounded-full bg-accentCyan/20 border border-accentCyan text-accentCyan text-sm">⏱ 2022 - 2026</span>
              </div>
            </div>

            {/* Narayana Jr College */}
            <div className="backdrop-blur-xl bg-slate-900/40 border border-accentCyan/30 rounded-3xl p-8 hover:border-accentCyan hover:shadow-2xl hover:shadow-accentCyan/20 transform hover:-translate-y-2 transition duration-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img src="/narayana.jpeg" alt="Narayana Jr College" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Narayana Jr College</h3>
                  <p className="text-accentPurple font-semibold">960/1000</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">Board of Intermediate</p>
              <div className="flex gap-3">
                <span className="px-3 py-1 rounded-full bg-accentCyan/20 border border-accentCyan text-accentCyan text-sm">📍 Nellore, AP</span>
                <span className="px-3 py-1 rounded-full bg-accentPurple/20 border border-accentPurple text-accentPurple text-sm">⏱ 2020 - 2022</span>
              </div>
            </div>

            {/* High School */}
            <div className="backdrop-blur-xl bg-slate-900/40 border border-accentPurple/30 rounded-3xl p-8 hover:border-accentPurple hover:shadow-2xl hover:shadow-accentPurple/20 transform hover:-translate-y-2 transition duration-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accentPurple to-accentCyan flex items-center justify-center text-3xl">
                  🏫
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Ajantha EM High School</h3>
                  <p className="text-accentCyan font-semibold">10 CGPA</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">Board of Secondary Education</p>
              <div className="flex gap-3">
                <span className="px-3 py-1 rounded-full bg-accentPurple/20 border border-accentPurple text-accentPurple text-sm">📍 Nellore, AP</span>
                <span className="px-3 py-1 rounded-full bg-accentCyan/20 border border-accentCyan text-accentCyan text-sm">⏱ 2019 - 2020</span>
              </div>
            </div>

          </div>
        </div>

        {/* ==================== SECTION 4: SKILLS ==================== */}
        <div ref={skillsRef}>
          <h2 className="text-5xl md:text-6xl font-black mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-accentPurple">MY</span>{' '}
            <span className="text-white">SKILLS</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT: Skill Bars */}
            <div className="space-y-8" key={`skills-${animationKey}`}>
              {[
                { name: 'AWS', icon: '☁️', percent: 85, color: 'accentPurple' },
                { name: 'DevOps', icon: '⚙️', percent: 82, color: 'accentCyan' },
                { name: 'Full Stack Web Development', icon: '⚛️', percent: 80, color: 'accentPurple' },
                { name: 'Database', icon: '🗄️', percent: 80, color: 'accentCyan' }
              ].map((skill, idx) => (
                <div key={idx} className="group backdrop-blur-xl bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:border-accentPurple/70 hover:shadow-2xl hover:shadow-accentPurple/20 transition-all duration-500">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">{skill.icon}</span>
                      <span className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accentPurple group-hover:to-accentCyan transition-all duration-300">{skill.name}</span>
                    </div>
                    <span className="text-2xl font-bold text-accentCyan group-hover:scale-110 transition-transform duration-300">{skill.percent}%</span>
                  </div>
                  <div className="relative h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color === 'accentPurple' ? 'from-accentPurple to-accentCyan' : 'from-accentCyan to-accentPurple'} rounded-full transition-all duration-1500 ease-out shadow-lg relative overflow-hidden`}
                      style={{ width: `${skillProgress[idx]}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: Statistics */}
            <div className="grid grid-cols-2 gap-6 h-fit" key={`stats-${animationKey}`}>
              {[
                { label: 'Automation Scripts Built', value: counters.experience, icon: '>> ', color: 'accentPurple', suffix: '+' },
                { label: 'Team Projects', value: counters.clients, icon: '>> ', color: 'accentCyan' },
                { label: 'Major Projects', value: counters.projects, icon: '>> ', color: 'accentCyan', suffix: '+' },
                { label: 'Cloud Services Used', value: counters.awards, icon: '>> ', color: 'accentPurple', suffix: '+' },
                { label: 'Hackathons Participated', value: 3, icon: '>> ', color: 'accentPurple', suffix: '+' },
                { label: 'Global Certifications', value: counters.certifications, icon: '>> ', color: 'accentCyan' }
              ].map((stat, idx) => (
                <div 
                  key={idx} 
                  className={`backdrop-blur-xl bg-gradient-to-br ${stat.color === 'accentPurple' ? 'from-accentPurple/10 to-transparent' : 'from-accentCyan/10 to-transparent'} border ${stat.color === 'accentPurple' ? 'border-accentPurple/30 hover:border-accentPurple/70' : 'border-accentCyan/30 hover:border-accentCyan/70'} rounded-3xl p-8 hover:shadow-2xl hover:shadow-${stat.color}/30 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 text-center ${skillsInView ? 'animate-flip-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${idx * 300}ms` }}
                >
                  <p className={`text-5xl font-black mb-4 ${stat.color === 'accentPurple' ? 'text-accentPurple' : 'text-accentCyan'}`}>
                    {stat.icon}{stat.value}{stat.suffix || ''}
                  </p>
                  <p className="text-slate-300 font-semibold leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
