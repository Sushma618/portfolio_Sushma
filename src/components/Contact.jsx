import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useAnimations';

const Contact = () => {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div ref={ref} className="space-y-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Get in Touch</p>
            <h2 className="mt-4 text-5xl font-black">
              Let's build <span className="text-accentPurple">something remarkable</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Interested in discussing DevOps, cloud architecture, or opportunities? I'm always
              open to thoughtful conversations.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:sushma@example.com"
              className="group block rounded-2xl border border-slate-800 bg-gradient-to-r from-panel/60 to-panel/20 p-8 transition hover:border-accentCyan/50 hover:shadow-glow"
            >
              <p className="text-sm uppercase tracking-widest text-slate-400">Email</p>
              <p className="mt-3 text-2xl font-bold text-accentCyan transition group-hover:text-white">
                sushma@example.com
              </p>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-slate-800 bg-gradient-to-r from-panel/60 to-panel/20 p-8 transition hover:border-accentPurple/50 hover:shadow-glow"
            >
              <p className="text-sm uppercase tracking-widest text-slate-400">LinkedIn</p>
              <p className="mt-3 text-2xl font-bold text-accentPurple transition group-hover:text-white">
                Connect on LinkedIn
              </p>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-slate-800 bg-gradient-to-r from-panel/60 to-panel/20 p-8 transition hover:border-accentBlue/50 hover:shadow-glow"
            >
              <p className="text-sm uppercase tracking-widest text-slate-400">GitHub</p>
              <p className="mt-3 text-2xl font-bold text-accentBlue transition group-hover:text-white">
                View Projects
              </p>
            </a>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-accentPurple/5 to-accentCyan/5 p-8">
            <p className="text-center text-sm text-slate-400">
              © 2026 Thokala Sai Sushma. Built with intention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
