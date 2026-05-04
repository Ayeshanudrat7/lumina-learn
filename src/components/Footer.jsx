import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand">
          <span className="footer-logo">EduElevate</span>
          <p className="footer-desc">
            Empowering your learning with actionable connections and out-of-the-box learning resources.
          </p>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <h4 className="footer-heading">COMPANY</h4>
            <ul className="footer-list">
              <li><Link to="/teachers">Our Mentors</Link></li>
              <li><Link to="/resources">User Stories</Link></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">RESOURCES</h4>
            <ul className="footer-list">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Exam Dates</a></li>
              <li><a href="#">Whitepapers</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4 className="footer-heading">NEWSLETTER</h4>
          <div className="newsletter-input-group">
            <input type="email" placeholder="Email address" className="newsletter-input" />
            <button className="newsletter-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2026 EduElevate. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Terms of Use</a>
            <a href="#">Social Media</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
