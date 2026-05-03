import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import FormSection from '../components/FormSection';
import Footer from '../components/Footer';
import './RequestTuition.css';

const RequestTuition = () => {
  const [board, setBoard] = useState('IGCSE');
  const [sessions, setSessions] = useState(3);

  const handleDecrement = () => {
    if (sessions > 1) setSessions(sessions - 1);
  };

  const handleIncrement = () => {
    if (sessions < 10) setSessions(sessions + 1);
  };

  return (
    <div className="page-wrapper request-page">
      <Navbar />
      
      <main className="req-main container">
        <section className="req-hero">
          <div className="req-badge">PERSONALIZED LEARNING</div>
          <h1 className="req-title">
            Find Your Perfect <span className="req-text-green">Academic Match</span>
          </h1>
          <p className="req-subtitle">
            Tell us about your educational goals. Our elite mentors provide tailored guidance to help you ascend to your dream university.
          </p>
        </section>

        <div className="req-form-container">
          <FormSection 
            title="Student Profile" 
            iconColor="purple"
            iconSvg={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>}
          >
            <div className="req-form-group">
              <label className="req-label">Full Student Name</label>
              <input type="text" className="req-input" placeholder="Alex Chen" defaultValue="Alex Chen" />
            </div>
            <div className="req-form-group">
              <label className="req-label">Academic Year / Class</label>
              <div className="req-select-wrapper">
                <select className="req-select">
                  <option>Select Level</option>
                  <option>Year 10</option>
                  <option>Year 11</option>
                  <option>Year 12</option>
                  <option>Year 13</option>
                </select>
                <div className="req-select-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
              </div>
            </div>
            <div className="req-form-group">
              <label className="req-label">Educational Board</label>
              <div className="req-board-grid">
                {['IB', 'IGCSE', 'CBSE', 'ICSE'].map((b) => (
                  <button 
                    key={b}
                    className={`req-board-btn ${board === b ? 'active' : ''}`}
                    onClick={() => setBoard(b)}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </FormSection>

          <FormSection 
            title="Subject Details" 
            iconColor="cyan"
            iconSvg={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>}
          >
            <div className="req-form-group">
              <label className="req-label">Subjects of Interest</label>
              <textarea className="req-textarea" placeholder="e.g. Physics HL, Mathematics AA, Academic Writing..."></textarea>
            </div>
            <div className="req-form-group">
              <label className="req-label">Preferred Timing</label>
              <div className="req-select-wrapper">
                <select className="req-select">
                  <option>Select Preferred Slot</option>
                  <option>Weekday Evenings</option>
                  <option>Weekends</option>
                </select>
                <div className="req-select-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
              </div>
            </div>
            <div className="req-form-group">
              <label className="req-label">Sessions Per Week</label>
              <div className="req-counter-container">
                <button className="req-counter-btn" onClick={handleDecrement}>-</button>
                <span className="req-counter-value">{sessions} Sessions</span>
                <button className="req-counter-btn" onClick={handleIncrement}>+</button>
              </div>
            </div>
          </FormSection>

          <FormSection 
            title="Contact Info" 
            iconColor="purple"
            iconSvg={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>}
          >
            <div className="req-form-group">
              <label className="req-label">Email Address</label>
              <input type="email" className="req-input" placeholder="alex.c@example.com" defaultValue="alex.c@example.com" />
            </div>
            <div className="req-form-group">
              <label className="req-label">Parent/Guardian Phone</label>
              <input type="tel" className="req-input" placeholder="+1 (555) 000-0000" defaultValue="+1 (555) 000-0000" />
            </div>
            <div className="req-expert-match-card">
              <h4 className="req-expert-title">Expert Matching</h4>
              <p className="req-expert-desc">Our algorithm will pair you with one of our top 5% mentors based on your board and timing preferences.</p>
              <div className="req-expert-avatars">
                <img src="/images/mentor_cs.png" alt="Mentor" className="req-expert-avatar" />
                <img src="/images/mentor_math.png" alt="Mentor" className="req-expert-avatar" />
                <img src="/images/mentor_humanities.png" alt="Mentor" className="req-expert-avatar" />
                <div className="req-expert-more">+12</div>
              </div>
            </div>
            <div className="req-submit-container">
              <button className="req-btn-submit">
                Submit Request
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
              <p className="req-submit-note">Usually responds within 2 hours</p>
            </div>
          </FormSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RequestTuition;
