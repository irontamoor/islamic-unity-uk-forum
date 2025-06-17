
import React from 'react';
import { Target, Users, GraduationCap, HandHeart, Lightbulb, Building } from 'lucide-react';

const Mission = () => {
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            UK Islamic Forum brings together Muslims from all backgrounds to promote unity, 
            strengthen community bonds, and improve lives in every aspect. We are committed to:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missionPoints.map((point, index) => (
            <div key={index} className="bg-gradient-to-br from-emerald-50 to-amber-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-600 p-3 rounded-full mr-4">
                  <point.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{point.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-emerald-600 text-white p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
            <p className="text-emerald-100 mb-6 text-lg">
              Whether you seek support, wish to volunteer, or simply want to learn more, you are welcome here.
            </p>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-200">
              Connect With Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
