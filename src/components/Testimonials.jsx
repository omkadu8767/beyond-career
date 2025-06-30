import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer at Google',
      university: 'IIT Delhi',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      content: 'Beyond Career completely transformed my approach to career planning. The mentorship I received was invaluable, and the career guidance helped me land my dream job at Google. The personalized attention and industry insights made all the difference.',
      rating: 5
    },
    {
      name: 'Rahul Patel',
      role: 'Product Manager at Microsoft',
      university: 'IIT Bombay',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      content: 'I was confused about my career path after graduation. Beyond Career not only helped me identify my strengths but also connected me with industry mentors who guided me through the transition from engineering to product management.',
      rating: 5
    },
    {
      name: 'Ananya Reddy',
      role: 'Data Scientist at Amazon',
      university: 'IIT Madras',
      image: 'https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      content: 'The internship opportunities provided by Beyond Career were exceptional. I got hands-on experience with real projects, and the mentorship throughout the internship helped me secure a full-time offer. Highly recommended!',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      role: 'Consultant at McKinsey',
      university: 'IIT Kharagpur',
      image: 'https://images.pexels.com/photos/3785083/pexels-photo-3785083.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      content: 'Beyond Career helped me pivot from engineering to consulting. The career guidance sessions, interview preparation, and networking opportunities were instrumental in my successful transition to McKinsey.',
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="testimonials" className="section-padding bg-dark-800">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
            Hear from our successful alumni who have transformed their careers
            with Beyond Career's guidance and support.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-dark-700 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 h-12 w-12 text-primary-600 opacity-20" />
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary-600"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-dark-200 text-lg md:text-xl leading-relaxed mb-6 italic">
                  "{testimonials[currentSlide].content}"
                </p>
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-primary-400 font-medium mb-1">
                    {testimonials[currentSlide].role}
                  </p>
                  <p className="text-dark-400 text-sm">
                    {testimonials[currentSlide].university}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  index === currentSlide ? 'bg-primary-600' : 'bg-dark-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">98%</div>
            <div className="text-dark-300">Placement Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">₹12L</div>
            <div className="text-dark-300">Average Package</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">500+</div>
            <div className="text-dark-300">Alumni Network</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">4.9/5</div>
            <div className="text-dark-300">Satisfaction Score</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;