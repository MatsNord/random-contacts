import {PropTypes} from 'prop-types';

export const PersonType = PropTypes.shape({
  Person: PropTypes.shape({
    name: PropTypes.shape({first: PropTypes.string.isRequired, last: PropTypes.string.isRequired, title: PropTypes.string.isRequired}),
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired
  })
});
