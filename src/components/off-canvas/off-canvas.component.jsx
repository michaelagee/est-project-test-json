import React, { useEffect } from "react";
import { useState } from 'react';
import { Offcanvas, show } from "react-bootstrap";
import { getEstimation } from '../../data/data';
import { useRecoilValue } from 'recoil';
import { currentEstimationState } from '../../state/atoms/estimationsState'

const OffCanvasPanel = (props) => {
    let currentEstimation = useRecoilValue(currentEstimationState);
    console.log('current estimation: ', currentEstimation)
    console.log(props);
    useEffect(() => {
        currentEstimation = props.currentEstimation
        console.log(currentEstimation);
    });

    function updateEstimationData() {
        console.log('wtf man')
        currentEstimation = props.currentEstimation
    }

    return (
        <Offcanvas placement='end' show={props.show} onEntering={updateEstimationData} onHide={props.onHide}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <p>{currentEstimation.name}</p>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default OffCanvasPanel;