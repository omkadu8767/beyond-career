import { Target, Eye, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, ensuring the highest quality guidance and support.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a strong community of learners, mentors, and industry professionals working together.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Embracing innovative approaches to career development and professional growth.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'Empowering the next generation to achieve their career aspirations and make a meaningful impact.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-800">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-gradient">Beyond Career</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
            Founded by IIT Kharagpur alumni with a vision to bridge the gap between 
            academic excellence and career success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-4">Our Story</h3>
            <p className="text-dark-300 leading-relaxed">
              Beyond Career was born from the collective experience of IIT Kharagpur alumni 
              who recognized the challenges students face in transitioning from academic 
              success to professional excellence. We witnessed talented individuals struggle 
              with career decisions, not due to lack of ability, but due to lack of proper 
              guidance and mentorship.
            </p>
            <p className="text-dark-300 leading-relaxed">
              Our founders, having navigated successful careers across various industries, 
              decided to create a platform that would provide the guidance they wished they 
              had during their own career journeys. Today, Beyond Career stands as a beacon 
              of hope for students seeking clarity, direction, and success in their professional lives.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-600 to-blue-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">2019</div>
                  <div className="text-primary-100">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">IIT KGP</div>
                  <div className="text-primary-100">Alumni Network</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">5+</div>
                  <div className="text-primary-100">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div className="text-primary-100">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-dark-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Target className="h-6 w-6 text-primary-400" />
              Our Mission
            </h3>
            <p className="text-dark-300 leading-relaxed">
              To provide comprehensive career guidance, mentorship, and opportunities 
              that empower students to make informed decisions and achieve their 
              professional aspirations with confidence and clarity.
            </p>
          </div>
          
          <div className="bg-dark-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Eye className="h-6 w-6 text-primary-400" />
              Our Vision
            </h3>
            <p className="text-dark-300 leading-relaxed">
              To become the leading platform for career development, creating a 
              generation of confident professionals who not only succeed in their 
              careers but also contribute meaningfully to society.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-dark-700 rounded-xl p-6 text-center hover:bg-dark-600 transition-colors duration-300">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                <p className="text-dark-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;