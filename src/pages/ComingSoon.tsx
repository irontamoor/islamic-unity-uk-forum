
import React from 'react';
import { Calendar, Mail, Phone, MapPin } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Islamic Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border-2 border-amber-400 rotate-45 transform origin-center"></div>
        <div className="absolute top-40 right-32 w-48 h-48 border-2 border-amber-300 rotate-12"></div>
        <div className="absolute bottom-32 left-1/4 w-32 h-32 border-2 border-amber-400 rotate-45"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 border-2 border-amber-300 rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-amber-200 rounded-full"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Logo/Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-serif text-amber-400 mb-4">
            UK Islamic Forum
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg font-light">Unity • Compassion • Service</p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
            Something Beautiful is
            <span className="text-amber-400 block">Coming Soon</span>
          </h2>
          
          <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            We are crafting an exceptional digital experience for our community. 
            Our new website will serve as a beacon of unity, knowledge, and support for Muslims across the UK.
          </p>

          {/* Launch Date */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 mb-12 max-w-md mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-amber-400 mr-3" />
              <span className="text-slate-300 text-lg font-medium">Expected Launch</span>
            </div>
            <div className="text-3xl font-serif text-white mb-2">Spring 2026</div>
            <p className="text-slate-400 text-sm">Stay tuned for updates</p>
          </div>

          {/* Email Signup */}
          <div className="mb-12">
            <h3 className="text-xl text-white mb-6">Be the first to know when we launch</h3>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-200">
                Notify Me
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <div className="bg-slate-800/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Mail className="w-8 h-8 text-amber-400" />
            </div>
            <h4 className="text-white font-medium mb-2">Email Us</h4>
            <p className="text-slate-300">info@ukislamicforum.org</p>
          </div>
          
          <div className="text-center">
            <div className="bg-slate-800/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Phone className="w-8 h-8 text-amber-400" />
            </div>
            <h4 className="text-white font-medium mb-2">Call Us</h4>
            <p className="text-slate-300">+44 20 1234 5678</p>
          </div>
          
          <div className="text-center">
            <div className="bg-slate-800/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-amber-400" />
            </div>
            <h4 className="text-white font-medium mb-2">Visit Us</h4>
            <p className="text-slate-300">Nottingham, UK</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-slate-400">
          <p>&copy; 2026 UK Islamic Forum. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
