import React from 'react';
import { Link } from 'react-router-dom';
import './AdmissionsBottomNav.css';

const AdmissionsBottomNav = () => {
  return (
    <nav className="a-bottom-nav">
      <div className="a-bottom-nav-inner container">
        <Link to="/" className="a-nav-item">
          <div className="a-nav-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          </div>
          <span className="a-nav-label">HOME</span>
        </Link>
        <Link to="/admissions" className="a-nav-item a-active">
          <div className="a-nav-icon a-active-circle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon></svg>
          </div>
          <span className="a-nav-label">ADMISSIONS</span>
        </Link>
        <Link to="#" className="a-nav-item">
          <div className="a-nav-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          </div>
          <span className="a-nav-label">CONNECT</span>
        </Link>
        <Link to="#" className="a-nav-item">
          <div className="a-nav-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
          <span className="a-nav-label">PROFILE</span>
        </Link>
      </div>
    </nav>
  );
};

export default AdmissionsBottomNav;
