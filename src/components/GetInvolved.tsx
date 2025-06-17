import React from 'react';
import { Hand, DollarSign, Calendar, Share2 } from 'lucide-react';

const GetInvolved = () => {
  const opportunities = [
    {
      icon: Hand,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers helping with food distribution, events, and community outreach.",
      action: "Sign Up to Volunteer",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700"
    },
    {
      icon: DollarSign,
      title: "Donate",
      description: "Your generous donations help us provide essential services and support to those who need it most.",
      action: "Make a Donation",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      buttonColor: "bg-amber-600 hover:bg-amber-700"
    },
    {
      icon: Calendar,
      title: "Attend Events",
      description: "Participate in our community events, educational workshops, and interfaith dialogue sessions.",
      action: "View Events Calendar",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Share2,
      title: "Spread the Word",
      description: "Help us reach more people by sharing our mission and connecting us with those who could benefit.",
      action: "Share Our Mission",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    }
  ];

  return (
    <section id="involved" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Involved</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            There are many ways to support our community and make a positive impact. 
            Every contribution, big or small, helps us serve those in need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {opportunities.map((opportunity, index) => (
            <div key={index} className={`${opportunity.bgColor} p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300`}>
              <div className="flex justify-center mb-6">
                <div className="bg-white p-4 rounded-full shadow-md">
                  <opportunity.icon className={`w-8 h-8 ${opportunity.iconColor}`} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{opportunity.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{opportunity.description}</p>
              <button className={`${opportunity.buttonColor} text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 w-full`}>
                {opportunity.action}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-emerald-600 to-amber-600 p-8 rounded-xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Become a Member</h3>
            <p className="text-emerald-100 mb-6 text-lg max-w-2xl mx-auto">
              Join our growing community of dedicated individuals working together to make a difference. 
              Membership is free and gives you access to exclusive events and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-200">
                Register Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200">
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
