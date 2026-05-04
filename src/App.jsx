import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Teachers from './pages/Teachers';
import Admissions from './pages/Admissions';
import RequestTuition from './pages/RequestTuition';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Chatbot from './components/Chatbot';
import LuminaLearnBottomNav from './components/LuminaLearnBottomNav';
import './App.css';

// Helper component to handle conditional rendering of BottomNav
const AppContent = () => {
  const location = useLocation();
  
  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Map path to active tab
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/teachers') return 'teachers';
    if (path === '/request') return 'request';
    if (path === '/resources') return 'resources';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/request" element={<RequestTuition />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Chatbot />
      <LuminaLearnBottomNav activeTab={getActiveTab()} />
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
