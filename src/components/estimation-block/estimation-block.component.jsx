import React, { useState } from 'react';
import './estimation-block.styles.css';
import { ListGroup } from 'react-bootstrap';
import EstimationDetails from './estimation.details.component';


const EstimationBlock = (props) => {
    const [currentEstimation, setCurrentEstimation] = useState('');

    function handleShowEvent(estimation) {
        setCurrentEstimation(estimation.estimation);
    }

    return (
        <>
            <ListGroup className="dashboard-list-group">
                {props.estimations.map(estimation => (
                    <ListGroup.Item
                        action
                        key={estimation.id}
                        onClick={() => handleShowEvent({ estimation })}
                        item={estimation}>
                        {estimation.name}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <div className="detailPanel">
                <EstimationDetails updateCost={props.updateCost} totalCost={props.totalCost} estimation={currentEstimation || props.estimations[0]} />
            </div>
        </>
    )
};

export default EstimationBlock;