import React from 'react';
import Card from './card';

 const PersonCard = ({person}) => (
    <div className="items">
      <Card person={person} fullInfo />
    </div>
  );

export default PersonCard;

