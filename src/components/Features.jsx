import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features container">
      <span className="badge mx-auto">OUR PHILOSOPHY</span>
      <h2 className="section-title text-center">Why Choose<br/>Academic<br/>Ascendance</h2>
      
      <div className="feature-cards">
        <div className="feature-card">
          <div className="feature-icon icon-green">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
          </div>
          <h3 className="feature-title">Personalized Mentoring</h3>
          <p className="feature-desc">We deploy a primary agent to secure an actionable, cross-curricular daily learning style, philosophy, and goals.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon icon-purple">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
          </div>
          <h3 className="feature-title">Top 1% Tutors</h3>
          <p className="feature-desc">Our robust selection criteria ensure we hire out of the precise end of the top tier standard elements on our rosters.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon icon-orange">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          </div>
          <h3 className="feature-title">Momentum Tracking</h3>
          <p className="feature-desc">Each unique module outputs a report fixed in a graphic and numbers account that are visually illustrated.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
