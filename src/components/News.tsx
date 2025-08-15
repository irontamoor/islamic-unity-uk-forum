import React from 'react';
import { Calendar, ArrowRight, Users, Heart, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import newsData from '../data/news.json';

const News = () => {
  const navigate = useNavigate();

  // Map icon strings to actual icon components
  const iconMap = {
    Heart,
    BookOpen,
    Users
  };

  return (
    <section id="resources" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-white mb-4">Latest News & Updates</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Stay informed about our latest initiatives, community achievements, and upcoming events.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {newsData.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            
            return (
              <article key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-amber-400/50 transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="text-sm text-slate-400">{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconComponent className="w-5 h-5 text-amber-400" />
                      <span className="text-sm font-medium text-amber-400">{item.category}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-white mb-4 text-xl">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {item.excerpt}
                  </p>
                  
                  <button 
                    onClick={() => navigate('/coming-soon')}
                    className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => navigate('/coming-soon')}
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-200"
          >
            View All News & Updates
          </button>
        </div>

        {/* Quick Resources */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-amber-400/50 transition-all duration-300 text-center group">
            <BookOpen className="w-12 h-12 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-serif text-white mb-2">Educational Resources</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">Access our library of Islamic educational materials and guides.</p>
            <button 
              onClick={() => navigate('/coming-soon')}
              className="text-amber-400 font-semibold hover:text-amber-300 transition-colors duration-200"
            >
              Browse Resources →
            </button>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-amber-400/50 transition-all duration-300 text-center group">
            <Calendar className="w-12 h-12 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-serif text-white mb-2">Event Calendar</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">Stay updated with all our upcoming community events and programs.</p>
            <button 
              onClick={() => navigate('/coming-soon')}
              className="text-amber-400 font-semibold hover:text-amber-300 transition-colors duration-200"
            >
              View Calendar →
            </button>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-amber-400/50 transition-all duration-300 text-center group">
            <Heart className="w-12 h-12 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-serif text-white mb-2">Support Services</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">Find information about our support services and how to access help.</p>
            <button 
              onClick={() => navigate('/coming-soon')}
              className="text-amber-400 font-semibold hover:text-amber-300 transition-colors duration-200"
            >
              Get Support →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
