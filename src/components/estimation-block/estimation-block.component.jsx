import React, { Suspense, useState } from 'react';
import './estimation-block.styles.css';
import { ListGroup, Offcanvas } from 'react-bootstrap';    

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


            <Suspense fallback={<div>Loading...</div>}>
            <Offcanvas placement='end' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{currentEstimation.name}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* <EstimationDetails estimationDetailsId={currentEstimation.id} /> */}
                        <p>Project ID: {currentEstimation.id}</p>
                        <p>Project Platform: {currentEstimation.platform}</p>
                        <p>Application Type: {currentEstimation.application_type || <span className="alert">"No Information"</span>}</p>
                        <p>Application Views: {currentEstimation.views || <span className="alert">"No Information"</span>}</p>
                        <p>General Requirements Gathering Hours: {currentEstimation.estimate_default_requirements_gathering || <span className="alert">"No Information"</span>}</p>
                        <p>Native Capabilities: {currentEstimation.general_estimate_features || <span className="alert">"No Information"</span>}</p>
                        {/* <ul>{currentEstimation.views.map((view) => {
                            <li>{view}</li>
                        })}
                        </ul> */}
                        {/* {Object.keys(currentEstimation).map(function(keyName, keyIndex) {
    		return (
      			<p key={keyName}>
					{keyName}: 

          		</p>
    		)
		})} */}

                </Offcanvas.Body>
            </Offcanvas>
            </Suspense>
        </>
    )
};

export default EstimationBlock;