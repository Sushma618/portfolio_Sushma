import { useRef } from 'react';
import { useScrollReveal, useParallax, useFloatingElement } from '../hooks/useAnimations';

const Hero = () => {
  const textRef = useRef(null);
  const photoRef = useRef(null);
  const bgRef = useRef(null);

  useParallax(bgRef, 0.5);
  useFloatingElement(photoRef);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-ink pt-32 md:pt-0">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-br from-accentPurple/5 via-transparent to-accentCyan/5"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-16 px-6 py-32 md:flex-row md:px-10">
        <div className="flex-1">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400 opacity-0 animate-fade-in">
              Welcome
            </p>
            <h1 ref={textRef} className="text-5xl font-black leading-tight md:text-7xl">
              <span className="block">Thokala</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accentPurple to-accentCyan">
                Sai Sushma
              </span>
            </h1>
            <p className="max-w-lg text-lg text-slate-300">
              DevOps Engineer • Cloud Architect • Building resilient, scalable systems that move
              the world.
            </p>

            <div className="flex gap-4 pt-8">
              <a
                href="#work"
                className="group relative px-8 py-4 font-semibold text-white"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accentPurple to-accentCyan opacity-0 transition group-hover:opacity-100 blur" />
                <div className="relative rounded-full bg-gradient-to-r from-accentPurple to-accentCyan px-8 py-4 transition group-hover:shadow-glow">
                  View Work
                </div>
              </a>
              <button className="group relative px-8 py-4 font-semibold">
                <div className="absolute inset-0 rounded-full border border-slate-500 transition group-hover:border-slate-300" />
                <span className="relative text-slate-300 transition group-hover:text-white">
                  Get in Touch
                </span>
              </button>
            </div>
          </div>
        </div>

        <div ref={photoRef} className="flex-1">
          <div className="relative h-96 w-80 overflow-hidden rounded-3xl md:h-[500px] md:w-96">
            <img
              src="/passportsize_sushma.jpeg"
              alt="Thokala Sai Sushma"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 rounded-3xl border border-accentPurple/20 shadow-glow" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out 0.3s both;
        }
      `}</style>
    </section>
  );
};

export default Hero;
