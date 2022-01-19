import React, { useState } from 'react';
import './estimation-block.styles.css';
import { ListGroup } from 'react-bootstrap';
import EstimationDetails from './estimation.details.component';
import { CurrentEstimationTotalCost } from '../../context/currentEstimationTotal.context';
import { GlobalContext } from '../../context/global-state';
import axios from "axios";

const EstimationBlock = (props) => {
    console.log(props.estimations)
    const [currentEstimation, setCurrentEstimation] = useState('');
    const [showStepWizard, setShowStepWizard] = useState(false);
    const [estimations, updateEstimations] = useState(props.estimations);

    function handleShowEvent(estimation) {
        if (showStepWizard) {
            // TODO: MAKE THIS A MODAL THAT STOPS THE USER FROM TRYING UNTIL THEY SAVE THE CURRENT FORM
            console.log('the wizard is showing!!!', estimation)
        } else {
            setCurrentEstimation(estimation.estimation);
        }
    }

    const handleSetCurrentEstimation = async (currentEstimation) => {
        let indexToBeReplaced = props.estimations.findIndex((el) => el.id === currentEstimation.id)
        let newCollection = props.estimations
        newCollection.splice(indexToBeReplaced, 1, currentEstimation);

        const url = "https://ej1wmnqenl.execute-api.us-east-1.amazonaws.com/dev/estimations";
        axios.post(url, newCollection).then((response) => {
            console.log('response from POST:handleSetCurrentEstimation', JSON.parse(response.config.data));
            updateEstimations(newCollection);
            setCurrentEstimation(currentEstimation)
            console.log('should be set to state', this.state.estimations);
        });
    }

    return (
        <CurrentEstimationTotalCost.Consumer>
            {CurrentEstimation =>
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
                    <GlobalContext.Consumer>
                        {({ estimations, updateGlobalEstimations }) =>
                            <div className="detailPanel">
                                <EstimationDetails
                                    setCurrentEstimation={handleSetCurrentEstimation}
                                    setShowStepWizard={setShowStepWizard}
                                    updateEstimations={updateGlobalEstimations}
                                    getTotalCost={props.getTotalCost}
                                    updateEstimation={setCurrentEstimation}
                                    updateTotalCost={props.updateTotalCost}
                                    totalCost={props.totalCost}
                                    estimations={estimations}
                                    estimation={currentEstimation || props.estimations[0]} />
                            </div>
                        }
                    </GlobalContext.Consumer>
                </>
            }
        </CurrentEstimationTotalCost.Consumer >
    )
};

export default EstimationBlock;