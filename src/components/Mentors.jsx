import React from 'react';
import './Mentors.css';

const Mentors = () => {
  const mentors = [
    {
      name: "Dr. Julian Parker",
      subject: "Mathematics",
      image: "/images/mentor_math.png",
      badge: "AVAILABLE",
      badgeColor: "green",
      experience: "8 Yrs Experience"
    },
    {
      name: "Sarah Jenkins",
      subject: "Computer Science",
      image: "/images/mentor_cs.png",
      badge: "FEATURED",
      badgeColor: "purple",
      experience: "5 Yrs Experience"
    },
    {
      name: "Marcus Foster",
      subject: "Sciences",
      image: "/images/mentor_sciences.png",
      badge: "AVAILABLE",
      badgeColor: "green",
      experience: "10 Yrs Experience"
    },
    {
      name: "Dr. Elena Martinez",
      subject: "Humanities",
      image: "/images/mentor_humanities.png",
      badge: "HIGH DEMAND",
      badgeColor: "red",
      experience: "6 Yrs Experience"
    }
  ];

  return (
    <section className="mentors-section container">
      <h2 className="section-title text-center">Meet Our Elite Mentors</h2>
      <p className="mentors-subtitle text-center">
        Learn from graduates of the world's leading institutions including Oxford, Cambridge, MIT and Harvard.
      </p>

      <div className="mentors-nav">
        <button className="nav-btn">&lt;</button>
        <button className="nav-btn">&gt;</button>
      </div>

      <div className="mentors-list">
        {mentors.map((mentor, index) => (
          <div className="mentor-card" key={index}>
            <div className="mentor-image-wrapper">
              <img src={mentor.image} alt={mentor.name} className="mentor-image" />
              <span className={`mentor-badge badge-${mentor.badgeColor}`}>
                {mentor.badge}
              </span>
            </div>
            <div className="mentor-info">
              <h3 className="mentor-name">{mentor.name}</h3>
              <p className="mentor-subject">{mentor.subject}</p>
              <div className="mentor-exp">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                {mentor.experience}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mentors;
