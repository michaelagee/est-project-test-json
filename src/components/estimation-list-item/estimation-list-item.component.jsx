import React from "react";
import './estimation-list-item.styles.css';

export const EstimationListItem = props => (
    <div className='estimation-list-item'>
        <h1> {props.estimationListItem.name} </h1>
    </div>
)