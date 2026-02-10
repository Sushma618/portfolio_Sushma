import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '🙋‍♀️' },
    { id: 'achievements', label: 'Achievements', icon: '🏆' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'services', label: 'Services', icon: '💼' },
    { id: 'work', label: 'Work', icon: '💻' },
    { id: 'timeline', label: 'Timeline', icon: '📅' },
    { id: 'testimonials', label: 'Testimonials', icon: '💬' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'activities', label: 'Activities', icon: '🎯' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Left Sidebar Navigation */}
      <nav className={`fixed left-0 top-0 z-50 h-screen bg-gradient-to-b from-ink via-ink/95 to-ink border-r border-slate-800/50 backdrop-blur-xl shadow-2xl transition-all duration-500 ${isExpanded ? 'w-56' : 'w-20 md:w-24'}`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-accentPurple/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-1/3 -left-10 w-32 h-32 bg-accentCyan/10 rounded-full blur-3xl animate-pulse-slower" />
          <div className="absolute bottom-1/4 -left-16 w-36 h-36 bg-accentPurple/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        {/* Logo Section with Toggle */}
        <div className="relative flex items-center justify-between h-20 md:h-24 border-b border-slate-800/50 px-4">
          <a 
            href="#hero" 
            className="group relative text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-accentPurple via-accentCyan to-accentPurple bg-size-200 animate-gradient"
          >
            <span className="relative z-10 animate-bounce-slow">TS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accentPurple to-accentCyan opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 animate-pulse" />
          </a>
          
          {/* Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 group"
            title={isExpanded ? "Collapse" : "Expand"}
          >
            <div className="relative w-5 h-5 flex flex-col justify-center gap-1">
              <span className={`block h-0.5 bg-gradient-to-r from-accentPurple to-accentCyan transition-all duration-300 ${isExpanded ? 'rotate-45 translate-y-1.5 w-full' : 'w-full'}`} />
              <span className={`block h-0.5 bg-gradient-to-r from-accentPurple to-accentCyan transition-all duration-300 ${isExpanded ? 'opacity-0' : 'w-4'}`} />
              <span className={`block h-0.5 bg-gradient-to-r from-accentPurple to-accentCyan transition-all duration-300 ${isExpanded ? '-rotate-45 -translate-y-1.5 w-full' : 'w-full'}`} />
            </div>
          </button>
        </div>

        {/* Menu Items */}
        <div className="relative flex flex-col gap-0.5 py-4 px-2 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-8rem)] custom-scrollbar">
          {menuItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`group relative w-full flex items-center ${isExpanded ? 'justify-start gap-3 px-3' : 'justify-center'}`}
              style={{
                animation: `slideInLeft 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Active Indicator */}
              {activeSection === item.id && (
                <div className="absolute left-0 w-1 h-10 bg-gradient-to-b from-accentPurple via-accentCyan to-accentPurple rounded-r-full animate-expand-height shadow-glow" />
              )}

              {/* Icon Container */}
          <div className={`
                relative flex items-center justify-center rounded-xl flex-shrink-0
                transition-all duration-300 cursor-pointer
                ${isExpanded ? 'w-10 h-10' : 'w-12 h-12 md:w-14 md:h-14'}
                ${activeSection === item.id 
                  ? 'bg-gradient-to-br from-accentPurple/20 to-accentCyan/20 scale-105 shadow-glow' 
                  : 'bg-slate-800/30 hover:bg-slate-700/50 hover:scale-105'
                }
              `}>
                {/* Icon */}
                <span className={`
                  transition-all duration-300
                  ${isExpanded ? 'text-base' : 'text-lg md:text-xl'}
                  ${activeSection === item.id ? 'animate-bounce-subtle scale-110' : 'group-hover:scale-125 group-hover:rotate-12'}
                `}>
                  {item.icon}
                </span>

                {/* Hover Glow Effect */}
                <div className={`
                  absolute inset-0 rounded-xl bg-gradient-to-br from-accentPurple to-accentCyan opacity-0 
                  group-hover:opacity-30 transition-opacity duration-300 blur-md
                `} />

                {/* Rotating Border */}
                {hoveredItem === item.id && !isExpanded && (
                  <div className="absolute inset-0 rounded-xl border-2 border-accentCyan/50 animate-spin-slow" />
                )}
              </div>

              {/* Label (shown when expanded) */}
              {isExpanded && (
                <span className={`
                  text-sm font-semibold whitespace-nowrap transition-all duration-300
                  ${activeSection === item.id 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-accentPurple to-accentCyan' 
                    : 'text-slate-300 group-hover:text-white'
                  }
                `}>
                  {item.label}
                </span>
              )}

              {/* Tooltip (only shown when collapsed) */}
              {!isExpanded && (
                <div className={`
                  absolute left-full ml-4 px-4 py-2 rounded-lg
                  bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700
                  text-white text-sm font-semibold whitespace-nowrap
                  shadow-2xl backdrop-blur-sm
                  transition-all duration-300 origin-left
                  ${hoveredItem === item.id 
                    ? 'opacity-100 scale-100 translate-x-0' 
                    : 'opacity-0 scale-95 -translate-x-2 pointer-events-none'
                  }
                `}>
                  <div className="relative z-10">{item.label}</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-accentPurple/20 to-accentCyan/20 rounded-lg animate-pulse" />
                  {/* Arrow */}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-slate-800" />
                </div>
              )}

              {/* Particle Effect on Hover */}
              {hoveredItem === item.id && (
                <>
                  <div className="absolute top-0 right-0 w-2 h-2 bg-accentPurple rounded-full animate-particle-1" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-accentCyan rounded-full animate-particle-2" />
                </>
              )}
            </a>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accentPurple to-transparent animate-pulse" />
        </div>
      </nav>

      {/* Spacer for content */}
      <div className="w-20 md:w-24" />
      {/* Custom Animations */}
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes expand-height {
          from {
            height: 0;
          }
          to {
            height: 3rem;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.1);
          }
        }

        @keyframes pulse-slower {
          0%, 100% {
            opacity: 0.05;
            transform: scale(1);
          }
          50% {
            opacity: 0.15;
            transform: scale(1.15);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes particle-1 {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          100% {
            transform: translate(20px, -20px);
            opacity: 0;
          }
        }

        @keyframes particle-2 {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          100% {
            transform: translate(20px, 20px);
            opacity: 0;
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .animate-expand-height {
          animation: expand-height 0.3s ease-out forwards;
        }

        .animate-particle-1 {
          animation: particle-1 1s ease-out forwards;
        }

        .animate-particle-2 {
          animation: particle-2 1s ease-out forwards;
        }

        .bg-size-200 {
          background-size: 200% 200%;
        }

        .shadow-glow {
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(34, 211, 238, 0.2);
        }

        /* Custom Scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, rgba(168, 85, 247, 0.3), rgba(34, 211, 238, 0.3));
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, rgba(168, 85, 247, 0.5), rgba(34, 211, 238, 0.5));
        }
      `}</style>
    </>
  );
};

export default Navbar;


