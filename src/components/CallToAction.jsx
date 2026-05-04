import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-container container">
      <div className="cta-card">
        <h2 className="cta-title">Start Your Journey to Excellence Today</h2>
        <p className="cta-desc">
          Connect with a consultant to find your perfect mentor and schedule your first interaction.
        </p>
        <Link to="/contact" className="btn-cta">
          Book Free Consultation
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
