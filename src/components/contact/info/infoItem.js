import React from 'react';
import { PropTypes } from 'prop-types';

// Component to display name and title
const InfoItem = ( {infoText, info} ) => (
  <div className="info-item">
    <div className="info info-text">{infoText}</div><div className="info">{info}</div>
  </div>
);


InfoItem.propTypes = {
  infoText: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired
}

export default InfoItem;