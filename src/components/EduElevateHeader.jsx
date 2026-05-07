import React from 'react';
import './LuminaLearn.css';

const LuminaLearnHeader = () => {
  return (
    <header className="LL-header container">
      <div className="LL-logo-container">
        <img src="/images/mentor_math.png" alt="User Profile" className="header-avatar" />
        <span className="LL-logo-text">LuminaLearn</span>
      </div>
      <button className="LL-hamburger-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </header>
  );
};

export default LuminaLearnHeader;
