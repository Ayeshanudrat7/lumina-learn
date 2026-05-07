import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-wrapper contact-page">
      <Navbar />

      <main className="c-main container">
        <section className="c-hero">
          <div className="c-badge">ASCEND WITH CLARITY</div>
          <h1 className="c-title">Connect with our Experts</h1>
          <p className="c-subtitle">
            Begin your journey toward academic excellence. Our dedicated advisors are here to bridge the gap between your ambitions and your future.
          </p>
        </section>

        <div className="c-content-grid">
          <div className="c-left-col">
            <section className="c-card c-form-card">
              <h2 className="c-card-title">Send a Message</h2>
              <div className="c-form-group">
                <label className="c-label">FULL NAME</label>
                <input type="text" className="c-input" placeholder="Alex Chen" defaultValue="Alex Chen" />
              </div>
              <div className="c-form-group">
                <label className="c-label">EMAIL ADDRESS</label>
                <input type="email" className="c-input" placeholder="alex@future.edu" defaultValue="alex@future.edu" />
              </div>
              <div className="c-form-group">
                <label className="c-label">INQUIRY TYPE</label>
                <div className="c-select-wrapper">
                  <select className="c-select" defaultValue="Admissions Consultation">
                    <option value="Admissions Consultation">Admissions Consultation</option>
                    <option value="Subject Tutoring">Subject Tutoring</option>
                    <option value="General Support">General Support</option>
                  </select>
                  <div className="c-select-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </div>
              </div>
              <div className="c-form-group">
                <label className="c-label">MESSAGE</label>
                <textarea className="c-textarea" placeholder="How can we help you ascend?"></textarea>
              </div>
              <button className="c-btn-submit">
                Send Inquiry
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </section>

            <section className="c-direct-connect">
              <div className="c-dc-content">
                <h3 className="c-dc-title">Direct Connect</h3>
                <p className="c-dc-subtitle">Chat with a consultant instantly.</p>
              </div>
              <div className="c-dc-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="9" y1="10" x2="15" y2="10"></line><line x1="12" y1="7" x2="12" y2="13"></line></svg>
              </div>
            </section>
          </div>

          <div className="c-right-col">
            <section className="c-card c-hq-card">
              <div className="c-hq-map">
                <div className="c-hq-badge">HEADQUARTERS</div>
                <div className="c-map-visual">
                  <div className="c-map-grid"></div>
                  <div className="c-map-pin pin-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#0D9488" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div className="c-map-pin pin-2">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#14B8A6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                </div>
              </div>
              <div className="c-hq-info">
                <div className="c-hq-item">
                  <div className="c-hq-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div className="c-hq-text">
                    <strong>The Innovation Plaza</strong>
                    <span>Suite 400, Future Way</span>
                    <span>San Francisco, CA 94103</span>
                  </div>
                </div>
                <div className="c-hq-item">
                  <div className="c-hq-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  </div>
                  <div className="c-hq-text">
                    <span>hello@LuminaLearn.com</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="c-mentor-banner">
              <div className="c-mentor-avatars">
                <img src="/images/mentor_humanities.png" alt="Mentor" className="c-mentor-img" />
                <img src="/images/mentor_cs.png" alt="Mentor" className="c-mentor-img" />
                <div className="c-mentor-more">+12</div>
              </div>
              <div className="c-mentor-text">
                <span className="c-mentor-label">TALK TO A</span>
                <span className="c-mentor-bold">Mentor</span>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
