import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Services', href: '#services' },
      { name: 'Success Stories', href: '#testimonials' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Career Guidance', href: '#services' },
      { name: 'Internships', href: '#services' },
      { name: 'Mentorship', href: '#services' },
      { name: 'Community', href: '#services' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Disclaimer', href: '#' }
    ]
  };

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold text-gradient mb-4">
              Beyond Career
            </div>
            <p className="text-dark-300 leading-relaxed mb-6 max-w-md">
              Empowering students with career guidance, mentorship, and opportunities. 
              Founded by IIT Kharagpur alumni with a mission to bridge the gap between 
              academic excellence and career success.
            </p>
            <div className="flex items-center gap-4">
              <div className=" cursor-pointer hover:text-primary-400 text-sm text-dark-400">
                <a href='https://www.linkedin.com/in/mahavir-kumar-1b36001bb/' target='_blank'>Founded by IIT Kharagpur Alumni</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-dark-300 hover:text-primary-400 transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-dark-300 hover:text-primary-400 transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-dark-400 text-sm">
              © {currentYear} Beyond Career. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex gap-4 text-sm">
                {footerLinks.legal.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-dark-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-lg flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;