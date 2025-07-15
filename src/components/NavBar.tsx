'use client';
import { useEffect, useState } from 'react';

export default function NavBar() {

  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
              <a href="#" className="nav-link hover:text-primary" data-section="home">Home</a>
              <a href="#features" className="nav-link hover:text-primary" data-section="features">Features</a>
              <a href="#how-it-works" className="nav-link hover:text-primary" data-section="how-it-works">How
                it Works</a>
              <a href="#pricing" className="nav-link hover:text-primary" data-section="pricing">Pricing</a>
              <a href="#testimonials" className="nav-link hover:text-primary"
                data-section="testimonials">Testimonials</a>
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
