import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useAnimations';

const CERTIFICATIONS = [
  'AWS Certified Cloud Practitioner — AWS',
  'Azure Developer Associate — Microsoft',
  'Red Hat Certified Enterprise Application Developer — Red Hat',
  'Software Testing — NPTEL'
];

const Certifications = () => {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section id="certifications" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div ref={ref} className="space-y-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Certifications</p>
            <h2 className="mt-4 text-5xl font-black">
              Credentials that <span className="text-accentCyan">validate</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {CERTIFICATIONS.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-800 bg-gradient-to-br from-panel/70 to-panel/20 p-8"
              >
                <p className="text-sm text-slate-400">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
