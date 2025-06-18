
import React from 'react';
import { ArrowRight, Heart, Users, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Islamic Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-amber-300 rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-amber-400 rotate-12"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-amber-300 rotate-45"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-amber-400 rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-amber-200 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Welcome to the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600"> UK Islamic Forum</span>
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed font-light">
            Where unity, compassion, and service come together. Join us in building a stronger, 
            more caring community, rooted in the timeless values of Islam.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => navigate('/coming-soon')}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-200 flex items-center gap-2 shadow-lg"
            >
              Get Involved Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => navigate('/coming-soon')}
              className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-400 hover:text-slate-900 transition-all duration-200"
            >
              Learn About Our Mission
            </button>
          </div>

          {/* Key Values Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-8 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-amber-400/50 transition-all duration-300">
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-4 rounded-full mb-6">
                <Heart className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-serif text-white mb-4">Compassion</h3>
              <p className="text-slate-300 text-center leading-relaxed">Supporting those in need with care and understanding</p>
            </div>
            
            <div className="flex flex-col items-center p-8 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-amber-400/50 transition-all duration-300">
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-4 rounded-full mb-6">
                <Users className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-serif text-white mb-4">Unity</h3>
              <p className="text-slate-300 text-center leading-relaxed">Bringing together Muslims from all backgrounds</p>
            </div>
            
            <div className="flex flex-col items-center p-8 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-amber-400/50 transition-all duration-300">
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-4 rounded-full mb-6">
                <BookOpen className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-serif text-white mb-4">Education</h3>
              <p className="text-slate-300 text-center leading-relaxed">Sharing knowledge and promoting understanding</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
