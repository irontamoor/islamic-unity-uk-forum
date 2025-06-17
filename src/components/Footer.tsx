
import React from 'react';
import { Heart, Users, BookOpen, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">UK Islamic Forum</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              A community-driven organisation dedicated to uniting Muslims from across the UK and around the world. 
              We foster unity, promote Islamic values, and uplift our communities through practical support, education, and outreach.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 mb-4">
              <Heart className="w-5 h-5" />
              <Users className="w-5 h-5" />
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">Unity • Compassion • Service</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#work" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Our Work</a></li>
              <li><a href="#involved" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Get Involved</a></li>
              <li><a href="#resources" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">News & Updates</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Community Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Education & Dawah</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Youth Programs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Family Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Emergency Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 UK Islamic Forum. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
