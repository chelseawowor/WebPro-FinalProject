import React from 'react';
import '../App.css';
import NumberFormat from 'react-number-format';

const Card = ({name, value}) =>{
    return (
        <div className="card-container">
            <p>{name}</p>
            <NumberFormat value={value} displayType={'text'} thousandSeparator={true}/>
        </div>
    )
}

export default Card;