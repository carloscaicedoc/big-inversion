import React from 'react'
import './card.css';

export const PersonCard = (props) => {
    return (
        <div className="card">
            <h2>{props.firstName} {props.lastName}</h2>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <p>Location: {props.location}</p>
        </div>
    )
}

export default PersonCard;
