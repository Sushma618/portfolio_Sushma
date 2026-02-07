import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Certifications from './components/Certifications.jsx';
import Services from './components/Services.jsx';
import Experience from './components/Experience.jsx';
import Timeline from './components/Timeline.jsx';
import Achievements from './components/Achievements.jsx';
import Testimonials from './components/Testimonials.jsx';
import Projects from './components/Projects.jsx';
import Activities from './components/Activities.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-hero-radial bg-hero-glow">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certifications />
        <Services />
        <Experience />
        <Timeline />
        <Achievements />
        <Testimonials />
        <Projects />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
