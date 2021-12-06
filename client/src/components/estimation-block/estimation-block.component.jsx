import React, { useState } from 'react';
import './estimation-block.styles.css';
import { ListGroup } from 'react-bootstrap';
import EstimationDetails from './estimation.details.component';
import { CurrentEstimationTotalCost } from '../../context/currentEstimationTotal.context';


const EstimationBlock = (props) => {
    const [currentEstimation, setCurrentEstimation] = useState('');
    const [showStepWizard, setShowStepWizard] = useState(false);

    function handleShowEvent(estimation) {
        if (showStepWizard) {
            console.log('the wizard is showing!!!')
        } else {
            setCurrentEstimation(estimation.estimation);
        }
    }

    return (
        <CurrentEstimationTotalCost.Consumer>
            {({ currentEstimation }) =>
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
                        <EstimationDetails currentEstimationTotalCost={currentEstimation} setShowStepWizard={setShowStepWizard} getTotalCost={props.getTotalCost} updateTotalCost={props.updateTotalCost} totalCost={props.totalCost} estimation={currentEstimation || props.estimations[0]} />
                    </div>
                </>
            }
        </CurrentEstimationTotalCost.Consumer >
    )
};

export default EstimationBlock;