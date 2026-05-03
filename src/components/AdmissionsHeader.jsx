import React from 'react';
import './AdmissionsHeader.css';

const AdmissionsHeader = () => {
  return (
    <header className="admissions-header container">
      <div className="a-logo-container">
        <div className="a-logo-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
        </div>
        <span className="a-logo-text">Admissions<br/>Hub</span>
      </div>
      <button className="btn-a-contact">Contact</button>
    </header>
  );
};

export default AdmissionsHeader;
