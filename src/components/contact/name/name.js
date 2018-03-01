import React from 'react';
import {PropTypes} from 'prop-types';

const Name = ( {name} ) => (
  <span>
  <div className='name'>{name}</div>
  </span>
);

Name.prototype = {
  name: PropTypes.string.isRequired
}

export default Name;