import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-content">
        <span className="badge">Pioneering Education</span>
        
        <h1 className="hero-title">
          Quality Tuition<br />
          for <span className="text-gradient">Every</span><br />
          Student
        </h1>
        
        <p className="hero-subtitle">
          Unlock your true learning potential with singular tutoring delivered on a personal level. We blend traditional settings with modern digital interactions.
        </p>
        
        <div className="hero-buttons">
          <button className="btn-primary">
            Request a Tutor
          </button>
        </div>
      </div>
      
      <div className="hero-image-container">
        <img src="/images/hero_students.png" alt="Students studying" className="hero-image" />
        <div className="floating-badge">
          <div className="badge-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <div className="badge-content">
            <span className="badge-score">4.8/5</span>
            <span className="badge-text">AVERAGE STUDENT RATING</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
