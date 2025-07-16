'use client';
import { useEffect, useState } from 'react';

const NAV_SECTIONS = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'features', label: 'Features', href: '#features' },
  { id: 'how-it-works', label: 'How it Works', href: '#how-it-works' },
  { id: 'pricing', label: 'Pricing', href: '#pricing' },
  { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
];


export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Smooth scroll CSS
    document.documentElement.style.scrollBehavior = 'smooth';

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      // Find the current section in view
      let current = 'home';
      for (const section of NAV_SECTIONS) {
        if (section.id === 'home') continue;
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll on nav click
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    if (href.startsWith('#') && id !== 'home') {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className={`fixed top-0 z-20 w-full py-1 transition-all duration-300 ${isScrolled ? 'bg-base-100 shadow-md shadow-base-300/20' : ''}`} id="header">
      <nav className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:bg-transparent lg:px-8">
        <div className="w-full lg:flex lg:items-center lg:gap-2">
          <div className="navbar-start items-center justify-between max-lg:w-full">
            <a className="text-base-content flex items-center gap-3 text-xl font-bold" href="#">
              <div className="bg-primary/20 flex items-center justify-center rounded-full p-2">
                <span className="icon-[tabler--activity] text-primary size-6"></span>
              </div>
              HealthTracker
            </a>
            <div className="flex items-center gap-5 lg:hidden">
              <a href="#" className="btn btn-success btn-soft">Download</a>
              <button type="button" className="collapse-toggle btn btn-outline btn-secondary btn-square"
                data-collapse="#navbar-health" aria-controls="navbar-health"
                aria-label="Toggle navigation">
                <span className="icon-[tabler--menu-2] collapse-open:hidden size-5.5"></span>
                <span className="icon-[tabler--x] collapse-open:block hidden size-5.5"></span>
              </button>
            </div>
          </div>
          <div id="navbar-health"
            className="lg:navbar-center transition-height collapse hidden grow overflow-hidden font-medium duration-300 lg:flex">
            <div className="text-base-content flex gap-6 text-base max-lg:mt-4 max-lg:flex-col lg:items-center">
              {NAV_SECTIONS.map(section => (
                <a
                  key={section.id}
                  href={section.href}
                  className={`nav-link hover:text-primary transition-colors duration-200 ${activeSection === section.id ? 'text-primary' : ''}`}
                  data-section={section.id}
                  onClick={e => handleNavClick(e, section.href, section.id)}
                >
                  {section.label}
                </a>
              ))}
            </div>
          </div>
          <div className="navbar-end max-lg:hidden">
            <a href="#" className="btn btn-primary btn-soft">Download App</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
