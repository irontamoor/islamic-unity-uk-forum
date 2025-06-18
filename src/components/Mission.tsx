
import React from 'react';
import { Target, Users, GraduationCap, HandHeart, Lightbulb, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Mission = () => {
  const navigate = useNavigate();

  const missionPoints = [
    {
      icon: GraduationCap,
      title: "Dawah and Education",
      description: "We share the true message of Islam through compassionate outreach, educational programmes, and community events, correcting misconceptions and fostering understanding."
    },
    {
      icon: HandHeart,
      title: "Serving Those in Need",
      description: "We provide food, financial assistance, and social support to individuals and families facing hardship, regardless of their background or circumstances."
    },
    {
      icon: Target,
      title: "Comprehensive Support",
      description: "Our services address a wide range of needs, including financial aid, social and domestic support, marriage guidance, and help for anyone in distress."
    },
    {
      icon: Users,
      title: "Empowering the Next Generation",
      description: "We offer mentorship, youth programmes, and leadership development to nurture future community leaders and positive contributors to society."
    },
    {
      icon: Lightbulb,
      title: "Promoting Islamic Values",
      description: "We uphold and share the core values of Islam—peace, unity, charity, and justice—while actively working to dispel false information and stereotypes."
    },
    {
      icon: Building,
      title: "Building a Better Future",
      description: "We strive to create a welcoming, inclusive environment where everyone can thrive, contributing to a more harmonious and prosperous society for all."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-white mb-4">Our Mission</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            UK Islamic Forum brings together Muslims from all backgrounds to promote unity, 
            strengthen community bonds, and improve lives in every aspect. We are committed to:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missionPoints.map((point, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-amber-400/50 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <point.icon className="w-6 h-6 text-slate-900" />
                </div>
                <h3 className="text-xl font-serif text-white">{point.title}</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 text-white p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif mb-4">Join Our Community</h3>
            <p className="text-slate-300 mb-6 text-lg leading-relaxed">
              Whether you seek support, wish to volunteer, or simply want to learn more, you are welcome here.
            </p>
            <button 
              onClick={() => navigate('/coming-soon')}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:from-amber-400 hover:to-amber-500 transition-all duration-200"
            >
              Connect With Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
