import React from 'react';
import './JourneyTimeline.css';

const JourneyTimeline = () => {
  const steps = [
    {
      title: "Consult",
      description: "Schedule a free 30-minute discovery call to discuss your goals, academic history, and aspirations.",
      color: "cyan",
      icon: <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    },
    {
      title: "Strategy",
      description: "Receive a personalized university shortlist and a strategic timeline for your applications.",
      color: "cyan",
      icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    },
    {
      title: "Application",
      description: "Expert guidance through every essay draft, recommendation letter, and portal submission.",
      color: "purple",
      icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    },
    {
      title: "Success",
      description: "Secure your offer letter and navigate the visa process for a smooth transition abroad.",
      color: "purple",
      icon: <polyline points="9 11 12 14 22 4"></polyline>
    }
  ];

  return (
    <div className="j-timeline">
      {steps.map((step, index) => (
        <div className="j-step" key={index}>
          <div className="j-step-indicator">
            <div className={`j-step-icon j-border-${step.color}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`j-icon-svg j-text-${step.color}`}>
                {step.icon}
              </svg>
            </div>
            {index < steps.length - 1 && (
              <div className={`j-step-line j-line-${step.color}`}></div>
            )}
          </div>
          <div className="j-step-content">
            <h4 className="j-step-title">{step.title}</h4>
            <p className="j-step-desc">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JourneyTimeline;
