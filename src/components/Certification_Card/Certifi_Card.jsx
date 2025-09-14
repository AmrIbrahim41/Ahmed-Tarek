import React from 'react';
import './Certifi_Card.css'; 



const Certifi_Card = ({ title, status, date, qualification, recall, img }) => {
  // بنعمل متغير عشان نستخدمه في تنسيق الدايرة
  const progressStyle = {
    background: `conic-gradient(#ffc940 ${recall * 3.6}deg, #ededed 0deg)`
  };

  return (
    <div className="cert-card">
    
      <div className="cert-badge">
        <img src={img} alt={`${title} Badge`} />
      </div>
      
      <h2 className="cert-title">{title}</h2>
      <span className="cert-status"> {status}</span>
      
      <div className="cert-details">
        <div className="detail-item">
          <p className="detail-label">Date Earned</p>
          <p className="detail-value">{date}</p>
        </div>
        <div className="detail-item">
          <p className="detail-label">Qualification Met</p>
          <p className="detail-value">{qualification}</p>
        </div>
        <div className="detail-item">
          <p className="detail-label">Topic Recall</p>
          <div className="progress-circle" style={progressStyle}>
            <span className="progress-text">{recall}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifi_Card;