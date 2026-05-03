import React from 'react';
import './TeacherCard.css';

const TeacherCard = ({ teacher }) => {
  return (
    <div className="t-card">
      <div className="t-card-header">
        <div className="t-card-image-wrapper">
          <img src={teacher.image} alt={teacher.name} className="t-card-image" />
        </div>
        <div className={`t-badge t-badge-${teacher.badgeColor}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
        </div>
      </div>
      
      <div className="t-card-body">
        <h3 className="t-name">{teacher.name}</h3>
        <p className="t-degree">{teacher.degree}</p>
        
        <div className="t-info-list">
          <div className="t-info-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="t-info-icon"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
            <span>{teacher.subjects}</span>
          </div>
          <div className="t-info-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="t-info-icon"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            <span>{teacher.experience}</span>
          </div>
        </div>
        
        <button className="t-btn-request">
          Request Consultation
        </button>
      </div>
    </div>
  );
};

export default TeacherCard;
