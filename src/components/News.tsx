
import React from 'react';
import { Calendar, ArrowRight, Users, Heart, BookOpen } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      date: "15 Dec 2024",
      category: "Community Support",
      title: "Winter Relief Campaign Helps 200+ Families",
      excerpt: "Our annual winter relief campaign has successfully provided warm clothing, heating assistance, and food packages to over 200 families across the UK.",
      icon: Heart,
      featured: true
    },
    {
      date: "10 Dec 2024",
      category: "Education",
      title: "New Islamic Studies Program Launches",
      excerpt: "We're excited to announce our new comprehensive Islamic studies program for youth and adults, featuring renowned scholars and interactive learning.",
      icon: BookOpen,
      featured: false
    },
    {
      date: "5 Dec 2024",
      category: "Events",
      title: "Annual Interfaith Dialogue Conference",
      excerpt: "Join us for our upcoming interfaith conference bringing together leaders from different communities to discuss unity and understanding.",
      icon: Users,
      featured: false
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about our latest initiatives, community achievements, and upcoming events.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article key={index} className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${item.featured ? 'lg:col-span-2 lg:row-span-1' : ''}`}>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm font-medium text-emerald-600">{item.category}</span>
                  </div>
                </div>
                
                <h3 className={`font-bold text-gray-900 mb-4 ${item.featured ? 'text-2xl' : 'text-xl'}`}>
                  {item.title}
                </h3>
                
                <p className={`text-gray-700 leading-relaxed mb-6 ${item.featured ? 'text-lg' : ''}`}>
                  {item.excerpt}
                </p>
                
                <button className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-200">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors duration-200">
            View All News & Updates
          </button>
        </div>

        {/* Quick Resources */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <BookOpen className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Educational Resources</h3>
            <p className="text-gray-600 mb-4">Access our library of Islamic educational materials and guides.</p>
            <button className="text-emerald-600 font-semibold hover:text-emerald-700">Browse Resources →</button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Calendar className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Event Calendar</h3>
            <p className="text-gray-600 mb-4">Stay updated with all our upcoming community events and programs.</p>
            <button className="text-amber-600 font-semibold hover:text-amber-700">View Calendar →</button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Support Services</h3>
            <p className="text-gray-600 mb-4">Find information about our support services and how to access help.</p>
            <button className="text-red-500 font-semibold hover:text-red-600">Get Support →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
