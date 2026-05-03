import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, description, iconColor, iconSvg }) => {
  return (
    <div className="s-card">
      <div className={`s-icon-container s-icon-${iconColor}`}>
        {iconSvg}
      </div>
      <h3 className="s-card-title">{title}</h3>
      <p className="s-card-desc">{description}</p>
    </div>
  );
};

export default ServiceCard;
