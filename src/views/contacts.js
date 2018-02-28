import React from 'react';
import {NavLink} from 'react-router-dom';
import Contacts from '../containers/contacts';
import './contacts.css';

const ContactsView = () => {
  return(
    <div>
      <span  id="loader-root" />
      <div className="nav-toolbar">
        <NavLink className="bread-crumb"  exact to='/contacts'>Home</NavLink>
      </div>
      <Contacts />
    </div>
  );
};

export default ContactsView;
