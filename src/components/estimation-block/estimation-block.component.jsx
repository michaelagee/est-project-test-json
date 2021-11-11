import React, { Suspense, useEffect, useState } from 'react';
import './estimation-block.styles.css';
import { ListGroup } from 'react-bootstrap';
import EstimationDetails from './estimation-details/estimation.details.component'; 

const EstimationBlock = (props) => {
    const [currentEstimation, setCurrentEstimation] = useState('');

    useEffect(() => {
        setCurrentEstimation(currentEstimation);
    })

    console.log(currentEstimation, "current estmation")
    return (
        <>
            <ListGroup className="dashboard-list-group">
                {props.estimations.map(estimation => (
                    <ListGroup.Item
                        key={estimation.id}
                        onClick={() => setCurrentEstimation( {estimation} )}
                        item={estimation}>
                        {estimation.name}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <div className="detailPanel">
                <EstimationDetails estimationsCount={props.estimationsCount} estimation={currentEstimation} />
            </div>
        </>
    )
};

export default EstimationBlock;