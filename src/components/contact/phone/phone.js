import React from 'react';
import {PropTypes} from 'prop-types';

// Component to display phonenumbers
const Phone = ( {number} ) => {
  return (
      <div className="phone">{number}</div>
    );
};

Phone.prototype = {
  numbe: PropTypes.string.isRequired
}

export default Phone;
