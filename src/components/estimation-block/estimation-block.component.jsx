import React, { Suspense, useState } from 'react';
import './estimation-block.styles.css';
import { ListGroup } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import estimationsState from '../../state/atoms/estimationsState';
const OffCanvasPanel = React.lazy(() => import('../off-canvas/off-canvas.component'));

const EstimationBlock = (props) => {
    // let navigate = useNavigate();
    // let currentEstimation = {};
    const [show, setShow] = useState(false);
    const [currentEstimation, setCurrentEstimation] = useState('');
    const estimations = useRecoilValue(estimationsState);
    const handleClose = () => setShow(false);


    function handleShow(estimation) {
        setCurrentEstimation(estimation);
        setShow(true);
    }

    return (
        <>
            <ListGroup className="dashboard-list-group">
                {estimations.map(estimation => (
                    <ListGroup.Item
                        key={estimation.id}
                        // action onClick={props.listItemClick}
                        onClick={() => handleShow({ estimation })}
                        // onClick={() => navigate(`/estimations/${estimation.id}`)}
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