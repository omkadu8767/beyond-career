import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  // EmailJS env variables
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        userId
      );
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@beyondcareer.com',
      link: 'mailto:info@beyondcareer.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'IIT Kharagpur, West Bengal, India',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/beyondgradess/posts/?feedView=all', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://www.x.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/beyond_career_?igsh=NTZiYW9xM25lODd3', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/', label: 'Facebook' }
  ];

  return (
    <section id="contact" className="section-padding bg-dark-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
            Ready to take the next step in your career journey? Contact us today
            and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-dark-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900/20 border border-green-700 rounded-lg flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-700 rounded-lg flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-red-400" />
                <span className="text-red-400">Failed to send message. Please try again.</span>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-dark-300 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-dark-700 border rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200 ${errors.name ? 'border-red-500' : 'border-dark-600'
                      }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-400 text-sm">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-dark-300 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-dark-700 border rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200 ${errors.email ? 'border-red-500' : 'border-dark-600'
                      }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-400 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-dark-300 font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-dark-700 border rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200 ${errors.phone ? 'border-red-500' : 'border-dark-600'
                      }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-red-400 text-sm">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-dark-300 font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-dark-700 border rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200 ${errors.subject ? 'border-red-500' : 'border-dark-600'
                      }`}
                    placeholder="Enter subject"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-red-400 text-sm">{errors.subject}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-dark-300 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-dark-700 border rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200 resize-vertical ${errors.message ? 'border-red-500' : 'border-dark-600'
                    }`}
                  placeholder="Enter your message"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-400 text-sm">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <a
                        href={item.link}
                        className="text-dark-300 hover:text-primary-400 transition-colors duration-200"
                      >
                        {item.details}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                    className="w-12 h-12 bg-dark-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    <social.icon className="h-6 w-6 text-dark-300 hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-dark-800 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-white mb-4">Office Hours</h4>
              <div className="space-y-2 text-dark-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;