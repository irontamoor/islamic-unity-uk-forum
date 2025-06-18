
import React from 'react';
import { Heart, Users, BookOpen, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif mb-4">UK Islamic Forum</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              A community-driven organisation dedicated to uniting Muslims from across the UK and around the world. 
              We foster unity, promote Islamic values, and uplift our communities through practical support, education, and outreach.
            </p>
            <div className="flex items-center gap-2 text-amber-400 mb-4">
              <Heart className="w-5 h-5" />
              <Users className="w-5 h-5" />
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">Unity • Compassion • Service</span>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => navigate('/coming-soon')}
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate('/coming-soon')}
                className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate('/coming-soon')}
                className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate('/coming-soon')}
                className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors duration-200"
              >
                <Youtube className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('/coming-soon')} className="text-slate-300 hover:text-amber-400 transition-colors duration-200 text-left">About Us</button></li>
              <li><button onClick={() => navigate('/coming-soon')} className="text-slate-300 hover:text-amber-400 transition-colors duration-200 text-left">Our Work</button></li>
              <li><button onClick={() => navigate('/coming-soon')} className="text-slate-300 hover:text-amber-400 transition-colors duration-200 text-left">Get Involved</button></li>
              <li><button onClick={() => navigate('/coming-soon')} className="text-slate-300 hover:text-amber-400 transition-colors duration-200 text-left">News & Updates</button></li>
              <li><button onClick={() => navigate('/coming-soon')} className="text-slate-300 hover:text-amber-400 transition-colors duration-200 text-left">Contact Us</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('/coming-soon')} className="text-slate-300 hover:text-amber-400 transition-colors duration-200 text-left">Community Support</button></li>
              <li><button onClick={() => navigate('/coming-soon')} className="text-slate-300 hover:text-amber-400 transition-colors duration-200 text-left">Education & Dawah</button></li>
              <li><button onClick={() => navigate('/coming-soon')} className="text-slate-300 hover:text-amber-400 transition-colors duration-200 text-left">Youth Programs</button></li>
              <li><button onClick={() => navigate('/coming-soon')} className="text-slate-300 hover:text-amber-400 transition-colors duration-200 text-left">Family Services</button></li>
              <li><button onClick={() => navigate('/coming-soon')} className="text-slate-300 hover:text-amber-400 transition-colors duration-200 text-left">Emergency Support</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 UK Islamic Forum. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <button onClick={() => navigate('/coming-soon')} className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-200">Privacy Policy</button>
              <button onClick={() => navigate('/coming-soon')} className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-200">Terms of Service</button>
              <button onClick={() => navigate('/coming-soon')} className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-200">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
