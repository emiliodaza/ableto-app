import React from 'react';

const ShippingTimeline = ({ order }) => {
  return (
    <div className="timeline">
      {order.timeline.map((step, index) => (
        <div key={index} className={`timeline-step ${step.done ? 'completed' : ''}`}>
          <span>{step.status}</span>
          {step.date && <span>{new Date(step.date).toLocaleDateString()}</span>}
        </div>
      ))}
    </div>
  );
};

export default ShippingTimeline;