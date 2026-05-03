import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DomainExpertise from '../components/DomainExpertise';
import Features from '../components/Features';
import Mentors from '../components/Mentors';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main>
        <Hero />
        <DomainExpertise />
        <Features />
        <Mentors />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
