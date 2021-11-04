import React from 'react';
import './estimation-row.styles.css';

export const EstimationRow = (props) => {
    console.log(props);
    return <div className='estimation-row'>{props.children}</div>;
};