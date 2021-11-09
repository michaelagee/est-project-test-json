import React, { Suspense, useState } from 'react';
import './estimation-block.styles.css';
import { ListGroup } from 'react-bootstrap';
const OffCanvasPanel = React.lazy(() => import('../off-canvas/off-canvas.component'));

const EstimationBlock = (props) => {
    const [show, setShow] = useState(false);
    const [currentEstimation, setCurrentEstimation] = useState('');
    const handleClose = () => setShow(false);

    function handleShow(estimation) {
        setCurrentEstimation(estimation);
        setShow(true);
    }

    return (
        <>
            <ListGroup className="dashboard-list-group">
                {props.estimations.map(estimation => (
                    <ListGroup.Item
                        key={estimation.id}
                        onClick={() => handleShow({ estimation })}
                        item={estimation}>
                        {estimation.name}
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <Suspense fallback={<div>Loading...</div>}>
                <OffCanvasPanel show={show} currentEstimation={currentEstimation.estimation} onHide={handleClose} />
            </Suspense>
        </>
    )
};

export default EstimationBlock;