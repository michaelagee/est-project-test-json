import React, { useState } from 'react';
import './estimation-block.styles.css';
import { ListGroup } from 'react-bootstrap';
import EstimationDetails from './estimation.details.component';
import { CurrentEstimationTotalCost } from '../../context/currentEstimationTotal.context';
import { GlobalContext } from '../../context/global-state';


const EstimationBlock = (props) => {
    const [currentEstimation, setCurrentEstimation] = useState('');
    const [showStepWizard, setShowStepWizard] = useState(false);
    const [estimations, updateEstimations] = useState(...props.estimations);
    
    function handleShowEvent(estimation) {
        console.log('wtf', estimation)
        if (showStepWizard) {
            console.log('the wizard is showing!!!', estimation)
        } else {
            setCurrentEstimation(estimation.estimation);
        }
    }
    
    const handleSetCurrentEstimation = async (currentEstimation) => {
        // console.log(estimations, props.estimations, 'estimation block estimation')
        let indexToBeReplaced = props.estimations.findIndex((el) => el.id == currentEstimation.id)
        let newCollection = props.estimations
        newCollection.splice(indexToBeReplaced, 1, currentEstimation);
        // console.log('new collection', newCollection)
        // console.log(props.estimations[indexToBeReplaced], 'indexToBeReplaced');
        // console.log('estimations son', props.estimations)
        
        const response = await fetch("http://localhost:1020/estimations", {
            method: "PUT",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify({ estimations: props.estimations }),
        });

        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message);
        }
        console.log(body, "body");
        updateEstimations(newCollection);
        setCurrentEstimation(currentEstimation)
        // .then(response => response.json())
        // .then(data => {
        //     console.log("success: ", data)
        // })
        // .catch((error) => {
        //     console.log('Error: ', error)
        // });
    }

    return (
        <CurrentEstimationTotalCost.Consumer>
            {({ CurrentEstimation }) =>
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
                    {/* <GlobalContext.Provider value={props}> */}
                    <div className="detailPanel">
                        <EstimationDetails
                            setCurrentEstimation={handleSetCurrentEstimation}
                            setShowStepWizard={setShowStepWizard}
                            getTotalCost={props.getTotalCost}
                            updateTotalCost={props.updateTotalCost}
                            totalCost={props.totalCost}
                            estimation={currentEstimation || props.estimations[0] } />
                    </div>
                    {/* </GlobalContext.Provider> */}
                </>
            }
        </CurrentEstimationTotalCost.Consumer >
    )
};

export default EstimationBlock;