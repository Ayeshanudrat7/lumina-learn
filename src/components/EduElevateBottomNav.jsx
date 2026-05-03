import React from 'react';
import { Link } from 'react-router-dom';
import './EduElevateBottomNav.css';

const EduElevateBottomNav = ({ activeTab }) => {
  return (
    <nav className="ee-bottom-nav">
      <div className="ee-bottom-nav-inner container">
        <Link to="/" className={`ee-nav-item ${activeTab === 'home' ? 'active-green' : ''}`}>
          <div className={`ee-nav-icon ${activeTab === 'home' ? 'active-circle' : ''}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          </div>
          <span className="ee-nav-label">HOME</span>
        </Link>
        <Link to="/teachers" className={`ee-nav-item ${activeTab === 'teachers' ? 'active-green' : ''}`}>
          <div className={`ee-nav-icon ${activeTab === 'teachers' ? 'active-circle' : ''}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <span className="ee-nav-label">TEACHERS</span>
        </Link>
        <Link to="/request" className={`ee-nav-item ${activeTab === 'request' ? 'active-green-large' : ''}`}>
          <div className={`ee-nav-icon ${activeTab === 'request' ? 'active-circle-large' : ''}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
          </div>
          <span className="ee-nav-label">REQUEST</span>
        </Link>
        <Link to="/resources" className={`ee-nav-item ${activeTab === 'resources' ? 'active-green' : ''}`}>
          <div className={`ee-nav-icon ${activeTab === 'resources' ? 'active-circle' : ''}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
          </div>
          <span className="ee-nav-label">RESOURCES</span>
        </Link>
        <Link to="/contact" className={`ee-nav-item ${activeTab === 'contact' ? 'active-cyan' : ''}`}>
          <div className={`ee-nav-icon ${activeTab === 'contact' ? 'active-circle' : ''}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          </div>
          <span className="ee-nav-label">CONTACT</span>
        </Link>
      </div>
    </nav>
  );
};

export default EduElevateBottomNav;
