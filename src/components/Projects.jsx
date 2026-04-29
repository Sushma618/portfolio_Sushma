import { useEffect, useRef } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'Cloud-Native E-Commerce Backend',
    subtitle: 'Microservices Architecture',
    description: 'Highly scalable and resilient microservices-based e-commerce platform deployed on AWS with container orchestration.',
    tech: ['Java', 'Spring Boot', 'Docker', 'Kubernetes', 'AWS EKS'],
    features: [
      'Designed independent microservices for cart, orders, and inventory',
      'Deployed on AWS EKS with auto-scaling and high availability'
    ],
    impact: [
      'Achieved 99.9% uptime with automatic failover',
      'Reduced deployment time by 60% using containerization'
    ],
  },
  {
    id: 2,
    title: 'GradeMate',
    subtitle: 'Assignment Submission & Grading System',
    description: 'Comprehensive platform enabling students to submit assignments and teachers to grade and provide feedback efficiently.',
    tech: ['React', 'Spring Boot', 'MySQL', 'REST APIs'],
    features: [
      'Role-based dashboards for students and teachers',
      'Real-time assignment tracking and automated grading'
    ],
    impact: [
      'Reduced teacher grading workload by 40%',
      'Improved student engagement with instant feedback'
    ],
    links: [
      { label: 'Live Demo', url: 'https://sushma618.github.io/OnlineGradingSystem/' },
      { label: 'More Info', url: 'https://tinyurl.com/34erty' }
    ]
  },
  {
    id: 3,
    title: 'AI-Powered Fintech Platform',
    subtitle: 'Hackathon Winner - CODE4CHANGE',
    description: 'Innovative financial management platform winning 1st place at CODE4CHANGE hackathon in 27 hours.',
    tech: ['Spring Boot', 'JavaScript', 'MySQL', 'Gemini API', 'Chart.js'],
    features: [
      'JWT authentication with real-time portfolio tracking',
      'AI-powered financial insights using Gemini API'
    ],
    impact: [
      'Won 1st place at CODE4CHANGE Hackathon 2024',
      'Processed 100+ financial portfolios with AI analysis'
    ],
  },
  {
    id: 4,
    title: 'Subscription Management System',
    subtitle: 'Expense Tracking & Renewal Alerts',
    description: 'Smart subscription tracker helping users monitor recurring expenses and never miss renewal dates.',
    tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    features: [
      'Centralized tracking of all subscriptions and costs',
      'Automated reminder notifications for renewals'
    ],
    impact: [
      'Users save average of $50+/month by identifying unused subscriptions',
      'Complete visibility into recurring expenses'
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/Sushma618/SubscriptionManagementSystem' }
    ]
  },
  {
    id: 5,
    title: 'Weather App',
    subtitle: 'Real-Time Weather Information',
    description: 'Interactive weather application providing real-time meteorological data with a clean and intuitive interface.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    features: [
      'Real-time weather data by city search',
      'Display temperature, humidity, and conditions'
    ],
    impact: [
      'Fast and lightweight application',
      'User-friendly interface for quick lookups'
    ],
    links: [
      { label: 'Live Demo', url: 'https://sushma618.github.io/weatherApp/' },
      { label: 'GitHub', url: 'https://github.com/Sushma618/weatherApp' }
    ]
  },
  {
    id: 6,
    title: 'Digital Piano Live',
    subtitle: 'Interactive Virtual Instrument',
    description: 'Fully functional virtual piano with keyboard support, providing an immersive music playing experience.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Web Audio API'],
    features: [
      'Interactive piano with keyboard and mouse support',
      'Real-time sound playback with smooth audio'
    ],
    impact: [
      'Practice music without physical instrument',
      'Professional-quality sound output'
    ],
    links: [
      { label: 'Play Now', url: 'https://sushma618.github.io/Digitalpianolive/' },
      { label: 'GitHub', url: 'https://github.com/Sushma618/Digitalpianolive' }
    ]
  },
  {
    id: 7,
    title: 'To-Do List Application',
    subtitle: 'Task Management & Organization',
    description: 'Simple yet powerful task management application with persistent storage for organizing daily activities.',
    tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    features: [
      'Add, delete, update tasks with ease',
      'Persistent local storage across sessions'
    ],
    impact: [
      'Improves productivity with simple task management',
      'Offline functionality with data persistence'
    ],
    links: [
      { label: 'Try Now', url: 'https://sushma618.github.io/to-do-list/' },
      { label: 'GitHub', url: 'https://github.com/Sushma618/to-do-list' }
    ]
  }
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = Array.from(sectionRef.current.querySelectorAll('.proj-card'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('proj-card--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card, index) => {
      card.style.setProperty('--delay', `${index * 0.1}s`);
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="proj-section">
      <div className="proj-bg" aria-hidden="true" />
      <div className="proj-container">
        <div className="proj-header">
          <h2 className="proj-title">
            <span className="proj-title__accent">FEATURED</span> PROJECTS
          </h2>
          <div className="proj-title__underline" />
        </div>

        <div className="proj-grid">
          {PROJECTS.map((project) => (
            <article key={project.id} className="proj-card">
              <div className="proj-card__badge">{project.id <= 3 ? '⭐ Featured' : '💡 Project'}</div>
              
              <div className="proj-card__content">
                <div className="proj-card__top">
                  <h3 className="proj-card__title">{project.title}</h3>
                  <p className="proj-card__subtitle">{project.subtitle}</p>
                  <p className="proj-card__description">{project.description}</p>
                </div>

                <div className="proj-card__tech">
                  <p className="proj-card__label">Tech Stack:</p>
                  <div className="proj-card__tags">
                    {project.tech.map((tech) => (
                      <span key={tech} className="proj-card__tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="proj-card__features">
                  <p className="proj-card__label">Key Features:</p>
                  <ul className="proj-card__list">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="proj-card__item">
                        <span className="proj-card__bullet">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="proj-card__impact">
                  <p className="proj-card__label">Impact:</p>
                  <ul className="proj-card__list proj-card__list--impact">
                    {project.impact.map((imp, idx) => (
                      <li key={idx} className="proj-card__item">
                        <span className="proj-card__bullet">✓</span>
                        {imp}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.links && (
                  <div className="proj-card__links">
                    {project.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-card__btn"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
