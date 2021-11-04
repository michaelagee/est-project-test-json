import React from 'react';
import { EstimationListItem } from '../estimation-list-item/estimation-list-item.component';
import './estimation-block.styles.css';

export const EstimationBlock = props => (
    <div className='estimation-block'>
        {props.estimations.map(estimation => (
            <EstimationListItem key={estimation.id} estimationListItem={estimation}/>
        ))}
    </div>
);