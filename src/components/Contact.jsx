import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelopeOpenText } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useAnimations';

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'saisushma618@gmail.com',
    href: 'mailto:saisushma618@gmail.com',
    icon: FaEnvelopeOpenText,
    accent: 'text-accentCyan'
  },
  {
    label: 'LinkedIn',
    value: 'thokala-sai-sushma',
    href: 'https://www.linkedin.com/in/thokala-sai-sushma-411242255/',
    icon: FaLinkedin,
    accent: 'text-accentPurple'
  },
  {
    label: 'GitHub',
    value: 'Sushma618',
    href: 'https://github.com/Sushma618',
    icon: FaGithub,
    accent: 'text-accentBlue'
  }
];

const Contact = () => {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section id="contact" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div ref={ref} className="space-y-8 md:space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">📩</span>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Contact</p>
            </div>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Let&apos;s connect
            </h2>
            <p className="mt-4 max-w-2xl text-base text-slate-300 md:text-lg">
              Reach out for internships, projects, or a quick conversation.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {CONTACT_LINKS.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'Email' ? '_self' : '_blank'}
                  rel={item.label === 'Email' ? undefined : 'noopener noreferrer'}
                  className="group rounded-2xl border border-slate-800 bg-panel/70 p-6 transition hover:-translate-y-1 hover:border-slate-600 hover:shadow-glow md:p-7"
                >
                  <div className="flex items-center gap-3">
                    <span className={`rounded-full bg-slate-950/60 p-3 ${item.accent}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{item.label}</p>
                      <p className="mt-1 text-lg font-semibold text-white transition group-hover:text-accentCyan">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
