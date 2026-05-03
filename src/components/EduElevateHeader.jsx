import React from 'react';
import './EduElevateHeader.css';

const EduElevateHeader = () => {
  return (
    <header className="ee-header container">
      <div className="ee-logo-container">
        <img src="/images/mentor_math.png" alt="User Profile" className="header-avatar" />
        <span className="ee-logo-text">EduElevate</span>
      </div>
      <button className="ee-hamburger-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </header>
  );
};

export default EduElevateHeader;
