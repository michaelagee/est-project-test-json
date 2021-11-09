import React, { useEffect, Component } from "react";
import { useState } from 'react';
import { Offcanvas, show } from "react-bootstrap";
import { getEstimation } from '../../data/data';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentEstimationState } from '../../state/atoms/estimationsState'
import EstimationDetails from "../estimation-details/estimation.details.component";


const OffCanvasPanel = (props) => {
    let currentEstimation = useRecoilValue(currentEstimationState);
    const setCurrentEstimation = useSetRecoilState(currentEstimationState);
    console.log('current estimation: ', currentEstimation)
    console.log(props);

    function updateEstimationData() {
        setCurrentEstimation(props.currentEstimation);
        console.log('wtf man 1', currentEstimation)
        currentEstimation = props.currentEstimation
    }

    return (
        <>
            <Offcanvas placement='end' show={props.show} onEntering={updateEstimationData} onHide={props.onHide}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{currentEstimation.name}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p>{currentEstimation.name}</p>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default OffCanvasPanel;