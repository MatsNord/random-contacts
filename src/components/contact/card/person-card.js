import React from 'react';
import { PersonType } from '../contactPropTypes';
import Card from './card';

 const PersonCard = ({person}) => (
    <div className="items">
      <Card person={person} fullInfo />
    </div>
  );

PersonCard.prototype = PersonType;

export default PersonCard;

