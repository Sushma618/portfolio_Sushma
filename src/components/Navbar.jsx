const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-900/50 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#hero" className="text-lg font-black text-white">TS</a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#skills" className="transition hover:text-white">Skills</a>
          <a href="#education" className="transition hover:text-white">Education</a>
          <a href="#certifications" className="transition hover:text-white">Certifications</a>
          <a href="#services" className="transition hover:text-white">Services</a>
          <a href="#work" className="transition hover:text-white">Work</a>
          <a href="#timeline" className="transition hover:text-white">Timeline</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#activities" className="transition hover:text-white">Activities</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="hidden md:block rounded-full border border-slate-700 px-6 py-2 text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white">Say Hello</a>
      </div>
    </header>
  );
};

export default Navbar;


