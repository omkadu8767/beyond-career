import { ChevronRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className=" cursor-pointer flex items-center space-x-3"
            onClick={() => {
              const element = document.querySelector('#home');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
              setIsOpen(false);
            }}>
            <div className="w-10 h-10 flex-shrink-0">
              <img
                src="/beyondgradess_logo.jpg"
                alt="Beyond Career Logo"
                className="w-full h-full object-contain rounded"
              />
            </div>
            <span className="text-2xl font-bold text-gradient">
              Beyond Career
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-dark-300 hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-300 hover:text-primary-400 focus:outline-none focus:text-primary-400"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-dark-800/95 backdrop-blur-sm`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-dark-300 hover:text-primary-400 block px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between transition-colors duration-200"
              >
                {item.name}
                <ChevronRight className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;