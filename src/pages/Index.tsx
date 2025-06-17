
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Services from '../components/Services';
import GetInvolved from '../components/GetInvolved';
import News from '../components/News';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <Services />
      <GetInvolved />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
