import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-brand">
          <span className="footer-logo">LuminaLearn</span>
          <p className="footer-desc">
            Empowering your learning with actionable connections and out-of-the-box learning resources.
          </p>
        </div>

        <div className="footer-links-grid">

          <div className="footer-col">
            <h4 className="footer-heading">ABOUT</h4>
            <ul className="footer-list">
              <li><Link to="/teachers">Our Mentors</Link></li>
              <li><Link to="/resources">User Stories</Link></li>
              <li><Link to="/privacy">Privacy</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">CONTACT</h4>
            <ul className="footer-list">
              <li><Link to="/help">Help Center</Link></li>
              <li><Link to="/community">Support Community</Link></li>
              <li><Link to="/press">Press</Link></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2026 LuminaLearn. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <Link to="/terms">Terms of Use</Link>
            <Link to="/social">Social Media</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;