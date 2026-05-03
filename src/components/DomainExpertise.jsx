import React from 'react';
import './DomainExpertise.css';

const DomainExpertise = () => {
  return (
    <section className="domain-expertise container">
      <div className="domain-header">
        <div className="domain-header-text">
          <h2 className="section-title">Expertise in Every Domain</h2>
          <p className="section-subtitle">Subjects span a wide array of challenging curricula.</p>
        </div>
        <a href="#" className="view-all-link">
          View All Subjects
        </a>
      </div>

      <div className="domain-cards">
        <div className="domain-card card-math">
          <div className="card-icon-wrapper math-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
          </div>
          <span className="subject-tag">PRIMARY FOCUS</span>
          <h3 className="card-title">Advanced<br/>Mathematics</h3>
          <p className="card-desc">From basic arithmetic to high-level calculus and specialized applications.</p>
          <div className="tutors-preview">
            <img src="/images/mentor_math.png" alt="Tutor" className="tutor-avatar" />
            <img src="/images/mentor_cs.png" alt="Tutor" className="tutor-avatar stacked" />
            <span className="tutors-count">+ 12 Expert Mentors</span>
          </div>
        </div>

        <div className="domain-card card-science">
          <div className="card-content-left">
            <h3 className="card-title-sm">Sciences</h3>
            <p className="card-desc-sm">Review Biology Overview</p>
          </div>
          <div className="card-icon-wrapper-sm">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31"></path><path d="M14 9.3V1.99"></path><path d="M8.5 2h7"></path><path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path><path d="M5.52 16h12.96"></path></svg>
          </div>
        </div>

        <div className="domain-card card-humanities">
          <div className="card-content-left">
            <h3 className="card-title-sm text-dark">Humanities</h3>
            <p className="card-desc-sm text-muted">Intro to Literature Category</p>
          </div>
          <div className="card-icon-wrapper-sm icon-gray">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainExpertise;
