import React from 'react';
import { PropTypes } from 'prop-types';

// Component to display mail link
const EmailItem = ( {infoText, email} ) => (
  <div className="info-item">
    <div className="info info-text">{infoText}</div>
    <a href={`mailto:${email}`}>{email}</a>
  </div>
);

EmailItem.propTypes = {
  infoText: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

export default EmailItem;

