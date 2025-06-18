
import React from 'react';
import { Users, Heart, GraduationCap, Banknote, Home, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Heart,
      category: "Community Support",
      title: "Food & Financial Aid",
      description: "Emergency food packages, financial assistance, and practical support for families in need.",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: GraduationCap,
      category: "Education & Dawah",
      title: "Learning Programs",
      description: "Islamic education, interfaith dialogue, and community workshops to build understanding.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Users,
      category: "Youth Development",
      title: "Mentorship & Leadership",
      description: "Youth programs, mentorship opportunities, and leadership development for the next generation.",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: Home,
      category: "Family Services",
      title: "Marriage & Family Support",
      description: "Marriage guidance, family counseling, and domestic support services for all community members.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: MessageCircle,
      category: "Counseling",
      title: "Emotional Support",
      description: "Confidential counseling services and emotional support for individuals and families in distress.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Banknote,
      category: "Financial Guidance",
      title: "Economic Empowerment",
      description: "Financial literacy programs, microfinance initiatives, and business development support.",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="work" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-white mb-4">Our Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive support services to strengthen our community and promote the values of Islam through practical action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-amber-400/50 transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${service.color} p-4 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">{service.category}</p>
                  <h3 className="text-xl font-serif text-white">{service.title}</h3>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">{service.description}</p>
              <button 
                onClick={() => navigate('/coming-soon')}
                className="text-amber-400 font-semibold hover:text-amber-300 transition-colors duration-200"
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => navigate('/coming-soon')}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-200"
            >
              Request Support
            </button>
            <button 
              onClick={() => navigate('/coming-soon')}
              className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-400 hover:text-slate-900 transition-all duration-200"
            >
              Volunteer With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
