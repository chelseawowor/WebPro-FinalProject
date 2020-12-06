import React from 'react'
import '../App.css';

const Card = ({name, value}) =>{
    return (
        <div className="card-container">
            <p>{name}</p>
            <p>{value}</p>
        </div>
    )
}

export default Card;