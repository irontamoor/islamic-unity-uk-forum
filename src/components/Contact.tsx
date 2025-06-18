
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/coming-soon');
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-white mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We're here to support you. Reach out to us for assistance, information, or to get involved with our community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Our Address</h4>
                    <p className="text-slate-300 leading-relaxed">
                      123 Community Street<br />
                      London, UK<br />
                      SW1A 1AA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-slate-300">+44 20 1234 5678</p>
                    <p className="text-sm text-slate-400">Emergency: +44 20 1234 5679</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-slate-300">info@ukislamicforum.org</p>
                    <p className="text-sm text-slate-400">support@ukislamicforum.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Office Hours</h4>
                    <p className="text-slate-300 leading-relaxed">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <button 
                  onClick={() => navigate('/coming-soon')}
                  className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => navigate('/coming-soon')}
                  className="bg-blue-400 p-3 rounded-full text-white hover:bg-blue-500 transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => navigate('/coming-soon')}
                  className="bg-pink-600 p-3 rounded-full text-white hover:bg-pink-700 transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => navigate('/coming-soon')}
                  className="bg-red-600 p-3 rounded-full text-white hover:bg-red-700 transition-colors duration-200"
                >
                  <Youtube className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 p-8 rounded-xl">
            <h3 className="text-2xl font-serif text-white mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 px-6 py-4 rounded-lg font-semibold text-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
