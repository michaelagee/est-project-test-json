import React, { useEffect, Component } from "react";
import { useState } from 'react';
import { Offcanvas, show } from "react-bootstrap";
import { getEstimation } from '../../data/data';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentEstimationState } from '../../state/atoms/estimationsState'
import EstimationDetails from "../estimation-details/estimation.details.component";


const OffCanvasPanel = (props) => {
    const [ currentEstimation, setCurrentEstimation] = useState();
    // let currentEstimation = useRecoilValue(currentEstimationState);
    // const setCurrentEstimation = useSetRecoilState(currentEstimationState);
    console.log('current estimation: ', currentEstimation)
    console.log(props);

    useEffect(() => {
        
    })

    function updateEstimationData() {
        setCurrentEstimation(props.currentEstimation);
        currentEstimation = props.currentEstimation
    }
    

    return (
        <>
            <Offcanvas placement='end' show={props.show} onEntering={updateEstimationData} onHide={props.onHide}>
                <Offcanvas.Header closeButton>
                    {/* <Offcanvas.Title>{currentEstimation.name}</Offcanvas.Title> */}
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* <EstimationDetails estimationDetailsId={currentEstimation.id} /> */}
                        <p>Project ID: {currentEstimation.id}</p>
                        <p>Project Platform: {currentEstimation.platform}</p>
                        <p>Project Hourly: {currentEstimation.hourly_rate}</p>
                        <p>Application Type: {currentEstimation.application_type}</p>
                        <p>Application Views: {currentEstimation.views}</p>
                        {/* <p>Application Type: {currentEstimation.application_type.type}</p> */}
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
}

export default OffCanvasPanel;