import React from 'react';
import './card-style.css';

export const Card = props => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monstar.id}?set=set2`} alt="monster"/>
        <h2> {props.monstar.name} </h2>
        <p> {props.monstar.email} </p>
    </div>
)