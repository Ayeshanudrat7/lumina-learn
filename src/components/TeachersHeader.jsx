import React from 'react';
import './TeachersHeader.css';

const TeachersHeader = () => {
  return (
    <header className="teachers-header container">
      <div className="teachers-logo-container">
        <img src="/images/mentor_math.png" alt="User Profile" className="header-avatar" />
        <span className="teachers-logo-text">EduElevate</span>
      </div>
      <div className="header-actions">
        <button className="icon-btn-green">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
        </button>
      </div>
    </header>
  );
};

export default TeachersHeader;
