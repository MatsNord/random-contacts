import React from 'react';
import InfoItem from '../info/infoItem';

const ListInfo = ({person}) => {
    return (
        <div className="col-9 info info-block">
          <InfoItem infoText="Title" info={person.name.title} />
          <InfoItem infoText="Phone" info={person.phone} />
          <InfoItem infoText="Cell phone" info={person.cell} />
          <InfoItem infoText="Email" info={person.email} />
        </div>
  )};
  
export default ListInfo;