import React, { Suspense, useState } from 'react';
import './estimation-block.styles.css';
import { ListGroup, Offcanvas } from 'react-bootstrap';
import EstimationDetails from './estimation-details/estimation.details.component'; 

const LastOffCanvas = React.lazy(() => import(Offcanvas));
const EstimationBlock = (props) => {
    const [show, setShow] = useState(false);
    const [currentEstimation, setCurrentEstimation] = useState('');
    const handleClose = () => setShow(false);

    function handleShowEvent(estimation) {
        setCurrentEstimation(estimation.estimation);
        setShow(true);
    }

    console.log(currentEstimation, "current estmation")
    // const listItem = currentEstimation.views.map((view) => {
    //     <li>{view}</li>
    // })

    return (
        <>
            <ListGroup className="dashboard-list-group">
                {props.estimations.map(estimation => (
                    <ListGroup.Item
                        key={estimation.id}
                        onClick={() => handleShowEvent({ estimation })}
                        item={estimation}>
                        {estimation.name}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <div className="detailPanel">
                <EstimationDetails estimation={currentEstimation || props.estimations[0]} />
            </div>
        </>
    )
};

export default EstimationBlock;