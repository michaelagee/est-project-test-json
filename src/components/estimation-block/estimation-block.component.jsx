import React, { Suspense, useState } from 'react';
import './estimation-block.styles.css';
import { ListGroup, Offcanvas } from 'react-bootstrap';    
const OffCanvasPanel = React.lazy(() => import('../off-canvas/off-canvas.component'));

const EstimationBlock = (props) => {
    const [show, setShow] = useState(false);
    const [currentEstimation, setCurrentEstimation] = useState('');
    const handleClose = () => setShow(false);

    function handleShowEvent(estimation) {
        console.log(estimation.estimation)
        setCurrentEstimation(estimation.estimation);
        setShow(true);
        console.log(currentEstimation, "current estimation")
    }

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


            <Offcanvas placement='end' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{currentEstimation.name}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* <EstimationDetails estimationDetailsId={currentEstimation.id} /> */}
                        <p>Project ID: {currentEstimation.id}</p>
                        <p>Project Platform: {currentEstimation.platform}</p>
                        <p>Application Type: {currentEstimation.application_type}</p>
                        {/* <ul>Views: {currentEstimation.application_type.views.map((view) => <li>{view}</li>)}</ul> */}
                        {/* {Object.keys(currentEstimation).map(function(keyName, keyIndex) {
    		return (
      			<p key={keyName}>
					{keyName}: 

          		</p>
    		)
		})} */}

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
};

export default EstimationBlock;