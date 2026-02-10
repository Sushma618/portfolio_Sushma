import { useEffect, useRef } from 'react';

const ACHIEVEMENTS = [
  { title: 'AWS Cloud Practitioner', type: 'cert', image: '/achievements/aws.jpeg' },
  { title: 'Red Hat EX183 Certified', type: 'leetcode', image: '/achievements/redhat.jpeg' },
  { title: 'Salesforce AI Associate', type: 'cert', image: '/achievements/salesforce.jpeg' },

  { title: 'Azure Developer Associate', type: 'cert', image: '/achievements/azure.jpeg' },
  { title: 'Multicloud Network Associate', type: 'leetcode', image: '/achievements/aviatrix.jpeg' },
  { title: 'Code4Change Hackathon', type: 'cert', image: '/achievements/code.png' },

  { title: 'LeetCode 100 Days Challenge', type: 'cert', image: '/achievements/100.mp4' },
  { title: 'LeetCode 100 Days', type: 'leetcode', image: '/achievements/100.jpeg', rotate: true, backText: 'LeetCode 2025' },
  { title: 'Cisco Networking Academy', type: 'cert', image: '/achievements/cert-dark.svg' },

  { title: 'Google Coursera Certificate', type: 'cert', image: '/achievements/cert-white.svg' },
  { title: 'LeetCode 200 Days', type: 'leetcode', image: '/achievements/leetcode-hex.svg' },
  { title: 'IBM Coursera Certificate', type: 'cert', image: '/achievements/cert-dark.svg' },

  { title: 'LinkedIn Learning Certificates', type: 'cert', image: '/achievements/cert-white.svg' },
  { title: 'LeetCode 50 Days', type: 'leetcode', image: '/achievements/leetcode-hex.svg', rotate: true, backText: 'LeetCode 2025' },
  { title: 'Juniper Cloud Virtual Internship', type: 'cert', image: '/achievements/cert-dark.svg' },

  { title: 'Oracle Cloud Foundations', type: 'cert', image: '/achievements/cert-white.svg' },
  { title: 'NPTEL Software Testing', type: 'cert', image: '/achievements/cert-dark.svg' },
  { title: 'Red Hat DO180 OpenShift', type: 'cert', image: '/achievements/cert-white.svg' },

  { title: 'Microsoft GitHub Foundations', type: 'cert', image: '/achievements/cert-dark.svg' },
  { title: 'Coursera Project Network', type: 'cert', image: '/achievements/cert-white.svg' }
];

const Achievements = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = Array.from(sectionRef.current.querySelectorAll('.achv-card'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('achv-card--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card, index) => {
      card.style.setProperty('--delay', `${index * 0.08}s`);
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" ref={sectionRef} className="achv-section">
      <div className="achv-bg" aria-hidden="true" />
      <div className="achv-container">
        <div className="achv-header">
          <h2 className="achv-title">
            <span className="achv-title__accent">MY</span> ACHIEVEMENTS & CERTIFICATIONS
          </h2>
          <div className="achv-title__underline" />
        </div>

        <div className="achv-grid">
          {ACHIEVEMENTS.map((achievement) => (
            <article
              key={achievement.title}
              className={`achv-card ${achievement.type === 'leetcode' ? 'achv-card--leetcode' : ''} ${achievement.rotate ? 'achv-card--rotate' : ''}`}
            >
              <div className="achv-card__media">
                {achievement.rotate ? (
                  <div className="achv-flip-container">
                    <div className="achv-flip-card">
                      <div className="achv-flip-front">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="achv-card__img"
                          loading="lazy"
                        />
                      </div>
                      <div className="achv-flip-back">
                        <span className="achv-flip-text">{achievement.backText}</span>
                      </div>
                    </div>
                  </div>
                ) : achievement.image.endsWith('.mp4') ? (
                  <video
                    className="achv-card__img"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={achievement.image} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="achv-card__img"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="achv-card__footer">
                <span className="achv-card__title">{achievement.title}</span>
              </div>
              <div className="achv-card__overlay" aria-hidden="true">
                <div className="achv-card__view">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path
                      d="M3 7h8a2 2 0 0 1 2 2v8H5a2 2 0 0 1-2-2V7zm14 0h4v12h-4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.5 12.5h4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>VIEW</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
