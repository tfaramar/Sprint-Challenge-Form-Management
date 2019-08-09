import React from 'react';

const Card = (props) => {
    return (
        <div className="card-container">
            <h3>Name: {props.name}</h3>
            <p>Course: {props.course}</p>
            <p>Technique: {props.technique}</p>
        </div>
    )
}

export default Card;