import { BookOpen, Briefcase, Users, MessageCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Career Guidance',
      description: 'Personalized career counseling sessions to help you identify your strengths, interests, and career paths that align with your goals.',
      features: [
        'One-on-one counseling sessions',
        'Career assessment tests',
        'Industry trend analysis',
        'Skill gap identification'
      ]
    },
    {
      icon: Briefcase,
      title: 'Internship Opportunities',
      description: 'Access to exclusive internship programs with our partner companies across various industries and domains.',
      features: [
        'Curated internship listings',
        'Application assistance',
        'Interview preparation',
        'Performance tracking'
      ]
    },
    {
      icon: Users,
      title: 'Mentorship Programs',
      description: 'Connect with experienced professionals and industry experts who provide ongoing guidance and support throughout your journey.',
      features: [
        'Industry expert mentors',
        'Regular mentoring sessions',
        'Career milestone planning',
        'Network building opportunities'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Community Engagement',
      description: 'Join a vibrant community of like-minded individuals, participate in workshops, webinars, and networking events.',
      features: [
        'Peer learning groups',
        'Industry workshops',
        'Networking events',
        'Online community platform'
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-dark-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive career development services designed to support you at every 
            stage of your professional journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-dark-800 rounded-2xl p-8 hover:bg-dark-700 transition-all duration-300 transform hover:scale-105 border border-dark-700 hover:border-primary-600"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-dark-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                        <span className="text-dark-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have already taken the first step 
              towards their dream career with Beyond Career.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-primary-600 hover:bg-primary-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;