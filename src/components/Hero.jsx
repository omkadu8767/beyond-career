import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const handleCTAClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMoreClick = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      {/* Hero Content */}
      <div className="container-max section-padding text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Empowering Your{' '}
            <span className="text-gradient">
              Future Career
            </span>
          </h1>


          <p className="text-xl md:text-2xl text-dark-300 mb-8 animate-fade-in-up leading-relaxed max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Navigate your career journey with expert guidance, mentorship, and opportunities.
            Founded by IIT Kharagpur alumni, we're here to unlock your potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={handleCTAClick}
              className="btn-primary flex items-center gap-2 text-lg"
              aria-label="Get started with Beyond Career"
            >
              Get Started Today
              <ArrowRight className="h-5 w-5" />
            </button>

            <button
              onClick={handleLearnMoreClick}
              className="btn-secondary flex items-center gap-2 text-lg"
              aria-label="Learn more about Beyond Career"
            >
              <Play className="h-5 w-5" />
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">500+</div>
              <div className="text-dark-300">Students Guided</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">100+</div>
              <div className="text-dark-300">Successful Placements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">50+</div>
              <div className="text-dark-300">Partner Companies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-dark-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-dark-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;