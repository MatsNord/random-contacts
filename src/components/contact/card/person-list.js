import React from 'react';
import Card from './card';

const PersonList = ({persons, filter, order}) => {
    return (
    <div className="contact-list">
        <div className="fix-container">
            <div className="search-bar">
                <div className="box">
                    <div className="container-1">
                        <input type="search" id="search" placeholder="Search..." onChange={filter}/>
                        <input type="checkbox" name="sortorder" id="asc" className="css-checkbox" value='DESC' onChange={order} /><label>Reverse</label>
                    </div>
                </div>
            </div>
        </div>
        <div className="items scrollbar styled"> 
        { persons ? persons.map((person, idx) => <Card key={idx} person={person}/>) : null }
        </div>
    </div>
)};

export default PersonList;

