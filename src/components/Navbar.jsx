import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/teachers', label: 'Teachers' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/resources', label: 'Resources' },
    { path: '/request', label: 'Request' },
    { path: '/contact', label: 'Contact' },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <div className="navbar-logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#navGrad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 17L12 22L22 17" stroke="url(#navGrad2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="url(#navGrad3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="navGrad1" x1="2" y1="2" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0F9F7A" />
                  <stop offset="1" stopColor="#0A6A51" />
                </linearGradient>
                <linearGradient id="navGrad2" x1="2" y1="17" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0F9F7A" />
                  <stop offset="1" stopColor="#0A6A51" />
                </linearGradient>
                <linearGradient id="navGrad3" x1="2" y1="12" x2="22" y2="17" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0F9F7A" />
                  <stop offset="1" stopColor="#0A6A51" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="navbar-logo-text">LuminaLearn</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-desktop-links">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => navigate(link.path)}
                className={`navbar-link ${location.pathname === link.path ? 'navbar-link-active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/request" onClick={() => navigate('/request')} className="navbar-cta-btn">Get Started</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`navbar-mobile-overlay ${menuOpen ? 'visible' : ''}`} onClick={() => setMenuOpen(false)}></div>

      {/* Mobile Slide Menu */}
      <div className={`navbar-mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => {
              setMenuOpen(false);
              navigate(link.path);
            }}
            className={`navbar-mobile-link ${location.pathname === link.path ? 'navbar-mobile-link-active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
        <Link to="/request" className="navbar-mobile-cta" onClick={() => { setMenuOpen(false); navigate('/request'); }}>
          Get Started
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
