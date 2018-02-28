import React from 'react';
import InfoItem from './../info/infoItem';
import EmailItem from './../info/emailItem';
import './full-info.css';

const FullInfo = ({person}) => {
    const dob = formatDate(person.dob);
    const registered = formatDate(person.registered);
    return (
        <div className="col-9 info">
          <InfoItem infoText="Title" info={person.name.title} />
          <InfoItem infoText="Phone" info={person.phone} />
          <InfoItem infoText="Cell phone" info={person.cell} />
          <EmailItem infoText="Email" email={person.email} />
          <InfoItem infoText="Day of birth" info={dob} />
          <InfoItem infoText="Registered" info={registered} />
          <p>Lorem ipsum dolor ... </p> 
        </div>
  )}

  const formatDate = (str) => str.substring(0,10);


  export default FullInfo;