import React from 'react';
// Component to display name and title
const InfoItem = ( {infoText, info} ) => (
  <div className="info-item">
    <div className="info info-text">{infoText}</div><div className="info">{info}</div>
  </div>
);
export default InfoItem;