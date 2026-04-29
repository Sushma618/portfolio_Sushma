import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Achievements from './components/Achievements.jsx';
import Projects from './components/Projects.jsx';
import TechStack from './components/TechStack.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const [isFreshTheme, setIsFreshTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsFreshTheme((prev) => !prev);
  };

  return (
    <div className={`min-h-screen portfolio-shell ${isFreshTheme ? 'theme-fresh' : ''}`}>
      <Navbar />
      <main className="pt-16 lg:ml-20 lg:pt-0">
        <Hero onThemeToggle={handleThemeToggle} isFreshTheme={isFreshTheme} />
        <About />
        <Achievements />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
