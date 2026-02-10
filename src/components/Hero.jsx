import { useRef, useState, useEffect } from 'react';
import { useScrollReveal, useParallax, useFloatingElement } from '../hooks/useAnimations';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = ({ onThemeToggle, isFreshTheme }) => {
  const textRef = useRef(null);
  const photoRef = useRef(null);
  const bgRef = useRef(null);
  const heroRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isPhotoBlinking, setIsPhotoBlinking] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = [
    'DevOps Engineer',
    'Cloud Architect',
    'Full-Stack Developer',
    'Infrastructure Enthusiast',
    'Fast Learner',
    'Computer Science Student'
  ];

  const roleColors = [
    'text-highlight-1',
    'text-highlight-2',
    'text-highlight-3',
    'text-highlight-4',
    'text-highlight-5',
    'text-highlight-6'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2200); // Change role every 2.2 seconds

    return () => clearInterval(interval);
  }, []);

  useParallax(bgRef, 0.5);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimating(true);
            setIsPhotoBlinking(true);
            // Stop animations after their durations
            setTimeout(() => {
              setIsAnimating(false);
            }, 5000);
            setTimeout(() => {
              setIsPhotoBlinking(false);
            }, 2000);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen overflow-hidden bg-ink pt-32 md:pt-0">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-br from-accentPurple/5 via-transparent to-accentCyan/5"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-16 px-6 py-32 md:flex-row md:px-10">
        <div className="flex-1">
          <div className="space-y-4">
            {/* Hi There */}
            <p className="text-2xl md:text-3xl font-black text-accentPurple">
              Hi There... <span className="emoji-accent">👋</span>
            </p>

            {/* Main Name - Single Line */}
            <h1 ref={textRef} className="text-3xl font-black leading-tight md:text-5xl">
              <span className="inline-block">
                <span className="text-slate-400">I AM </span>
                {['S', 'A', 'I', ' ', 'S', 'U', 'S', 'H', 'M', 'A'].map((letter, index) => (
                  <span 
                    key={index}
                    className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-accentPurple via-accentCyan to-accentPurple bg-size-200 fresh-highlight-gradient hover:scale-110 hover:rotate-3 transition-transform duration-300 ${isAnimating ? 'name-letter-animated' : ''}`}
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </span>
            </h1>

            {/* Rotating Role Display with Letter-by-Letter Scroll Effect */}
            <div className="text-base md:text-lg text-slate-300 pt-6 flex items-center gap-3">
              <span className="text-slate-400 font-semibold whitespace-nowrap">I AM A</span>
              <div className="overflow-hidden h-8 w-72 flex items-center">
                <div className="flex gap-0">
                  {roles[currentRoleIndex].split('').map((letter, index) => (
                    <span 
                      key={`${currentRoleIndex}-${index}`}
                      className={`inline-block font-semibold animate-letter-scroll ${roleColors[currentRoleIndex]}`}
                      style={{
                        animationDelay: `${index * 0.05}s`
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Fun Fact Theme Switch */}
            <div className="pt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onThemeToggle}
                aria-pressed={isFreshTheme}
                className="group relative inline-flex items-center rounded-full border border-accentPurple/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-200"
              >
                <span className="relative z-10">Fun Fact</span>
                <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-accentPurple to-accentCyan opacity-0 transition group-hover:opacity-100 blur" />
              </button>
              <span className="text-sm font-semibold text-slate-200">
                Click The Button For A Fresh Look!
              </span>
            </div>

            {/* Social & Resume Links */}
            <div className="pt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/Sushma618"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 rounded-full border border-accentPurple/50 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-accentPurple hover:text-accentPurple"
              >
                <FaGithub className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/thokala-sai-sushma-411242255/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 rounded-full border border-accentCyan/50 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-accentCyan hover:text-accentCyan"
              >
                <FaLinkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1sa6RaPi6ayXFpB_YerYZlHyZFjLsycKd/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 rounded-full border border-accentPurple/50 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-accentPurple hover:text-accentPurple"
              >
                <span>📄</span>
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>

        <div ref={photoRef} className="flex-1 flex flex-col items-center justify-center gap-8">
          <div 
            className={`relative h-80 w-80 overflow-visible rounded-full md:h-96 md:w-96 neon-glow ${isPhotoBlinking ? 'neon-blink' : ''} cursor-pointer hover:opacity-80 transition-opacity`}
            onClick={() => setIsAboutOpen(true)}
          >
            <div className="absolute inset-0 rounded-full border border-accentPurple/20 shadow-glow" />
            <img
              src="/passportsize_sushma.jpeg"
              alt="Thokala Sai Sushma"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <p className="text-sm text-slate-400 font-semibold">Click to see more</p>
        </div>
      </div>

      {/* About Me Modal */}
      {isAboutOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-lg flex items-start justify-end p-4 md:p-8 overflow-y-auto"
          onClick={() => setIsAboutOpen(false)}
        >
          <div 
            className="w-full max-w-2xl py-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accentPurple to-accentCyan">
                About Me
              </h2>
              <button 
                onClick={() => setIsAboutOpen(false)}
                className="text-slate-400 hover:text-slate-200 transition text-3xl"
              >
                ✕
              </button>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="animate-slide-in p-8 border border-accentPurple/50 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 hover:border-accentPurple transition shadow-2xl shadow-accentPurple/40" style={{ animationDelay: '0s' }}>
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0 emoji-accent">🎓</span>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    Currently pursuing a B.Tech in Computer Science and Engineering with a specialization in Software Modeling and DevOps at KL University.
                  </p>
                </div>
              </div>
              
              <div className="animate-slide-in p-8 border border-accentCyan/50 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 hover:border-accentCyan transition shadow-2xl shadow-accentCyan/40" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0 emoji-accent">💼</span>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    DevOps Engineer Intern at Loyalty Juggernaut India Private Limited, Hyderabad (2025).
                  </p>
                </div>
              </div>
              
              <div className="animate-slide-in p-8 border border-accentPurple/50 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 hover:border-accentPurple transition shadow-2xl shadow-accentPurple/40" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0 emoji-accent">🏆</span>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    Winner – CODE4CHANGE Hackathon, KL University.
                  </p>
                </div>
              </div>

              <div className="animate-slide-in p-8 border border-accentCyan/50 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 hover:border-accentCyan transition shadow-2xl shadow-accentCyan/40" style={{ animationDelay: '0.9s' }}>
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0 emoji-accent">🤝</span>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    Volunteer at SRUDS NGO, NELLORE (2022).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out 0.3s both;
        }
        
        @keyframes letterFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-8px) translateX(2px);
          }
          50% {
            transform: translateY(-4px) translateX(-2px);
          }
          75% {
            transform: translateY(-10px) translateX(1px);
          }
        }
        
        @keyframes shimmer {
          0%, 100% {
            filter: brightness(1) drop-shadow(0 0 0px rgba(168, 85, 247, 0));
          }
          50% {
            filter: brightness(1.2) drop-shadow(0 0 8px rgba(168, 85, 247, 0.6));
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out both;
        }
        
        .bg-size-200 {
          background-size: 200% 200%;
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .name-letter-animated {
          animation: letterFloat 3s ease-in-out forwards, shimmer 2s ease-in-out forwards, gradient 3s ease forwards;
        }
        
        /* Letter-by-letter scrolling animation */
        @keyframes letter-scroll {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          50% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-letter-scroll {
          animation: letter-scroll 1.5s ease-out forwards;
        }

        /* Neon glow effect around profile picture */
        .neon-glow {
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.6), 0 0 40px rgba(6, 182, 212, 0.4), inset 0 0 15px rgba(168, 85, 247, 0.2);
        }

        /* Neon blink animation for 2 seconds */
        @keyframes neon-blink {
          0%, 100% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.6), 0 0 40px rgba(6, 182, 212, 0.4), inset 0 0 15px rgba(168, 85, 247, 0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(168, 85, 247, 1), 0 0 80px rgba(6, 182, 212, 0.8), inset 0 0 25px rgba(168, 85, 247, 0.4);
          }
        }

        .neon-blink {
          animation: neon-blink 0.5s ease-in-out 2 !important;
        }

        /* Slide in animation for about text */
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in {
          animation: slide-in-right 0.6s ease-out forwards;
        }

        /* Right arrow animation */
        @keyframes bounce-arrow-right {
          0%, 100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(8px);
          }
        }

        .animate-bounce-arrow-right {
          animation: bounce-arrow-right 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
