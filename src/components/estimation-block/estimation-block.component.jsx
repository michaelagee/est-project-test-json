import React from 'react';
import { EstimationListItem } from '../estimation-list-item/estimation-list-item.component';
import './estimation-block.styles.css';
import { ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const EstimationBlock = (props) => {
    let navigate = useNavigate();

    return (
        <ListGroup className="dashboard-list-group">
            {props.estimations.map(estimation => (
                <ListGroup.Item
                    key={estimation.id}
                    action onClick={props.listItemClick} 
                    onClick={() => navigate(`/estimations/${estimation.id}`)}
                    key={estimation.id}>
                    {estimation.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
};

export default EstimationBlock;