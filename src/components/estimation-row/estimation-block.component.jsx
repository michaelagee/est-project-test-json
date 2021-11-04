import React from 'react';
import './estimation-block.styles.css';

export const EstimationBlock = props => (
    <div className='estimation-block'>
        {props.estimations.map(estimation => (
            <h1 className='estimation-row' key={estimation.id}> {estimation.name} </h1>
        ))}
    </div>
);