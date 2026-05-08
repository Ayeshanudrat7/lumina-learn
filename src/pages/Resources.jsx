import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Resources.css';

const Resources = () => {
  const [quizProgress] = useState({ current: 74, label: 'Chen Li' });

  return (
    <div className="page-wrapper resources-page">
      <Navbar />

      <main className="r-main container">

        {/* Hero */}
        <section className="r-hero">
          <div className="r-badge">ACADEMIC EXCELLENCE</div>
          <h1 className="r-title">Master Your Curriculum</h1>
          <p className="r-subtitle">
            Peer-to-peer curated resources designed to elevate your learning journey. Access the same tools used by top scholars across the globe.
          </p>
        </section>

        {/* Resources Grid */}
        <div className="r-grid">
          {/* Comprehensive Notes */}
          <section className="r-section">
            <div className="r-section-header">
              <div className="r-icon-box r-icon-green">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <div>
                <h2 className="r-section-title">Comprehensive Notes</h2>
                <p className="r-section-desc">Detailed study guides covering Biology,Chemistry, Physics and Biotechnology, Physiology, Genetics, Microbiology, Medicine, crafted to clarity and made for examinations.</p>
              </div>
            </div>
            <div className="r-notes-image">
              <img src="/images/notes_placeholder.jpg" alt="Comprehensive Notes" className="r-notes-img" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
              <div className="r-notes-img-fallback">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                <span>Notes &amp; Guides</span>
              </div>
            </div>
            <Link to="/resources" className="r-btn-outline">
              Browse Library →
            </Link>
          </section>

          {/* Past Papers */}
          <section className="r-section">
            <div className="r-section-header">
              <div className="r-icon-box r-icon-purple">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <div>
                <h2 className="r-section-title">Past Papers</h2>
                <p className="r-section-desc">Access past-exam downloadable papers from the last 10 years. Compatible with matching schemes.</p>
              </div>
            </div>
            <div className="r-papers-list">
              <div className="r-paper-item">
                <span className="r-paper-name">Biology</span>
                <button className="r-download-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </button>
              </div>
              <div className="r-paper-item">
                <span className="r-paper-name">Chemistry</span>
                <button className="r-download-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* 100+ Banner */}
        <section className="r-banner-100">
          <div className="r-banner-count">100+</div>
          <div className="r-banner-label">RESOURCES AVAILABLE</div>
          <p className="r-banner-sub">Fresh content added every month based on exam trends.</p>
        </section>

        {/* AI-Powered Quizzes */}
        <section className="r-section r-quiz-section">
          <div className="r-section-header">
            <div className="r-icon-box r-icon-orange">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </div>
            <div>
              <h2 className="r-section-title">AI-Powered Quizzes</h2>
              <p className="r-section-desc">Test your knowledge with adaptive quizzes that identify your weak spots and suggest targeted study materials.</p>
            </div>

          </div>
          <div className="r-quiz-icon-center">
            <div className="r-quiz-icon-bg">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
            </div>
          </div>
        </section>



      </main>

      <Footer />
    </div>
  );
};

export default Resources;
