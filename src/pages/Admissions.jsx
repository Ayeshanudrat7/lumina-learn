import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';
import JourneyTimeline from '../components/JourneyTimeline';
import Footer from '../components/Footer';
import './Admissions.css';

const Admissions = () => {
  const services = [
    {
      title: "Application Mastery",
      description: "Crafting winning personal statements and narrative-driven essays that stand out to admissions committees.",
      iconColor: "cyan",
      iconSvg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
    },
    {
      title: "Seamless Form Filling",
      description: "Hassle-free navigation through complex university portals and meticulous document verification processes.",
      iconColor: "purple",
      iconSvg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    },
    {
      title: "Career Roadmap",
      description: "Personalized academic roadmaps for students exploring their academic strengths and future industry paths.",
      iconColor: "cyan",
      iconSvg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 19 21 12 17 5 21 12 2"></polygon></svg>
    },
    {
      title: "Global Opportunities",
      description: "Identifying exclusive scholarships, grants, and high-impact international programs tailored to your profile.",
      iconColor: "purple",
      iconSvg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
    }
  ];

  return (
    <div className="page-wrapper admissions-page">
      <Navbar />
      
      <main className="a-main container">
        {/* Hero Section */}
        <section className="a-hero">
          <div className="a-hero-content">
            <div className="a-hero-badge">
              YOUR PATH TO GLOBAL SUCCESS
            </div>
            
            <h1 className="a-hero-title">
              Unlock Your Future: <span className="a-text-teal">Expert Admissions Support</span>
            </h1>
            
            <p className="a-hero-subtitle">
              Navigate the complexities of international education with elite mentors. From Ivy League strategy to scholarship discovery, we light the way to your dream university.
            </p>

            <div className="a-hero-buttons">
              <Link to="/contact" className="a-btn-primary">Book Your Free Consultation</Link>
              <Link to="/resources" className="a-btn-outline">View Success Stories</Link>
            </div>
          </div>

          <div className="a-hero-image-container">
            <img src="/images/hero_students.png" alt="University Campus" className="a-hero-img" />
          </div>
        </section>

        {/* Services Section */}
        <section className="a-services-section">
          <h2 className="a-section-title">
            Our Signature Services
            <div className="a-title-underline"></div>
          </h2>
          
          <div className="a-services-grid">
            {services.map((service, idx) => (
              <ServiceCard 
                key={idx}
                title={service.title}
                description={service.description}
                iconColor={service.iconColor}
                iconSvg={service.iconSvg}
              />
            ))}
          </div>
        </section>

        {/* Journey Timeline Section */}
        <section className="a-journey-section">
          <h2 className="a-section-title a-mb-large">Your Journey to Success</h2>
          <JourneyTimeline />
        </section>

        {/* CTA Section */}
        <section className="a-cta-section">
          <h2 className="a-cta-title">Ready to start your journey?</h2>
          <p className="a-cta-subtitle">
            Join 500+ students who have successfully secured admissions in top-tier universities across the UK, USA, and Europe this year.
          </p>
          <Link to="/contact" className="a-btn-cta">Book Your Free Consultation</Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Admissions;
