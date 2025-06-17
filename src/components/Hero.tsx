
import React from 'react';
import { ArrowRight, Heart, Users, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-emerald-300 rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-amber-300 rotate-12"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-emerald-400 rotate-45"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-amber-400 rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600"> UK Islamic Forum</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Where unity, compassion, and service come together. Join us in building a stronger, 
            more caring community, rooted in the timeless values of Islam.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-2 shadow-lg">
              Get Involved Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-colors duration-200">
              Learn About Our Mission
            </button>
          </div>

          {/* Key Values Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-emerald-100 p-4 rounded-full mb-4">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Compassion</h3>
              <p className="text-gray-600 text-center">Supporting those in need with care and understanding</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-amber-100 p-4 rounded-full mb-4">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Unity</h3>
              <p className="text-gray-600 text-center">Bringing together Muslims from all backgrounds</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-emerald-100 p-4 rounded-full mb-4">
                <BookOpen className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600 text-center">Sharing knowledge and promoting understanding</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
