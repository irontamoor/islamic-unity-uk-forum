
import React from 'react';
import { Hand, DollarSign, Calendar, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GetInvolved = () => {
  const navigate = useNavigate();

  const opportunities = [
    {
      icon: Hand,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers helping with food distribution, events, and community outreach.",
      action: "Sign Up to Volunteer",
      bgColor: "bg-slate-800/30",
      iconColor: "text-emerald-400",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700"
    },
    {
      icon: DollarSign,
      title: "Donate",
      description: "Your generous donations help us provide essential services and support to those who need it most.",
      action: "Make a Donation",
      bgColor: "bg-slate-800/30",
      iconColor: "text-amber-400",
      buttonColor: "bg-amber-600 hover:bg-amber-700"
    },
    {
      icon: Calendar,
      title: "Attend Events",
      description: "Participate in our community events, educational workshops, and interfaith dialogue sessions.",
      action: "View Events Calendar",
      bgColor: "bg-slate-800/30",
      iconColor: "text-blue-400",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Share2,
      title: "Spread the Word",
      description: "Help us reach more people by sharing our mission and connecting us with those who could benefit.",
      action: "Share Our Mission",
      bgColor: "bg-slate-800/30",
      iconColor: "text-purple-400",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    }
  ];

  return (
    <section id="involved" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-white mb-4">Get Involved</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            There are many ways to support our community and make a positive impact. 
            Every contribution, big or small, helps us serve those in need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {opportunities.map((opportunity, index) => (
            <div key={index} className={`${opportunity.bgColor} backdrop-blur-sm p-8 rounded-xl text-center border border-slate-700 hover:border-amber-400/50 transition-all duration-300 hover:scale-105`}>
              <div className="flex justify-center mb-6">
                <div className="bg-slate-900 p-4 rounded-full shadow-lg">
                  <opportunity.icon className={`w-8 h-8 ${opportunity.iconColor}`} />
                </div>
              </div>
              <h3 className="text-xl font-serif text-white mb-4">{opportunity.title}</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">{opportunity.description}</p>
              <button 
                onClick={() => navigate('/coming-soon')}
                className={`${opportunity.buttonColor} text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 w-full`}
              >
                {opportunity.action}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 p-8 rounded-xl text-white text-center">
            <h3 className="text-2xl font-serif mb-4">Become a Member</h3>
            <p className="text-slate-300 mb-6 text-lg max-w-2xl mx-auto leading-relaxed">
              Join our growing community of dedicated individuals working together to make a difference. 
              Membership is free and gives you access to exclusive events and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/coming-soon')}
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:from-amber-400 hover:to-amber-500 transition-all duration-200"
              >
                Register Now
              </button>
              <button 
                onClick={() => navigate('/coming-soon')}
                className="border-2 border-amber-400 text-amber-400 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-200"
              >
                Learn More About Membership
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
