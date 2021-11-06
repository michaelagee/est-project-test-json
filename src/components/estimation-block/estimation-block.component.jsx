import React from 'react';
import { EstimationListItem } from '../estimation-list-item/estimation-list-item.component';
import './estimation-block.styles.css';
import { ListGroup } from 'react-bootstrap';

export const EstimationBlock = props => (

    <ListGroup className="dashboard-list-group">
        {props.estimations.map(estimation => (
            <ListGroup.Item
                key={estimation.id}
                action onClick={props.listItemClick} >
                {estimation.name}
            </ListGroup.Item>
        ))}
    </ListGroup>

);