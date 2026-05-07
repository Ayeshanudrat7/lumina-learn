import React from 'react';
import './TeacherCard.css';

const TeacherCard = ({ teacher }) => {
  return (
    <div className="t-card">
      <div className="t-card-header">
        <div className="t-card-image-wrapper">
          <img
            src={teacher.image}
            alt={teacher.name}
            className="t-card-image"
          />
        </div>

        <div className={`t-badge t-badge-${teacher.badgeColor}`}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
        </div>
      </div>

      <div className="t-card-body">
        <h3 className="t-name">{teacher.name}</h3>

        {/* Degree */}
        <p className="t-degree">{teacher.degree}</p>

        <div className="t-info-list">

          {/* Subjects */}
          <div className="t-info-item">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="t-info-icon"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
            </svg>
            <span>{teacher.subjects}</span>
          </div>

          {/* ✅ Institute (NEW) */}
          <div className="t-info-item">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="t-info-icon"
            >
              <path d="M3 21h18"></path>
              <path d="M5 21V7l8-4 8 4v14"></path>
              <path d="M9 21v-6h6v6"></path>
            </svg>
            <span>{teacher.institution}</span>
          </div>

          {/* Button */}
          <button className="t-btn-request">
            Request Tuitions
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;