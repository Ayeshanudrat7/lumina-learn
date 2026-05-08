import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TeacherCard from '../components/TeacherCard';
import Footer from '../components/Footer';
import './Teachers.css';

const Teachers = () => {
  const teachersList = [
    {

      name: "Ayesha",
      degree: "BS in Physiology, MS in Molecular Genetics",
      subjects: "Science, Biology, Genetics, Physiology",
      institution: "Government College University Faisalabad, COMSATS University Islamabad",
      image: "/images/mentor_cs.png",
      badgeColor: "purple"
    },
    {
      name: "Ayesha Ahmed",
      degree: "BS in Biotechnology, MS in Molecular Medicine",
      subjects: "Science, Biology, Chemistry, Physics, Biotechnology, Regenerative Medicine, Cancer",
      institution: "University of Management and Technology Lahore, National university of Science and Technology Islamabad",
      experience: "2+ Years",
      image: "/images/mentor_math.png",
      badgeColor: "green"
    },
    {
      name: "Naila Aamir",
      degree: "BS Microbiology,MS Medical Microbiology",
      subjects: "Science, Biology, Chemistry, Physics",
      institution: "Government College University Faisalabad, Quaid-i-Azam University Islamabad",
      image: "/images/mentor_humanities.png",
      badgeColor: "purple"
    },
    {
      name: "Arooj Tariq",
      degree: "BS in Physiology, MS in Molecular Medicine",
      subjects: "Science, Biology, Chemistry, Physics, Physiology,Regenerative Medicine, Cancer",
      institution: "Government College University Faisalabad, National University of Science and Technology Islamabad",
      image: "/images/mentor_sciences.png",
      badgeColor: "green"
    }
  ];

  return (
    <div className="page-wrapper teachers-page">
      <Navbar />

      <main className="teachers-main container">
        <section className="t-hero">
          <div className="t-hero-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span>VETTED ACADEMIC ELITE</span>
          </div>

          <h1 className="t-hero-title">
            Learn from the <span className="t-text-primary">Architects</span> of Success
          </h1>

          <p className="t-hero-subtitle">
            Our mentors are hand-selected from the world's most prestigious institutions to guide you through every milestone of your academic journey.
          </p>
        </section>

        <section className="t-search-section">
          <div className="t-search-bar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" placeholder="Search by subject or name..." className="t-search-input" />
          </div>

          <div className="t-filter-tags">
            <button className="t-filter-tag active">STEM</button>
            <button className="t-filter-tag active">Humanities</button>
            <button className="t-filter-tag">Languages</button>
          </div>
        </section>

        <section className="t-list-section">
          {teachersList.map((teacher, index) => (
            <TeacherCard key={index} teacher={teacher} />
          ))}
        </section>

        <section className="t-join-section">
          <div className="t-join-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </div>
          <h2 className="t-join-title">Join the Faculty</h2>
          <p className="t-join-subtitle">
            Are you a world-class educator? Join our elite roster of mentors.
          </p>
          <Link to="/contact" className="t-btn-apply">Apply Now</Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Teachers;
