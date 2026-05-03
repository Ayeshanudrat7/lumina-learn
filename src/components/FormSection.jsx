import React from 'react';
import './FormSection.css';

const FormSection = ({ title, iconColor, iconSvg, children }) => {
  return (
    <div className="form-section-card">
      <div className="form-section-header">
        <div className={`form-section-icon bg-${iconColor}`}>
          {iconSvg}
        </div>
        <h3 className="form-section-title">{title}</h3>
      </div>
      <div className="form-section-body">
        {children}
      </div>
    </div>
  );
};

export default FormSection;
