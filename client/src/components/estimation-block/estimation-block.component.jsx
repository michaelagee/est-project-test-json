import React, { useState } from 'react';
import './estimation-block.styles.css';
import { ListGroup } from 'react-bootstrap';
import EstimationDetails from './estimation.details.component';
import { CurrentEstimationTotalCost } from '../../context/currentEstimationTotal.context';
import { GlobalContext } from '../../context/global-state';

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

        // const response = await fetch("http://localhost:1020/estimations", {
        //     method: "PUT",
        //     mode: "cors",
        //     cache: "no-cache",
        //     credentials: "same-origin",
        //     headers: {
        //         "Content-type": "application/json",
        //     },
        //     redirect: "follow",
        //     referrerPolicy: "no-referrer",
        //     body: JSON.stringify({ estimations: newCollection }),
        // });

        // const body = await response.json();

        // if (response.status !=== 200) {
        //     throw Error(body.message);
        // }
        // console.log(body, "body");
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
        // <GlobalContext.Provider value={props.estimations}>
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
                            {({estimations, updateGlobalEstimations}) =>
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
        // </GlobalContext.Provider>
    )
};

export default EstimationBlock;