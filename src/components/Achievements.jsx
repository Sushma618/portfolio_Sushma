import { useEffect, useRef } from 'react';

const ACHIEVEMENTS = [
  { title: 'Code4Change Hackathon - Winner', type: 'cert', image: '/achievements/code.png', url: 'https://drive.google.com/file/d/1SOQfZSIcgzTjb3aUVUKdPFckmBdN1oM7/view?usp=sharing' },
  { title: 'Tata Imagination Challenge - National Semi Finalist', type: 'cert', image: '/achievements/tata.jpeg', url: 'https://unstop.com/certificate-preview/8added88-9451-46ae-92bc-5df90cc659a4' },
  { title: 'Investment Banking Simulation- J.P.Morgan', type: 'cert', image: '/achievements/jpmc.jpeg', url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase/YD2kY95RQxQtXxFTS_JPMorgan%20Chase_3QeuD9yGFJWTMnGMr_1718873091092_completion_certificate.pdf' },
  { title: 'AWS Cloud Practitioner', type: 'cert', image: '/achievements/aws.jpeg', url: 'https://drive.google.com/file/d/1bV8X7_hNYVZwsbBFKdRGs54bPd323lK1/view?usp=sharing' },
  { title: 'AWS Solutions Architect Associate', type: 'cert', image: '/achievements/awssaaco3.png', url: 'https://drive.google.com/file/d/1RxWYu9II-wZ9BNPQ7wEcmYXDKg9K4yQT/view?usp=sharing' },
  { title: 'Red Hat EX183 Certified', type: 'leetcode', image: '/achievements/redhat.jpeg', url: 'https://drive.google.com/file/d/1Gb8JKnTLri1XtmNEx4ObYyxyMNwoxGFB/view?usp=sharing' },
  { title: 'Salesforce AI Associate', type: 'cert', image: '/achievements/salesforce.jpeg', url: 'https://drive.google.com/file/d/1EFLnrS_DPJEazZS70ZiyjDBqBnprp0QN/view?usp=sharing' },
  { title: 'Azure Developer Associate', type: 'cert', image: '/achievements/azure.jpeg', url: 'https://drive.google.com/file/d/1cqf-vP0TKF3PWw8HGAfv1YgRjjS4GK0d/view?usp=sharing' },
  { title: 'Multicloud Network Associate', type: 'leetcode', image: '/achievements/aviatrix.jpeg', url: 'https://drive.google.com/file/d/1oc3G4wHm1zMDQAl2ywMy5lSCVjnnyPJ0/view?usp=sharing' },
  { title: 'Software Testing- NPTEL', type: 'leetcode', image: '/achievements/nptel.jpeg', url: 'https://drive.google.com/file/d/17FFHYDFNwu6SAf6iJ2QPPfohMAHUBNDo/view?usp=sharing' },
  { title: '100 Days Activity- Leetcode', type: 'cert', image: '/achievements/100.mp4', url: 'https://leetcode.com/medal/?showImg=0&id=7129107&isLevel=false' },
  { title: '100 Days Activity- CodeChef', type: 'leetcode', image: '/achievements/codechef.png', url: 'https://drive.google.com/file/d/1DFDU1BOktG5nFdBE9BtX9sJCjRG9eAST/view?usp=sharing' },
  { title: 'Problem Solving- Hackerrank', type: 'cert', image: '/achievements/hackerrank.jpeg', url: 'https://www.hackerrank.com/certificates/iframe/89795d518824' },
  { title: 'Operations & DevOps Fundamentals Certfied', type: 'cert', image: '/achievements/scrumc.jpeg', url: 'https://drive.google.com/file/d/1ujoTtpRv1KIhFjSfwmsuvTw7ghNl8piy/view?usp=sharing' },
  { title: 'Cloud Computing', type: 'cert', image: '/achievements/cc.jpeg', url: 'https://coursera.org/share/ff7d9750e466665bd557130d6f5c412e' },
  { title: 'Git and GitHub', type: 'cert', image: '/achievements/git.jpeg', url: 'https://coursera.org/share/08e6789704e03c96462da54ba8201bac' },
  { title: 'Full Stack Software Developer - IBM', type: 'leetcode', image: '/achievements/full.jpeg', url: 'https://coursera.org/share/7e18ec239777005bcac7220b5e7b04fe' },
  { title: 'Java Full Stack Developer', type: 'cert', image: '/achievements/jfsd.jpeg', url: 'https://coursera.org/share/2a43c69606cc7350c826418553e2547b' },
  { title: 'Java Microservices with Spring Boot and Spring Cloud', type: 'cert', image: '/achievements/spring.jpeg', url: 'https://coursera.org/share/1b2f0fa41fdb36f5cfc6fdd017e395f0' },
  { title: 'Database Design- Postgresql', type: 'cert', image: '/achievements/sql.jpeg', url: 'https://coursera.org/share/8a93d01f3b225580316c10f813102016' },
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
            <a
              key={achievement.title}
              href={achievement.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <article
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
