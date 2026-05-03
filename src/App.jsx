import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Teachers from './pages/Teachers';
import Admissions from './pages/Admissions';
import RequestTuition from './pages/RequestTuition';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/request" element={<RequestTuition />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;
